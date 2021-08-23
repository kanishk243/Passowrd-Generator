const lowercase1=document.getElementById("lowercase");
const uppercase1=document.getElementById("uppercase");
const numbers1=  document.getElementById("numbers");
const symbols1=  document.getElementById("symbols");
// const repeated1= document.getElementById("repeated");
const generate1= document.getElementById("generate");
const result1=   document.getElementById("result");
generate.addEventListener('click',function g()
{
  function noofcharacters()
  {
    var result=document.getElementById("number").value;
    return result;
  }
  var output= noofcharacters();

	const hasLower = lowercase1.checked;
	const hasUpper = uppercase1.checked;
	const hasNumber = numbers1.checked;
	const hasSymbol = symbols1.checked;
  // const hasrepetition=repeated1.checked;
  result1.innerHTML = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, output);
});
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}
function generatePassword(lower, upper, number, symbol, output) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}

	// create a loop
	for(let i=0; i<output; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}

	const finalPassword = generatedPassword.slice(0, output);

	return finalPassword;

}
function getRandomLower() {

	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols2 = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",","."];
return symbols2[Math.floor(Math.random() * symbols2.length)];
}
// function repitition(finalPassword)
// {
//   for(var j=0;j<output/2;j++)
//   {
//
//   }
// }
