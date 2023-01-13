import React, { Component } from 'react'
import Items from './Items'
import './News.css';
import defaultImage from '../images/logo.png';
import PropTypes from 'prop-types'


export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  static defaultProps = {
    category: "science"
  }

  static propTypes = {
    category: PropTypes.string,
  }
  async componentDidMount() {
    let myURL = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=1e1b73e8c11a4ffc864d5f3ac976681b&page=1&pageSize=18`;
    this.setState({
      loading: true
    })
    let data = await fetch(myURL);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
  }
  prevHandler = async () => {
    console.log("Previous");
    let myURL = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=1e1b73e8c11a4ffc864d5f3ac976681b&page=${this.state.page - 1}&pageSize=18`;
    this.setState({
      loading: true
    })
    let data = await fetch(myURL);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    })
  }
  nextHandler = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {
    }
    else {
      let myURL = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=1e1b73e8c11a4ffc864d5f3ac976681b&page=${this.state.page + 1}&pageSize=18`;
      this.setState({
        loading: true
      })
      let data = await fetch(myURL);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false
      })
    }
  }
  render() {
    return (
      <div className='main'>

        {
          (this.state.loading)
            ?
            <div className='loader'>
              <div class="spinner-grow text-dark" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            :
            <>
              <div className="boxes">
                {this.state.articles.map((eachNews) => {

                  return <Items key={eachNews.url} author={(eachNews.author === null || eachNews.author.length === 0 || eachNews.author === undefined || eachNews.author.split(":")[0] === "https") ? "Anonymous" : eachNews?.author?.slice(0, 15)} source={(eachNews.source.name === null || eachNews.source.name.length === 0 || eachNews.source.name === undefined) ? "Source Is Not Mentioned" : eachNews.source.name.slice(0, 10)} title={(eachNews.title === null || eachNews.title.length === 0 || eachNews.title === undefined) ? "Lorem ipsum dolor amet, consectetur adipiscing ellit." : eachNews.title.slice(0, 50) + "..."} description={(eachNews.description === null || eachNews.description.length === 0 || eachNews.description === undefined) ? "Click The Button Below Click The Button Below Click The Button Below....." : eachNews.description.slice(0, 70) + "...."} imgURL={(eachNews.urlToImage === null) ? defaultImage : eachNews.urlToImage} url={eachNews.url} />
                })}
              </div>
              <br />
              <br />
              <div className="buttons">
                <button disabled={this.state.page <= 1} onClick={this.prevHandler}>Previuos</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 18)} onClick={this.nextHandler}>Next</button>
              </div>
            </>
        }


      </div>
    )

  }
}

export default News
