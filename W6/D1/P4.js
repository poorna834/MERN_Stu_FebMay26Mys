//Usage Of Built-In And Third-Party Modules.

// Path IS A Built-In Module, So It Works Without Installation.
const path =  require("path");

const invoicePath = path.join("invoices","2026","invoice_001.txt")
console.log("Built-In Module Result: ",invoicePath);
