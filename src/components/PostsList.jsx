import React from 'react';
import Table from 'react-bootstrap/Table';
import PostsService from '../services/PostsService';

export default class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  async componentDidMount() {
    const posts = await this._getPosts();
    this.setState({ posts });
  }

  async _getPosts() {
    const response = await PostsService.getPosts();
    return response.data;
  }

  _renderPosts() {
    if (!this.state.posts || this.state.posts.length < 1) {
      return (
        <tr>
          <td colSpan="6">No posts where found...</td>
        </tr>
      );
    } else {
      return this.state.posts.map(p => (
        <tr key={p.id}>
          <td>{p.author}</td>
          <td>{p.title}</td>
          <td>{p.content}</td>
          <td>{p.likeCount}</td>
          <td>{p.createdAt}</td>
          <td>{p.updatedAt}</td>
        </tr>
      ));
    }
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Content</th>
              <th>Like Count</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {this._renderPosts()}
          </tbody>
        </Table>
      </div>
    );
  }
}
