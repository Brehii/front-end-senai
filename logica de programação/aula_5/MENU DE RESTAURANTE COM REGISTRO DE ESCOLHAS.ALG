algoritmo "Menu de Restaurante com Registro de Escolhas"
var
opcao, opcaoSubMenu: inteiro
escolhaPrato, escolhaBebida, escolhaSobremesa, escolhaadicional: caractere

inicio
escolhaPrato <- "-"
escolhaBebida <- "-"
escolhaSobremesa <- "-"

repita
escreval("----- Menu de Restaurante -----")
escreval("1 - Pratos")
escreval("2 - Bebidas")
escreval("3 - Sobremesas")
escreval("4 - adicional")
escreval("5 - Sair")
escreval("Escolha uma opção: ")
leia(opcao)

escolha opcao
caso 1
escreval("----- Pratos -----")
escreval("1 - estrogonofe")
escreval("2 - peito de frango grelhado")
escreval("3 - vaca tolada")
escreval("4 - nenhuma das opçoes acima")
escreval("5 - Voltar ao menu principal")
escreval("Escolha uma opção: ")
leia(opcaoSubMenu)
escolha opcaoSubMenu
caso 1
escolhaPrato <- "1 - estrogonofe"
escreval("1 - estrogonofe")
caso 2
escolhaPrato <- "2 - peito de frango grelhado"
escreval("2 - peito de frango grelhado")
caso 3
escolhaPrato <- "3 - vaca tolada."
escreval("3 - vaca tolada.")
caso 4
escolhaPrato <- "Prato 4"
escreval("nenhuma das opçoes acima.")
caso 5
// Não faz nada, apenas volta ao menu principal
outrocaso
escreval("Opção inválida!")
fimescolha

caso 2
escreval("----- Bebidas -----")
escreval("1 - coca cola")
escreval("2 - pepsi")
escreval("3 - guarana")
escreval("4 - kuat")
escreval("Escolha uma opção: ")
leia(opcaoSubMenu)
escolha opcaoSubMenu
caso 1
escolhaBebida <- "1 - coca cola."
escreval("1 - coca cola.")
caso 2
escolhaBebida <- "2 - pepsi."
escreval("2 - pepsi.")
caso 3
escolhaBebida <- "3 - guarana"
escreval("3 - guarana.")
caso 4
escolhaBebida <- "4 - kuat."
escreval("4 - kuat.")
caso 5
// Não faz nada, apenas volta ao menu principal
outrocaso
escreval("Opção inválida!")
fimescolha

caso 3
escreval("----- Sobremesas -----")
escreval("1 - pudim")
escreval("2 - bolo")
escreval("3 - sorvete")
escreval("4 - Voltar ao menu principal")
escreval("Escolha uma opção: ")
leia(opcaoSubMenu)
escolha opcaoSubMenu
caso 1
escolhaSobremesa <- "1 - pudim"
escreval("1 - pudim.")
caso 2
escolhaSobremesa <- "2 - bolo"
escreval("2 - bolo.")
caso 3
escolhaSobremesa <- "3 - sorvete"
escreval("3 - sorvete")
caso 4
// Não faz nada, apenas volta ao menu principal
outrocaso
escreval("Opção inválida!")
fimescolha

                  
caso 4
escreval("----- adicional -----")
escreval("1 - batata frita")
escreval("2 - pure de batata")
escreval("3 - vinagrete")
escreval("4 - salada")
escreval("5 - Voltar ao menu principal")
escreval("Escolha uma opção: ")
leia(opcaoSubMenu)
escolha opcaoSubMenu
caso 1
escolhaadicional <- "1 - batata frita"
escreval("1 - batata frita")
caso 2
escolhaadiciona <- "2 - pure de batata"
escreval("2 - pure de batata")
caso 3
escolhaadicional <- "3 - vinagrete"
escreval("3 - vinagrete")
caso 4
escolhaadiciona <- "4 - salada"
escreval("4 - salada")
caso 5
// Não faz nada, apenas volta ao menu principal
outrocaso
escreval("Opção inválida!")
fimescolha

caso 5
escreval("Encerrando o programa...")
outrocaso
escreval("Opção inválida! Escolha uma opção válida.")
fimescolha

escreval("")
ate opcao = 5

// Exibindo as escolhas feitas pelo usuário
escreval("Resumo das suas escolhas:")
escreval("Prato: ", escolhaPrato)
escreval("Bebida: ", escolhaBebida)
escreval("Sobremesa: ", escolhaSobremesa)
escreval("Adicional: ", escolhaadicional)

fimalgoritmo