"use client"

import { useState } from "react"
// import ClientTwo from "./client-comp-two";
// import SerevrOne from "./server-comp-one";

export default function ClientOne({ children }: { children: React.ReactNode }) {

    const [name, setName] = useState("ClientOne");
    return (
        <div>
            <h2>ClientOne Components {name} </h2>
            {/* <ClientTwo /> */}
            {/* <SerevrOne /> */}
            {children}
        </div>

    )
}

