export const feedback=[
    {
        id:1,
        message:'Nice food'
    },
    {
        id:2,
        message:'spicy food'
    }
]


export async function GET(request) {
    return Response.json({
        status:200,
        message:'Yahoo.Api created'
    })
}