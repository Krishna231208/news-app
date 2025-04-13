import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [], // Changed from article to articles (more conventional)
      loading: false,
      page: 1,
      totalResults: 0,
      error: null, // Added error state
    };
  }

  async componentDidMount() {
    await this.loadNews();
  }

  componentDidUpdate(prevProps, prevState) {
    // Reload news if category or page changes
    if (
      this.props.category !== prevProps.category ||
      this.state.page !== prevState.page
    ) {
      this.loadNews();
    }
  }

  loadNews = async () => {
    const { country, category, pageSize } = this.props;
    const { page } = this.state;

    try {
      this.setState({ loading: true, error: null });
      
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=430b746ecd3a407cab93d6c806ed1f50&page=${page}&pageSize=${pageSize}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const parsedData = await response.json();
      
      if (parsedData.status !== "ok") {
        throw new Error(parsedData.message || "News API error");
      }
      
      this.setState({ 
        articles: parsedData.articles || [], // Ensure we always have an array
        totalResults: parsedData.totalResults || 0,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ 
        error: error.message,
        loading: false,
        articles: [], // Reset articles on error
      });
    }
  };

  nextpage = () => {
    this.setState(prevState => ({
      page: Math.min(
        prevState.page + 1,
        Math.ceil(prevState.totalResults / this.props.pageSize)
      )
    }), this.loadNews);
  };

  previouspage = () => {
    this.setState(prevState => ({
      page: Math.max(prevState.page - 1, 1)
    }), this.loadNews);
  };

  render() {
    const { articles, loading, error, page, totalResults } = this.state;
    const { pageSize } = this.props;

    if (error) {
      return (
        <div className="container my-3">
          <div className="alert alert-danger">
            Error loading news: {error}
            <button 
              className="btn btn-sm btn-primary ms-2"
              onClick={this.loadNews}
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        <h3 className="text-center text-capitalize">{this.props.category} News</h3>
        
        {loading && <Spinner />}

        <div className="row">
          {articles.length > 0 ? (
            articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?.slice(0, 45) || "No title available"}
                  description={element.description?.slice(0, 88) || "No description available"}
                  imageUrl={element.urlToImage || "https://via.placeholder.com/150"}
                  newsurl={element.url}
                />
              </div>
            ))
          ) : (
            !loading && (
              <div className="col-12 text-center">
                No articles found for this category.
              </div>
            )
          )}
        </div>

        {articles.length > 0 && (
          <div className="container d-flex justify-content-between">
            <button
              disabled={page <= 1}
              className="btn btn-primary"
              onClick={this.previouspage}
            >
              &laquo; Previous
            </button>
            
            <span className="mx-2">
              Page {page} of {Math.ceil(totalResults / pageSize)}
            </span>
            
            <button
              disabled={page >= Math.ceil(totalResults / pageSize)}
              className="btn btn-primary"
              onClick={this.nextpage}
            >
              Next &raquo;
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default News;