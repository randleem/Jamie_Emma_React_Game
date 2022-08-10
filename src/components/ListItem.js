import "./ListItem.css";

function ListItem({ item, index, handleDelete }) {
  function handleItemDelete() {
    console.log(index);
    handleDelete(index);
  }

  return (
    <section className="list-item-container">
      <p className="list-name">{item}</p>
      <button className="btn delete-list-item" onClick={handleItemDelete}>
        X
      </button>
    </section>
  );
}
export default ListItem;
