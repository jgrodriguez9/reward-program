import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { BrowserRouter } from 'react-router-dom';
import { Customer } from '..';

const server = setupServer(
    rest.get(
        'http://localhost:5000/transactions?custid=5',
        (req, res, ctx) => {
            return res(
                ctx.json([
                    {
                        "custid": 5,
                        "name": "Eldose Yong",
                        "amount": 120,
                        "transactionDt": "05-01-2019"
                    },
                    {
                    "custid": 5,
                    "name": "Eldose Yong",
                    "amount": 75,
                    "transactionDt": "05-21-2019"
                    },
                ])
            )
        }
    )
)

describe("Customer page", () => {
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it('Render tittle with customer name', async () => {
        render(<BrowserRouter><Customer /></BrowserRouter>)

        const textTitle = await screen.findByText("Reward Points: Eldose Yong")
        expect(textTitle).toBeInTheDocument();
    })

    it('Check if data  related with customer is displayed 2 times in Dashboard Page', async () => {
        render(<BrowserRouter><Customer /></BrowserRouter>)

        const data = await screen.findAllByText('Eldose Yong');
        expect(data).toHaveLength(2);
    })

})