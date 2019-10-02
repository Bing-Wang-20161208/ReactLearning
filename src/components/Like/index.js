import React, { Component } from 'react'

export default class Like extends Component {
    constructor () {
        super ();
        this.state = {
            isLike : false
        }
        // this.handleLikeClick = this.handleLikeClick.bind(this);
    }
    handleLikeClick = () => {
        // this.setState ({ isLike : !this.state.isLike }); setState是异步的，会延迟
        this.setState ( (prevState) => {
            return {isLike : !prevState.isLike}
        }
        // ,() => {
            //由于setState是异步的，如果要获取最新的state，需要在这个回调里获取，在这外面的任何地方获取到的都是old state
            // console.log(this.state.isLike);
            
        // }
        )    //作用同上，只是传入的参数直接代替this.state的前一个状态
        // console.log(this.state.isLike);   //优先于setState异步执行
        
    }
    render() {
        return (
            <div>
                <span onClick = { this.handleLikeClick }>
                    { this.state.isLike ? "喜欢 ❤️" : "取消 🖤"}
                </span>
            </div>
        )
    }
}
