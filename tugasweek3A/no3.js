// function searchName(huruf, limit, callback) {
//   const name = [
//     "Abigail",
//     "Alexandra",
//     "Alison",
//     "Amanda",
//     "Angela",
//     "Bella",
//     "Carol",
//     "Caroline",
//     "Carolyn",
//     "Deirdre",
//     "Diana",
//     "Elizabeth",
//     "Ella",
//     "Faith",
//     "Olivia",
//     "Penelope",
//   ];
//   const dataFiltered = name;
//   for (let i = 0; i < dataFiltered.length; i++) {
//     if (dataFiltered[i].toLowerCase().includes(huruf.toLowerCase())) {
//       let dataSection = dataFiltered[i].split(" ");
//       let sort = dataSection.sort();
//       console.log(sort);
//     }
//   }
//   return callback(searchName);
// }
// const callback = (text) => {
//   return text;
// };
// searchName("AN", 3, callback);

function searchName(huruf, limit, callback) {
  const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];
  const index = name.map((item) => {
    return item.toLocaleLowerCase();
  });
  const search = index.filter((check) => check.includes(huruf));
  const slice = search.slice(0, limit);
  const sortingData = slice.sort();
  return callback(sortingData);
}

const callback = (text) => {
  console.log(text);
};

searchName("an", 2, callback);
