document.querySelector("button").addEventListener("click", calculateBudget)
const incomeList = [];
const expenseList = [];

function calculateBudget(e) {
	e.preventDefault();
	let costSum = 0;
	let incomeSum = 0;
	const operators = document.querySelector("#operators");
	const description = document.querySelector("#description").value;
	const value = document.querySelector("#value").value;
	if (operators.value == "+") {
		document.querySelector(".incomeList").innerHTML += `<li class="income-list"> ${description}  ${value} </li>`
		incomeList.push(value)
	} else if (operators.value == "-") {
		document.querySelector(".expenseList").innerHTML += `<li class="expense-list"> ${description} ${value} </li>`
		expenseList.push(value)
	}
	incomeList.map((e) => {
		incomeSum += parseFloat(e)
	})
	expenseList.map((e) => {
		costSum += parseFloat(e)
	})
	document.querySelector(".totalSum").textContent = incomeSum - costSum;
}