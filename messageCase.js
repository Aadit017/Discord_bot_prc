const messageCase=(msg) => {
    console.log(msg.content);
    return msg.content.toLowerCase().split(' ').slice(1).join(' ')
}

module.exports.messageCase=messageCase;