
 import Deshboard from "./components/Deshboard";
 import DisplayTable from "./components/DisplayTable";
 import { BrowserRouter,Route,Routes } from "react-router-dom";
 import NumberRandom from "./components/NumberRandom";
import Api from "./components/Api";
import Array from "./components/Array";

import ArrOfObj from "./components/ArrOfObj";
import Localstorage from "./components/Localstorage";
import QuizApp from "./components/QuizApp";
function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Deshboard/>}></Route>
            <Route path="/display" element={<DisplayTable/>}></Route>
            <Route path="/random" element={<NumberRandom/>}></Route>
            <Route path="/api" element={<Api/>}></Route>
            <Route path="/array" element={<Array/>}></Route> 
            <Route path="/storage" element={<ArrOfObj/>}></Route> 
            <Route path="/local" element={<Localstorage/>}></Route>
            <Route path="/quiz" element={<QuizApp/>}></Route>
        </Routes>
      </BrowserRouter>
   </>
  );
}


export default App;
