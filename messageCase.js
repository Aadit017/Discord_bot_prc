const messageCase= (msg) => {
    
    return msg.content.toLowerCase().split(' ').slice(1).join(' ')
}

module.exports.messageCase=messageCase;