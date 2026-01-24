let nome, wellcomeMessage;
nome = prompt("Digite seu nome:");

if (nome && nome.trim() !== "") {
    wellcomeMessage = "Olá, " + nome + "! Bem-vindo ao meu site.";
    document.writeln(wellcomeMessage);
} else {
    wellcomeMessage = "Olá, Visitante! Bem-vindo ao meu site.";
    document.writeln(wellcomeMessage);
}