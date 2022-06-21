import Group from "./Group";

function DisplayGroups({ groupArray }) {
  return (
    <div>
      {groupArray.map((group, i) => {
        return <Group group={group} key={i} />;
      })}
    </div>
  );
}

export default DisplayGroups;
