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
      this.setState({
         loading : false,
         nextStep : res.next
      })
    })
    
  }

  handleClick = (event) => {

      this.setState({
        nextStep : []
      })
      

      let nextStep = {    
          id: "message",
          message: event.target.name,
          trigger: "user"
      }

      
      this.props.triggerNextStep({nextStep : nextStep , next : true});
      server("reply",  event.target.name).then((res) => {
        this.setState({ 
          loading : false,
          result: res.value,
        })
        this.setState({
           nextStep : res.next
        })
  
      })
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        { loading ? <Loading /> : <ChatBox handleClick={this.handleClick}  steps={this.state.nextStep}/> }
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

      localStorage.clear()
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