import React, { useState } from "react";
import Buttons from "./Buttons";

function DisplayScreen(){

    const[inputValue, setInputValue] = useState("")
    const[res, setRes] = useState(0)

    function takeinput(value){
        setInputValue((prev)=>prev+value) //batching technique
    }

    function calculateData(){
        console.log("cal")
        setRes(eval(inputValue))
    }
    function deleteInput(){
        setInputValue(inputValue.slice(0, -1))
    }
    function allClear(){
        setInputValue("")
        setRes(0)
    }
    return (
       <>
            <div>
                <input type="text" placeholder="0" value={res} readOnly/>
                <input type="text" placeholder="0" value={inputValue} readOnly/>
            </div>
            <div>
                <Buttons value={"1"} takeinput={takeinput} />
                <Buttons value={"2"} takeinput={takeinput} />
                <Buttons value={"3"} takeinput={takeinput} />
                <Buttons value={"4"} takeinput={takeinput} />

                <Buttons value={"5"} takeinput={takeinput} />
                <Buttons value={"6"} takeinput={takeinput} />
                <Buttons value={"7"} takeinput={takeinput} />
                <Buttons value={"8"} takeinput={takeinput} />

                <Buttons value={"9"} takeinput={takeinput} />
                <Buttons value={"0"} takeinput={takeinput} />

                <Buttons value={"+"} takeinput={takeinput} />
                <Buttons value={"-"} takeinput={takeinput} />
                <Buttons value={"*"} takeinput={takeinput} />
                <Buttons value={"/"} takeinput={takeinput} />


                <Buttons value={"DEL"} takeinput={deleteInput} />
                <Buttons value={"."} takeinput={takeinput} />

                <Buttons value={"="} takeinput={calculateData} />
                <Buttons value={"AC"} takeinput={allClear} />




            </div>
       </>
    )
}

export default DisplayScreen;