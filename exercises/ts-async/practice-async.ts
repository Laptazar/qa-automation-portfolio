// Define la estructura de un post.
interface Post {
     userid: number;
     id: number;
     title: string;
     body: string;
}

// Promise<Post[]>: devuelve una lista de posts cuando termine la petición.
async function fetchAllPosts_(): Promise<Post[]> {
     const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
     return await respuesta.json();
}

// Promise<Post>: devuelve un solo post según su id.
async function fetchPostById_(id: number): Promise<Post> {
     const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
     return await respuesta.json();
}

async function fetchPostWithTryCatch_(){
     try{
          const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
          const responseData = await response.json();
          console.log(responseData);
     }
     catch(error){
          console.error("Failed request:", error);
     }
     
}

// async function fetchTwoPostsAtOnce(){

// }