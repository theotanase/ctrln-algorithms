function calculateAndConvertNetSalary(grossSalaryRON, euroValue) {
   // calculare
    const cas = 0.25 * grossSalaryRON;
    const cass = 0.1 * grossSalaryRON;
    const taxes = cas + cass;
    const income = grossSalaryRON - taxes;
    const incomeTax = 0.1 * income;
    const netSalaryRON = income - incomeTax;

    // transformare in valuta

    const netSalaryEuro = netSalaryRON / euroValue;

    // afisare a rezultatului
    console.log(netSalaryEuro);
}

calculateAndConvertNetSalary(10000, 4.88);

