import { useState } from "react";
import "./App.css";

function App() {

  const [val,setval]=useState(0)

  return (
    < div className="flex justify-center">
      <div className="bg-red-500 py-16 px-10 w-96 rounded-md my-32">
        <h1 className="text-white text-3xl font-bold">{val}</h1>
        <div className="my-4">
          <button className="bg-white mx-4 p-4" onClick={()=>setval(val+1)}>Increment</button>
          <button className="bg-white p-4 " onClick={()=>val==0?setval(0):setval(val-1)}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
