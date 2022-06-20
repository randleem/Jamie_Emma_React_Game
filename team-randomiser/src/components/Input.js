// import "./Input.css";

function Input({ item, onSubmit, setItem }) {
  function handleClick() {
    onSubmit();
  }

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      ></input>
      <button onClick={handleClick}>submit</button>
    </div>
  );
}

export default Input;
