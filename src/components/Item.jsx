import React from "react";
import { useDrag } from "react-dnd";

const Item = ({ index, text }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: { fromIndex: index, text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <p ref={drag} className="paragraf">
      {text}
    </p>
  );
};

export default Item;
