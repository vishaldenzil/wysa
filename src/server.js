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
          type : 'options',
          id: "sad",
          options: [
            { value: "1", label: "1", trigger: "3" },
            { value: "2", label: "2", trigger: "3" },
            { value: "3", label: "3", trigger: "3" },
            { value: "4", label: "4", trigger: "3" },
            { value: "5", label: "5", trigger: "3" }
          ]
        },
        {
          type : 'image',
          id: "sad",
          options: [
            { value: 1, label: 'Number 1', trigger: '3' , url:"https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif" },
            { value: 2, label: ' Number 2', trigger: '3' , url :"https://images.unsplash.com/photo-1581289061167-88c834f2c223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },      
          ]
        }
      ]    
    }
  }else if(randomNumber === 1){
    json = {
      next: [
        {
          type : 'image',
          id: "sad",
          options: [
            { value: "red", label: "Red",url:"https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif" },
            { value: "white", label: "White", url:"https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif" },
            { value: "blue", label: "Blue", url:"https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif" },
          ]
        }
      ]    
    }
  }else if(randomNumber === 2){
    json = {
      next: [
        {
          type : 'image',
          id: "sad",
          options: [
            { value: "red", label: "Red", url:"https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif" },
            { value: "white", label: "White",url:"https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif" }
          ]
        }
      ]    
    }
  }


  return json

}