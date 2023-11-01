import { IsNumber, IsString } from 'class-validator';

export class UpdateMovieDTO {
  @IsString()
  title?: string;
  @IsNumber()
  year?: number;
  @IsString({ each: true })
  genres?: string[];
}
