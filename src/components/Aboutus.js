import React, { } from 'react'

export default function Aboutus(props) {
  //   const[myStyle,setMyStyle]=useState( {
  //     color:'black',
  //     backgroundColor:'white'
  // })
  let myStyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
  }
    
  return (
    <div className="container">
        <h1 className="my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>About Us</h1>
        <p style={{color:props.mode==='dark'?'white':'#042743'}}>Text Analyzer Tool(T.A.T) is a ReactJs website built primarily to do various operations on regular typed text. You can safely use WordPad or NotePad for text drafting, and saving, but T.A.T offers much more than simple text drafting and formatting. TextUtils can convert your text to any case in just one simple click of a button. You can even remove whitespaces from your scripted documents, and wear up your earphones to listen to it, instead of straining your eyes! It does a detailed analyzing of your text, and provides an output of words, and characters, along with reading time as well. The best part of T.A.T is that it is an open source project, as a result, dozens of new features are in the upcoming, which definitely makes it a cut above the rest.</p>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <b>Analyze your texts</b>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      T.A.T gives you a way to analyze your text quickly and efficiently.Be it word counting, character counting, Estimate time to read your paragraphs or sentenses and many more.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <b>Free to use</b>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        T.A.T is a free  character counter tool that provides instant character count and word count statistics for a given text.T.A.T reports the number of words and characters.Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <b>Browser compatible</b>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any browser such as Chrome, Firefox, Internet Explorer, Safari, Opera, Edge.It suits to count charcters in facebook, blog, books, excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
