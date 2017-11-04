'use strict';

function MessageHistory({list}){
  const messages = list.map(message => (
    <li key={message.id}>
    {message.type === 'response' ? <Response from={message.from} message={message} /> :
        message.type === 'message' ? <Message from={message.from} message={message} /> :
          message.type === 'typing' ? <Typing from={message.from} message={message} /> : null}
    </li>
    )
  );
  return <ul>{messages}</ul>
}

MessageHistory.defaultProps = { list: [] }



