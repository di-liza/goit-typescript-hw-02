/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Оськільки функція завжди викидає вийняток і нічого не повертає, слід вказати never
function customError(): never {
  throw new Error("Error");
}

export {};
