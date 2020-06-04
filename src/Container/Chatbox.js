import React ,{Component} from "react";
import './style.css'


class ChatBox extends Component {
    render() {
      let props = this.props
      return (
        <div >
          {props.steps && props.steps.map(step =>{
            return  <CurrentStep type={step.type} {...step} {...props} />
          })}
      </div>
      )
  }
} 
export default ChatBox;


const CurrentStep = (props) => {
  if (props.type === 'options'){
  return <ul className="button_options">
      {props.options.map((option, index) =>
              (
                <li className="select_list">
                   <Button handleClick={props.handleClick} key={index} {...option} {...props}/>
                </li>         
              )
      )}
  </ul>
  } else {
    return (<div className="chatbot_message">
            {props.options.map((option, index) =>
                ( 
                  <div className="box_modal">
                    <Cards handleClick={props.handleClick} key={index} {...option} {...props}/>
                  </div>
                )
            )}
    </div>)

  }
}




const Button = (props) =>
    <button name={props.value} onClick={props.handleClick} className="button">
        {props.label}
    </button>


const Cards =  (props) =>  
    <img 
      name={props.label} 
      onClick={props.handleClick} 
      height="150px" width="150px" 
      src={props.url} 
      alt={props.label}
    />