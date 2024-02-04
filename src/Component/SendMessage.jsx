import React, { useState } from 'react'

const SendMessage = ({addMessage}) => {
  const [value, setValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      const newMessage = {
        id: new Date().getTime(),
        text: value,
        name: "shathees",
      };
      
      console.log(newMessage);
      addMessage(newMessage);
      setValue(""); 
    }
  }
  return (
    <div className='bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg'>
      <form onSubmit={handleSendMessage} className='px-2 flex containerWrap'>
        <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
        <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-10 text-lm">Send</button>
      </form>
    </div>
  )
}

export default SendMessage