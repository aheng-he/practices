import React from 'react';
import './App.css';
import $confirm from './functionComponent/Confirm'
class App extends React.Component {
  componentDidMount() {
    $confirm("确定删除当前文件？","提示",{
      cancelButtonText:"取消",
      confirmButtonText:"确定"
    }).then(()=>{
      alert("确定")
    }).catch(()=>{
      alert("取消")
    })
  }
  render(){
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
