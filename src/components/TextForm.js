import React,{useState} from 'react'

export default function TextForm(props) {

    
   const  handleronClick=()=>{
        console.log("convert on upper click" + text)
        let newtext= text.toUpperCase();
        setText(newtext);
    }
    const handlerOnchange=(event)=>{
        console.log("on Change")
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter your text");
  return (

    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#000b48'}}>
     <h2>{props.heading}</h2>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handlerOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="my-box" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleronClick}>changeToUpeerCass</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#000b48'}}>
      <h2>Your Text Summary</h2>
      <p>{ text.split(" ").filter((element)=>{return element.length!=0}).length} word {text.length}characters</p>
      <p>{0.008*text.split(" ").length} Minutes per Read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>


    </>
  )
}
