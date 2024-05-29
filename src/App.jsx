import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Box from "./components/Box";
import "./App.css";

const App = () => {
  const [data, setData] = useState([
    ["Item 1-1", "Item 1-2", "Item 1-3", "Item 1-4"],
    ["Item 2-1", "Item 2-2", "Item 2-3", "Item 2-4"],
    ["Item 3-1", "Item 3-2", "Item 3-3", "Item 3-4"],
    ["Item 4-1", "Item 4-2", "Item 4-3", "Item 4-4"],
  ]);

  const moveItem = (fromIndex, toIndex, item) => {
    const newDivs = [...data];
    newDivs[fromIndex] = newDivs[fromIndex].filter((i) => i !== item);
    newDivs[toIndex].push(item);
    setData(newDivs);
  };

  const addParagraph = (index) => {
    const newDivs = [...data];
    newDivs[index].push(`Item ${index + 1}-${newDivs[index].length + 1}`);
    setData(newDivs);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        {data.map((items, index) => (
          <Box
            key={index}
            index={index}
            items={items}
            moveItem={moveItem}
            addParagraph={addParagraph}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default App;
