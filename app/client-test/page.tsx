"use client";

import { useState } from 'react';

export default function ClientPage() {
    const [count, setCount] = useState(0);

    console.log("I run on BOTH the server and the browser!");

    return (
        <main style={{ padding: '2rem' }}>
            <h1>This is a Client Component (SSR + Hydration)</h1>
            <button onClick={() => setCount(count + 1)}>
                Count is: {count}
            </button>
        </main>
    );
}