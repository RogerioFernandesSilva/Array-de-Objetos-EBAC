// Array de objetos com 10 alunos
const alunos = [{
  nome: "Ana",
  nota: 8.5
}, {
  nome: "Bruno",
  nota: 4.0
}, {
  nome: "Clara",
  nota: 7.0
}, {
  nome: "Daniel",
  nota: 9.0
}, {
  nome: "Eduardo",
  nota: 5.5
}, {
  nome: "Fernanda",
  nota: 6.5
}, {
  nome: "Gabriel",
  nota: 3.0
}, {
  nome: "Helena",
  nota: 8.0
}, {
  nome: "Igor",
  nota: 6.0
}, {
  nome: "Julia",
  nota: 7.5
}];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAprovados(alunos) {
  return alunos.filter(aluno => aluno.nota >= 6);
}

// Executando a função e exibindo o resultado
const aprovados = filtrarAprovados(alunos);
console.log("Alunos aprovados (nota >= 6):");
console.log(aprovados);