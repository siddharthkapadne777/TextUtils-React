import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!");
    }
    const handleLwClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!");
    }


    const [text, setText] = useState("");
    return (
        <>
            <div className={`text-container container ${props.mode ? 'dark-mode' : 'light-mode'}`}>
                <h1>{props.heading}</h1>
                <textarea className={`${props.mode ? 'dark-mode' : 'light-mode'}`} name="text" id="text" value={text} rows="8" onChange={handleOnChange}></textarea>
                <div className="button-container">
                    <button disabled={text.length === 0} className='btn' onClick={handleUpClick} >Upper Case</button>
                    <button disabled={text.length === 0} className='btn' onClick={handleLwClick}>Lower Case</button>
                    <button disabled={text.length === 0} className='btn' onClick={handleCopy}>Copy</button>
                    <button disabled={text.length === 0} className='btn' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={text.length === 0} className='btn' onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className='container'>
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter(() => { return text.length !== 0 }).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter(() => { return text.length !== 0 }).length} Minutes to read</p>
                <h2>Preview</h2>
                <p className='about-text'>{text.length > 0 ? text : "Enter something in the textbox above to preview"}</p>
            </div>
        </>
    )
}
