import { Genre } from './genres';
import { ProductionCompanies } from './production-companies';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: string;
  genres: Genre[];
  production_companies: ProductionCompanies[];
  revenue: number;
}

export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface MovieVideoDto {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface CreditsDto {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Cast {
  adult: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  character: string;
  profile_path: string;
  popularity: number;
}

export interface Crew {
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  department: string;
  job: string;
}
