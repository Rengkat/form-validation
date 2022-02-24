// import React, { useState } from "react";
// import Form from "./Form";

// const Details = () => {
//   const [user, setUser] = useState({
//     surname: "",
//     firstName: "",
//     email: "",
//     password: "",
//   });
//   const Login = (details) => {
//     setUser({
//       surname: details.surname,
//       firstName: details.firstName,
//       email: details.email,
//       password: details.password,
//     });
//   };
//   return (
//     <div className="form">
//       {user.email !== "" &&
//       user.firstName !== "" &&
//       user.surname !== "" &&
//       user.password !== "" ? (
//         <div className="welcom">
//           <h1 style={{ color: "white", fontSize: "3rem" }}>
//             Welcome, {user.surname} {user.firstName}
//           </h1>
//           <button
//             onClick={() =>
//               setUser({ surname: "", firstName: "", password: "", email: "" })
//             }
//             style={{ marginLeft: "18rem", padding: " 15px" }}>
//             Logout
//           </button>
//         </div>
//       ) : (
//         <Form Login={Login} />
//       )}
//     </div>
//   );
// };

// export default Details;
