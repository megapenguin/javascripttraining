const sample = {
  name: "Yuko",
  age: "22",
  address: "Yokohama,Japan",
};

const info = ({ name, age, address }) => {
  console.log(name, age, address);
};

info(sample);
