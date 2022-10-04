import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessageState, setMessageState } from "../Store/messageSlice";
import MessagesList from "./MessageList";


const Chat = () => {
  const messageState = useSelector(selectMessageState);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSend = () => {
    if(text.length > 0) {
      dispatch(setMessageState(text));
      setText('')
    }
  }

  return (
    <div>
      <MessagesList
        user={messageState.user}
        values={messageState.text}
      />
      <div>
        <div className="form-row mt-3">
          <div className="col-10">
            <input
              type="text"
              placeholder="Enter your message here..."
              value={text}
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-2">
            <button
              disabled={0 === text.length}
              onClick={handleSend}
              className="btn btn-primary btn-block"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Chat
