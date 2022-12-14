import { useGetRewardPoints } from "../../hooks/useGetRewardPerMonth"
import { TableMonth } from "../TableMonth"
import { TableTotal } from "../TableTotal"

function RewardPoints({data}) {
    const {summaryPerMonth, summaryByCustomer} = useGetRewardPoints(data)

    console.log(summaryPerMonth)
    

    return (
        <div className="box-body">
            <TableMonth data={summaryPerMonth}/>
            <TableTotal data={summaryByCustomer} />
        </div>
    )
}

export { RewardPoints }