const jsonString = '[1, 2, 3, 4, 5]';

const jsonArray = JSON.parse(jsonString);

// Using a for loop
for (let i = 0; i < jsonArray.length; i++) {
  console.log(jsonArray[i]);
}

// Using a for...in loop (not recommended for arrays)
for (const index in jsonArray) {
  console.log(jsonArray[index]);
}

// Using a for...of loop
for (const i of jsonArray) {
  console.log(i);
}

// Using forEach (for arrays)
jsonArray.forEach(i => {
  console.log(i);
});
