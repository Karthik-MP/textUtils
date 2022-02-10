import React,{useState} from 'react'

export default function TextForm(props) {
  const handleupClick=()=>{
      console.log(text)
      let newtext=text.toUpperCase();
      setText(newtext);
      props.showAlert("Converted to Upper Case",'success')
  }
  const handleOnChange=(event)=>{
      console.log("On change")
      setText(event.target.value);
      
  } 
  const handleDownClick=()=>{
    let newText=text.toLowerCase();
    console.log("Handle down Click")
    setText(newText)
    props.showAlert("Converted to Lower Case",'success')
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text)
    document.getSelection().removeAllRanges();
  }
  const[text,setText] = useState('Enter the text')
  return (
    <>
      <div className="contianer" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <label htmlFor="myBox" className="form-label"></label>
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
          </div>
          <button disabled={text.length===0} type="button" className="btn btn-primary" onClick={handleupClick}>Convert to uppercase</button>
          <button disabled={text.length===0} type="button" className="mx-2 btn btn-primary" onClick={handleDownClick}>Convert to lower case</button>
          <button disabled={text.length===0} type="button" className="mx-2 btn btn-primary" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="contianer" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      </div>
    </>
  )
}
