// basic question and answers
let questions=[
    "hi",
    "hello",
    "how are you",
    "wsg",
    "sup",
    "hey"
]
let answers=[
    "hi.",
    "no ty",
    "im fine.",
    "nm",
    "chup",
    "no hey , go study"
]
const basicCon=(msg)=>{
        msg.content=msg.content.toLowerCase().split(' ').slice(1).join(' ')
        for(let i=0;i<6;i++){
            // console.log(msg.content);
            if(msg.content.toLowerCase()==questions[i]){
                // console.log(`Found ${msg.content} and its answer it ${answers[i]} + ${i}`);
                msg.channel.send(`${answers[i]}`)
                return answers[i]
            }else{continue}
        }
        return "0";
}
module.exports.basicCon=basicCon