import { useState } from "react";

const Form = () => {
  // Single state object to hold all form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmp: ""
  });

  const [users, setUsers] = useState([]);


  const validate = () => {
    const { firstname, lastname, email, password, confirmp } = formData;

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

  const createUser = (e) => {
    e.preventDefault();
    if (validate()) {
      setUsers((prevUsers) => [...prevUsers, formData]);

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmp: ""
      });
      console.log("User added successfully:", formData);
    }
  };
  



  const handleChange = (e) => {
    setFormData({
      ...formData,        
      [e.target.name]: e.target.value  
    });
  };
  

  return (
    <>
      <h2>Welcome, Please submit the Form</h2>
      <form onSubmit={createUser}>
        <div className="form">
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}     
            placeholder="First Name"
          />

          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}  
            onChange={handleChange}
            placeholder="Last Name"
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}     
            onChange={handleChange}
            placeholder="Email"
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password} 
            onChange={handleChange}
            placeholder="Password"
          />

          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmp"
            value={formData.confirmp}  
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit">Create User</button>
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
    </>
  );
};

export default Form;
