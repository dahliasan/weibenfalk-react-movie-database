import { ChildProcessWithoutNullStreams } from 'child_process'

export type Movie = {
  backdrop_path: string
  id: number
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
  budget: number
  runtime: number
  revenue: number
  release_date: string
  title: string
}

export type Movies = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export type Credits = {
  id: number
  cast: Cast[]
  crew: Crew[]
}

export type Crew = {
  job: string
  name: string
  credit_id: string
}

export type Cast = {
  character: string
  credit_id: string
  name: string
  profile_path: string
}
