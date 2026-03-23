// ES Module Exports

// Named Export for a shared constant
export const taxrate = 0.18;

// Named Export for a reusable function
export function  calculateTotal(subtotal){
    return subtotal + subtotal*taxrate;
}

// Default Export: for the main feature of the module.
export default function createInvoiceLabel(invoiceNumber){
    return "Invoice: "+invoiceNumber;
}

