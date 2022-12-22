let getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let result = await fetch("https://jsonplaceholder.typicode.com/userssss/");
      if (result.ok) {
        let data = await result.json();
        resolve(
          data.map((item) => {
            return item.name;
          })
        );
      } else {
        return reject({
          message: "Failed to get data",
          data: [],
        });
      }
    } catch {
      reject({
        message: "Fail to fetch",
        data: [],
      });
    }
  });
};

getUsers()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
