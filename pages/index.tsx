import React from 'react'
import Link from 'next/link'
import type { NextPage } from 'next'
// Components
import Header from '../components/Header/Header'
import Spinner from '../components/Spinner/Spinner'
import Card from '../components/Card/Card'
import Grid from '../components/Grid/Grid'
import Hero from '../components/Hero/Hero'
// Functions
import { useFetchMovies } from '../api/fetchHooks'
// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'

const Home: NextPage = () => {
  const [query, setQuery] = React.useState('')
  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query)

  const heroData = data?.pages[0].results[0]
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget

    if (scrollHeight - scrollTop === clientHeight) fetchNextPage()
  }

  if (error) return <div>Oh noooo! Something went wrong!</div>

  return (
    <main
      className="relative h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
      <Header setQuery={setQuery} />
      {!query && data && heroData && (
        <Hero
          imgUrl={
            heroData?.backdrop_path
              ? IMAGE_BASE_URL + BACKDROP_SIZE + heroData.backdrop_path
              : '/no_image.jpg'
          }
          title={heroData.title}
          text={heroData.overview}
        />
      )}
      <Grid
        className="p-4 max-w-7xl m-auto"
        title={
          query
            ? `Search Results: ${data?.pages[0].total_pages}`
            : 'Popular Movies'
        }
      >
        {data && data.pages
          ? data.pages.map((page) => {
              return page.results.map((movie) => (
                <Link key={movie.id} href={`/${movie.id}`}>
                  <div className="cursor-pointer hover:opacity-80 duration-300">
                    <Card
                      imgUrl={
                        movie.poster_path
                          ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                          : '/no_image.jpg'
                      }
                      title={movie.original_title}
                    />
                  </div>
                </Link>
              ))
            })
          : null}
      </Grid>

      {isLoading || (isFetching && <Spinner />)}
    </main>
  )
}

export default Home
