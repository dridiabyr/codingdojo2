import { useState } from "react";

const UserForms = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmp, setConfirmp] = useState("");

  const [users, setUsers] = useState([]);

  const validate = () => {
    if (firstname.length < 2) {
      alert("First name must be at least 2 characters.");
      return false;
    }
    if (lastname.length < 2) {
      alert("Last name must be at least 2 characters.");
      return false;
    }
    if (email.length < 8) {
      alert("Email must be at least 8 characters.");
      return false;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return false;
    }
    if (password !== confirmp) {
      alert("Passwords do not match.");
      return false;
    }
    return true;
  };

  const newUser = {
    username: firstname,
    lastname: lastname,
    email: email,
    password: password,
    confirmp: confirmp,
  };

  const createUser = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = { firstname, lastname, email };
      setUsers([...users, newUser]);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmp("");

      console.log("User added successfully:", newUser);
    }
  };

  return (
    <>
      <h2>Welcome , Please submit the Form</h2>
      <form onSubmit={createUser}>
        <div className="form">
          <label> First Name : </label>
          <input
            type="text"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            placeholder="First Name "
          />

          <label> Last Name : </label>
          <input
            type="text"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            placeholder="Last Name "
          />

          <label> Email : </label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email  "
          />

          <label> Password : </label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password  "
          />

          <label> Conform Password : </label>
          <input
            type="password"
            onChange={(e) => {
              setConfirmp(e.target.value);
            }}
            placeholder="Confirm Password  "
          />
        </div>
        <button type="submit">cretae User</button>
      </form>
      <div>
        <h2>User List</h2>
        {users.map((user, index) => (
          <div key={index}>
            <p>
              {user.firstname} {user.lastname} ({user.email})
            </p>
          </div>
        ))}
      </div>
      <h2>Users</h2>
    </>
  );
};

export default UserForms;
