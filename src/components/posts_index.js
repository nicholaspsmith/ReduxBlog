import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router'

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
    console.log('a good time to call action to fetch posts')
  }

  render() {
    return (
      <div>
      <div className="text-xs-right">
        <Link to="/posts/new" className="btn btn-primary">
          Add Post
        </Link>
      </div>
        List of blog posts
      </div>
    )
  }
}

export default connect(null, { fetchPosts })(PostsIndex)
