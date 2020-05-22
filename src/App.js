import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';
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

    promise("reply", value).then((res) => {
      this.setState({ 
        loading : false,
        result: res
      })
      this.props.triggerNextStep(res ,'search');

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

const ExampleDBPedia = () => (
  <ChatBot
    steps={[
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
        trigger: 'selectsomething',
      },
      {
        id: 'selectsomething',
        message: 'Select some of the things',
        trigger: '4',
      },
      {
          id: '4',
          options: [
            { value: 1, label: 'Enjoy', trigger: '5' },
            { value: 2, label: 'News', trigger: '5' },
            { value: 3, label: 'Chatting', trigger: '5' },
          ]
        },
      {
        id: '5',
        component: <DBPedia />,
        waitAction: true,
        trigger: 'search',
      }
      
    ]}
  />
);

export default ExampleDBPedia;