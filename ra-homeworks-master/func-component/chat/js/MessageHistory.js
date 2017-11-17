'use strict';

function MessageHistory({list}) {
  return (
    <ul>
      {list.map(message => (<li key={message.id}>{getMessageType(message)}</li>))}
    </ul>
  )
}

MessageHistory.defaultProps = { list: [] }

function getMessageType(message) {
  if (message.type === 'response') {
    return <Response from={message.from} message={message} />
  }
  if (message.type === 'message') {
  	return <Message from={message.from} message={message} />
  }
  if (message.type === 'typing') {
  	return <Typing from={message.from} message={message} />
  }
}
  	
  	
  
