import { Link } from "react-router-dom"
import { Table } from "../Common/Table"

function TableMonth({data}){
    return (
        <div className='d-flex'>
            <div className='w-100'>
                <Table>
                    <thead>
                        <tr>
                            <th colSpan={4}><h5>Rewards Points by Month</h5></th>
                        </tr>
                        <tr>
                            <th>Customer</th>
                            <th>Month</th>
                            <th># of Transactions</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td><Link to={`/customer/${item.custid}`} className="link">{item.name}</Link></td>
                                    <td>{item.month}</td>
                                    <td>{item.numTransactions}</td>
                                    <td>{item.points}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>        
    )
}

export { TableMonth }