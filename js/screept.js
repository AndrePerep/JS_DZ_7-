//________________________________________Домашнее задание JS 5-6______________________________________________



/*______________________________________________ЗАДАЧА 1_______________________________________________________
    Написать функцию, которая считает количество слов в предложении.*/

// function getCounterWords(str) { 
//     return string.split(' ').length
// }
// console.log(getCounterWords('Я учу JS'))



/*______________________________________________ЗАДАЧА 2_______________________________________________________
    Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки больше, чем максимальная, то необходимо отбросить лишние символы, добавив вместо них троеточие.
Например: truncate(“Hello, world!”, 8) должна вернуть “Hello...”.*/

// function clampString (str, number){
//     if(str.length <= number){
//         return str
//     }
//     str = str.slice(0, number - 3)
//     str += "..."
//     return str
// }
// console.log(clampString('Hello, world!', 8))




/*______________________________________________ЗАДАЧА 3_______________________________________________________
Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Пример:
    let arr = [1, 2, 3, 4, 5];
    func(arr, 1); // 2
    func(arr, 4); // 5
    func(arr, 5); // 1*/

// let arr = [1, 2, 3, 4, 5]
// function func(arr, number) { 
//     if(number < arr.length){
//         return arr[number]
//     } else{
//         return arr[0]
//     }
// }
// console.log(func(arr, 1))



/*______________________________________________ЗАДАЧА 4_______________________________________________________
Дан массив чисел arrayNumbers. Необходимо создать переменную isEven, которая будет true или false в зависимости от того, являются ли все числа массива четными
const arrayNumbers = [2, 4, 10, 6, 8, 14, 24, 50];
console.log(isEven); // => true*/

// const arrayNumbers = [2, 4, 10, 6, 8, 14, 24, 50]
// const isEven = function.isEven () {

// }
// console.log(isEven)



/*______________________________________________ЗАДАЧА 5_______________________________________________________
Напишите функцию, которая принимает строку и возвращает строку, в которой каждый символ (с учетом регистра) повторяется.
Примеры (ввод -> вывод):
"String" -> "SSttrriinngg"
"Hello World" -> "HHeelllloo WWoorrlldd"
"1234!_" -> "11223344!!__"
Используйте методы строк и методы массивов */

const str = 'Hello, world!'
let arr = str.split('')
let newArr = arr
console.log(str)
console.log(arr)
console.log(newArr)
for (let i = 0; i < arr.length*2; i+=2) {
    newArr[i] = arr[i]
    newArr[i+1] = arr[i]
}
console.log(newArr)

// function doubleСhar (str) {
//     let arr = str.split()
//     let newArr = arr
//     for (let i = arr.length; i > 0; i--) {
//         newArr.push(arr[i]) 
//     }
// }
// console.log(doubleСhar())