import React, { Component } from 'react';
import ChatBot, { Loading } from './react-simple-chatbot/lib/index';
import ChatBox from './Container/Chatbox'
import {server} from './server'

class CustomChatBoat extends Component {
  state = {
    loading: true,
    result: '',
    trigger: false,
    nextStep : []
  };

  componentDidMount() {
    const { previousStep } = this.props;
    const value = previousStep.message;
    this.setState({nextStep : []})
    server("reply", value).then((res) => {
    
      let nextStep = {
        id: 'user',
        user: true,
        trigger: '3',
      }

      let free_text = res.next.filter((e)=> e.type === 'text')
      free_text.concat(nextStep)
      free_text.map((text) => {
        this.props.triggerNextStep({nextStep : text , next : true});
      })

      let customControl =  res.next.filter((e)=> e.type !== 'text')
      this.setState({
        loading : false,
        nextStep :  customControl
     })
        
      //  this.props.triggerNextStep({nextStep : nextStep , next : true});
    }) 
  }

  handleClick = (event) => {
      let name = event.target.name;
      let nextStep = {    
          id: "message",
          message: name,
          trigger: "3"
      }  
      this.props.triggerNextStep({nextStep : nextStep , next : true});     
  }

  render() {
    const {loading} = this.state;
    return (
      <div>
        { loading ? null : <ChatBox key={loading} handleClick={this.handleClick}  steps={this.state.nextStep}/> }
      </div>
    );
  }
}


class ChatBotComponent extends Component {
  state = {
    steps: []
  }

  componentDidMount() {
    let steps = [
        {
          id: '1',
          message: 'what is your name?',
          trigger: 'user',
        },
        {
        id: 'user',
        user: true,
        trigger: '3',
        },
        {
          id: '3',
          component: <CustomChatBoat/>,
          waitAction: true,
          trigger: 'user',
        }
    ] 
      this.setState({
        steps
      })

  }
   

  render() {
    let steps =  this.state.steps
      if(steps.length === 0 ){
        return <Loading/>
      }
      return (
        <div className="chatbot">
          <ChatBot
            steps={steps}
          /> 
        </div>
       
      )
  }
  
}
export default ChatBotComponent;