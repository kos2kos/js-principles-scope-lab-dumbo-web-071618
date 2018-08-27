// Write your solution in this file!
let customerName = 'bob';
let BestCustomer = "";
let LeastFavoriteCustomer = "";
function upperCaseCustomerName(arg){
  return arg.toUpperCase()
}

function setBestCustomer(arg) {
  BestCustomer = arg;
}

function overwriteBestCustomer(arg){
  setBestCustomer(arg);
}

function changeLeastFavoriteCustomer(arg){
  LeastFavoriteCustomer = arg;
}
