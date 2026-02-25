import fs from "fs"
// import ClientOne from "./client-comp-one "
// import SerevrTwo from "./server-comp-two"

export default function SerevrOne() {
    fs.readFileSync("app/day15/component/server-comp-one.tsx", "utf-8")
    return (
        <div>
            <h2>SerevrOne Components </h2>
            {/* <SerevrTwo /> */}
            {/* <ClientOne /> */}
        </div>

    )
}

