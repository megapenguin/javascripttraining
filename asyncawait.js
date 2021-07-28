const fs = require("fs");

setTimeout(() => {
  console.log("Waited 1 secs");
}, 1000);
// const myPromise = new Promise((resolve, reject) => {
//   const randt = Math.floor(Math.random() * 2);
//   if (randt === 0) {
//     resolve();
//     console.log("resolved");
//   } else {
//     reject();
//     console.log("reject");
//   }
// });

// myPromise
//   .then(() => console.log("Success"))
//   .catch((err) => console.error("Something went wrong!", err));

// const sampleAwait = async () => {
//   try {
//     const res = await fetch();
//   } catch (error) {
//     console.error(error);
//   }
// };

const loadFIle = async () => {
  try {
    const data = await fs.promises.readFile("./test.txt", {
      encoding: "utf-8",
    });
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
};
loadFIle();
