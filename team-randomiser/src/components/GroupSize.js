function GroupSize({ groupSize, addition, subtraction }) {
  return (
    <div>
      <button onClick={subtraction}>-</button>
      <h2>{groupSize}</h2>
      <button onClick={addition}>+</button>
    </div>
  );
}

export default GroupSize;
