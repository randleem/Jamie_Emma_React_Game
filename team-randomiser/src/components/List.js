import "./List.css";
import ListItem from "./ListItem";

function List({ listArray }) {
  return (
    <div>
      {listArray.map((item, index) => {
        return <ListItem item={item} key={index} />;
      })}
    </div>
  );
}

export default List;
