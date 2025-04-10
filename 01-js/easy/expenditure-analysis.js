/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
function calculateTotalSpentByCategory(transactions) {

  let categoryArray = [];
  let expensesArray = [];

  // find unique categorie
  transactions.forEach(trx => {
    let category = trx["category"];
    let price = trx["price"];

    // creating expense category if it does not exist
    if (!categoryArray.includes(category)) {
      // add unique categories to categoryArray
      categoryArray.push(category);
      console.log("categoryArray", categoryArray);

      // create a new expense object
      let newExpenseCategory = {
        category: category,
        totalSpent: price
      }

      // add the object to the categoryArray
      expensesArray.push(newExpenseCategory);
    }
    // if category exists, then we will update the totalExpense
    else {
      const indexPosition = categoryArray.indexOf(category);
      expensesArray[indexPosition]["totalSpent"] += price;
    }
  });

  // create an array that has an entry for each category
  return expensesArray;
}

module.exports = calculateTotalSpentByCategory;
