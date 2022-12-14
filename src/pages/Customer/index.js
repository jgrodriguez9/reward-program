import { useEffect, useState } from "react"
import { Message } from "../../components/Message";
import { RewardPoints } from "../../components/RewardPoints";
import { Spinner } from "../../components/Spinner";
import { Link, useParams } from "react-router-dom";
import { getRewardPointByCustomer } from "../../services/customersService";

function Customer(){
    const [loading, setLoading] = useState(true);
    const [customer, setCustomer]  = useState()
    const { id } = useParams();

    useEffect(() => {
        let isSubscribed = true;
        setLoading(true);
        async function getApiCustomer(){
            const query  = `?custid=${id}`
            const response = await getRewardPointByCustomer(query);
            setCustomer(response)
            setLoading(false)
        }
        if(isSubscribed) getApiCustomer();
        return () => isSubscribed = false;
    }, [id]);

    if(loading) return <Spinner />

    return (
        <div className="d-flex">
            <div className="view-2">
                {
                    (customer && customer.status !== 200) ? 
                    <Message message={customer.message} />  :
                    <div className="box">
                        <div className="box-header">
                            <div className="d-flex justify-content-between">
                                <h6>
                                    Reward Points
                                    {`: ${customer.content?.[0]?.name}`}
                                </h6>
                                <Link to="/" className="link">Home</Link>
                            </div>                            
                        </div>
                        <RewardPoints data={customer.content}/>
                    </div> 
                }
                
            </div>
        </div>
    )
}

export { Customer }