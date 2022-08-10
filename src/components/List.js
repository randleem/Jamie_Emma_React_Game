import "./List.css";
import ListItem from "./ListItem";

function List({ listArray, handleDelete }) {
  return (
    <div className="list-container">
      {listArray.map((item, index) => {
        return (
          <ListItem
            item={item}
            key={index}
            index={index}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default List;
