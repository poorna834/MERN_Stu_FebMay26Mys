// Payroll Cleanup and Net Pay Report

let payroll = [
    { name: "Ammu", basePay: 30000, bonus: 2000, taxRate: 0.1 },
    { name: "Ani", basePay: 25000, bonus: 1500, taxRate: 0.08 },
    { name: "Rani", basePay: -20000, bonus: 1000, taxRate: 0.1 }, 
    { name: "Anju", basePay: 40000, bonus: 3000, taxRate: 0.15 },
    { name: "Bhuvi", basePay: 35000, bonus: -500, taxRate: 0.12 } 
];
console.log("Payroll:",payroll);

let validRecords = payroll.filter(emp =>
    emp.basePay > 0 &&
    emp.bonus >= 0 &&
    emp.taxRate >= 0 &&
    emp.taxRate <= 1
);
console.log("Valid Records:", validRecords);

let netPayReport = validRecords.map(emp => {
    let gross = emp.basePay + emp.bonus;
    let netPay = gross - (gross * emp.taxRate);
    return {
        name: emp.name,
        netPay: netPay
    };
});
console.log("Net Pay Report:", netPayReport);


let totalNetPayout = netPayReport.reduce((total, emp) => {
    return total + emp.netPay;
}, 0);
console.log("Total Net Payout:", totalNetPayout);