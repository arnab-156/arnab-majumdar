import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from '../card';

test('loads and displays a card', async () => {
    const testUrl = "/test-url";
    const testSrc = "/test-image";
    render(<Card
        title="test title!"
        url={testUrl}
        imageUrl={testSrc}
        description="test description!"
    />);

    expect(screen.getByText('test title!')).toBeInTheDocument();
    expect(screen.getByText('test description!')).toBeInTheDocument();

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'test title!');
    expect(screen.getByRole('img')).toHaveAttribute('src', testSrc);

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', testUrl);
});

test('renders CTA link when useCtaButton is enabled', async () => {
    const testUrl = "/cta-destination";
    const ctaLabel = "Click to Learn More";

    render(<Card
        title="cta title"
        url={testUrl}
        description="cta description"
        useCtaButton
        ctaLabel={ctaLabel}
    />);

    expect(screen.getByText('cta title')).toBeInTheDocument();
    expect(screen.getByText('cta description')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(1);
    expect(screen.getByRole('link', { name: ctaLabel })).toHaveAttribute('href', testUrl);
});
