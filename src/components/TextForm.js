import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!!", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!!", "success");
    }
    const handleSentenceClick = () => {
        /*let newText = text.charAt(0).toUpperCase+text.slice(1);
        setText(newText);*/

        let lower = text.toLowerCase();
        let newText = lower.charAt(0).toUpperCase() + lower.slice(1);
        setText(newText);
        props.showAlert("Converted to SentenceCase!!", "success");
        
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared!!", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!!", "success");
    }

    const handleExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed!!", "success");
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>  
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>   
            <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Convert to SentenceCase </button>     
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear all text</button> 
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button> 
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaceClick}>Clear Extra Space</button> 
            </div>
            <div>
                <h3 className="mb-1 my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>Find</h3>
                <input className="mb-1 my-1" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} type="text" />
                <h3 className="mb-1 my-1" style={{color:props.mode==='dark'?'white':'#042743'}}>Replace</h3>
                <input className="mb-1 my-1" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} type="text" />  
                <br />
                
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview - </h3>
                <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
            </div>
        </>
  )
}
