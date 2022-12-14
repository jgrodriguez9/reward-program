import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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
        render(<BrowserRouter><TableMonth data={data}/></BrowserRouter>)

        const table = screen.getByRole('table')
        expect(table).toBeInTheDocument();

        const nameCustomer = screen.getAllByText('Jhon Yong')
        expect(nameCustomer).toHaveLength(1)

        
    })
})