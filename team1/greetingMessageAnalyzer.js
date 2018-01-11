module.exports = class GreetingMessageAnalyzer{
  constructor(event){
      this._event = event;
      this._morningCallback = (text) => {};
      this._noonCallback = (text) => {};
      this._eveningCallback = (text) => {};
      this._notGreetingCallback = (text) => {};
  }
  
  morning(callback){
      this._morningCallback = callback;
      return this;
  }
  
  noon(callback){
      this._noonCallback = callback;
      return this;
  }
  
  evening(callback){
      this._eveningCallback = callback;
      return this;
  }
  
  notGreeting(callback){
      this._notGreetingCallback = callback;
      return this;
  }
  
  cheers(callback){
      this._cheersCallback = callback;
      return this;
  }

  englishMorning(callback){
      this._englishMorningCallback = callback;
      return this;
  }
  
  analyze(){
      if(this._isText()){
          if(this._isMorning()){
              this._morningCallback(this._event.message.text);
          }else if(this._isNoon()){
              this._noonCallback(this._event.message.text);
          }else if(this._isEvening()){
              this._eveningCallback(this._event.message.text);
          }else if(this._isCheers()){
              this._cheersCallback(this._event.message.text);    
          }else if(this._isEnglishMorning()){
              this._englishMorningCallback(this._event.message.text);    
          }else{
              this._notGreetingCallback(this._event.message.text);
          }
      }else{
          this._notGreetingCallback("");
      }
  }
  
  _isText(){
      return this._event.message.type === "text";
  }
  
  _isMorning(){
      //return this._event.message.text === "おはよう";
      if(this._event.message.text.match(/おはよう/)){
        return true;
      }else if(this._event.message.text.match(/オハヨウ/)){
        return true;
      }else{
        return false;
      }
      
      //return this._event.message.text.match(/おはよう/);
  }
  
  _isNoon(){
      //return this._event.message.text === "こんにちは";
      return this._event.message.text.match(/こんにちは/);
  }
  
  _isEvening(){
      //return this._event.message.text === "こんばんは";
      return this._event.message.text.match(/こんばんは/);      
  }
  
  _isCheers(){
      return this._event.message.text.match(/お疲れ様/);      
  }
  
  _isEnglishMorning(){
      //return this._event.message.text.match(/Good Morning/);  
      return this._event.message.text.toLowerCase().match(/good([\s　])*morning/);
  }
};