// Sections + Prompt
const num = Number(prompt('Digite um número.'));
const numeroTituloSection = document.getElementById("numero-titulo");
const textoSection = document.getElementById("texto");

// numeroTituloSection Span
numeroTituloSection.innerHTML = (num)

// textoSection
textoSection.innerHTML =  (`<p>Raiz quadrada = ${num ** (1/2)}<p/>`);
textoSection.innerHTML += (`<p>${num} é inteiro: ${Number.isInteger(num)}<p/>`);
textoSection.innerHTML += (`<p>É NaN: ${Number.isNaN(parseFloat(num))}<p/>`);
textoSection.innerHTML += (`<p>Arredondado para baixo: ${Math.floor(num)}<p/>`);
textoSection.innerHTML += (`<p>Arredondado para cima: ${Math.ceil(num)}<p/>`);
textoSection.innerHTML += (`<p>Com duas casas decimais:${num.toFixed(2)}<p/>`);