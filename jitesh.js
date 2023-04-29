const jitesh=(msg,prefix)=>{
    if(msg.content.toLowerCase().startsWith(prefix) || msg.content.toLowerCase().startsWith(`<@1101170597309984818>}`)){
        console.log(msg.content.toLowerCase().split(' ').slice(1).join(' '));
        console.log("=");
        return msg.content.toLowerCase().split(' ').slice(1).join(' ')
    }else{
        return "-:-"
    }
}

module.exports.jitesh=jitesh