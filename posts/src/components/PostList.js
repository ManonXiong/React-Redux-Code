import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    };

    //to render a list, separate it from 'render' method
    renderList = () => {
      return this.props.posts.map(post => {
        return(
          <div className="item" key={post.id}>
            <i className="user icon large middle aligned" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <div className="header">Author</div>
            </div>
          </div>
        )
      })
    }
    
    render() {
      console.log(this.props.posts)
      return(
        <div className="ui relaxed dividedd list">
          {this.renderList()}
        </div>
      )
    }
}

const mapStateToProps = state => {
  return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostList);


//Notes:
//1.If there's no need to get state / data from redux, replace mapStateToProps to null.
