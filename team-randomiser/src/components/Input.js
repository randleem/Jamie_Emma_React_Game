// import "./Input.css";

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
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={(e) => {
          handleEnter(e);
        }}
      ></input>
      <button onClick={handleClick}>submit</button>
      <button onClick={handleReset}>clear List</button>
    </div>
  );
}

export default Input;
