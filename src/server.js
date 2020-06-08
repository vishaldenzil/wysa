export const server = (value, message = "", extra = 1) =>
  new Promise(function(resolve, reject) {
    if (!value) {
      return reject("something went wrong");
    }

    let res = randomJson();
    setTimeout(() => {
      return resolve(res);
    }, 1000);
  });

const randomJson = () => {
  let randomNumber = Math.floor(Math.random() * 5);
  let json = {};
  if (randomNumber === 0) {
    json = {
      next: [
        {
          type: "text",
          id: "1",
          message: "Rate your mood?",
          trigger: "2"
        },
        {
          type: "text",
          id: "2",
          options: [
            { value: "1", label: "1", trigger: "3" },
            { value: "2", label: "2", trigger: "3" },
            { value: "3", label: "3", trigger: "3" },
            { value: "4", label: "4", trigger: "3" },
            { value: "5", label: "5", trigger: "3" }
          ]
        }
      ]
    };
  } else if (randomNumber === 1) {
    json = {
      next: [
        {
          type: "image",
          extension: "gif",
          id: "sad",
          options: [
            {
              value: 1,
              label: "Number 1",
              trigger: "3",
              url: "https://media.giphy.com/media/3orieNX1KVm2F03Dxu/giphy.gif"
            }
          ]
        },
        {
          type: "text",
          id: "1",
          message: "What number I am thinking?",
          trigger: "2"
        },
        {
          type: "text",
          id: "2",
          options: [
            { value: 1, label: "Number 1", trigger: "3" },
            { value: 2, label: "Number 2", trigger: "3" },
            { value: 3, label: "Number 3", trigger: "3" }
          ]
        }
      ]
    };
  } else if (randomNumber === 2) {
    json = {
      next: [
        {
          type: "image",
          extension: "png",
          id: "sad",
          options: [
            {
              value: "red",
              label: "Red",
              url:
                "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
            }
          ]
        }
      ]
    };
  } else if (randomNumber === 3) {
    json = {
      next: [
        {
          type: "image",
          extension: "png",
          id: "sad",
          options: [
            {
              value: "red",
              label: "Red",
              url: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png"
            }
          ]
        }
      ]
    };
  } else {
    json = {
      next: [
        {
          type: "text",
          id: "2",
          options: [
            { value: 1, label: "Happy", trigger: "3" },
            { value: 2, label: "Sad", trigger: "3" }
          ]
        }
      ]
    };
  }

  return json;
};
