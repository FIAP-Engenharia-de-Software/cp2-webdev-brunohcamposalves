// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática 
// (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

const calcular = (num1, num2, operador) => {
  if (typeof (num1) !== "number" || typeof (num2) !== "number") {
    return "Erro: parâmetros inválidos";
  }

  const operadorInvalido =
    operador !== "+" &&
    operador !== "-" &&
    operador !== "*" &&
    operador !== "/";

  if (operadorInvalido) {
    return "Erro: operação inválida";
  }

  if (operador === "/" && num2 === 0) {
    return "Erro: divisão por zero";
  }

  if (operador === "+") {
    return num1 + num2;
  }

  if (operador === "-") {
    return num1 - num2;
  }

  if (operador === "*") {
    return num1 * num2;
  }

  return num1 / num2;
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };