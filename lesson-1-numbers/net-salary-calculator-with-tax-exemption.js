function calculateNetSalaryWithTaxExemption(grossSalary, isTaxExempt) {
    const cas = 0.25 * grossSalary;
    const cass = 0.1 * grossSalary;
    const taxes = cas + cass;
    const income = grossSalary - taxes;

    let incomeTax;
    if (isTaxExempt === true) {
        incomeTax = 0;
    }

    if (isTaxExempt !== false) {
        incomeTax = 0.1 * income;
    }

    const netSalary = income - incomeTax;

    return netSalary;
}

console.log(calculateNetSalaryWithTaxExemption(10000, true));

