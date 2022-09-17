import React, { Component } from 'react'

class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree. 生命周期函数componentDidMount()
  componentDidMount() {
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
      .then((result) => result.json()) //处理格式
      .then((result) => {   //操作数据
        this.setState({
          data: result,
        })
      })  
  }
  render() {
    const {data} = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })
    return <ul>{result}</ul>
  }

}

export default App