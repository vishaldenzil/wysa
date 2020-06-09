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
     return (<Image className="image_gif" {...props} height={160} width={"182"}/>)
   }else if(props.extension === 'image/txt') {
     return <ImageText className="" {...props}/>
   }

   return (<Image  className="image_gif" {...props} height={150} width={"auto"}/>)
}

const ImageText = props => {
  return (
    <div class="image_txt">
      <Image  {...props} height={"auto"} width={"100%"}/>
      <div class="container">
        <button name ={"color"} onClick={props.handleClick} className="no_link">{props.text}</button>
      </div>
    </div>
  )
}
   

const Image =  (props) => 
    <img
    className={props.className} 
    name={props.label} 
    onClick={props.handleClick} 
    height={props.height} 
    width={props.width}
    src={props.url} 
    alt={props.label}
/>