// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

const classificarNota = (nota) => {
  if ((nota < 0 || nota > 10) || typeof(nota) !== "number") {
    return "Nota inválida";
  }

  if (nota < 6) {
    return "Reprovado";
  }

  return "Aprovado";
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };