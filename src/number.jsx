import { useContext } from "react";
import "./App.css";
import { Cal } from "./provider";

function Number() {
  const { calculater,setvalue, setjoiin, setresult ,value ,joiin } = useContext(Cal);
  console.log(joiin)
  console.log(value)
  return (
    <div className="number contaner">
      <div className="numbers numberShow1">

        <button
          onClick={() => {
            setvalue([...value, 1]);
; 
          }}
        >
          1
        </button>
        
        <button
          onClick={() => {
            setvalue([...value, 2]);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setvalue([...value, 3]);
          }}
        >
          3
        </button>
      </div>
      <div className="numbers numberShow2">
      <button
          onClick={() => {
            setvalue([...value, 4]);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setvalue([...value, 5]);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setvalue([...value, 6]);
          }}
        >
          6
        </button>
      </div>
      <div className="numbers numberShow3">
      <button
          onClick={() => {
            setvalue([...value, 7]);
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            setvalue([...value, 8]);
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            setvalue([...value, 9]);
          }}
        >
          9
        </button>
      </div>
      <div className="numbers numberShow3">
      <button
          onClick={() => {
            setvalue([...value, 0]);
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            setvalue([...value, "00"]);
          }}
        >
          00
        </button>
        <button
          onClick={() => {
            setvalue([...value, "."]);
          }}
        >
          .
        </button>
      </div>
      <div className="opp">
      <button
          onClick={() => {
            setvalue([...value, "*"]);
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            setvalue([...value, "-"]);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setvalue([...value, "+"]);
          }}
        >
          +
        </button>
        </div>
        <div className="opp">
        <button
          onClick={() => {
            setvalue([...value, "/"]);
          }}
        >
          /
        </button>
        <button onClick={()=>calculater()}>=</button>
        <button className="ac" onClick={()=> {
          setvalue([]) 
          setresult("")
        }  }>AC</button>
        
      </div>
    </div>
  );
}

export default Number;
