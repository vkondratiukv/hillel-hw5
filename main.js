let arrLenth = prompt("Введіть довжину масива: ");
let arr = [];
for (let i = 0; i < arrLenth; i++) {
  arr.push(prompt("Введіть елемент масиву: "));
}
document.write(arr);
document.write(arr.sort((a, b) => a - b));
arr.splice(2, 3);
document.write(arr);
