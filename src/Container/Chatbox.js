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


const Cards =  (props) =>  {
  if(props.extension  === 'gif'){
     return (<Image {...props} height={160} width={"auto"}/>)
   }

   return (<Image {...props} height={150} width={"auto"}/>)
}
   





const Image =  (props) => 
    <img 
    name={props.label} 
    onClick={props.handleClick} 
    height={props.height} 
    width={props.width}
    src={props.url} 
    alt={props.label}
/>