// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  bestCustomer = "not bob"; // Creates a global variable
}
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}
const leastFavoriteCustomer = "some customer";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "another customer"; // This will throw an error
}
