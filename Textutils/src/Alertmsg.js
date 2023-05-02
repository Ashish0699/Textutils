import React from 'react'

export default function Alertmsg(props) {
  return (

    <div style={{height:"50px"}}>
    {
    props.alert && 
    
<div className={`alert alert-${props.alert.type1} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type1}</strong>: {props.alert.msg} 
  
</div>}
</div> 
       
    
  )
}
