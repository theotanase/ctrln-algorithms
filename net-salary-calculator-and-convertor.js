function calculateNetSalary(grossSalary) {
    const cas = 0.25 * grossSalary;
    const cass = 0.1 * grossSalary;
    const taxes = cas + cass;
    const income = grossSalary - taxes;
    const incomeTax = 0.1 * income;
    const netSalary = income - incomeTax;

    return netSalary;
}

function calculateAndConvertNetSalary(grossSalaryRON, euroValue) {

    const netSalaryRON = calculateNetSalary(grossSalaryRON);

    const netSalaryEuro = netSalaryRON / euroValue;

    return netSalaryEuro;
}

console.log(calculateAndConvertNetSalary(10000, 4.88));
