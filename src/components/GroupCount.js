import "./GroupCount.css";
function GroupCount({ groupCount, addition, subtraction }) {
  return (
    <div className="group-count-container">
      <button className="group-buttons btn" onClick={subtraction}>
        -
      </button>
      <h2>{groupCount}</h2>
      <button className="group-buttons btn" onClick={addition}>
        +
      </button>
    </div>
  );
}

export default GroupCount;
