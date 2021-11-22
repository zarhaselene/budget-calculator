document.querySelector(".add-btn").addEventListener("click", calculateBudget)

let incomeList = [];
let expenseList = [];

function calculateBudget(e) {
	e.preventDefault();
	let costSum = 0;
	let incomeSum = 0;
	const operators = document.querySelector("#operators");
	const description = document.querySelector("#description").value;
	const value = document.querySelector("#value").value * 1;
	// clears the input fields when "Add" is clicked
	document.querySelector("#description").value = "";
	document.querySelector("#value").value = "";

	// if the user adds an income
	if (operators.value === "+") {
		document.querySelector(".incomeList").innerHTML += `<li class="income-list"> ${description}  ${value} </li>`
		incomeList.push(value)		
		
	// if the user adds an expense
	} else if (operators.value === "-") {
		document.querySelector(".expenseList").innerHTML += `<li class="expense-list"> ${description} ${value} </li>`
		expenseList.push(value)
	}
	incomeList.map((e) => {
		incomeSum += parseFloat(e) //converts strings to a floating-point number
	})
	expenseList.map((e) => {
		costSum += parseFloat(e)
	})
	document.querySelector(".totalSum").textContent = incomeSum - costSum;
}

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clear);
// Function to reload and clear the page
function clear() {
	location.reload();
}