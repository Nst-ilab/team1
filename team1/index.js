const GreetingMessageAnalyzer = require("./greetingMessageAnalyzer");
const morning_texts = ["おはよう！","おはよー！！","おはヨーグルト"];

exports.handler = (event, context, callback) => {
    const analyzer = new GreetingMessageAnalyzer(event);
    
    analyzer
        .morning((text) => {
            callback(null,morning_texts[Math.floor(Math.random()*3)]);
        })
        .noon((text) => {
            callback(null,"こんにちは!");
        })
        .evening((text) => {
            callback(null,"こんばんは！");  
        })
        .cheers((text) => {
            callback(null,"お疲れ様！");  
        })
        .englishMorning((text) => {
            callback(null,"Good Morning!!");  
        })
        .notGreeting((text) => {
            callback();
        })
        .analyze();
};