import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
    return (<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </thead>
        <tbody>
           
        {transactions.map(({ type, amount, currency,id }) => {
    return( <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)
   
})}
   </tbody>
</table>)
    
};
 
TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        currency:PropTypes.string
    }))
}