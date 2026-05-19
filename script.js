// ----------------- Vetor de Objetos -----------------

const nomes = [
    {nome: "Guilherme", idade: 16, disciplinaPreferida: "LOPAL"},
    {nome: "Wesley", idade: 17, disciplinaPreferida: "LOPAL"},
    {nome: "PedroFiletti", idade: 17, disciplinaPreferida: "SOP"},
    {nome: "Caua", idade: 16, disciplinaPreferida: "LER"},
    {nome: "Vitor", idade: 16, disciplinaPreferida: "ARI"}];

// forEach()
console.log("Idades:");
nomes.forEach(nome => {console.log(nome.idade);});


// map()
const nomesNome = nomes.map(nome => nome.nome);
const nomesIdade = nomes.map(nome => nome.idade);
const nomesDisciplinaFavorita = nomes.map(nome => nome.disciplinaPreferida);
console.log("\nNomes:");
console.log(nomesNome);
console.log("Idades:");
console.log(nomesIdade);
console.log("Disciplinas Preferidas:");
console.log(nomesDisciplinaFavorita);


// filter()

const maisNovoNomes = nomes.filter(nome => nome.idade === 16);
const maisVelhoNomes = nomes.filter(nome => nome.idade === 17);
const LopaldisciplinaPreferidaNomes = nomes.filter(nome => 
    nome.disciplinaPreferida === "LOPAL");
const SopdisciplinaPreferidaNomes = nomes.filter(nome => 
    nome.disciplinaPreferida === "SOP");
const LERdisciplinaPreferidaNomes = nomes.filter(nome => 
    nome.disciplinaPreferida === "LER");
const ARIdisciplinaPreferidaNomes = nomes.filter(nome => 
    nome.disciplinaPreferida === "ARI");

console.log("\nAlunos com 16 anos:");
console.log(maisNovoNomes);
console.log("Alunos com 17 anos:");
console.log(maisVelhoNomes);

// reduce()

const maxNome = nomes.reduce((max, nome) =>
    nome.idade > max.idade ? nome : max);
const minNome = nomes.reduce((min, nome) =>
    nome.idade < min.idade ? nome : min);

console.log("\nAluno mais velho:");
console.log(maxNome);
console.log("Aluno mais novo:");
console.log(minNome);

// splice() -> Executado por último para não interferir nos outros métodos

nomes.splice(1, 2);

console.log("\nResultado do splice (removendo 2 elementos a partir do índice 1):");
console.log(nomes);