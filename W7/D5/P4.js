// Basics Of RBAC

const routePermissions = {
    "/admin":["admin"],
    "/reports":["admin","manager"],
    "/profile":["admin","manager","user"]
};

function canAccess(route,role){
    const allowRoles = routePermissions[route] || [];
    return allowRoles.includes(role);
}
console.log("User Access To /admin: ",canAccess("/admin","user"));
console.log("Admin Access To /admin: ",canAccess("/admin","admin"));
console.log("Manager Access To /reports: ",canAccess("/reports","manager"));
console.log("User Access To /profile: ",canAccess("/profile","user"));
