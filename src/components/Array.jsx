import React, { useState } from "react";

function Array() {
  const [initialData, setInitialData] = useState([
    "jaydeep",
    "krishna",
    "dharmaraj",
    "parth",
    'sahil',
    'manthan',
    'aayush',
    'aaryan',

  ]);
  const [selectedData, setSelectedData] = useState([]);
  

  const handleDataClick = (data) => {
    const updatedInitialData = initialData.filter((item) => item !== data);
    setInitialData(updatedInitialData);
    setSelectedData([...selectedData, data]);
  };

  const handleSelectedDataClick = (data) => {
    const updatedSelectedData = selectedData.filter((item) => item !== data);
    setSelectedData(updatedSelectedData);
    setInitialData([...initialData, data]);
  };

  return (
    <div className="grid grid-cols-2 text-center bg-gradient-to-r from-blue-800 to-red-500 m-[50px]">
      <div>
        <h2>Initial Data</h2>
        <ul>
          {initialData.map((data) => (
            <li key={data} onClick={() => handleDataClick(data)}className="cursor-pointer text-orange-500 " >
              {data}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Selected Data</h2>
        <ul>
          {selectedData.map((data) => (
            <li key={data} onClick={() => handleSelectedDataClick(data)}className="cursor-pointer text-yellow-500">
              {data}
            </li>
          ))}
        </ul>
      </div>
   
    </div>
  );
}

export default Array;
