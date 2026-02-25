"use client"
import { clientSideFunc } from "@/app/day14/_utils/client-util"

export default function ClientComp() {
    const clientFunRes = clientSideFunc()
    return (
        <div>
            <h2>Client Component {clientFunRes} </h2>
        </div>

    )
}

