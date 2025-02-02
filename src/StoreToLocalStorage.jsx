import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const StoreToLocalStorage = () => {
  const [data, sendToLocalStorage] = useLocalStorage();
  const [newData, setNewData] = useState({});
  const getValueInput = (e) => {
    const name = e.target.name;
    setNewData((prev) => {
      return { [name]: e.target.value };
    });
  };
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Name "
        onChange={getValueInput}
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname "
        onChange={getValueInput}
      />
      <button onClick={() => sendToLocalStorage(newData)}>add</button>

      <div>
        <h1>Users names</h1>
        <ol>
          {data.map((element, index) => (
            <li key={index}>
              Name : {element.name} & Surname: {element.surname}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default StoreToLocalStorage;
