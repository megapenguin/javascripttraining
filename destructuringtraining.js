const data = { name: "Row", age: 7, address: "Somewhere", children: [] };
let arrayOfObjects = [];

function Modular() {
  const populate = ({ name, age, address, children: [] }) => {
    for (let i = 0; i < 10; i++) {
      arrayOfObjects = [
        ...arrayOfObjects,
        {
          name: `${name + i}`,
          age: `${age + i}`,
          address: `${address + i}`,
          children: [],
        },
      ];
    }
    console.log(arrayOfObjects);
  };

  const children = (data) => {
    arrayOfObjects = data.map((value) => {
      let val = [];
      for (let i = 0; i < value.age; i++) {
        val = [
          ...val,
          {
            name: `${value.name + i}`,
            age: `${Math.floor(Math.random() * 9) + 1}`,
          },
        ];
      }
      return {
        ...value,
        children: val,
      };
    });

    console.log(arrayOfObjects);
  };

  const viewDetails = (objectIndex, childrenIndex) => {
    let details = arrayOfObjects[objectIndex];
    let view = {
      name: details.name,
      age: details.age,
      address: details.address,
      children: details.children[childrenIndex],
    };
    console.log(view);
  };

  return { populate, children, viewDetails };
}

Modular().populate(data);
Modular().children(arrayOfObjects);
Modular().viewDetails(5, 2);
