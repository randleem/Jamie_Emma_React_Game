import "./GroupType.css";

function GroupType({ isGroupCount, setIsGroupCount }) {
  function handleCountChange() {
    setIsGroupCount(!isGroupCount);
  }
  function handleSizeChange() {
    setIsGroupCount(!isGroupCount);
  }

  return (
    <div className="group-input-container">
      <div className="group-input">
        <label className="is-number-of-groups switch">
          <input
            type="checkbox"
            checked={isGroupCount}
            onChange={handleCountChange}
            className="round"
          />
          <span className="slider"></span>
        </label>
        <p>Number of Groups</p>
      </div>
      <div className="group-input">
        <label className="is-group-size switch">
          <input
            type="checkbox"
            checked={!isGroupCount}
            onChange={handleSizeChange}
            className="round"
          />
          <span className="slider"></span>
        </label>
        <p>Group Size</p>
      </div>
    </div>
  );
}

export default GroupType;
