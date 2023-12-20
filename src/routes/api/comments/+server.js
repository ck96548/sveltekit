import { json } from "@sveltejs/kit";
import { comments } from "$lib/comment";

export function GET(){
    return json(comments);
}

export async function POST(requestEvent){
    const {request} = requestEvent;
    const {text} = await request.json();

    const newComments = {
        id : comments.length+1,
        text:text
    }
    comments.push(newComments)
    return json(newComments,{status:201})
}