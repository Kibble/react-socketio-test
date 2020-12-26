import logo from './logo.svg';
import './App.css';
import useChat from './useChat';
// var io = require('socket.io')(http);
// import Server from 'socket.io';

// import socketIo from 'socket.io';

// const click = () => {
//   console.log('clicked');
//   // let io = new Server('http'); 
//   // io.sockets.emit('action', 'payload');
//   const { messages, sendMessage } = useChat(12345);
//   sendMessage('test message');
//   // useChat.sendMessage('test message');
// }

const App = () => {
  const { messages, sendMessage } = useChat(12345);

  const click = () => {
    console.log('clicked');
    // let io = new Server('http'); 
    // io.sockets.emit('action', 'payload');
    
    sendMessage('test message');
    console.log(messages);
  }

  return (  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a className="App-link" href="#" onClick={click}>Test</a>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
