import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { TableMonth } from '..';

const data = [
    {
        name: 'Jhon Yong',
        month: 4,
        numTransactions: 3,
        points: 190
    },
    {
        name: 'Sally Kevin',
        month: 4,
        numTransactions: 3,
        points: 190
    }
]

describe("TableMonth component", () => {
    it('Should render a table month and customer Jhon Yong', () => {
        render(<TableMonth data={data}/>)

        const table = screen.getByRole('table')
        expect(table).toBeInTheDocument();

        const nameCustomer = screen.getAllByText('Jhon Yong')
        expect(nameCustomer).toHaveLength(1)

        
    })
})