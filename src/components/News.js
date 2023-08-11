import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loader from './Loader';
import propTypes from 'prop-types'

export class News extends Component {
    static defaultProps={
      country:'in',
      category:'sports',
      pageSize:'8'
    };
    static propTypes={
      country:propTypes.string,
      category:propTypes.string,
      pageSize:propTypes.number
    }
    constructor(){
        super();
        this.state={
            articles:[],
            loading:true,
            page:1
        }
    }

    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=business&page=1&pagesize=${this.props.pageSize}&apiKey=8671a1862636431c86059a918a221d10`
      this.setState({
        loading:true
      })
      let data= await fetch(url)
      let parsedData= await data.json()
      this.setState({articles:parsedData.articles,
                    totalArticles:parsedData.totalResults,
                  loading:false})
    }

    prevFunc=async()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=business&page=${this.state.page-1}&pagesize=${this.props.pageSize}&apiKey=8671a1862636431c86059a918a221d10`
      this.setState({
        loading:true
      })
      let data= await fetch(url)
      let parsedData= await data.json()
      this.setState({articles:parsedData.articles,page:this.state.page-1,loading:false})
    }
    nextFunc=async()=>{
      if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
      }
      else{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=business&page=${this.state.page+1}&pagesize=${this.props.pageSize}&apiKey=8671a1862636431c86059a918a221d10`
      this.setState({
        loading:true
      })
      let data= await fetch(url)
      let parsedData= await data.json()
      this.setState({articles:parsedData.articles,page:this.state.page+1,loading:false})
      }
    }
  render() {
    
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center">Top Headlines</h1>
          {this.state.loading && <Loader/>}
        <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
            })}
            
            
            </div>
            <div className="container">
              <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.prevFunc}>&larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextFunc}>Next &rarr;</button>
            </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default News
