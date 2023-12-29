// let sortString = (stringg) => {
//     return stringg.split("").sort().join("");
// };

// function checkanagram(str1,str2){
//   str1=sortString(str1)
//   str2=sortString(str2)
//   if(str1===str2){
//     return true
//   }else {
//     return false
//   }
// }

// let str1="spar"
// let str2="rasp"

// console.log(checkanagram(str1,str2))
// function newdetails(data, transactions) {
//   let category = data.category;
//   let price = data.price;

//   if (transactions[category] === undefined) {
//     transactions[category] = price;
//   } else {
//     transactions[category] += price;
//   }

//   console.log(transactions);
// }

// function calculateTotalSpentByCategory(transactions) {
//   let newtransactions = {};

//   // Use forEach with a callback function
//   transactions.forEach(data => {
//     let category = data.category;
//     let price = data.price;

//     if (newtransactions[category] === undefined) {
//       newtransactions[category] = price;
//     } else {
//       newtransactions[category] += price;
//     }
//   });

//   const result = [];

//   // Iterate through keys of newtransactions object
//   for (const category in newtransactions) {
//     const categoryObject = {
//       category: category,
//       totalSpent: newtransactions[category],
//     };

//     // Add the categoryObject to the result array
//     result.push(categoryObject);
//   }

//   return result;
// }

// const transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 2,
//     timestamp: 1656080400000,
//     price: 15,
//     category: 'Food',
//     itemName: 'Burger',
//   },
//   {
//     id: 3,
//     timestamp: 1656084000000,
//     price: 20,
//     category: 'Electronics',
//     itemName: 'Headphones',
//   },
// ];

// const result = calculateTotalSpentByCategory(transactions);
// console.log(result);

// function findlargest(a){
//   let z=a[0]
//   a.forEach((ele)=>{
//     if(ele>z) z=ele
//   })
//   return z
// }

// let a=[1,2,3,7,5]
// console.log(findlargest(a))

// let noofvowels=(str)=>{
//   let count=0
//   for(let i=0;i<str.length;i++){
//     if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='U'||str[i]=='O'){
//       count++;
//     }
//   }
//   return count
// }


// let str="Yashi"
// console.log(noofvowels(str))
// function checkpal(str){
//   let x=0,y=str.length-1
//   for(let i=0;i<str.length/2;i++){
//     if(str[x]!==str[y]) return false
//     x++
//     y--
//   }
//   return true
// }

// let string="MoM"
// console.log(checkpal(string))

// function isPalindrome(str) {
//   // Convert the string to lowercase to make it case-insensitive
//   const lowerCaseStr = str.toLowerCase();

//   // Remove non-alphanumeric characters from the string
//   const cleanStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');

//   // Compare the original and reversed strings
//   return cleanStr === cleanStr.split('').reverse().join('');
// }

// // Example usage:
// const palindromeString = "Nan";
// const result = isPalindrome(palindromeString);

// console.log(result); // Output: true
function calculateSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
}

const currentDate = new Date();
const beforeTime = currentDate.getTime();

calculateSum(100000000000000000);

const afterTime = new Date().getTime();
console.log(afterTime - beforeTime);



