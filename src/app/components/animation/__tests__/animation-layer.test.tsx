import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AnimationLayer, Reveal } from '../animation-layer';
import { getMotion, motionToStyle, registerMotion } from '../motions';

type ObserverCallback = (entries: { target: Element; isIntersecting: boolean }[]) => void;

const observed: { callback: ObserverCallback; targets: Element[] }[] = [];

beforeEach(() => {
    observed.length = 0;
    class FakeObserver {
        callback: ObserverCallback;
        targets: Element[] = [];

        constructor(callback: ObserverCallback) {
            this.callback = callback;
            observed.push(this);
        }
        observe(target: Element) { this.targets.push(target); }
        unobserve(target: Element) { this.targets = this.targets.filter((t) => t !== target); }
        disconnect() { this.targets = []; }
    }
    (window as unknown as { IntersectionObserver: unknown }).IntersectionObserver = FakeObserver;
    window.matchMedia = ((query: string) => ({
        matches: false,
        media: query,
        addEventListener: () => {},
        removeEventListener: () => {},
    })) as unknown as typeof window.matchMedia;
});

test('children start hidden and reveal when they intersect', () => {
    render(
        <AnimationLayer>
            <Reveal>first</Reveal>
            <Reveal>second</Reveal>
        </AnimationLayer>,
    );

    const first = screen.getByText('first');
    expect(first).toHaveAttribute('data-reveal-shown', 'false');
    expect(first).toHaveStyle({ opacity: '0' });

    // The controller re-observes once every child has registered, so the live
    // observer is the most recent one.
    const observer = observed[observed.length - 1];
    act(() => {
        observer.callback(observer.targets.map((target) => ({ target, isIntersecting: true })));
    });

    expect(screen.getByText('first')).toHaveAttribute('data-reveal-shown', 'true');
    expect(screen.getByText('second')).toHaveAttribute('data-reveal-shown', 'true');
    expect(screen.getByText('first')).toHaveStyle({ opacity: '1' });
});

test('the default alternate method assigns sides by DOM order', () => {
    render(
        <AnimationLayer>
            <Reveal>one</Reveal>
            <Reveal>two</Reveal>
            <Reveal method="bottom">three</Reveal>
        </AnimationLayer>,
    );

    expect(screen.getByText('one')).toHaveAttribute('data-reveal', 'left');
    expect(screen.getByText('two')).toHaveAttribute('data-reveal', 'right');
    expect(screen.getByText('three')).toHaveAttribute('data-reveal', 'bottom');
});

test('a nested layer overrides only what it names', () => {
    render(
        <AnimationLayer method="bottom" duration={900}>
            <Reveal>outer</Reveal>
            <AnimationLayer method="zoom">
                <Reveal>inner</Reveal>
            </AnimationLayer>
        </AnimationLayer>,
    );

    expect(screen.getByText('outer')).toHaveAttribute('data-reveal', 'bottom');
    expect(screen.getByText('inner')).toHaveAttribute('data-reveal', 'zoom');
    expect(screen.getByText('inner').getAttribute('style')).toContain('900ms');
});

test('a Reveal outside any layer renders plain rather than invisible', () => {
    render(<Reveal>orphan</Reveal>);

    const orphan = screen.getByText('orphan');
    expect(orphan).not.toHaveAttribute('data-reveal');
    expect(orphan).toHaveStyle({ opacity: '' });
});

test('new methods can be registered', () => {
    registerMotion('slam', { from: (d) => ({ opacity: 0, translateY: -d, scale: 1.4 }) });

    expect(motionToStyle(getMotion('slam').from(20))).toEqual({
        opacity: 0,
        transform: 'translate3d(0px, -20px, 0) scale(1.4)',
        filter: 'none',
    });
});

test('an unknown method falls back to fade instead of throwing', () => {
    expect(motionToStyle(getMotion('nope').from(40))).toEqual({
        opacity: 0,
        transform: 'none',
        filter: 'none',
    });
});

test('inline styles are dropped once the entrance finishes, freeing hover CSS', () => {
    render(
        <AnimationLayer>
            <Reveal className="hover:-translate-y-1">card</Reveal>
        </AnimationLayer>,
    );

    const card = screen.getByText('card');
    expect(card.getAttribute('style')).toContain('transform');

    const observer = observed[observed.length - 1];
    act(() => {
        observer.callback(observer.targets.map((target) => ({ target, isIntersecting: true })));
    });
    expect(card).toHaveAttribute('data-reveal-shown', 'true');

    act(() => {
        fireEvent.transitionEnd(card);
    });

    expect(card).toHaveAttribute('data-reveal-settled', 'true');
    expect(card.getAttribute('style')).toBe('');
});

test('a transition bubbling up from a child does not settle the element early', () => {
    render(
        <AnimationLayer>
            <Reveal>
                <span>child</span>
            </Reveal>
        </AnimationLayer>,
    );

    const observer = observed[observed.length - 1];
    act(() => {
        observer.callback(observer.targets.map((target) => ({ target, isIntersecting: true })));
    });

    act(() => {
        fireEvent.transitionEnd(screen.getByText('child'));
    });

    expect(screen.getByText('child').parentElement).not.toHaveAttribute('data-reveal-settled');
});

test('a child mounted later is picked up by the observer', () => {
    const Page = ({ items }: { items: string[] }) => (
        <AnimationLayer>
            {items.map((item) => (
                <Reveal key={item}>{item}</Reveal>
            ))}
        </AnimationLayer>
    );

    const { rerender } = render(<Page items={['a', 'b']} />);
    rerender(<Page items={['c']} />);

    const observer = observed[observed.length - 1];
    expect(observer.targets).toContain(screen.getByText('c'));
});
