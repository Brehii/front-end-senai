class BankAccount {
    constructor(saldoInicial) {
        this.saldo = saldoInicial
    }

    depositar(valor) {
        this.saldo += valor;
        return `Novo Saldo: R$ ${this.saldo}`;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            return 'Saldo Insuficiente!';
        }
        this.saldo -= valor;
        return `Novo Saldo: R$ ${this.saldo}`;
    }
}

const minhaConta = new BankAccount (1000)
console.log(minhaConta.depositar(500));
console.log(minhaConta.sacar(300));
console.log(minhaConta.sacar(1500))