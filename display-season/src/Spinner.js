import React from 'react';

const Spinner = (props) => {
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
            {/* <div className="ui big text loader">{props.message || "Loading..."}</div> */}
        </div>
    );
};

//Specifying default props: when developers forget to give a specific message
//because this Spinner component is reusable in many other apps
//One way to do this is in the return commented-out line
//Following is a better way, using default props.
Spinner.defaultProps = {
    message: "Loading..."
}//defaultProps is an object

export default Spinner;