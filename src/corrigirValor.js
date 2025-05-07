// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. 
// Se não for possível, retorne `"Valor inválido"`.

const corrigirValor = (valor) => {
  if (isNaN(parseInt(valor))) {
    return "Valor inválido";
  }

  return parseInt(valor);
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };