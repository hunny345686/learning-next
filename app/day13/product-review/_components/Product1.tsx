export default async function Product1() {
    await new Promise((res, rej) => { setTimeout(() => res("Product Component"), 4000) })

    return (
        <div>
            <h2>This is Product Component</h2>
        </div>
    )
}