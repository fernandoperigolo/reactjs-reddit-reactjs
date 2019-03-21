import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleFetchPostsSortBy, handleFetchPostsAfterSortBy } from '../actions/posts'
import { timeAgo } from '../utils/helpers'

class PostList extends Component {
  state = {
    currentFilter: '',
    loading: true,
  }

  componentDidMount() {
    const { match, handleFetchPostsSortBy } = this.props
    const filter = match.params.filter
    this.setState(() => ({
      currentFilter: filter,
    }))
    handleFetchPostsSortBy(filter)
      .then(() => {
        this.setState(() => ({
          loading: false,
        }))
      })
  }

  componentDidUpdate() {
    const { match, handleFetchPostsSortBy } = this.props
    const filter = match.params.filter
    if (this.state.currentFilter !== filter) {
      this.setState(() => ({
        currentFilter: filter,
        loading: true,
      }))
      handleFetchPostsSortBy(filter)
        .then(() => {
          this.setState(() => ({
            loading: false,
          }))
        })
    }
  }

  render() {
    const { posts, after, handleFetchPostsAfterSortBy } = this.props
    if (this.state.loading === true) {
      return <p>Loading posts...</p>
    }
    return (
      <Fragment>
        {posts && Object.keys(posts).length > 0
          ? <Fragment>
              {Object.keys(posts).map(post =>
                <div key={posts[post].data.id} className='post-list-item' onClick={() => console.log('Go to post')}>
                  <div className='post-list-item-img'>
                    {posts[post].data.thumbnail !== 'self' && posts[post].data.thumbnail !== 'default' && <img src={posts[post].data.thumbnail} alt={posts[post].data.title} /> }
                  </div>
                  <div className='post-list-item-data'>
                    <h2 className='post-list-item-title'>{posts[post].data.title}</h2>
                    <p className='post-list-item-timeuser'>Posted {timeAgo(posts[post].data.created)} ago by <a href={`https://www.reddit.com/u/${posts[post].data.author}`}>{posts[post].data.author}</a></p>
                    <p className='post-list-item-url'><a href={posts[post].data.url}>{posts[post].data.url}</a></p>
                  </div>
                </div>
              )}
              {after &&
                <div className='post-list-loadmore'>
                  <button onClick={() => handleFetchPostsAfterSortBy(this.state.currentFilter, after)}>Load More Posts</button>
                </div>
              }
            </Fragment>
          : <p>No posts here...</p>
        }
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  handleFetchPostsSortBy,
  handleFetchPostsAfterSortBy,
}


function mapStateToProps ({ posts }) {
  return {
    posts: posts.itens,
    after: posts.after,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
