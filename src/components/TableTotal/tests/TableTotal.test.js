import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { TableTotal } from '..';

const data = [
    {
        name: 'Jhon Yong',
        points: 190
    },
    {
        name: 'Sally Kevin',
        points: 190
    }
]

describe("TableMonth component", () => {
    it('Should render a table total and length of 2 for the points', () => {
        render(<TableTotal data={data}/>)

        const table = screen.getByRole('table')
        expect(table).toBeInTheDocument();

        const pointCustomer = screen.getAllByText(190)
        expect(pointCustomer).toHaveLength(2)        
    })
})