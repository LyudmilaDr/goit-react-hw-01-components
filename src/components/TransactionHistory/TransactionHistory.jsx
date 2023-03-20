import PropTypes from 'prop-types';
import {TransactionHistoryTable, TransactionHistoryTr} from './TransactionHistory.styled';
export const TransactionHistory = ({items}) => {
   return ( <TransactionHistoryTable >
  <thead>
    <TransactionHistoryTr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </TransactionHistoryTr>
  </thead>

  <tbody>
  {items.map(({ id, type, amount, currency }) => (
    <TransactionHistoryTr key = {id}>
      <td>{ type }</td>
      <td>{ amount }</td>
      <td>{ currency }</td>
    </TransactionHistoryTr>
    ))}
  </tbody>
</TransactionHistoryTable>
 )} 

 TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired,
      })
    ),
  };