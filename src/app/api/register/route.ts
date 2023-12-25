import prisma from '@/lib/prismadb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json({
      msg: 'Missing Details',
      status: 401,
    });
  }

  const hashedpassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedpassword,
    },
  });

  return NextResponse.json(user);
}
