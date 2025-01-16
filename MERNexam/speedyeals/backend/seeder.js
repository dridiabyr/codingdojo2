const Meal = require("./models/meals.models");

const seedMeals = async () => {
  try {
   
    const meals = [
      {
        name: "Spaghetti Carbonara",
        prepTime: 30,
        cookTime: 15,           
        directions: "Boil pasta, cook bacon, mix with egg and cheese." 
      },
      {
        name: "Chicken Alfredo",
        prepTime: 45,
        cookTime: 20,          
        directions: "Cook chicken, prepare alfredo sauce, mix with pasta." 
      },
      {
        name: "Vegetable Stir Fry",
        prepTime: 20,
        cookTime: 15,          
        directions: "Stir fry vegetables in a wok with soy sauce." 
      },
      {
        name: "Beef Tacos",
        prepTime: 25,
        cookTime: 10,           
        directions: "Cook beef, assemble tacos with toppings." 
      },
      {
        name: "Grilled Salmon",
        prepTime: 35,
        cookTime: 20,           
        directions: "Grill salmon with seasoning until cooked." 
      },
      {
        name: "Chicken Caesar Salad",
        prepTime: 15,
        cookTime: 10,           
        directions: "Grill chicken, toss with lettuce, croutons, and dressing." 
      },
      {
        name: "Lasagna",
        prepTime: 60,
        cookTime: 40,           
        directions: "Layer pasta, cheese, sauce, and meat, then bake." 
      },
      {
        name: "Pad Thai",
        prepTime: 40,
        cookTime: 15,           
        directions: "Stir fry noodles with shrimp, vegetables, and sauce." 
      }
    ];

    // Insert meals into MongoDB
    const result = await Meal.insertMany(meals);
    console.log(`${result.length} meals inserted successfully`);
  } catch (error) {
    console.error('Error inserting meals:', error);
  }
};

module.exports = seedMeals;
