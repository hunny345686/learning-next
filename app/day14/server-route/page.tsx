import { serverSideFunc } from "../_utils/server-util"

export default async function ServerRoute() {

    const result = serverSideFunc()
    return (
        <div>
            <h2>ServerRoute Component</h2>
            <p>Serever Res is - {result}</p>
        </div>

    )
}

