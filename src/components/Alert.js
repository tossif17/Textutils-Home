import React from 'react'

function Alert(props) {
  return (
    props.alert &&  <div>
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong ></strong>   <strong> {props.alert.msg} </strong>  
  <button type="button"className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
      
    </div>
  )
}

export default Alert
