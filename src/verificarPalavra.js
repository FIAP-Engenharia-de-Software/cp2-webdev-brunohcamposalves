// ## 2. Verificador de Comprimento e Presença de Palavras **(1 ponto)**

// **Enunciado:**

// Implemente a função verificarPalavra, que receba uma frase, e uma palavra de busca e:

// - Retorna `"A frase é muito curta"` se o comprimento da frase for menor que 5;
// - Retorna `"A frase contém a palavra de busca"` se a `palavraBusca` 
// estiver contida dentro de frase (ignorando maiúsculas e minúsculas);
// - Retorna `"A frase não contém a palavra de busca"` caso contrário;
// - Remove espaços extras no início e no final da frase antes de realizar a verificação.

const verificarPalavra = (frase, palavraBusca) => {
  frase = frase.toLocaleLowerCase().trim();
  palavraBusca = palavraBusca.toLocaleLowerCase().trim();

  if (frase.length < 5) {
    return "A frase é muito curta";
  }

  if (frase.includes(palavraBusca)) {
    return "A frase contém a palavra de busca";
  }

  return "A frase não contém a palavra de busca";
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { verificarPalavra };