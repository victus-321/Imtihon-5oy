import React, { Component } from 'react'
import axios from 'axios'

class InstantSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Posts: [],
    }

    this.cancelToken = ''
    this.onIptClick = this.onIptClick.bind(this)
    this.node = React.createRef()
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onIptClick)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onIptClick)
  }

  onIptClick = (e) => {
    if (this.node.current.contains(e.target)) {
      return
    }
    this.setState({
      Posts: [],
    })
  }

  onLsChange = async (e) => {
    if (this.isReqToken) {
      this.isReqToken.cancel()
    }

    this.isReqToken = axios.CancelToken.source()

    await axios
      .get('https://jsonplaceholder.typicode.com/albums', {
        isReqToken: this.isReqToken.token,
      })
      .then((res) => {
        this.setState({
          Posts: res.data,
        })
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log('Could not get')
        }
      })

    let filterSearch = e.target.value.toLowerCase()

    let searchRes = this.state.Posts.filter((e) => {
      let finalRes = e.title.toLowerCase()
      return finalRes.indexOf(filterSearch) !== -1
    })

    this.setState({
      Posts: searchRes,
    })
  }

  render() {
    return (
      <div className="searchModule">
        <h2> React Live Search Example - positronX</h2>
        <input
          onClick={this.onIptClick}
          onChange={this.onLsChange}
          type="text"
          placeholder="Search ..."
          ref={this.node}
        />
        <ul>
          {this.state.Posts.map((res) => {
            return <li key={res.id}>{res.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default InstantSearch