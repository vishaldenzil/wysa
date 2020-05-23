

export const promise = (value, message = "", extra = 1) => new Promise(function(resolve, reject) { 
     console.log(value, message)
     if(!value){
      return reject("something went wrong")
     }
     if(value === "get"){
      return resolve("vishal"); 
     }else if(value === "reply"){
         let res = {
          value : message,
          next : {
              id: 'areyou',
              message: 'Why are you here?',
              trigger: 'search',
            }
          }
        if (extra === 2){
          res.next = {
            id: 'gender',
            options: [
              { value: 'male', label: 'Male', trigger: '3' },
              { value: 'female', label: 'Female', trigger: '3' },
            ],
          }
        }
        if(extra === 3){
          res.next =
          {
            id: 'age',
            user: true,
            trigger: '3',
            placeholder :"Enter a number",
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value < 0) {
                return 'value must be positive';
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          }
        }
         setTimeout(()=>{
           return resolve(res)
         },1000)
     }

  }); 