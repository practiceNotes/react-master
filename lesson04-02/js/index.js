/**
 * 04-01组件生命周期的原理
 */


// 组件生命周期
/**
 *
 * 01 首先是它的初始化阶段
 * 02 是它装载
 *
 *
 *      init     初始化阶段
 *          defaultProps (share)  ->run 1 getDefaultProps(){return {group:123}}   什么时候调用呢。它是类产生的时调用 =》 React.createCl;ass()
 *
 *          readonly    是可读的
 *
 *          // 1
 *
 *          state ->对应的是 getInitialState(){return {}}  / ES6 constructor(){this.state = {}}        初始化状态
 *                -> new Item();
 *
 *                Private write 可写的
 *
 *
 * 以下分为三个阶段
 *      mount    装载过程
 *          will
 *          did
 *
 *      update   调用N次
 *          props  做为更改
 *
 *          render(){
 *              return <Item group={info} />
 *              render(123);
 *              render(123);
 *              render(abc);
 *          }
 *      unmount  卸载过程
 *
 */

const Item = React.createClass({
    //  displayName 测试
    displayName:"Item",

    // getDefaultProps 默认值
    getDefaultProps(){
        console.log("get default props");
        return {
            group:123
        }
    },

    // getInitialState 获取状态数据
    getInitialState(){
        console.log("get init initialState");
        return {
            name:"chengjin"
        }
    },


    // 数据渲染
    render(){
        return <div>{this.props.group + this.state.name}</div>
    }
});

ReactDOM.render(
    <div>
        <Item />
        <Item />
        <Item />
        <Item />
    </div>,

    document.getElementById("container")
);
