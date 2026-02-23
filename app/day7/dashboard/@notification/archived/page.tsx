import Link from "next/link"

const Archived = () => {

    return (
        <div>
            <h2>Archived Page</h2>

            <div>
                <Link href={"/day7/dashboard"}>Dashboard Link</Link>
            </div>
        </div>
    )

}

export default Archived