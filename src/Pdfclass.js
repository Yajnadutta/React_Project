import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

export default function Pdfclass() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generador de Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>React to pdf 2</h1>
        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height:150,width:250}}/>
      </div>
    </div>
  );
}