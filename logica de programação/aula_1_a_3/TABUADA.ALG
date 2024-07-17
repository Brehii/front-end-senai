Algoritmo "Tabuada"

Var
numero, multiplicador, resultado: inteiro

Inicio
//Solicita ao usuário o número para o qual deseja a tabuada
Escreva("Digite um número para ver sua tabuada:")
Leia(numero)
//Imprime o cabeçalho da tabuada
Escreva("Tabuada do", numero, ":\n")

//ultilizar a estrutura PARA para calcular e imprimir a tabuada
para multiplicador <-1 ate 10 faca
resultado <- numero * multiplicador
Escreval(numero, "x", multiplicador, "=", resultado, " ")

FimPara

Fimalgoritmo