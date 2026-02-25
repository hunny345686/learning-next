"use client"

import { useState } from "react"

export default function ClientTwo() {

    const [name, setName] = useState("ClientTwo");
    return (
        <div>
            <h2>ClientTwo Components {name} </h2>
        </div>

    )
}

