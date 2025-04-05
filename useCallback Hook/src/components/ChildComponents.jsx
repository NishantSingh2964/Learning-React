import React from 'react'

const ChildComponents = React.memo(
    (props) => {
        return (
          <div>
              {console.log("child is reRanderd")}
            <button onClick={props.handleClick}>{props.buttonName}</button>
          </div>
        )
      }
);

export default ChildComponents
