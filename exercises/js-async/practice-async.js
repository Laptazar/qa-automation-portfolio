// Get all posts
async function fetchAllPosts() {
     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
     const posts = await response.json();
     console.log(posts.length); // Show how many posts were received
     return posts;
}

// fetchAllPosts();

// Get one post by id
async function fetchPostByIdBasic(id) {
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
     const post = await response.json();
     console.log(post); // Show the specific post retrieved
     return post;
}

// fetchPostByIdBasic(5);

// Try catch example
async function fetchPostWithTryCatch() {
     try {
          const response = await fetch("https://dominio-que-no-existe-xyz.typicode.com/posts/1");
          const responseData = await response.json();
          console.log(responseData); // Show data if the request succeeds
     }
     catch (error) {
          console.error("The request failed:", error); // Handle the error safely
     }
}
// fetchPostWithTryCatch();

// Fetch several requests using destructuring
async function fetchPostById(id) {
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
     return await response.json();
}

// Fetch two requests at the same time
async function fetchTwoPostsAtOnce() {
     const [postA, postB] = await Promise.all([
          fetchPostById(1),
          fetchPostById(2),
     ]);

     console.log(postA); // Show the first post
     console.log(postB); // Show the second post
}
// fetchTwoPostsAtOnce();

// Use map to extract titles
async function getPostTitles() {
     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
     const responseData = await response.json();
     const titles = responseData.map((post) => post.title);
     console.log(titles.slice(0, 5)); // Show the first five titles
     console.log(`Total titles: ${titles.length}`); // Show the total count
     return titles;
}

getPostTitles();