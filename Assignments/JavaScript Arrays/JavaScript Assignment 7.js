// Support Ticket Queue Processor

let tickets = [
  { id: "T101", priority: "HIGH", resolved: false },
  { id: "T102", priority: "MEDIUM", resolved: true },
  { id: "T103", priority: "LOW", resolved: false },
  { id: "T104", priority: "HIGH", resolved: true },
  { id: "T105", priority: "MEDIUM", resolved: false }
];
console.log(tickets);

tickets.unshift({ id: "T100", priority: "HIGH", resolved: false });
console.log(tickets);

tickets.push(
  { id: "T106", priority: "LOW", resolved: true }
);
console.log(tickets);

let currentTicket = tickets.shift();
console.log("Current Ticket:", currentTicket);

let droppedTicket = tickets.pop();
console.log("Dropped Ticket:", droppedTicket);

let pending = tickets.filter(ticket => ticket.resolved === false);
console.log("Pending Tickets:", pending);

let pendingIds = pending.map(ticket => ticket.id);
console.log("Pending Ticket IDs:", pendingIds);