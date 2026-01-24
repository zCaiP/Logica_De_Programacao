let idade, resultado;

idade = Number(prompt("Digite sua idade:"));

if (isNaN(idade)) {
    resultado = "Entrada inválida. Por favor, digite apenas números.";
} else {
    if (idade >= 18) {
        resultado = "Você é maior de idade.";
    } else {
        resultado = "Você é menor de idade.";
    }
}
    alert(resultado);