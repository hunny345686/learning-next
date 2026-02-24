
"use client"
import { useState } from "react"

export default function DashBoard() {

    const [name, setName] = useState("")
    console.log("DashBoard Client Component")
    return (
        <div>
            <h1>DashBoard Page</h1>
            <p>The name is {name} {new Date().getMilliseconds()}</p>

            <button onClick={() => setName("Hello Word")}>SetName</button>
        </div>
    )
}