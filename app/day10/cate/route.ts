export const dynamic = "force-static"

export async function GET() {

    const cate = [
        {
            name:"Cat1"
        },
        {
            name:"Cat2"
        }, {
            name:"Cat3"
        },
    ]
    return Response.json({cate})
}