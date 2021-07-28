const users = [
  { firstName: "Row", age: "26", address: "San Roque" },
  { firstName: "Rowboat", age: "75", address: "Southcom" },
  { firstName: "Rour", age: "50", address: "Ayala" },
  { firstName: "John", age: "60", address: "San Roque" },
];
var obj;
function Training() {
  const add = (data) => {
    obj = data;
    console.log("ADD", JSON.stringify(data));
  };

  const del = (index) => {
    obj.splice(index, 1);
    console.log("DELETE", JSON.stringify(obj));
  };

  const update = (value, index) => {
    let newValue = value;
    obj.splice(index, 1, value);
    console.log("UPDATE", JSON.stringify(obj));
  };

  return { add, del, update };
}

Training().add(users);
Training().del(1);
Training().update({ name: "rex", age: 10, adddress: "Recodo" }, 1);
