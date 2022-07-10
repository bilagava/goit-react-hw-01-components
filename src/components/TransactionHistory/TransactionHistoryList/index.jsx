const TransactionHistoryList = ({ id, type, amount, currency }) => {
  return (
    <tr>
      {id}
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryList;
