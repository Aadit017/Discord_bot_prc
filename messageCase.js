const messageCase= (msg) => {
    let content=msg.content
    content=content.toLowerCase();
    return msg.reply(content)
    .then((result) => {
        console.log("message converted to lower case and replied")   
    }).catch((err) => {
        console.log("Error in message case");
    });
}

module.exports.messageCase=messageCase;