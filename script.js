/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "Fábio",
    test1: 7,
    test2: 8
  },
  
  {
    name: "Júlia",
    test1: 4,
    test2: 6
  },
  {
    name: "Benjamin",
    test1: 5,
    test2: 3
  },
  {
    name: "Aurora",
    test1: 5,
    test2: 10
  },

]

function calculateAverage(test1, test2) {
  const result = ((test1 + test2) / 2).toFixed(1)
  return result
}

for(let student of students) {
  const average = calculateAverage(student.test1, student.test2)

  if(average >= 7) {
    alert(`Parabéns ${student.name}! sua média foi de ${average} e você passou.`)
  } else {
    alert(`${student.name}, sua média foi de ${average}. Infelizmente você não passou.`) 
  }  
}





