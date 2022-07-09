import Group from "./Group";

function DisplayGroups({ groupArray }) {
  return (
    <div classname="group-container">
      {groupArray.map((group, i) => {
        return <Group group={group} key={i} />;
      })}
    </div>
  );
}

export default DisplayGroups;
