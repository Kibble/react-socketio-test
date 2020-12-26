import logo from './logo.svg';
import './App.css';
import useChat from './useChat';

const App = () => {
const { messages, sendMessage } = useChat(12345);

    const click = () => {
        console.log('clicked');
        sendMessage('test message');
        console.log(messages);
    };

    return (  
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <span className="App-link" onClick={click}>Test</span>

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
