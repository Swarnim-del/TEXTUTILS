import React from 'react'


function Alert(props) {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    word= lower.charAt(0).toUpperCase()+lower.slice(1);
    return word
  }
  const change=(word)=>{
    if(word !="success"){
    const change="success"
    word=change;
    }
    return word
  }
  return (
    
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalize(change(props.alert.type))}</strong>: {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    
  )
}

export default Alert
