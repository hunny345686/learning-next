export default async function Review() {

    await new Promise((res, rej) => { setTimeout(() => res("Review Component"), 4000) })
    return (
        <div>
            <h2>This is Review Component</h2>
        </div>
    )
}