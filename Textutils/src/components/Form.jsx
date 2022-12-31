import React, { useState } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import './form.css';

export default function Form(props) {
    const [text, setText] = useState('');
    const [toSearch, setToSearch] = useState("");
    const [found, setFound] = useState("");
    const [serachClicked, setSearchClicked] = useState(false);

    const handleUpperClick = () => {
        let newUpperCase = text.toUpperCase();
        setText(newUpperCase);
        if (text.length > 0) {
            props.showAlert("Uppercase Has been Enabled!");
        }
        else {
            props.showAlert("Please Enter Text First")
        }
        // console.log("UpperCase Clicked Hua Hai");
    }

    const hanleInput = (event) => {
        // console.log(text);
        setText(event.target.value);
    }
    const handleLowerClick = () => {
        let newLowerCase = text.toLowerCase();
        setText(newLowerCase);
        if (text.length > 0) {
            props.showAlert("Lowercase Has been Enabled!");
        }
        else {
            props.showAlert("Please Enter Text First")
        }

    }
    const clearHandler = () => {
        setText("");
        props.showAlert("All Text is Cleared.");
    }

    const searchHandler = () => {
        setSearchClicked(true);
        // console.log(toSearch);
        if (text.toLowerCase().includes(toSearch.toLowerCase()) === true) {
            setFound(true);
        }
        else {
            setFound(false);
        }
    }
    const spaceRemover = () => {
        setText(text.replace(/  +/g, " "));
        if (text.length > 0) {
            props.showAlert("Double Space Has Been Removed");
        }
        else {
            props.showAlert("Please Enter Text First")
        }
    }
    const copyHandler = ()=>{
        if (text.length > 0) {
            props.showAlert("Text Copied!");
        }
        else {
            props.showAlert("Please Enter Text First")
        }
    }

    return (
        <body className='container'>
            <br />

            <h2>{props.heading}</h2>
            <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="13" placeholder='Enter Here' onChange={hanleInput}></textarea>
            <div className="buttons my-6">
                <button type="button" className="btn btn-success" onClick={handleUpperClick}>Covert To Uppercase</button>
                <button type="button" className="btn btn-success" onClick={handleLowerClick}>Covert To Lowercase</button>
                <button type="button" className="btn btn-success" onClick={clearHandler}>Clear Text</button>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Search In Text
                </button>
                <button type="button" className="btn btn-success" onClick={spaceRemover}>Remove Extra Space</button>
                <CopyToClipboard text={text} onCopy={copyHandler}>
                    
                    <button type="button" className="btn btn-success">Copy Text</button>
                </CopyToClipboard>
            </div>
            <br />
            <br />
            <h2>Your Text Summary Is Given Below.</h2>
            <h3>{(text.length === 0) ? "0" : text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters.</h3>
            <br />
            <h2>The above text will take approximately <span>{(text.length === 0) ? "0" : (0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length).toFixed(3)}</span> minutes to read.</h2>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search In Text" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(e) => {
                                    setToSearch(e.target.value);
                                }} />
                                <button className="btn btn btn-success" type="button" id="button-addon2" onClick={searchHandler}>Search</button>
                            </div>
                            {(serachClicked === true && found === true) ? "Your Value Is Found" : (serachClicked === true && found === false) ? "Can't Found!" : ""}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </body>
    )
}
