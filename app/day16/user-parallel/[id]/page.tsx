type Posts = {
    userId: number,
    id: number,
    title: string,
    body: string,
};

type Album = {
    userId: number,
    id: number,
    title: string,
};

async function getUserPost(userID: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
    return res.json()

}

async function getUserAlbum(userID: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`)
    return res.json()

}

export default async function userProfile({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params

    const postData = getUserPost(id)
    const albumData = getUserAlbum(id)

    const [posts, albums] = await Promise.all([postData, albumData])
    return (
        <div>
            <h2>Fetch the data parelaal</h2>
        </div>
    )

}

