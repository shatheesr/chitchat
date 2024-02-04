import React from 'react'
import ChatBox from './ChatBox'
import SendMessage from './SendMessage'

const ChatRoom = () => {
  return (
    <div className=''>
      <SendMessage/>
      <ChatBox/>
    </div>
  )
}

export default ChatRoom