const posts = [
  { title: "Post One", body: "This is Javascript Post" },
  { title: "Post Two", body: "This is Programming Post" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.body}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

getPosts();

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post Three", body: "This is New Class" }, getPosts);
