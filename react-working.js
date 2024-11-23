// STEP -1
// user logged in

// STEP -2
// send a request to backend for getting logged user details

// when backend responds with user's data

// STEP -3
// received user details
const userDetails = {
  firstname: "Aslam",
  lastname: "bakkar",
  age: 2024 - 1999,
  job: "web developer",
  prodcuts: [{
    name:"striped shirt",
    current_price: 1234,
    previous_price: 2345,
    discount_percentage: '21%',
  }],
};

const rootElement = document.getElementById("root");
rootElement.innerHTML = `<ul>${userDetails.friends.map((name)=> `<li>${name}</li>`)}</ul>`;

// JS Data Types
//  1. string
//  2. Boolean
//  3. Array
//  4. Object   
//  5. Number

const strExample = "1234";
// const BoolExample;
// const ArrExample;
// const objExample;
// const numExample;

