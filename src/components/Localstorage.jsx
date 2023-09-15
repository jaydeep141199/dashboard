import { useState } from "react";

const Localstorage = () => {
  const [isvalue, setisvalue] = useState([]);
  const [isname, setisname] = useState([]);
  const[lshow,setlshow]=useState(false)
  const[sshow,setsshow]=useState(false)
  const [show , setShow] = useState(true)
  const [showsession , setsessionShow] = useState(true)

  const handelchangevalue = (e) => {
    setisvalue(e.target.value);
  };
  const handelchangename = (e) => {
    setisname(e.target.value);
  };


  const ldata=()=>{
    setlshow(!lshow)
    setShow(!show)
  }
  const sdata=()=>{
    setsshow(!sshow)
    setsessionShow(!showsession)
  }
  const handleButtonClick = () => {
    localStorage.setItem(isname, isvalue);
  };
  const handleButtonSessionClick = () => {
    sessionStorage.setItem(isname, isvalue);
  };
  return (
    <>

   {showsession &&  <button onClick={ldata} className="btn">Local Storage</button>}
    {lshow  && <div className="text-center ">
        <div className="bg-green-200 mx-[300px] py-[20px] click2 ">
        <label htmlFor="">NAME:-</label>
        <br />
        <input
          type="text"
          value={isname}
          onChange={handelchangename}
          placeholder="Enter any value of name"
          className="border"
        />
        <br />
        <label htmlFor="">VALUE:-</label> <br/>
        <input
          type="text"
          value={isvalue}
          onChange={handelchangevalue}
          placeholder="Enter any value "
          className="border"
        />
        <br />
        <button onClick={handleButtonClick} className="mt-5">CLICK ME!</button>
        </div>
      </div>}
    
      {show && <button onClick={sdata} className="btn">Session Storage</button>}
      {sshow  && <div className="text-center">
        <div className="bg-green-200 mx-[300px] py-[20px] click2 ">
        <label htmlFor="">NAME:-</label>
        <br />
        <input
          type="text"
          value={isname}
          onChange={handelchangename}
          placeholder="Enter any value of name"
          className="border"
        />
        <br />
        <label htmlFor="">VALUE:-</label> <br/>
        <input
          type="text"
          value={isvalue}
          onChange={handelchangevalue}
          placeholder="Enter any value "
          className="border"
        />
        <br />
        <button onClick={handleButtonSessionClick} className="mt-5">CLICK ME!</button>
        </div>
      </div>}

      
    </>
  );
};
export default Localstorage;
