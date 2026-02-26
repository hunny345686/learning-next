


type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
}

export default async function UersServer() {

    await new Promise((res) => setTimeout(() => res("1 sec dealay"), 2000))

    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const user: User[] = await res.json()


    // if (loading) return <h2>Loding...</h2>
    // if (error) return <h2>{error}</h2>

    return (
        <div>
            <h2>Fetch Data on Serever side</h2>
            <ul>
                {user.map((itme) => (
                    <li key={itme.id}>
                        <div style={{ border: "2px solid red" }}>
                            <p>{itme.name}</p>
                            <p>{itme.email}</p>
                            <p>{itme.username}</p>
                            <p>{itme.phone}</p>

                        </div>
                    </li>

                ))}
            </ul>

        </div>
    )
}