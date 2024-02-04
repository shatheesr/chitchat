import React,{useState,useEffect} from 'react'
import Message from './Message'
import SendMessage from './SendMessage';
import { saveMessages, getMessages } from './localStorage';
const ChatBox = () => {
  const [message, setMessage] = useState(getMessages());
  useEffect(() => {
    saveMessages(message);
  }, [message]);
const addMessage = (newMessage) => {
  setMessage((prevMessages) => [...prevMessages, newMessage]);
};
    return (
    <div className='pb-44 pt-20 containerWrap'>   
    {message.map(message =>(
      <Message  key={message.id} message={message} />
    ))}
    <SendMessage addMessage={addMessage} />
    </div>
  )
}

export default ChatBox