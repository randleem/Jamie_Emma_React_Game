import "./Input.css";

function Input({ item, onSubmit, setItem, handleReset }) {
  function handleClick() {
    onSubmit();
  }
  function handleEnter(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className="input-container">
      <input
        className="input-box"
        placeholder="Add name here"
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={(e) => {
          handleEnter(e);
        }}
      ></input>
      <div className="btn-container">
        <button className="btn input input-submit" onClick={handleClick}>
          Submit
        </button>
        <button className="btn input input-clear" onClick={handleReset}>
          Clear List
        </button>
      </div>
    </div>
  );
}

export default Input;
