import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked" + text)
        let newText=text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick=()=>{
      //console.log("lowercase was clicked" + text)
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick=()=>{
      //console.log("cleartext was clicked" + text)
      let newText='';
      setText(newText);
      props.showAlert("Cleared Text!","success");
    }
    const handleInverseClick = () => {
      //console.log("inverse click was clicked" + text)
      let newtext = "";
      for (let i = text.length - 1; i >= 0; i--) {
        newtext += text[i];
      }
      setText(newtext);
      props.showAlert("Text Inverted","success");
    }
    const handleSpeakClick = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Pronouncing your Texts","success");
    }
    const handleCapitalizeText = () => {
      let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
      setText(newText);
      props.showAlert("Text Capitalized","success");
    }
    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied! ","success");

    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[  ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extra Spaces","success");
    }
    const handleOnchange=(event)=>{
        //console.log("On change")
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    //text="new text"; //wrong way to change the state
    //settext=("New text"); //correct way to change the state
    const wordCount = (text)=>{
      let regex = /\s+\S+/;
      let numOfWords = text.split(regex);
      return numOfWords.length;
    }
  return (
    <div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h1> {props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#041743'}} id="mytext" rows="10"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleSpeakClick}>Speak</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleInverseClick}>Inverse Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCapitalizeText}>Capitalize Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#041743'}}>
      <h2>Your text summary</h2>
      <p>{text===""? 0 : wordCount(text)} words and {text.length} characters</p>
      <p>{ text===""? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!!!"}</p>
    </div>
    </div>
  )
}
