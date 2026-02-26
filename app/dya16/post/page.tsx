import { Suspense } from "react"
import Author from "./author"





type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export default async function Posts() {

    await new Promise((res) => setTimeout(() => res("1 sec dealay"), 2000))

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const post: Post[] = await res.json()

    const filterPost = post.filter((post) => post.id % 10 === 1)


    return (
        <div>
            <h2>Fetch Data on Serever side</h2>
            <ul>
                {filterPost.map((itme) => (
                    <li key={itme.id}>
                        <div style={{ border: "2px solid red" }}>
                            <p>{itme.title}</p>
                            <hr />
                            <p>{itme.body}</p>
                            <Suspense fallback={<p> loding..</p>}>
                                <Author userId={itme.userId} />
                            </Suspense>
                        </div>
                    </li>

                ))}
            </ul>

        </div>
    )
}