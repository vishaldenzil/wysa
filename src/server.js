export const server = (value, message = "", extra = 1) =>
  new Promise(function(resolve, reject) {
   
    if (!value) {
      return reject("something went wrong");
    }
   
    let res = randomJson()
      setTimeout(() => {
        return resolve(res);
      }, 1000);

    });




const randomJson = () => {
  let randomNumber = Math.floor(Math.random() * 3) ;
  let json = {}
  if (randomNumber === 0){
    json = {
      next: [
        {
          id: "sad",
          options: [
            { value: "1", label: "1", trigger: "3" },
            { value: "2", label: "2", trigger: "3" },
            { value: "3", label: "3", trigger: "3" },
            { value: "4", label: "4", trigger: "3" },
            { value: "5", label: "5", trigger: "3" }
          ]
        }
      ]    
    }
  }else if(randomNumber === 1){
    json = {
      next: [
        {
          id: "sad",
          options: [
            { value: "red", label: "Red", trigger: "3" },
            { value: "white", label: "White", trigger: "3" },
            { value: "blue", label: "Blue", trigger: "3" },
            { value: "green", label: "Green", trigger: "3" },
            { value: "yellow", label: "Yellow", trigger: "3" }
          ]
        }
      ]    
    }
  }else if(randomNumber === 2){
    json = {
      next: [
        {
          id: "sad",
          options: [
            { value: "red", label: "Red", trigger: "3" },
            { value: "white", label: "White", trigger: "3" }
          ]
        }
      ]    
    }
  }


  return json

}