import "./Group.css";

function Group({ group }) {
  return (
    <section className="individual-group-containers">
      <div>
        {group.map((name, i) => {
          return <p key={i}>{name}</p>;
        })}
      </div>
    </section>
  );
}
export default Group;
