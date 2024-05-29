import React from "react";
import { useDrop } from "react-dnd";
import Item from "./Item";

const Box = ({ index, items, moveItem, addParagraph }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "item",
    drop: (draggedItem) =>
      moveItem(draggedItem.fromIndex, index, draggedItem.text),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`box ${isOver ? "hover" : ""}`}>
      {items.map((text, i) => (
        <Item key={i} index={index} text={text} />
      ))}
      <button className="addp" onClick={() => addParagraph(index)}>
        Karta Qo'shish
      </button>
    </div>
  );
};

export default Box;
