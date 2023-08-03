import React,{useState} from "react";

export default function TextForm(props) {
  
  
    const [text, setText]=useState("");

    const handleUpClick =()=>{
        console.log("uppercase is clicked"+text);  
      let newText=text.toUpperCase();
      if(text.length===0){
        window.alert("Please Enter text....");
      }else{
        setText(newText);
      } 
        
    } 
    const handleLowClick =()=>{
      console.log("uppercase is clicked"+text);  
    let newText=text.toLowerCase();
    if(text.length===0){
      window.alert("Please Enter text....");
    }else{
      setText(newText);
    }
      
      
      
  }
   const reset = ()=>{
    setText(" ");
   }

   // Function for copy the text the items inside the box....

   const handleCopy= ()=>{
   console.log("i am copy");
    let text=document.getElementById("myBox");
   
   if(text.value===''){
    window.alert("Please Enter text....");
  }else{
   
    text.style.color='green';
     text.select();
    navigator.clipboard.writeText(text.value);
  }
   

   }

    
    const handleOnChange=(event)=>{ 
      
        console.log("onchange is clicked"+text);

        setText(event.target.value);
    }
  return (
    <>
    <div className="container" style= {{color: props.mode==='warning'?' ':'white'} }>
      <h1>{props.heading}</h1>
      <div className="mb-3">
       
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style= {{backgroundColor: props.mode==='warning'?' ':'gray',color: props.mode==='warning'?' ':'white'}}
        ></textarea>
      </div>
     
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={reset} >Reset</button>
      <button className="btn btn-primary mx-1 my-2" onClick={handleCopy} >Copy Text</button>
    

    </div>
    <div className="container my-3" style= {{color: props.mode==='warning'?' ':'white'}}>
      <h1>your text sumary</h1>
      {/* <p > {text.split(" ").lengthh=0ords and {text.lengthh=0haracters. </p> */}

    <h2>Preview</h2>
    <p>{text}</p>

    </div>
    </>
  );
}
