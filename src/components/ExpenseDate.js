function ExpenseDate(props) {
  const month = props.date.toLocalString('en-US', { month: 'long'});
  const day = props.date.toLocalString('en-US', { day: '2-digit'});
  const year = props.date.getFullYear();
}

export default ExpenseDate;