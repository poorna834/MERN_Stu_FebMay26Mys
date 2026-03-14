// Permission Rules Engine Summary

let rules = [
  { role: "admin", action: "READ", allowed: true },
  { role: "admin", action: "WRITE", allowed: true },
  { role: "student", action: "READ", allowed: true },
  { role: "student", action: "WRITE", allowed: false },
  { role: "guest", action: "READ", allowed: false }
];
console.log(rules);

let allowedRules = rules.filter(rule => rule.allowed === true);
console.log("Allowed Rules:", allowedRules);

let allowedPairs = allowedRules.map(rule => rule.role + ":" + rule.action);
console.log("Allowed Pairs:", allowedPairs);

let summary = rules.reduce((acc, rule) => {
  if (rule.allowed) {
    acc[rule.role] = (acc[rule.role] || 0) + 1;
  }
  return acc;
}, { admin: 0, student: 0, guest: 0 });
console.log("Summary:", summary);