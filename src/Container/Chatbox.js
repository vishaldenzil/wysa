import React from "react";
import './style.css'

const ChatBox = props => {
  return (
    <div className="chatbot_message">
      {props.steps.length === 0 ? null : null}
      {props.steps && props.steps.map(step =>{
         return step.options.map((option, index) =>
                ( <button name={option.value} onClick={props.handleClick} class="button">
                     {option.label}
                  </button>
                )
         )})}
    </div>
  );
};
export default ChatBox;
