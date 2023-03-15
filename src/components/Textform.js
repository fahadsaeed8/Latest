import React, {useState} from 'react'
  
export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Upper was clicked")
        setText("You Have Clicked On handleUpClick");
    }
    const handleOnChange = (event) => {
      console.log("On Change");
      setText(event.target.value);
    };
    const [text, setText] = useState("Enter text here");
      return (
    <>
      <div className="Container">
        <h1>{props.heading }</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onChange={handleOnChange}>Convert To Uppercase</button>
      </div>
      <div className="Container my-3" >
        <h1>Your Text Summary</h1>
        <p></p>
      </div>  
    </>
  );
}
