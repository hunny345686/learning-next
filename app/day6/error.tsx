"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react";

export default function Error({ error, reset }: { error: Error, reset: () => void }) {

    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    }
    return (
        <div>
            <h2>Error msg {error.message}</h2>
            <h2>Error Name {error.name}</h2>
            <h2>Error stack {error.stack}</h2>
            <button onClick={() => { reload() }}>Reset</button>
        </div>
    )
}