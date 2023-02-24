import { useState, useEffect } from "react";
import axios from "axios";
// import { Button } from "bootstrap";
// import { Button } from "./components/Button";
import Button from "./components/Button";
import "./App.css";
import styled from "styled-components";

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchUserData = () => {
    axios
      .get(`http://localhost:8000/api/users`)
      .then(({ data }) => setUsers(data.users))
      .catch((err) => console.log(err));

    // fetch(`http://localhost:8000/api/users`, {
    //   method: "GET",
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setUsers(data.users);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const fetchPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(({ data }) => setPosts(data))
      .catch((err) => console.log(err));
  };

  const testFunction = () => {
    alert("This is just a test");
  };

  // const fetchPosts = () => {

  //   fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPosts(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="container">
      {/* <pre>{JSON.stringify(users, null, 4)}</pre> */}

      {users &&
        users.map((user) => (
          <div className="alert alert-primary" key={user.age}>
            {user.name} age is {users.age}{" "}
          </div>
        ))}

      <Button handleClick={fetchUserData} title="Fetch user data " />
      <Button handleClick={testFunction} title="Testing" />

      {posts &&
        posts.map((posts) => (
          <PostList
            // style={{
            //   backgroundColor: "indigo",
            //   color: "#fff",
            //   border: "1px solid #999",
            //   padding: "20px",
            // }}
            key={posts.id}
          >
            {posts.title}
          </PostList>
        ))}
    </div>
  );
};

export default App;

const PostList = styled.div`
  background-color: indigo;
  border: 1px solid #999;
  color: #fff;
  padding: 20px;
`;

// import { useState } from "react";

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("State => ", email, password);
//   };

//   return (
//     <div className="container">
//       <h1 className="display-4">Learn React</h1>
//       <br />
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             type="email"
//             className="form-control"
//           />
//           <div className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             type="password"
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3 form-check">
//           <input type="checkbox" className="form-check-input" />
//           <label className="form-check-label">Check me out</label>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;
