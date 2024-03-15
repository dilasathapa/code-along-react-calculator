import React from "react";

function Buttons(props){

    let {value, takeinput} = props;
    return (
        <>
            <button onClick={()=>{takeinput(value)}}>{value}</button>
        </>
    )
}

export default Buttons;