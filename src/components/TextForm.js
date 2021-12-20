import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUppercase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = ()=>{
        setText("");
    }

    const handleReset = ()=>{
        setText('Enter text here');
    }

    const handleOnChange = (e)=>{
        setText(e.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="box" rows="6" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUppercase}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowercase}>Convert to lowecase</button>
            <button className="btn btn-primary mx-2" onClick={handleReset}>Reset</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>

        </div>
        <div className="container my-4">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length } words, and {text.length} character</p>
            <p>{0.008 * text.split(" ").length } minutes to read</p>
            <h3 className='my-3'>Preview</h3>
            <p>{text}</p>
            
        </div>
        </>
    )
}
