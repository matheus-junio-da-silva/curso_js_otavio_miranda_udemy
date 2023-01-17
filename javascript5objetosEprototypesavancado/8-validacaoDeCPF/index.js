// 705.484.450-52
const cpf = '70548445052';

function ValidaCpf(cpf) {
   this.cpf = cpf;
   this.inicia = function() {
      if (this.cpf.length !== 11) return 'digite os 11 digitos corretamente';

      const sequenciaNumeros = [
         {num:'00000000000'},
         {num:'11111111111'},
         {num:'22222222222'},
         {num:'33333333333'},
         {num:'44444444444'},
         {num:'55555555555'},
         {num:'66666666666'},
         {num:'77777777777'},
         {num:'88888888888'},
         {num:'99999999999'},
      ]
      for (let index = 0; index < 10; index++) {
         const element = sequenciaNumeros[index].num;
         if (this.cpf === element) return 'cpf invalido';
      } // corrigir o fato que sequencias sao validadas
      
      let arr = [];
      let arr2digi = [];

      const doisDigitos = (this.cpf.slice(9));
      for ( let i of doisDigitos) {
         arr2digi.push(Number(i));  
      } // retirar dois ultimos digitos

      const noveDigitos = (this.cpf.slice(0, -2));
      for ( let i of noveDigitos) {
         arr.push(Number(i));  
      } // retirar os nove primeiros digitos

      let deposito = []
      for (let i = 10; i >= 2 ; i--) {
      deposito.push(arr[(i - 10) * -1] * i); // i para positivo 
      } // realizar a multiplicao ex: arr[num] * 10, arr[num] * 9...
   
      let soma = 0;
      for (let i of deposito) {
         soma += i ;
      } // somar digitos do deposito

      let primeiroDigito  = 11 - (soma % 11);
      if(primeiroDigito > 9) {
         primeiroDigito = 0;
      }

      let arrComDez = [...arr, primeiroDigito];
      let depositoNovo = []
      for (let i = 11; i >= 2 ; i--) {
      depositoNovo.push(arrComDez[(i - 11) * -1] * i);  
      } // agora com 10
   
      let somaNovo = 0;
      for (let i of depositoNovo) {
         somaNovo += i ;
      } 

      let segundoDigito  = 11 - (somaNovo % 11);
      if(segundoDigito > 9) {
         segundoDigito = 0;
      }

      let cpfValidado = [...noveDigitos, String(primeiroDigito), (segundoDigito).toString()];
      let cpfString;
      for (let i of cpfValidado) {
         cpfString += i;
      }
      cpfString = cpfString.slice(9); // retirar o undefined

      

      if (cpfString === this.cpf) {
         return 'cpf valido';
      }else {
         return 'cpf invalido';
      }
   }
}

const valida1 = new ValidaCpf(cpf);
console.log(valida1.inicia());

