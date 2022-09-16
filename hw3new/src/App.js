import "./App.css";
import { AUTHORS } from "./utils/constants";
import { useState, useEffect, useRef } from "react";
import { Form } from "./components/Form";
import { MessageList } from "./components/MessageList";
import Header from "./components/Header/Header"
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { cyan, green } from "@mui/material/colors";


const theme = createTheme({
  palette: {
    primary: cyan,
    secondary: green,
  },
  typography: {
    fontSize: 14,
  },
});

// eslint-disable

function App() {

  const [messageList, setMessageList] = useState([]);
  const messagesEnd = useRef();

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        sendMessage("Hi I am a BOT", AUTHORS.BOT);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  useEffect(() => {
    console.log(messagesEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <div className="App">
        <div className="App-content">
          <MessageList messages={messageList} />
          <div ref={messagesEnd} />
        </div>
        <Form onSubmit={handleAddMessage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
