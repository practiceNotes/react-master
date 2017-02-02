/**
 * 04-06总结
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
 *          willMount
 *              componentWillMount  这个方法只调用1次
 *                  state
 *
 *          render
 *          didMount
 *              componentDidMount   这个方法也只调用1次
 *                  dom     操作DOM
 *                  other framework
 *                  ajax server data 
 *
 *      update   调用N次
 *          will
 *          did
 *
 *
 *          props  做为更改
 *
 *          render(info){
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

    // 以下是加载过程
    componentWillMount(){
        console.log("component will mount");
        this.state.name = "呈琛";
    },

    componentDidMount(){
        console.log("component did mount");
        // 查找DOM节点当前
        const dom = ReactDOM.findDOMNode(this);

        let isYellow = false;

       //dom.style.background = "yellow";

        // 做一个循环的,颜色的切换


        this.state.loopNum = setInterval(() => {
           if(isYellow){
               dom.style.background = "red";
               isYellow = false;
           }else{
               dom.style.background = "yellow";
                isYellow = true;
           }
        }, 500);
    },

    // 更新阶段的方法

    componentWillReceiveProps(nextProps){
        console.log("component will receive props");

    },

    shouldComponentUpdate(nextProps, nextState){

        // 判断它是不是真的更新了
        console.log("should component update");

        return false;  // 如果是真值就执行这里 should component update
    },

    // 更改界面
    componentWillUpdate(nexProps, nextState){
        console.log("componet will update");

    },

    componentDidUpdate(oldProps, oldState){
        console.log("componet did updaate");
    },

    update(){

        this.setState({
            name:"cheng"
        });

       // 强制刷新
       //  this.forceUpdate();
    },
    // 数据渲染
    render(){
        console.log("render");
        return <div>
            {this.props.group + this.state.name}
            <input onClick={this.update} type="button" value="update"/>
        </div>
    },

    // 清除 setInterval()
    componentWillUnmount(){
        console.log("component will unmount");
        clearInterval(this.state.loopNum);
    }
});

function render(bool){
    ReactDOM.render(
        <div>
            <Item />
            {bool ? <Item/> : ""}
        </div>,
        document.getElementById("container")
    );

}

/*const List = React.createClass({
    render(){
        return  <div>
            <Item />
        </div>
    }
})*/

/*reader();
reader();*/
//render(true);

document.getElementById("clear").onclick = () => {
    render(false);
};

document.getElementById("new").onclick = () => {
    render(true);
};

