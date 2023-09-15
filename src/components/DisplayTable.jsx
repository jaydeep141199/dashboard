import data1 from "../components/data.json";
import { useEffect, useState } from "react";

const DisplayTable = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [aprdata, setAprilData] = useState(false);
  const [maydata, setMayData] = useState(false);
  const [mardata, setMarchData] = useState(false);

  useEffect(() => {
    setData(data1);
  }, []);
  const handleClick = () => {
    setShow(true);
  };

  const aprData = data.filter((items) => items.month === "APRIL");
  const mayData = data.filter((items) => items.month === "MAY");
  const marData = data.filter((items) => items.month === "MARCH");
  const aprcount = aprData.length;
  const maycount = mayData.length;
  const marcount = marData.length;

  const aprilmonthdata = () => {
    setAprilData(true);
    setMarchData(false);
    setMayData(false);
  };
  const marchmonthdata = () => {
    setAprilData(false);
    setMarchData(true);
    setMayData(false);
  };

  const maymonthdata = () => {
    setAprilData(false);
    setMarchData(false);
    setMayData(true);
  };

  return (
    <>
      <table className="table-auto w-full h-full ">
        <thead>
          <tr className="bg-yellow-500">
            <th>ID</th>
            <th>MONTH</th>
            <th>DATE</th>
            <th>COUNT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td className="px-4 py-2 border-b text-center">{item.id}</td>
              <td className="px-4 py-2 border-b text-center">{item.month}</td>
              <td className="px-4 py-2 border-b text-center">{item.date}</td>
              <td className="px-4 py-2 border-b text-center">
                <button
                  className="border bg-blue-500 px-5"
                  onClick={handleClick}
                >
                  {item.count}
                </button>
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      {show && (
        <div>
          <aside
            id="default-sidebar"
            className="fixed top-50 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
          >
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <ul className=" font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <button className="ml-3 p-1 click" onClick={marchmonthdata}>
                      MARCH
                    </button>
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {marcount}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <button
                      className="ml-3 p-1  click"
                      onClick={aprilmonthdata}
                    >
                      APRIL
                    </button>
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {aprcount}
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <button className="ml-3 p-1 click" onClick={maymonthdata}>
                      MAY
                    </button>
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {maycount}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-black border-dashed rounded-lg dark:border-gray-700">
              <div className=" flex flex-col   gap-4 mt-5">
                {mardata && (
                  <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <div className="text-2xl text-gray-400 dark:text-gray-500">
                      {marData.map((marchdata) => (
                        <p className="bg-blue-500 m-1 text-white">
                          {" "}
                          {marchdata.date}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {aprdata && (
                  <div className="flex flex-col items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <div className="text-2xl text-gray-400 dark:text-gray-500">
                      {aprData.map((aprildata) => (
                        <p className="bg-blue-500 m-1 text-white">
                          {aprildata.date}
                        </p>
                      ))}
                    </div>{" "}
                  </div>
                )}

                {maydata && (
                  <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <div className="text-2xl text-gray-400 dark:text-gray-500">
                      {mayData.map((maymdata) => (
                        <p className="bg-blue-500 m-1 text-white">
                          {maymdata.date}
                        </p>
                      ))}
                    </div>{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DisplayTable;
