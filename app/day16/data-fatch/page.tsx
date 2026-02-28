"use client"

import { useEffect, useState } from "react"


type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
}

export default function UersClient() {

    const [user, setUser] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function getUsers() {

            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!res.ok) {
                    throw new Error("Faild to get Users")
                }
                const data = await res.json()
                setUser(data)
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message)
                } else {
                    setError("unknow Error")

                }
            } finally {
                setLoading(false)
            }

        }
        getUsers()
    }, [])

    if (loading) return <h2>Loding...</h2>
    if (error) return <h2>{error}</h2>

    return (
        <div>
            <h2>Fetch Data on Client side</h2>
            <ul>
                {user.map((itme) => (
                    <>
                        <li key={itme.id}>
                            <div style={{ border: "2px solid red" }}>
                                <p>{itme.name}</p>
                                <p>{itme.email}</p>
                                <p>{itme.username}</p>
                                <p>{itme.phone}</p>

                            </div>
                        </li>

                    </>
                ))}
            </ul>

        </div>
    )
}