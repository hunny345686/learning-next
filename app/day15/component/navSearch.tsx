"use client"

import { useState } from "react";

export default function NavSearch() {
    const [serach, setSreach] = useState("");

    console.log("NavSearch Rendered")

    return (
        <div><h2>NavSearch</h2></div>
    )
}