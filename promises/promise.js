// const posts = [
//   { title: "Post One", body: "This is Javascript Post" },
//   { title: "Post Two", body: "This is Programming Post" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, index) => {
//       output += `<li>${post.body}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);

//       const error = false;

//       if (!error) {
//         resolve();
//       } else {
//         reject("Error: Something went wrong");
//       }
//     }, 2000);
//   });
// }
// createPost({ title: "Post Three", body: "This is the Modern Javascript" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

const promise1 = Promise.resolve("Hello World");
const promise2 = 15;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Goodbye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
