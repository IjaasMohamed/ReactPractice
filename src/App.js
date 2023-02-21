import { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchUserDate = () => {
    fetch(`http://localhost:8000/api/users`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      {/* <pre>{JSON.stringify(users, null, 4)}</pre> */}

      {users &&
        users.map((user) => (
          <div className="alert alert-primary" key={user.age}>
            {user.name} age is {users.age}{" "}
          </div>
        ))}

      <button onClick={fetchUserDate} className="btn btn-primary">
        Fetch User Data
      </button>

      {posts && posts.map((posts) => <div key={posts.id}>{posts.title}</div>)}
    </div>
  );
};

export default App;

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
