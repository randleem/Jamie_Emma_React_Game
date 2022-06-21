function ListItem({ item }) {
  return (
    <section className="list-item">
      <h3>{item}</h3>
      <button>X</button>
    </section>
  );
}
export default ListItem;
