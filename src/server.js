

export const promise = (value, message = "") => new Promise(function(resolve, reject) { 
     console.log(value, message)
     if(!value){
      return reject("something went wrong")
     }
     if(value === "get"){
      return resolve("vishal"); 
     }else if(value === "reply"){
         setTimeout(()=>{
           return resolve(message)
         },1000)
     }

  }); 