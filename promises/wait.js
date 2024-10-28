const posts = [
  { title: "Post One", body: "This is Javascript Post" },
  { title: "Post Two", body: "This is Programming Post" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}
async function init() {
  await createPost({ title: "Post Three", body: "The Modern Javascript" });
  getPosts();
}

init();

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();
  console.log(data);
}
fetchUsers();
