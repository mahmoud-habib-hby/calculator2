import { useContext, useEffect } from "react";
import "./App.css";
import { Cal } from "./provider";
function Show() {
  const {result ,joiin ,value,setjoiin}=useContext(Cal)

  useEffect(() => {
    setjoiin(value.join("")); // تحديث joiin عند تغيير value
  }, [value]); // التأكد من أن useEffect يعمل عند تغير value

  return (
    <div className="show">
      <div className="number">{joiin}</div>
      <div className="result">{result}</div>
    </div>
  );
}
export default Show;
