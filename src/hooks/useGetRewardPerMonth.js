const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function useGetRewardPoints(data){
    
    const pointsPerTransaction = data.map(transaction=> {
        let points = 0;
        let over100 = transaction.amount - 100;
        
        if (over100 > 0) {
          // 2 points for every dollar spent over $100 in each transaction      
          points += (over100 * 2);
        }    
        if (transaction.amount > 50) {
          // plus 1 point for every dollar spent over $50 in each transaction          
          points += transaction.amount - 50;      
        }
        const month = new Date(transaction.transactionDt).getMonth();
        return {...transaction, points, month};
    });

    let byCustomer = {};
    let totalPointsByCustomer = {};

    pointsPerTransaction.forEach(pointsPerTransaction => {
        let {custid, name, month, points} = pointsPerTransaction;   
        if (!byCustomer[custid]) {
          byCustomer[custid] = [];      
        }    
        if (!totalPointsByCustomer[custid]) {
          totalPointsByCustomer[name] = 0;
        }
        totalPointsByCustomer[name] += points;
        if (byCustomer[custid][month]) {
          byCustomer[custid][month].points += points;
          byCustomer[custid][month].monthNumber = month;
          byCustomer[custid][month].numTransactions++;      
        }
        else {          
          byCustomer[custid][month] = {
            custid,
            name,
            monthNumber:month,
            month: months[month],
            numTransactions: 1,        
            points
          }
        }    
    });

    let summaryPerMonth = [];
    for (let custKey in byCustomer) { 
        byCustomer[custKey].forEach(cRow=> {
           summaryPerMonth.push(cRow);
        });    
    }
    let summaryByCustomer = [];
    for (let custKey in totalPointsByCustomer) {    
        summaryByCustomer.push({
        name: custKey,
        points: totalPointsByCustomer[custKey]
        });    
    }
    return {
        summaryPerMonth,
        summaryByCustomer
    };
}

export { useGetRewardPoints }