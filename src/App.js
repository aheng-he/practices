import React from 'react';

import $confirm from './confirm/confirm'
import Input from './input/Input'

class App extends React.Component {
  componentDidMount() {
    $confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
    }).then(() => {
      alert("点击了确定")
    }).catch(() => {
      alert("点击了取消")
    });
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
