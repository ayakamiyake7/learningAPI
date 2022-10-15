"use strict";
// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((response) => response.json())
//   .then((postDate) => console.log(postDate))
//   .catch((err) => console.error(err));

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((response) => response.json())
//   .then((postDate) => console.log(postDate.slice(0, 50)))
//   .catch((err) => console.error(err));

// async / await
// const getPostData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//   const postsData = await response.json();
//   console.log(postsData.slice(0, 100));
// };
// getPostData();

// error
// const getPostData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const postsData = await response.json();
//     console.log(postsData);
//   } catch (err) {
//     console.error(err);
//   }
// };
// getPostData();

// Fetch by Promise
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     const firstUser = users[0];
//     console.log(firstUser);
//     return fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`
//     );
//   })
//   .then((response) => response.json())
//   .then((posts) => console.log(posts))
//   .catch((err) => console.log(err));

// Fetch by Async/Await
// const myAsyncFunction = async () => {
//   try {
//     const usersResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     const users = await usersResponse.json();
//     const secondUser = users[1];
//     console.log(secondUser);
//     const postResponse = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${secondUser.id}`
//     );
//     const posts = await postResponse.json();
//     console.log(posts);
//   } catch (err) {
//     console.log("There are an error.", err);
//   }
// };
// myAsyncFunction();

// 【JS】Fetch APIを使ってJSON ServerにCRUDする
const postIkku = document.querySelector(".postIkku");
const postBtn = document.querySelector(".postBtn");
const ikkuList = document.querySelector(".ikkuList");
const url = "http://localhost:3000/ikku";

// Create
const createFetch = () => {
  const data = {
    ikku: postIkku.value,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        console.log("create error!");
        throw new Error("error");
      }
      console.log("Create OK!");
      return response.json();
    })
    .then((data) => {
      appendList(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
postBtn.addEventListener("click", createFetch, false);
