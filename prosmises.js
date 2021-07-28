let steelSheets = [];
function myPromise() {
  const populateSteelSheets = (arrayLength) => {
    return new Promise((resolve, reject) => {
      if (arrayLength) {
        for (let i = 0; i < arrayLength; i++) {
          steelSheets = [
            ...steelSheets,
            {
              name: `${"plate number " + (i + 1)}`,
              length: `${Math.floor(Math.random() * 99) + 1}cm`,
              width: `${Math.floor(Math.random() * 99) + 1}cm`,
              thickness: `${Math.floor(Math.random() * 20) + 1}cm`,
              color: "color" + i,
            },
          ];
        }
        resolve(steelSheets);
      } else {
        reject("Invalid value");
      }
    });
  };

  const searchSteelSheets = (plateName) => {
    return new Promise((resolve, reject) => {
      const object = steelSheets.find((data) => data.name === plateName);
      if (typeof object !== "undefined") {
        resolve(object);
      } else {
        reject("Plate number does not exist!");
      }
    });
  };

  const populate = async (length) => {
    try {
      let value = await populateSteelSheets(length);
      console.log("Steel Sheets: ", value);
    } catch (error) {
      console.log(error);
    }
  };

  const search = async (data) => {
    try {
      let searchResult = await searchSteelSheets(data);
      console.log("Search result: ", searchResult);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      let res = await data.json();
      //return [res, null];
      console.log("Fetching success", res);
    } catch (error) {
      //return [null, error];
      console.log("Fetching failed", error);
    }
  };
  return {
    populateSteelSheets,
    searchSteelSheets,
    search,
    populate,
    fetchData,
  };
}

let { populate, search, fetchData } = myPromise();

populate(6);
search("plate number 5");
fetchData();
//test();
// const test = async (params) => {
//   let [response, error] = await fetchData();

//   if (error) {
//     console.log(error);
//   }

//   console.log(response, error);
// };

// myPromise()
//   .populateSteelSheets(6)
//   .then((data) => console.log("Steel sheets", data))
//   .catch((error) => console.log("Populate Error:", error));
// myPromise()
//   .searchSteelSheets("plate number 2")
//   .then((data) => console.log("Search Result:", data))
//   .catch((error) => console.log("Search Error:", error));
