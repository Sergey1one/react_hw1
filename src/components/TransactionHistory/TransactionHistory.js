import PropTypes from 'prop-types';
import { TableTbody, TableThead, TableTr, TransactionHistoryTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
    return (<TransactionHistoryTable>
  <TableThead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </TableThead>
        <TableTbody>
           
        {transactions.map(({ type, amount, currency,id }) => {
    return( <TableTr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableTr>)
   
})}
   </TableTbody>
</TransactionHistoryTable>)
    
};
 
TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        currency:PropTypes.string
    }))
}