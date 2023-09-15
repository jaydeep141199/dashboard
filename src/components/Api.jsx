import React, { useEffect, useState } from "react";

function Api() {
  const [selectedOption, setSelectedOption] = useState("");
  const [product, setProductData] = useState([]);
  const [catagory, setCatagoryData] = useState([]);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const fetchData = async (e) => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${selectedOption}`
        );
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedOption]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const Data = await response.json();
        setCatagoryData(Data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchdata();
  }, []);
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const openPopup = (data) => {
    setPopupData(data);
  };
  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <div className="text-center image ">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="m-5 bg-black text-white"
      >
        <option value="" disabled>
          Select a Category
        </option>
        {catagory.map((items) => (
          <option value={items} key={items}>
            {items}
          </option>
        ))}
      </select>

      <div className="grid md:grid-cols-3 gap-5  ">
        {product.map((item) => (
          <div className="  rounded overflow-hidden shadow-lg items-center  bg-blue-100 mx-5 p-5">
            <img
              key={item}
              className=" h-[150px] py-[5px] w-[400px]"
              src={item.image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
            </div>
            <div className="px-6 pb-2">
              <label htmlFor="" className="font-bold">
                PRICE :
              </label>
              <span className="inline-block bg-gray-200 font-bold rounded-full px-3 py-1 text-sm  text-gray-700 mr-2 mb-2">
                &#8377;{item.price}.00
              </span>
              <button
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-8 rounded"
                onClick={() => openPopup(item)}
              >
                View More
              </button>
              {/* <label htmlFor="">COUNT :</label>{" "}
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item.rating.count}
              </span> */}
            </div>
          </div>
        ))}
      </div>
      {popupData && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-75 flex items-center justify-center text-center">
          <div className="bg-white p-5 rounded shadow-md mx-[450px]">
            <div>
              <img
                src={popupData.image}
                alt="product photo"
                className="mb-2 h-[150px] w-[150px] mx-[130px] "
              />
            </div>
            <div className="font-bold text-xl mb-2">{popupData.title}</div>
            <p className="text-gray-700 text-base">{popupData.description}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-3"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Api;
