const books = require("./books.json");
const courses = require("./courses.json");
const event = require("./event.json");
const instractors = require("./instractors.json");
const users = require("./users.json");
const courseEnrolled = require("./courseEnrolled.json");
const cart = require("./cart.json");

module.exports = () => ({
  books: books,
  courses: courses,
  event: event,
  instractors: instractors,
  users: users,
  courseEnrolled: courseEnrolled,
  cart: cart
});
