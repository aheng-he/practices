import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css'
/**
 * 使用实例
 * $confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
    }).then(() => {
        alert("点击了确定")
    }).catch(() => {
        alert("点击了取消")
    });
 */


class Confirm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { title, content, confirmButtonText, cancelButtonText } = this.props.options
        let { cancel, save} = this.props
        return (
            <div className="mask">
                <div className='panel'>
                    <div className='panel-header'>
                        {title}
                    </div>
                    <div className='panel-body'>
                        {content}
                    </div>
                    <div className='panel-footer'>
                        <button className="cancel" onClick={cancel}>{cancelButtonText}</button>
                        <button className="confirm" onClick={save}>{confirmButtonText}</button>
                    </div>
                </div>
            </div>
        )
    }
}
const defaultOptions = {
    title: '提示',
    content: '确定删除当前文件？',
    confirmButtonText: '确定',
    cancelButtonText: '取消',
}

let currentConfirm,node = null
let confirmQueue = []

const $message = function (content, title, options) {
    options = merge(defaultOptions,{content,title},options);
    show(options)
   
    return new Promise((resolve, reject) => {
        confirmQueue.push({
            resolve,
            reject
        })
    })
}

function show(options){
    node = document.createElement("div");
    document.body.appendChild(node);
    ReactDOM.render(<Confirm options={options} cancel={cancel} save={save}/>, node)
}
function hide(){
    ReactDOM.unmountComponentAtNode(node);
    document.body.removeChild(node)
}
function cancel(){
    currentConfirm = confirmQueue.shift();
    currentConfirm.reject()
    hide()
}
function save(){
    currentConfirm = confirmQueue.shift();
    currentConfirm.resolve()
    hide()
}


function merge(target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
        let source = arguments[i] || {};
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }
    return target;
};

export default $message