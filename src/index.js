
// class Pessoa {
//     constructor(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     }
// };

// const novaPessoa = new Pessoa('Fabiano','Fregnani');

// console.log(novaPessoa)


const nomes = ['Fabiano','Fernanda','Ada','Pedro']

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

for(pessoas of nomes){
    console.log(pessoas)
}