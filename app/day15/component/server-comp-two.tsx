import fs from "fs"

export default function SerevrTwo() {
    fs.readFileSync("app/day15/component/server-comp-two.tsx", "utf-8")
    return (
        <div>
            <h2>SerevrTwo Components </h2>
        </div>

    )
}

