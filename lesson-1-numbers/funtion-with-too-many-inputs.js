
function calculateAndConvertNetSalary(grossSalaryRON, euroValue, casPercent, cassPercent) {

    const cas = casPercent * grossSalaryRON;
    const cass = cassPercent * grossSalaryRON;
    const taxes = cas + cass;
    const income = grossSalaryRON - taxes;
    const incomeTax = 0.1 * income;

    const netSalaryRON = income - incomeTax;

    const netSalaryEuro = netSalaryRON / euroValue;

    return netSalaryEuro;
}

console.log(calculateAndConvertNetSalary(1000, 4.80, 0.25, 0.1));
console.log(calculateAndConvertNetSalary(2500, 4.85, 0.25, 0.1));
