
// Import dependencies
import React from 'react';
import '../styles/ChatRoom.css';

import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';

class ChatRoom extends React.Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);

    // Connect to the server
    //this.socket = io();

    // Listen for messages from the server
    //this.socket.on('server:message', message => {
    //  this.addMessage(message);
    //});
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message
    };

    // Emit the message to the server
    //this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="container">
        <h3>React Chat App</h3>
        <ChatHistory messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }

}
ChatRoom.defaultProps = {
  username: 'Anonymous'
};

export default ChatRoom;