"use strict";
// Importing module
// import "./clean.js"; // Modules are always in strict mode
console.log("Importing module");

//////////////////////////////
// Top-Level await

// console.log("Start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("Finished");

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   //   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // Not very clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);
