Algoritmo "ClassificaNota"

Var
   nota: Real

Inicio
   Escreva("Digite a nota do aluno (de 0 a 10): ")
   Leia(nota)

   escolha nota
      caso 0 ate 4
         Escreva("Nota ruim.")
      caso 5 ate 7
         Escreva("Nota regular.")
      caso 8 ate 10
         Escreva("Nota boa.")
      outrocaso
         Escreva("Nota inválida. Digite uma nota de 0 a 10.")
   Fimescolha

FimAlgoritmo