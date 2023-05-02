import React, { useState } from 'react'

export default function Textform(props) {

  const [text, setText] = useState("");
  const handelUPclick = () => {
    let newtext1 = text.toUpperCase();
    setText(newtext1)
    props.showalert("converted to uppercase.!", "success")
  }
  const handelLoclick = () => {
    let newtext1 = text.toLowerCase();
    setText(newtext1)
    props.showalert("converted to lowercase.!", "success")
  }
  const clearfun = () => {
    let newtext = "";
    setText(newtext)
    props.showalert("text cleared.!", "success")

  }
  const handelcopy = () => {

    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("copied to clipboard.!", "success")
  }
  const handelextraspaces = () => {
    // console.log("remove")
    let textspace = text.split(/[ ]+/);
    setText(textspace.join(" "))
    props.showalert("extra space remover.!", "success")

  }

  const handleSort = () => {
    const wordsArray = text.split(" ");
    const sortedArray = wordsArray.sort();
    setText(sortedArray.join(" "));
  };



  const handelonchange = (event) => {
    setText(event.target.value)
  }

  return (
    <>
      <div className='container'>
        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'yellowgreen' }}>{props.first}</h2>


        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handelonchange}
            placeholder="Enter Text Here" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handelUPclick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handelLoclick}>Convert to Lowercase</button>

        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={clearfun}>Clear Text</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handelcopy}>Copy Text</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handelextraspaces}>Remove Extra Spaces</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleSort}>Sort word</button>
      </div>

      <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3 >Your Text Summary</h3>
        <p className='p1'>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Word And {text.length} Characters</p>
        {/* <p className='p1'>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p> */}
        <h3>Preview</h3>
        <p className='ptext'>{text}</p>

      </div>
    </>
  )
}











