//A.
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  address: {
    street: "Kulas Light",
    suite: "Apt.556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-803 x56442",
  website: "hildergard.org",
};

const updateProfile = {
  ...data,
  name: "Muhammad Risky Fadillah",
  email: "riski.fadil95@gmail.com",
  hobby: ["Playing Game", "Bermain Bulu Tangkis", "Menonton Film"],
};

console.log(updateProfile);

function address(params) {
  const { street, city } = params;
  console.log(`Street : ${street} and City : ${city}`);
}

address(data.address);
