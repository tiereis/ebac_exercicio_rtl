import { render, screen } from '@testing-library/react';
import Post from '.';

describe('Test <Post />', () => {
    it('Expect render correctly', () => {
        render(
            <Post imageUrl="https://placehold.co/200x200">
                Test
            </Post>
        );
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
})