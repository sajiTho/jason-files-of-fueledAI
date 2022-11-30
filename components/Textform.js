import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log = ("Uppercase was Clicked");
    }

    const handleOnChange = () => {
        console.log = ("change was handled");
    }

    const [text] = useState('Enter The Text Here');
    // text = "set text";
    // setText = ("set text");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}> Convert to uppercase</button>
        </div>
        )

}
