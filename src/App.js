import './App.css'
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row
        title="Documentary Movies"
        fetchUrl={requests.fetchDocumentaries}
      ></Row>
    </div>
  )
}

export default App
