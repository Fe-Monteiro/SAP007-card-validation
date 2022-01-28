import validator from './validator.js'; 

console.log(validator);

//let cardNumber = document.getElementById("cardNumber");
const btn = document.getElementById("buttonValidate");
//const validate = document.getElementById("buttonValidate");
btn.addEventListener("click", () => {
  const inputText = document.getElementById("cardNumber");
  const inputValue = inputText.value;
  const result = validator.isValid(inputValue);
    return result;

})

// validate.addEventListener("click", function (e) {
//   e.preventDefault();
//   let cardNumberValue = cardNumber.value.replace(/\D/g,'');
//   //console.log(cardNumberValue);
//  // console.log(typeof cardNumberValue);
//  // console.log(cardNumberValue, "testes");
//   const result = validator.isValid(cardNumber);
//  // console.log(result);

//   let mascara = validator.maskify(cardNumber);
//  // console.log(mascara, "vc está funcionando?")
//});

// const btn = document.querySelector('[data-form-button]')

// btn.addEventListener("click", ()=> {
//   const input = document.querySelector('[data-form-input]')
//   const value = input.value
//   isValid.cardNumber(value);
// })