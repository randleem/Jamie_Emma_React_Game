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
        placeholder="write name here"
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={(e) => {
          handleEnter(e);
        }}
      ></input>
      <div className="btn-container">
        <button className="btn input input-submit" onClick={handleClick}>
          submit
        </button>
        <button className="btn input input-clear" onClick={handleReset}>
          clear List
        </button>
      </div>
    </div>
  );
}

export default Input;
