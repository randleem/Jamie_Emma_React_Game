import "./ListItem.css";

function ListItem({ item }) {
  return (
    <section className="list-item-container">
      <p className="list-name">{item}</p>
      <button className="btn delete-list-item">X</button>
    </section>
  );
}
export default ListItem;
