import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { Dashboard } from '..';

const server = setupServer(
    rest.get(
        'http://localhost:5000/transactions',
        (req, res, ctx) => {
            return res(
                ctx.json([
                    {
                        "custid": 1,
                        "name": "Jhon Yong",
                        "amount": 120,
                        "transactionDt": "05-01-2019"
                    },
                    {
                    "custid": 1,
                    "name": "Jhon Yong",
                    "amount": 75,
                    "transactionDt": "05-21-2019"
                    },
                ])
            )
        }
    )
)

describe("Dashboard page", () => {
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it('Render tittle Dashboard', async () => {
        render(<Dashboard />)

        const textTitle = await screen.findByText("Reward Points")
        expect(textTitle).toBeInTheDocument();
    })

    it('Check if data is displayed 2 times in Dashboard Page', async () => {
        render(<Dashboard />)

        const data = await screen.findAllByText('Jhon Yong');
        expect(data).toHaveLength(2);
    })

})