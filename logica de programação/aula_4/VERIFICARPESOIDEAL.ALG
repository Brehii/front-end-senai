algoritmo "VerificarPesoIdeal"
// Fun��o : Verificar se o peso est� na faixa ideal
var
    peso: real

inicio
    escreva("Digite seu peso em kg: ")
    leia(peso)

    se (peso >= 50) e (peso <= 100) entao
        escreva("Seu peso est� na faixa ideal.")
    senao
        escreva("Seu peso n�o est� na faixa ideal.")
    fimse
fimalgoritmo
