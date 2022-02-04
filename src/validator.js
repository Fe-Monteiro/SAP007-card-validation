const validator = {

  isValid(cardNumberValue) {

    if (/[^0-9-\s]+/.test(cardNumberValue)){
      return 1;
    }

    let nCheck = 0; //Var onde vou somar todos os campos para verificação
    let skipDigit = false; //Var onde vou modificar o liga e desliga para pular as casas no cardNum

    for (let nPosition = cardNumberValue.length - 1; nPosition >= 0; nPosition--) {
      let cDigit = cardNumberValue.charAt(nPosition); //Var que informa o valor na posição atual
      let nDigit = parseInt(cDigit, 10); /*Var que garante que o número da posição atual esteja inteiro na base decimal*/

      if (skipDigit) { //Entra na função If somente se o skipDigit for igual a true
        if ((nDigit *= 2) > 9) nDigit -= 9; /*Se o skipDigit for true, ele vai pegar a posição atual
            que está sendo informada na var nDigit, vai multiplicar por 2 e atribuir ao nDigit esse
            valor multiplicado. Caso o novo valor atribuido ao nDigit seja maior do que 9, ele vai
            pegar o novo valor do nDigit e subtrair 9, o resultado dessa subtração, será o novo valor
            do nDigit*/
        // }else if(nDigit > 9) {
        //   nDigit -= 9  /* Aqui o nDigit já está multiplicado e se for maior do que 9 Caso o novo valor atribuido ao nDigit seja maior do que 9, ele vai
        //     pegar o novo valor do nDigit e subtrair 9, o resultado dessa subtração, será o novo valor
        //     do nDigit*/
        // } else {
        // nDigit = nDigit.value;
      }
      
      nCheck += nDigit; /*O nCheck é a variavel onde estamos somando o valor de todos os digitos (nDigit)
              //  após a tratativa de somar digito sim e digito não que está na condição if (skipDigit). Dessa
              //  forma, a cada vez que a condição For for executada, será somado no nCheck o valor do atual nDigit*/



      skipDigit = !skipDigit; /*É onde troca a "chave" de true e false da variavel skipDigit. Essa "chave"
             é o que faz ele identificar qual o número que irá entrar na condição If, ou seja, que irá
             multiplicar ou não.*/

    }

      if (nCheck % 10 === 0 && cardNumberValue !== "" && nCheck !== 0) {
        return true;
      } else {
        return false;
      }
    

  },

  maskify(cardNumberValue) {
    let digitMask = [];

    for (let i = 0; i < cardNumberValue.length; i++) {
      if (i < cardNumberValue.length - 4) {
        digitMask.push("#");
      } else {
        digitMask.push(cardNumberValue[i]);
      }
    }
    return digitMask.join("");
  }

};

export default validator;