
export const dynamicParams = false
export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }]
}



export default async function ProductDeatil({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    return (
        <div>
            <h3>Product Deatil Page</h3>

            <p>Pudoct id is {id} render at {new Date().toLocaleTimeString()}</p>
        </div>
    )
}