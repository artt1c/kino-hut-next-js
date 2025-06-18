import {NextRequest, NextResponse} from "next/server";
import ApiService from "@/services/api.service";

export async function GET(req: NextRequest) {
  const genreId = req.nextUrl.searchParams.get('genreId');


  if (!genreId) {
    return NextResponse.json({ error: 'No genreId provided' }, { status: 400 });
  }

  return NextResponse.json(await ApiService.movie.byGenre(genreId))
}