var shoppingList = ['carrots', 'milk', 'eggs'];

console.log(shoppingList[0])
console.log(shoppingList[1])
console.log(shoppingList[2])

//adding items to an array
shoppingList[shoppingList.length] = 'spinach';
console.log("length", shoppingList);
shoppingList.push('cream');
shoppingList.push('beans', 'coffee');
console.log("push", shoppingList);
shoppingList.unshift('shoes');
console.log("unshift", shoppingList);

//remove and return
shoppingList.pop();
console.log("pop", shoppingList);

shoppingList.shift();
console.log("shift", shoppingList);

