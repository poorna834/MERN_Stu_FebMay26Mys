import { useEffect, useState } from "react";

// Managing API state with useEffect
export function ManagingApiState() {

    // Stores users returned from API
    const [users, setUsers] = useState([]);

    // Loading state
    const [loading, setLoading] = useState(false);

    // Error state
    const [error, setError] = useState("");

    // Fetch users from API
    async function loadUsers(signal) {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users",
                { signal }
            );

            // Handle HTTP errors
            if (!response.ok) {
                throw new Error(`Failed with status ${response.status}`);
            }

            // Convert response to JSON
            const data = await response.json();

            // Save users in state
            setUsers(data);

        } catch (error) {

            // Ignore abort errors
            if (error.name === "AbortError") {
                return;
            }

            console.error(error);

            setError(error.message || "Failed to fetch users");

        } finally {
            setLoading(false);
        }
    }

    // Run once when component mounts
    useEffect(() => {
        const controller = new AbortController();

        loadUsers(controller.signal);

        // Cleanup function
        return () => {
            controller.abort();
        };

    }, []);

    // Reload button handler
    function handleReload() {
        const controller = new AbortController();
        loadUsers(controller.signal);
    }

    return (
        <section>
            <h2>Managing API State</h2>

            <button
                onClick={handleReload}
                disabled={loading}
            >
                {loading ? "Loading..." : "Reload Users"}
            </button>

            {/* Loading UI */}
            {loading && <p>Loading users...</p>}

            {/* Error UI */}
            {!loading && error && (
                <p>Error: {error}</p>
            )}

            {/* Empty State UI */}
            {!loading && !error && users.length === 0 && (
                <p>No users found.</p>
            )}

            {/* Success UI */}
            {!loading &&
                !error &&
                users.length > 0 &&
                users.map((user) => (
                    <article
                        key={user.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            margin: "10px 0",
                            borderRadius: "8px"
                        }}
                    >
                        <h4>{user.name}</h4>

                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>

                        <p>
                            <strong>Company:</strong> {user.company?.name}
                        </p>

                        <p>
                            <strong>City:</strong> {user.address?.city}
                        </p>
                    </article>
                ))}
        </section>
    );
}