import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request
) {
  const body = await request.json();
  const {
    id,
    name,
    char
  } = body;

  const user = await prisma.user.create({
    data: {
      id,
      name,
      char
    }
  })

  return NextResponse.json(user)
}