import { useGetRewardPoints } from "../../hooks/useGetRewardPerMonth"
import { TableMonth } from "../TableMonth"
import { TableTotal } from "../TableTotal"
import { Wrapper } from "./Wrapper"

function RewardPoints({data}) {
    const {summaryPerMonth, summaryByCustomer} = useGetRewardPoints(data)    

    return (
        <Wrapper>
            <TableMonth data={summaryPerMonth}/>
            <TableTotal data={summaryByCustomer} />
        </Wrapper>
    )
}

export { RewardPoints }