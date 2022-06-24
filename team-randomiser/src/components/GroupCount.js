function GroupCount({ groupCount, addition, subtraction }) {
  return (
    <div>
      <button onClick={subtraction}>-</button>
      <h2>{groupCount}</h2>
      <button onClick={addition}>+</button>
    </div>
  );
}

export default GroupCount;
