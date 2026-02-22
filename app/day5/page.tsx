"use client"
import { link } from "fs"
import Link from "next/link"
import { useParams } from "next/navigation"

const UiNavigation = () => {

    const pathname = useParams()

    // const isActive = pathname === link.herf || (pathname.startsWith(link.herf) && link.herf !== "/")
    return (
        <div>
            <h2>About UiNavigation LINK and Active Link</h2>

            <Link href={"/"}> Home</Link >
            <Link href={"/day4"} replace> Day-4</Link >
            <Link href={"/day4"} replace> Read in </Link >

        </div>

    )
}

export default UiNavigation