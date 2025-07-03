// 1. Ludu khelay 1 theke 6 porjonto Generate kora?

// function randomNum(min, max) {

//     let number = Math.floor(Math.random() * (max - min + 1) ) + min
//     console.log(number)
// }
// randomNum(1, 6)

// 2 sokoler nam alphabetically sajate hobe?
// let students = ["Naim", "Sadd", "Akash","Sumit", "bonna" , "5"];

// let sorting = students.slice().sort()
// console.log(sorting)

// 3 ki vabe amra amader srenikokkher sokoler rool number krom onujayi sajau..
// let number = [3, 6, 4, 50, 10]
// let numberSorting = number.slice()

// console.log(numberSorting.sort((a, b) => {
//     return b - a
// }))
// console.log(number)

// Leap year kina problem 

// function leapYear(year) {
//     if(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0 ) {
//         console.log(`${year} is a leap year`)
//     }
//     else {
//         console.log(`${year} is not a leap year`)
//     }
// }

// leapYear(2100)

// 4. kotogula vowels ase ??
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// function countVowl(sentence) {
//     let count = 0;
//     let letters = Array.from(sentence);

//     letters.forEach((value) => {
//         if(vowels.includes(value)) {
//             count++;
//         }
//     })
//     console.log(count)
// }

// countVowl("I love you jannataaaaaaa")

// 5. kono array theke dulicate number guloke kivabe ber kora jay?
// let numbers = [1, 2, 5, 6, 5, 3, 2, 8, 1, 10];

// const duplicates = numbers.filter((value, index, array) => {
//     return array.indexOf(value) !== index
// })

// console.log(duplicates)

// 6. nicher paragraf e "sumit" sobdo ti koybar bebohar hoyese? prothombar "sumit" koto number position a ase?

// const paragraf = "LEarn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack to full stqach developer. Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developer ."

// // console.log(Array.from(sentence))

// let sentence = paragraf.match(/sumits/gi);
// sentence = sentence ? sentence : 0; 
// console.log(sentence);
// let howmany = paragraf.search(/sumits/gi);
// howmany = howmany >=0 ? howmany : "Not Found";
// console.log(howmany)

// console.log(Boolean(0))

// 7. input : linearSearch(['a', 'b', 'c' 'd', 'c'], 'c')
// Output 2 or notfound
// linearSearch function implement

// function linearSearch(arr, letter) {
//     for(i= 0; i < arr.length; i++) {
//         if(arr[i] === letter) {
//             return i
//         }
//     }
// }
// console.log(linearSearch(['a', 'b', 'c', 'c', 'd', 'd'], 'd'))

// 8. kono array theke ki vabe sob theke boro string khuje ber korben ebong tar index ber korte hobe?

// function longestString(names) {
//     let longestWord = "";
    
//     for(naim of names) {
//         if(naim.length > longestWord.length) {
//             longestWord = naim;
//         }
//     }
//     let index = names.indexOf(longestWord)
//     console.log(longestWord, index)
// }


// longestString(["naim", "sorker", "how are you", "rakib", "sakib"])

// 9. 1-100 porjonto kon songkha gulo 3,5 ebong 3,5 uvoy diyei bivajjo

// function fizzBuzz(number) {
//     if(number > 100) {
//         console.log("Error Ocuured ");
//         return;
//     }
//     if(number % 3 === 0 && number % 5 === 0) {
//         console.log(`${number} can divided by both 3 and 5`)
//     } else if(number % 3 === 0) {
//         console.log(`${number} can divided by 3 only`)
//     } else if(number % 5 === 0) {
//         console.log(`${number} can divided by 5 only`)
//     } else {
//         console.log("Not devided by 3 and 5")
//     }
// }

// fizzBuzz(150)


// 10. Array theke falsy value kivabe bad deu??

// let arr = [
//     "lws",
//     undefined,
//     "naim",
//     false,
//     5,
//     "",
//     "appel",
//     "k",
//     true,
//     NaN,
//     "THanks All"
// ]

// let trueArray = arr.filter((el) => {
//     return el
// })
// console.log(trueArray)

const data = [
  { name: "apple", type: "fruit" },
  { name: "broccoli", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "vegetable" }
]
let fruit = data.filter((fruit) => {
    return fruit.type == "fruit"
})
console.log(fruit)
// শুধু ফল (fruit) গুলো বের করো
