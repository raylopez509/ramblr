import React from 'react'

////For use with TipTap

// function clickPost() {
// // function clickPost(editor) {
//   const headers = new Headers();
//   headers.append("Content-Type", "application/json");

//   // const content = editor.getJSON()
//   const body = JSON.stringify({
//     "title": "test clickPost",
//     "content": content,
//     "tags": [
//       "blog",
//       "test"
//     ],
//     "date_created": "2026-01-19",
//     "owner": "ray"
//   })

//   const requestOptions = {
//     method: "POST",
//     headers: headers,
//     body: body,
//     // redirect: "follow"
//   };

//   fetch("http://localhost:3000/create", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

//   // const text = editor.getJSON();
//   // console.log(text);
// }

// export default function PostButton({ editor }) {
//   return (
//     <button onClick={
//       () => clickPost(editor)
//     }>PostButton</button>
//   )
// }

function clickPost(title, content) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  console.log(title);
  console.log(content);

  const body = JSON.stringify({
    "title": title,
    "content": content,
    "tags": [
      "blog",
      "test"
    ],
    "date_created": "CURRENT_TIMESTAMP",
    "owner": "ray"
  })

  console.log(body);

  const requestOptions = {
    method: "POST",
    headers: headers,
    body: body,
  };

  fetch("http://localhost:3000/create", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

export default function PostButton({ title, content }) {
  return (
    <button onClick={
      () => clickPost(title, content)
    }>PostButton</button>
  )
}