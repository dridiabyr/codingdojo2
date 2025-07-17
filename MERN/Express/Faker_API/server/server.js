const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

// Function to create a random user
const createUser = () => {
  const user = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(), // Changed to phone.number
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid(), // Ensure this is correct in the latest version
  };
  return user;
};

// Function to create a random company
const createCompany = () => {
  const company = {
    _id: faker.datatype.uuid(), // Ensure this is correct in the latest version
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return company;
};

// Create routes for the API
app.get("/api/users/new", (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  res.json({ user: newUser, company: newCompany });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
