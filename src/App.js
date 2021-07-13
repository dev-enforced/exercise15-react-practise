import React,{useState} from "react";
import "./styles.css";
var emojiDictionary={
  "😊":"smiling",
  "🤨":"disbelief",
  "😞":"sad",
  "🥡":"takeout box",
  "😩":"annoyance",
  "💗":"love"
}
var emojiArr=Object.keys(emojiDictionary);
export default function App() {
  var [meaning,setMeaning]=useState("")
  function emojiInputHandler(event){
    var uinp=event.target.value;
    var matlab=emojiDictionary[uinp];
  if(uinp in emojiDictionary){
    setMeaning(matlab);
  }else{
    matlab="We don't have in our db";
    setMeaning(matlab)
  }
  }
  function emojiClickHandler(emoji){
    var matlab=emojiDictionary[emoji];
    setMeaning(matlab);
  }
  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={emojiInputHandler}></input>
      <h3>{meaning}</h3>
      <h2>Emojis we know</h2>
      <ul>
        {
          emojiArr.map((item)=>{
            return <span onClick={()=>emojiClickHandler(item)} style={{cursor:"pointer",padding:".5rem",fontSize:"2rem"}}>{item}</span>
          })
        }

      </ul>
    </div>
  );
}
