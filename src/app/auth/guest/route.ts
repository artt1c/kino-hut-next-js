import { cookies } from 'next/headers';
import apiService from '@/services/api.service';
import {NextResponse} from "next/server";

export async function GET() {
  const cookieStore =await cookies();
  const existing = cookieStore.get('session_id');

  if (existing?.value) {
    return NextResponse.json(JSON.parse(existing.value));
  }

  const response = await apiService.auth.guest();

    cookieStore.set('session_id', JSON.stringify(response), {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });

  return NextResponse.json(response);
}
