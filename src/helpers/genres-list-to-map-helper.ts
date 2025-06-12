import {IGenre} from "@/model/IGenres";

const genresListToMap = (genres:IGenre[]):Map<number,string> => {
  return new Map<number, string>(genres.map(genre => [genre.id, genre.name]));
}

export default genresListToMap;