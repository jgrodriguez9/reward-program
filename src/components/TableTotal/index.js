import { Table } from "../Common/Table"

function TableTotal({data}){

    return (
        <div className='d-flex'>
            <div className='w-100'>
                <div className="table-responsive">
                    <Table>
                        <thead>
                                <tr>
                                    <th colSpan={2}><h5>Rewards Points Total</h5></th>
                                </tr>
                                <tr>
                                    <th>Customer</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.points}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )

}

export { TableTotal }