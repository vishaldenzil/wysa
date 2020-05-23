import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from './react-simple-chatbot/lib/index';
import {promise} from './server'

class DBPedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };
  }

  componentDidMount() {

    const { previousStep } = this.props;
    const value = previousStep.message;

    let extra = Math.floor(Math.random() * 3 + 1);

    promise("reply", value, extra).then((res) => {
      this.setState({ 
        loading : false,
        result: res.value,

      })



      this.props.triggerNextStep({nextStep :  res.next , next : true});

    })
    
  }

  render() {
    const { loading, result } = this.state;

    return (
      <div className="dbpedia">
        { loading ? <Loading /> : result }
      </div>
    );
  }
}

DBPedia.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

DBPedia.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

class ExampleDBPedia extends Component {
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
        trigger: 'previous',
      },
      {
          id: 'previous',
          message: 'Hi {previousValue}, nice to meet you!',
          trigger: 'areyou',
      },
      {
          id: 'areyou',
          message: 'Why are you here?',
          trigger: 'search',
      },
      {
          id: 'search',
          user: true,
          trigger: '3',
      },
      {
          id: '3',
          component: <DBPedia />,
          waitAction: true,
          trigger: 'search',
      },
      {
        id: 'end',
        message: 'Thank you',
        end: true,
      },
        // {
        //   id: 'selectsomething',
        //   message: 'Select some of the things',
        //   trigger: '4',
        // },
        // {
        //     id: '4',
        //     options: [
        //       { value: 1, label: 'Enjoy', trigger: '5' },
        //       { value: 2, label: 'News', trigger: '5' },
        //       { value: 3, label: 'Chatting', trigger: '5' },
        //     ]
        //   },
        // {
        //   id: '5',
        //   component: <DBPedia />,
        //   waitAction: true,
        //   trigger: 'search',
        // }
        
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
      <ChatBot
        opened={true}
        steps={steps}
      />
    )
  }
  
}
export default ExampleDBPedia;