

export const promise = (value, message = "", extra = 1) => new Promise(function(resolve, reject) { 
     let count = 0
     if(!localStorage.getItem("count")){
        count =  1
        localStorage.setItem("count", count)
     }else {
        count =  2   
     }
     let res = {}

     if(!value){
      return reject("something went wrong")
     }
     if(value === "get"){
      return resolve("vishal"); 
     }else if(value === "reply"){
         let reply = "Hello "+ message +" nice to meet you?"
        
         if(count === 1){
          res = {
              value : reply,
              next : {
                  id: 'user',
                  message: "How are you feeling?",
                  trigger: 'user',
                }
          }
        }else {
          if(message !== 'happy' && message !== '1' && message !== '2' && message !== '3' && message !== '4' && message !== '5' && message !== "sad" && message !== "Sad")
          { 
            res = {
              value : "That's amazing. Have a good day!",
              next : {
                  id: 'user',
                  user: true,
                  trigger: '3',
                }
            }
          }
          if(message === "sad" || message === "Sad"){   
            res = {
              value : "Oh, sorry to hear that. On a scale of 1 - 5, how bad is it?",
              next : {
                id: 'sad',
                options: [
                  { value: '1', label: '1', trigger: '3' },
                  { value: '2', label: '2', trigger: '3' },
                  { value: '3', label: '3', trigger: '3' },
                  { value: '4', label: '4', trigger: '3' },
                  { value: '5', label: '5', trigger: '3' }  
                ]
              }

            }
          }
          if(message === '1' || message === '2' || message === '3' || message === '4' || message === '5') { 
            res = {
              value : "Okay. Let me help. Here is a tool you can use",
              next : {
                  id: 'user',
                  user: true,
                  trigger: '3',
                }
            }
          }

          if(message === "happy") {
            res = {
              value : "That's nice. What made you happy?",
              next : {
                  id: 'user',
                  user: true,
                  trigger: '3',
                }
            }
          }

         
          
        }
        
        
      
         setTimeout(()=>{
           return resolve(res)
         },1000)
     }

  }); 