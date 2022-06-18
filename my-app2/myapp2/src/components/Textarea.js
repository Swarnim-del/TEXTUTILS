import React ,{useState} from 'react';
// useState is a awesome hook
import PropTypes from 'prop-types'


export default function Textarea(props) {
  const [text,setText]=useState("");
  // setText("yarr ye kaise hogya");
  // here the text is a state
  // we can not use text like a normal 
  // text="swarnim kamal" //--> this is completely wrong way to change the state
  // setText("Now You can enter anything here")

  const convertToUppercase=()=>{
    // console.log("yarr ye shi hain yarr"+text);//--> now we are able to access text variable
    
    let newText=text.toUpperCase()
    setText(newText)
  } 
  const convertToLowercase=()=>{
    // console.log("yarr ye shi hain yarr"+text);//--> now we are able to access text variable
    
    let newText=text.toLowerCase()
    setText(newText)
    
  } 
  const bold=()=>{
    
    let newText=text
    setText(newText)
  }
  const itallics=()=>{
    
    let newText=text
    setText(newText)
  }
  const underline=()=>{
    
    let newText=text
    setText(newText)
  }
  const clear=()=>{
    
    let newText=""
    setText(newText)
  }
  const copy=()=>{
    var text=document.getElementById("mytext"); 
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("success","Copied to Clipboard")
  }
  const normal=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  




  const handleOnChange=(event)=>{
    setText(event.target.value)
  } 
  return (
    <div>
        <div className="container my-5">

                <div  className="mb-3">
                    <textarea className="form-control" id="mytext" rows="16" onChange={handleOnChange} value ={text}  cols="120" placeholder={props.heading}  ></textarea>
                    <div className="row">
                    <div className="btn btn-primary col" onClick={convertToUppercase}>Convert To Uppercase</div>
                    <div className="btn btn-primary col" onClick={convertToLowercase}>Convert To Lowercase</div>
                    <div className="btn btn-primary col" onClick={normal}>Convert To Original</div>
                    </div>
                    <div className="row">
                    <div className="btn btn-success col" onClick={bold}> Bold</div>
                    <div className="btn btn-success col" onClick={itallics}> Itallics</div>
                    <div className="btn btn-success col" onClick={underline}> Underline</div>
                    </div>
                    <div className="row">

                    <div className="btn btn-info col" onClick={clear}>Clear output</div>
                    <div className="btn btn-info col" onClick={clear}>Uniform text</div>
                    <div className="btn btn-info col"  onClick={copy}>Copy to Clipboard</div>
                    </div>
                </div>        
      </div>

      <div id="preview" className="container">
        <span><h1>Preview</h1></span>
          <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>

      <div id="textsummary" className="container ">
          <span ><h1>Your Text Summary</h1></span>
          {/* <p>No of words : {text.split(" ").length}</p> */}
          <p>No of words : {text.split(" ").length}</p>
          <p>No of Charachters: {text.length}</p>
          <p> {text.split(" ").length * 0.008} Minutes read</p>
      </div>

      
    </div>
  );
}
Textarea.propTypes={
    heading:PropTypes.string
}
