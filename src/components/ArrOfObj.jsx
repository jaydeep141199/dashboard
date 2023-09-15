import React, { useState } from "react";

const ArrOfObj = () => {
  const [data, setData] = useState([
    { id: 1, name: "JAYDEEP" },
    { id: 2, name: "HARDIK" },
    { id: 3, name: "AARYAN" },
    { id: 4, name: "AAYUSH" },
    { id: 5, name: "MANAN" },
    { id: 6, name: "MANTHAN" },
    { id: 7, name: "VISHAL" },
    { id: 8, name: "NEEL" },
    { id: 9, name: "DARSHIL" },
    { id: 10, name: "KD" },
  ]);

  const [inputIds, setInputIds] = useState("");
  const [outputNames, setOutputNames] = useState([]);

  const handleInputChange = (event) => {
    setInputIds(event.target.value);
  };

  const handleButtonClick = () => {
    const ids = inputIds.split(",").map((id) => Number(id.trim()));
    const names = ids.map((id) => {
      const foundObject = data.find((item) => item.id === id);
      return foundObject ? foundObject.name : "Not a data in array";
    });
    setOutputNames(names);
  };

  return (
    <div className="text-center my-[300px] mx-[400px]">
      <div className="bg-gray-500">
        <input
          type="text"
          value={inputIds}
          onChange={handleInputChange}
          placeholder="Enter id"
          className="border border-black mt-5"
        />
        <br />
        <button onClick={handleButtonClick} className="mt-2 bg-green-500">
          CLICK ME!
        </button>
        {outputNames.length > 0 && (
          <ul>
            <h1 className="mt-4"> USER NAME BY ID</h1>

            {outputNames.map((name, index) => (
              <li key={index} className="bg-blue-500  text-white">
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ArrOfObj;
