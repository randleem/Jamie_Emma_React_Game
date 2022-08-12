import "./Group.css";

function Group({ group, index }) {
  return (
    <section
      className="individual-group-containers"
      data-testid="group-containers"
    >
      <div data-testid={`group-containers-${index}`}>
        {group.map((name, i) => {
          return <p key={i}>{name}</p>;
        })}
      </div>
    </section>
  );
}
export default Group;
