import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Message } from '..'

describe("Message component", () => {

    beforeEach(() => {
       
    })


    it('Should show Not found message, render the button and render the button with text Reload', () => {
        render(<Message message="Not found"/>)

        const text = screen.getByText("Not found")
        expect(text).toBeInTheDocument();

        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument();

        const textReload = screen.getByText('Reload')
        expect(textReload).toBeInTheDocument();
    })
})