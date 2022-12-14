function TableTotal({data}){

    return (
        <div className='d-flex'>
            <div className='w-100'>
                <div className="table-responsive">
                    <table className='table table-striped table-hover'>
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
                    </table>
                </div>
            </div>
        </div>
    )

}

export { TableTotal }