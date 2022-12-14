import { useEffect, useState } from "react"
import { getRewardPoint } from "../../services/transactionsService"
import { Message } from "../../components/Message";
import { RewardPoints } from "../../components/RewardPoints";
import { Spinner } from "../../components/Spinner";

function Dashboard(){
    const [loading, setLoading] = useState(true);
    const [data, setData]  = useState([])

    useEffect(() => {
        let isSubscribed = true;
        setLoading(true);
        async function getApiTransactions(){
            const response = await getRewardPoint();
            setData(response)
            setLoading(false)
        }
        if(isSubscribed) getApiTransactions();
        return () => isSubscribed = false;
    }, []);

    if(loading) return <Spinner />

    return (
        <div className="d-flex">
            <div className="view-2">
                {
                    (data && data.status !== 200) ? 
                    <Message message={data.message} />  :
                    <div className="box">
                        <div className="box-header">
                            <h6>Reward Points</h6>
                        </div>
                        <RewardPoints data={data.content}/>
                    </div> 
                }
                
            </div>
        </div>
    )
}

export { Dashboard }