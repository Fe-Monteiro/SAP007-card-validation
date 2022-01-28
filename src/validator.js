const  validator  =  { 
  isValid(cardNumberValue) {
    let arrayCardNumbers = cardNumberValue.split("").map(Number);
    //console.log(arrayCardNumbers, "valor do cartão em array");

    let sum = 0;

    for(let i = 0; i <arrayCardNumbers.length; i++){
      let index = arrayCardNumbers.length - i - 1;
      let valueNumber = arrayCardNumbers[index];
      if (i % 2 === 1) {
        valueNumber *=2;
        if (valueNumber > 9){
          valueNumber -= 9;
        }
        arrayCardNumbers[index] = valueNumber;
      }
     // console.log(valueNumber, "vc multiplicou?");
      sum += valueNumber;
    }
      //console.log(arrayCardNumbers);

  if (sum % 10 === 0) {
    //console.log("valido");
    return true;
  }else{
    //console.log("invalido");
    return false;
  }
},

maskify(cardNumberValue) {
  let hideNum = [];

  for(let i = 0; i < cardNumberValue.length; i++) {
    if(i < cardNumberValue.length - 4) {
      hideNum.push("#");
    }else{
      hideNum.push(cardNumberValue[i]);
    }
  }
 // console.log(hideNum, ".............");
  return hideNum.join("");
},
};

export default validator;


//     isValid: function (cardNumber){

//         if(/[^0-9-\s]+/.test(cardNumber))return alert ("Favor informar somente números."); //Esse ela disse que pode dexar
        
//         let nCheck = 0; //Var onde vou somar todos os campos para verificação
//         let skipDigit = false; //Var onde vou modificar o liga e desliga para pular as casas no cardNum
        

//         for(let nPosition = cardNumber.length - 1; nPosition >= 0; nPosition--){
//             let cDigit = cardNumber.charAt(nPosition); //Var que informa o valor na posição atual
//             let nDigit = parseInt(cDigit, 10); /*Var que garante que o número da posição atual esteja inteiro
//             na base decimal*/


//             if(skipDigit){ //Entra na função If somente se o skipDigit for igual a true
//                 if((nDigit*=2) > 9) nDigit -= 9; /*Se o skipDigit for true, ele vai pegar a posição atual
//                 que está sendo informada na var nDigit, vai multiplicar por 2 e atribuir ao nDigit esse
//                 valor multiplicado. Caso o novo valor atribuido ao nDigit seja maior do que 9, ele vai
//                 pegar o novo valor do nDigit e subtrair 9, o resultado dessa subtração, será o novo valor
//                 do nDigit*/
//             }

//             nCheck += nDigit; /*O nCheck é a var onde estamos somando o valor de todos os digitos (nDigit)
//             após a tratativa de somar digito sim e digito não que está na condição if (skipDigit). Dessa
//             forma, a cada vez que a condição For for executada, será somado no nCheck o valor do atual nDigit
//             skipDigit = !skipDigit; /*É onde troca a "chave" de true e false da variavel skipDigit. Essa "chave"
//             é o que faz ele identificar qual o número que irá entrar na condição If, ou seja, que irá
//             multiplicar ou não.*/
        

//         //Esse aqui tem que me retornar se true ou false e lá no DOM que é o index.js mostrar as frases caso TRUE ou FALSE

//           /*if (nCheck % 10 == 0){   /*Esse If é onde ele verifica se o resto da divisão do nCheck por 10
//             é igual a 0, após ter a soma de todos os digitos, já com a tratativa da multiplicação de 
//             digito sim e não que foi realizada no laço For.*/
//             /*return alert ("Cartão válido");  //Se o resto (%) for igual (==) 0 
//           } else {
//             return alert ("Cartão inválido"); //Se o resto (%) for diferente (!=) 0
//           }*/

//           if (nCheck % 10 === 0){
//             return true;
//            }else{
//             return false;
//           }


//       maskify: (value) => {
//         let digitMask = [];

//         for (let i = 0; i < value.length; i++) {
//           if (i<value.length - 4){
//             digitMask.push("#");
//           }else{
//             return digitMask.join("");
//           }
//         };
  


  
// };
  
// export default validator;