import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component{
  // render : componentWillmount() -> render() -> componentDidMount()
  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate()
  //           -> render() -> componentDidUpdate()
  state = {    
  }

  componentDidMount(){
    setTimeout(() =>{
      this.setState({
        movies: [
          {
            title : "Harry Potter And The Sorcerer's Stone",
            poster : "https://movie-phinf.pstatic.net/20181019_236/1539926790655oHv5z_JPEG/movie_image.jpg"
          },
          {
            title : "Harry Potter And The Chamber Of Secrets",
            poster : "https://movie-phinf.pstatic.net/20111222_244/1324530400723IXN6V_JPEG/movie_image.jpg"
          },
          {
            title : "Harry Potter And The Prisoner Of Azkaban",
            poster : "https://movie-phinf.pstatic.net/20111221_24/1324475347029LTIlV_JPEG/movie_image.jpg"
          },
          {
            title : "Harry Potter And The Goblet Of Fire",
            poster : "https://movie-phinf.pstatic.net/20111222_278/1324534483252PpUWR_JPEG/movie_image.jpg"
          },
          {
            title : "Herry Potter And The Order Of the Phoenix",
            poster : "https://movie-phinf.pstatic.net/20111222_88/1324531626849yyPiO_JPEG/movie_image.jpg"
          } 
        ]
      }) 
    },5000)
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render(){
    return(
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    )
  }
}

export default App;
