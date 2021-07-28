const users = [
  { firstName: "akshay", lastName: "saini", age: "26" },
  { firstName: "donald", lastName: "troy", age: "75" },
  { firstName: "elon", lastName: "mask", age: "50" },
  { firstName: "deepika", lastName: "padukone", age: "26" },
];
//{26 : 2, 75 : 1, 50 : 1}
const ageList = users.reduce((acc, curr) => {
  //console.log(curr.age);
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

const list = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName);

const nameList = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(nameList);
