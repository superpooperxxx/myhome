import React from 'react';

const SuccessBtn = ( props ) => {
        return (  
                <div className="btn btn-success">{ props.children }</div>
        );
}
 
export default SuccessBtn;