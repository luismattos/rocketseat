let num1 = Number(prompt("Insira o primeiro numero"));
let num2 = Number(prompt("Insira o segundo numero"));

alert(`
${num1} + ${num2} = ${num1 + num2} : ${(num1 + num2) % 2 == 0 ? "par" : "impar"}
${num1} - ${num2} = ${num1 - num2}
${num1} * ${num2} = ${num1 * num2}
${num1} / ${num2} = ${num1 / num2}
${num1} % ${num2} = ${num1 % num2}
${num1} == ${num2} ? ${num1 == num2}
`);
