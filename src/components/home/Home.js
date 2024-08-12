import Hero from '../hero/Hero';

// hero component setter film dataene i den når "home" skal bli rederet/vist frem
const Home = ({movies}) => {
  return (
    <Hero movies = {movies} />
  )
}

export default Home