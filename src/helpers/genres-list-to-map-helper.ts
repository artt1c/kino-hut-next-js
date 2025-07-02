import {IGenre} from "@/model/IGenres";

const genresListToMap = (genres:IGenre[]):Map<number, { name:string, id:number }> => {
  return new Map<number, { name:string, id:number }>(genres.map(genre => [genre.id, {name:genre.name, id:genre.id}]));
}

export default genresListToMap;