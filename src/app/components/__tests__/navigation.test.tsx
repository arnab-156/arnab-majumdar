import { act, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { usePathname } from 'next/navigation';
import { Navigation } from '../navigation';

jest.mock('next/navigation', () => ({
    usePathname: jest.fn(() => '/'),
}));

const mockedUsePathname = usePathname as jest.Mock;

beforeEach(() => {
    mockedUsePathname.mockReturnValue('/');
});

test('renders desktop navigation links and contact options', () => {
    render(<Navigation />);
    const desktop = within(screen.getByTestId('desktop-primary-nav'));

    expect(screen.getByTestId('desktop-primary-nav')).toHaveClass('max-lg:hidden');
    expect(desktop.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(desktop.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(desktop.getByRole('link', { name: /Experiences/i })).toHaveAttribute('href', '/experiences');
    expect(desktop.getByRole('link', { name: /NYU/i })).toHaveAttribute('href', '/nyu');
    expect(desktop.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');

    expect(screen.getByText('contact information')).toBeInTheDocument();
    expect(screen.getByAltText('bluesky logo')).toBeInTheDocument();
    expect(screen.getByAltText('linkedin image')).toBeInTheDocument();
    expect(screen.getByAltText('google calendar')).toBeInTheDocument();
});

describe('mobile tab bar', () => {
    const getBar = () => screen.getByTestId('mobile-primary-nav');

    test('shows icon tabs for Home, About, Career, NYU and Contact (md+) on mobile only', () => {
        render(<Navigation />);
        const bar = within(getBar());

        expect(getBar()).toHaveClass('lg:hidden', 'fixed', 'bottom-0');
        expect(bar.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
        expect(bar.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
        expect(bar.getByRole('link', { name: 'Career' })).toHaveAttribute('href', '/experiences');
        expect(bar.getByRole('link', { name: 'NYU' })).toHaveAttribute('href', '/nyu');
        expect(bar.getByRole('link', { name: 'Contact' })).toHaveClass('max-md:hidden');

        // About uses the headshot, NYU uses the torch logo
        const images = getBar().querySelectorAll('img');
        const srcs = Array.from(images).map((img) => img.getAttribute('src') ?? '');
        expect(srcs.some((src) => src.includes('headshot'))).toBe(true);
        expect(srcs.some((src) => src.includes('nyu-torch'))).toBe(true);
    });

    test('orders tabs Home, Career, NYU, Contact with About rightmost', () => {
        render(<Navigation />);
        const labels = within(getBar()).getAllByRole('link').map((link) => link.textContent);
        expect(labels).toEqual(['Home', 'Career', 'NYU', 'Contact', 'About']);
    });

    test('marks the current route as the active tab', () => {
        mockedUsePathname.mockReturnValue('/experiences/some-role');
        render(<Navigation />);
        const bar = within(getBar());

        expect(bar.getByRole('link', { name: 'Career' })).toHaveAttribute('aria-current', 'page');
        expect(bar.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current');
        expect(bar.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current');
    });

    test('only treats exact "/" as Home', () => {
        mockedUsePathname.mockReturnValue('/');
        render(<Navigation />);
        const bar = within(getBar());

        expect(bar.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page');
        expect(bar.getByRole('link', { name: 'NYU' })).not.toHaveAttribute('aria-current');
    });
});

describe('mobile tab bar hide-on-scroll', () => {
    const scrollTo = (y: number) => {
        act(() => {
            Object.defineProperty(window, 'scrollY', { value: y, configurable: true });
            window.dispatchEvent(new Event('scroll'));
        });
    };

    beforeEach(() => {
        jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
            cb(0);
            return 0;
        });
        Object.defineProperty(document.documentElement, 'scrollHeight', { value: 5000, configurable: true });
        Object.defineProperty(window, 'innerHeight', { value: 800, configurable: true });
        Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('hides when scrolling down and reappears when scrolling up', () => {
        render(<Navigation />);
        const nav = screen.getByTestId('mobile-primary-nav');
        expect(nav).toHaveAttribute('data-hidden', 'false');

        scrollTo(400);
        expect(nav).toHaveAttribute('data-hidden', 'true');
        expect(nav).toHaveClass('translate-y-full');

        scrollTo(300);
        expect(nav).toHaveAttribute('data-hidden', 'false');
        expect(nav).toHaveClass('translate-y-0');
    });

    test('ignores tiny scroll jitters and stays visible near the top', () => {
        render(<Navigation />);
        const nav = screen.getByTestId('mobile-primary-nav');

        scrollTo(400);
        scrollTo(395);
        expect(nav).toHaveAttribute('data-hidden', 'true');

        scrollTo(1000);
        scrollTo(20);
        expect(nav).toHaveAttribute('data-hidden', 'false');
    });

    test('reveals the bar when a tab receives keyboard focus', () => {
        render(<Navigation />);
        const nav = screen.getByTestId('mobile-primary-nav');

        scrollTo(400);
        expect(nav).toHaveAttribute('data-hidden', 'true');

        act(() => {
            within(nav).getByRole('link', { name: 'Home' }).focus();
        });
        expect(nav).toHaveAttribute('data-hidden', 'false');
    });
});
