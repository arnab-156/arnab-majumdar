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
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'product tile image for test title!');
    expect(screen.getByRole('img')).toHaveAttribute('src', testSrc);

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', testUrl);
});
