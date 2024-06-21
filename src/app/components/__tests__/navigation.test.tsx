import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Navigation } from '../navigation';

test('loads and displays greeting', async () => {
    render(<Navigation />);
    // ACT
    //   await userEvent.click(screen.getByText('Lotus'))
    //   await screen.findByRole('heading')

    expect(screen.getByText('technology')).toBeInTheDocument();
    expect(screen.getByText('home')).toBeInTheDocument();
    expect(screen.getByText('lotus mahal')).toBeInTheDocument();
    expect(screen.getByAltText('headshot of arnab majumdar')).toBeInTheDocument();
    expect(screen.getByAltText('instagram image')).toBeInTheDocument();
    expect(screen.getByAltText('linkedin image')).toBeInTheDocument();
});
