type Author = {
    id: number,
    name: string,
}

export default async function Author({ userId }: { userId: number }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const author: Author = await res.json()
    return (
        <div>
            written By ..
            <span>{author.name}</span>
        </div>
    )
}