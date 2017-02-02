/**
 * 04-07通过实例代码掌握生命周期的知识点上
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


// 数据库  satart 参考node.js 入门实战
    /**
     *  http://github.com/liangzeng/blog.lesson/blob/master/database.js
     */

/*let fs = require("fs");
const filepath = __dirname+"/data.json";
let list;
try{
    list = JSON.parse(fs.readfileSync(filepath));
}catch(e){
    list = [];
}*/


let list;
const database = {
    add(article){
        list.push(article);
        return list.length -1;
    },
    del(index){
       list[index] = null;
    },
    update(index, newArticle){
        list.splice(index, 1, newArticle);
        //this.store();
    },
    get list(){
        //return list;
    }

}

// 数据库  end


const Item = React.createClass({
    //  displayName 测试
    displayName:"Item",

    // getDefaultProps 默认值
    getDefaultProps(){
        console.log("get default props");
        return {
            value:"no value"
        }
    },

    // getInitialState 获取状态数据
    /**
     *  状态初始化value
     * @returns {{name}}
     */
    getInitialState(){

        return {
            name:this.props.value,
            currentHistory:"",
            history:[]  // 必是一个数组
        }
    },

    // 加载之前,要做的一些事情
    componentWillMount(){
       //
        this.state.dbkey = database.add({value:this.state.value});
    },

    componentDidMount(){
        // 查找DOM节点当前

        let isYellow = false;

        const dom = ReactDOM.findDOMNode(this);

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

    // 更新阶段的，变化的方法
    componentWillReceiveProps(nextProps){
       this.state.value = nextProps.value;

    },

    // 判断它是不是真的更新了
    /**
     *
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     *
     * 如果返回的是真值的话，就执行下面的方法
     */
    shouldComponentUpdate(nextProps, nextState){

        return true;  // 如果是真值就执行这里 should component update
    },

    // 更改阶段
    /**
     * @param nexProps
     * @param nextState
     * 更新数据库
     */
    componentWillUpdate(nexProps, nextState){
        // update database
        let dbkey = this.state.dbkey;
        database.update(dbkey,{value:this.state.value});
    },

    componentDidUpdate(oldProps, oldState){
        let dom = ReactDOM.findDOMNode(this); // 得到这个dom

        let oldStyle = dom.style.border;
        dom.style.border  = "2px solid red";

        // 2秒钟之后，恢复到原始状态
        setTimeout(() => {
            dom.style.border = oldStyle;
        }, 2000);  // 5.47
    },

    update(){
        this.setState({name:"cheng"});
       // 强制刷新
       //  this.forceUpdate();
    },

    changeValue(event){
        this.setState({
            value:event.target.value
        });
    },

    // 保存
    save(){

    },

    // 向前
    prev(){

    },
    // 向后
    next(){

    },



    // 数据渲染
    render(){
        console.log("render");
        return <div>
            <div>
                <input type="button" onClick={this.prev} value="prev"/>
                <input type="button" onClick={this.next} value="next"/>
                <span>{this.state.currentHistory}</span>
            </div>

            <input type="text" value={this.state.value} onChange={this.changeValue}/>
            <input type="button" value="seve" onClick={this.save}/>
        </div>
    },

    // 清除 setInterval()
    componentWillUnmount(){
        console.log("component will unmount");
        clearInterval(this.state.loopNum);
    }
});
ReactDOM.render(
    <div>
        <Item />
    </div>,
    document.getElementById("container")
);
