import validator from './validator.js'; 

console.log(validator);

const inputText = document.querySelector("[data-form-input]");

 const checkCardNumber = () => {
   let inputValue = inputText.value;
   console.log(inputValue);
   console.log(validator.isValid(inputValue));

   if(validator.isValid(inputValue)){
     alert("Cartão válido");
   }else{
     alert("Cartão inválido");
   }

 }
 const cardNumberValue = document.querySelector("[data-form-button]");
   cardNumberValue.addEventListener("click", checkCardNumber);

 function maskCardNumber () {

 }
   inputText.addEventListener("keypress", maskCardNumber)
  //const validate = document.getElementById("buttonValidate");

  //let cardNumber = document.getElementById("cardNumber");
  //const result = validator.isValid(inputValue);
    //return result;
    //alert("Você está conseguindo ler o botão?")


// validate.addEventListener("click", function (e) {
//   e.preventDefault();
//   let cardNumberValue = cardNumber.value.replace(/\D/g,'');
//   //console.log(cardNumberValue);
//  // console.log(typeof cardNumberValue);
//  // console.log(cardNumberValue, "testes");
//   const result = validator.isValid(cardNumber);
//  // console.log(result);

//let mascara = 
//validator.maskify();

//validator.isValid();
//  // console.log(mascara, "vc está funcionando?")
//});

// const btn = document.querySelector('[data-form-button]')

// btn.addEventListener("click", ()=> {
//   const input = document.querySelector('[data-form-input]')
//   const value = input.value
//   isValid.cardNumber(value);
// })