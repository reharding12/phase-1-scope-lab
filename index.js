var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }

  function setBestCustomer() {
    bestCustomer = 'not bob';
  }

  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }

  const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Sarah'; // This will generate an error as you cannot change the value of a constant.
}