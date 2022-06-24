function GroupType({ isGroupCount, setIsGroupCount }) {
  function handleCountChange() {
    setIsGroupCount(!isGroupCount);
  }
  function handleSizeChange() {
    setIsGroupCount(!isGroupCount);
  }

  return (
    <div>
      <p>Number of Groups</p>
      <label class="is-group-count">
        <input
          type="checkbox"
          checked={isGroupCount}
          onChange={handleCountChange}
        />
      </label>
      <p>Group Size</p>
      <label class="is-group-size">
        <input
          type="checkbox"
          checked={!isGroupCount}
          onChange={handleSizeChange}
        />
      </label>
    </div>
  );
}

export default GroupType;
