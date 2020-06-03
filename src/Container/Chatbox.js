import React ,{Component} from "react";
import './style.css'


class ChatBox extends Component {
    render() {
      let props = this.props
      return (
        <div className="chatbot_message">
          {props.steps && props.steps.map(step =>{
            return step.options.map((option, index) =>
                    ( 
                      <DecisonComponent handleClick={props.handleClick} key={index} {...option} {...step}/>
                    )
          )})}
      </div>
      )
  }
} 
export default ChatBox;


const DecisonComponent = (props) => {

  if (props.type === 'options'){
    return <Button {...props}/>
  }
  return  <Cards {...props}/>
}



const Button = (props) => {
  return (
    <button name={props.value} onClick={props.handleClick} className="button">
        {props.label}
    </button>
  )
}

const Cards =  (props) => {
  return (
    <div className="box_modal">
      <img name="aaa" onClick={props.handleClick} height="200px" width="200px" src="https://images.unsplash.com/photo-1581289061167-88c834f2c223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="aa"/>
 </div>
  )
}