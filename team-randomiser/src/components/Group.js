import "./Group.css";

function Group({ group }) {
  return (
    <section className="group-containers">
      <ul>
        {group.map((name, i) => {
          return <li key={i}>{name}</li>;
        })}
      </ul>
    </section>
  );
}
export default Group;
