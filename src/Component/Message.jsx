import av from '../img/s.png'
const Message = ({ message }) => {
    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="" src={av} />
                    </div>
                </div>
                <div className="chat-header">
                    {message.name}
                </div>
                <div className="chat-bubble">{message.text}</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
        </div>
    )
}

export default Message;