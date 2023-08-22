import { signToken } from '@/utils/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    if (req.cookies.get('token')) {
      return NextResponse.json({ success: true, token: null });
    }

    const token = signToken();

    return NextResponse.json({ success: true, token: signToken() });
  } catch (error) {
    console.log('Yo err: ', error);
  }
}
