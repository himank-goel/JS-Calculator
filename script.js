const keys = Array.from(document.querySelectorAll('#calculator span'));
var displayValue = document.querySelector('.screen');
const operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;
var inputEquation;
var inKey;

keys.forEach(key => key.addEventListener('click', function(e) {

		inputEquation = displayValue.innerHTML;
		inKey = this.innerHTML;

		if(inKey == 'C') {
			displayValue.innerHTML = '';
			decimalAdded = false;
		}
		
		else if(inKey == '=') {
			var equation = inputEquation;
			var lastChar = equation[equation.length - 1];
			
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				displayValue.innerHTML = eval(equation);

			decimalAdded = false;
		}

		else if(operators.indexOf(inKey) > -1) {

			var lastChar = inputEquation[inputEquation.length - 1];
			
			if(inputEquation != '' && operators.indexOf(lastChar) == -1) 
				displayValue.innerHTML += inKey;
			
			else if(inputEquation == '' && inKey == '-') 
				displayValue.innerHTML += inKey;
			
			if(operators.indexOf(lastChar) > -1 && inputEquation.length > 1) {
				displayValue.innerHTML = inputEquation.replace(/.$/, inKey);
			}
			
			decimalAdded =false;
		}
		
		else if(inKey == '.') {
			if(!decimalAdded) {
				displayValue.innerHTML += inKey;
				decimalAdded = true;
			}
		}
		
		else {
			displayValue.innerHTML += inKey;
		}
		
		e.preventDefault();
	} 
));