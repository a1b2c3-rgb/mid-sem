let userName = prompt("Welcome to EatNow Cafe! Please enter your first name:");
if (!userName) {
    userName = "Guest";
}
alert(`Hello ${userName}, welcome to EatNow Cafe! We hope you have a great experience.`);

let menuItems = ["Grilled Chicken", "Veggie Burger", "Pasta Alfredo", "BBQ Ribs", "Caesar Salad"];
console.log("Here is our menu:");
menuItems.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

let newDish = prompt("Would you like to suggest a new dish to add to our menu?");
if (newDish !== null && newDish.trim() !== "") {
    menuItems.push(newDish.trim());
    console.log("Updated menu:");
    menuItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
} else {
    console.log("No new dish added.");
}
