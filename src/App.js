import { useState } from "react";
import "./App.css";

export default function MyApp() {
     return <Calculator />;
}

function Calculator() {
     const [value, setValue] = useState("");

     function handleInput(newNumber) {
          setValue((prevNumber) => {
               if (
                    prevNumber.length &&
                    prevNumber[prevNumber.length - 1].match(/[/*\-+.]/g) &&
                    newNumber.match(/[/*\-+.]/g)
                  ){
                    return prevNumber.slice(0,-1)+ newNumber;
                  }
               return prevNumber + newNumber;
          });
     }

     function handleClear() {
          setValue("");
     }

     function handleSum() {
          if (value) {
               if (value.length && value[value.length - 1].match(/[/*\-+.]/g)) {
                    setValue(eval(value.slice(0, -1) + ""));
               } else {
                    const total = eval(value);
                    setValue(total);
               }
          }
     }
     return (
          <div className="main-div">
               <div>
                    <input value={value} readOnly />
               </div>
               <div>
                    <button
                         onClick={() => {
                              handleInput("7");
                         }}
                    >
                         7
                    </button>
                    <button
                         onClick={() => {
                              handleInput("8");
                         }}
                    >
                         8
                    </button>
                    <button
                         onClick={() => {
                              handleInput("9");
                         }}
                    >
                         9
                    </button>
                    <button style={{backgroundColor:"#D4D4D2"}}
                         onClick={() => {
                              handleClear();
                         }}
                    >
                         C
                    </button>
               </div>
               <div>
                    <button
                         onClick={() => {
                              handleInput("4");
                         }}
                    >
                         4
                    </button>
                    <button
                         onClick={() => {
                              handleInput("5");
                         }}
                    >
                         5
                    </button>
                    <button
                         onClick={() => {
                              handleInput("6");
                         }}
                    >
                         6
                    </button>
                    <button style={{backgroundColor:"#FF9500"}}
                         onClick={() => {
                              handleInput("+");
                         }}
                    >
                         +
                    </button>
               </div>
               <div>
                    <button
                         onClick={() => {
                              handleInput("1");
                         }}
                    >
                         1
                    </button>
                    <button
                         onClick={() => {
                              handleInput("2");
                         }}
                    >
                         2
                    </button>
                    <button
                         onClick={() => {
                              handleInput("3");
                         }}
                    >
                         3
                    </button>
                    <button style={{backgroundColor:"#FF9500"}}
                         onClick={() => {
                              handleInput("-");
                         }}
                    >
                         -
                    </button>
               </div>
               <div>
                    <button
                         onClick={() => {
                              handleInput("0");
                         }}
                    >
                         0
                    </button>
                    <button
                         onClick={() => {
                              handleInput(".");
                         }}
                    >
                         .
                    </button>
                    <button style={{backgroundColor:"#FF9500"}}
                         onClick={() => {
                              handleInput("*");
                         }}
                    >
                         *
                    </button>
                    <button style={{backgroundColor:"#FF9500"}}
                         onClick={() => {
                              handleInput("/");
                         }}
                    >
                         /
                    </button>
               </div>
               <div>
                    <button  style={{backgroundColor:"#FF9500"}} onClick={handleSum}>=</button>
               </div>
          </div>
     );
}
