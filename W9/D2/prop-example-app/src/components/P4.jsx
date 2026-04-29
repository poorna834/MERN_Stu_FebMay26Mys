import React from "react";

// Props Drilling

function DrillLayout({ user }) {
    return (
        <div className="layout">
            <DrillSidebar user={user} />
        </div>
    );
}

function DrillSidebar({ user }) {
    return (
        <aside className="sidebar">
            <DrillUserPanel user={user} />
        </aside>
    );
}

function DrillUserPanel({ user }) {
    return (
        <section className="user-panel">
            <ProfileAvatar user={user} />
        </section>
    );
}

function ProfileAvatar({ user }) {
    return <img src={`/${user.name}.png`} alt={user.name} />;
}

export function PropDrillingDemo() {
    const user = { name: "Poorna" };

    return (
        <div>
            <h3>Problem: Prop Drilling</h3>
            <DrillLayout user={user} />
        </div>
    );
}