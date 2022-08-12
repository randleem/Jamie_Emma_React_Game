import Group from "./Group";
import "./DisplayGroups.css";

function DisplayGroups({ groupArray }) {
  return (
    <div className="group-container">
      {groupArray.map((group, i) => {
        return <Group group={group} key={i} index={i} />;
      })}
    </div>
  );
}

export default DisplayGroups;
