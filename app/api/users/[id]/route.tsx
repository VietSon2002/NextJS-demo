import { NextRequest, NextResponse } from "next/server";
import { schema } from '../schema';
import { prisma } from "@/prisma/client";

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    });
    //Fetch user data from database
    //If the user is not found, return a 404 response
    //Else return data
    if (!user)
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json(user, { status: 200 });
}
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    //validate request body
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) //if validation fails, return a 400 response
        return NextResponse.json(validation.error.issues, { status: 400 });

    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    });

    if (!user)
        return NextResponse.json({ error: "User not found" }, { status: 404 }); //if user not found, return a 404 response
    const updateUser = await prisma.user.update({
        where: { id: parseInt(params.id) },
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(updateUser)//update the user, return the updated user
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    //If the user is not found, return a 404 response
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    });

    if (!user)
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    await prisma.user.delete({
        where: { id: parseInt(params.id) }
    }); //delete the user from the database
    return NextResponse.json({ message: "User deleted successfully" });//delete the user, return success message
} 