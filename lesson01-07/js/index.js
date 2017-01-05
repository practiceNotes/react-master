/**
 *
 * 01-07ItemEditor保持功能的实现
 *
 * this             是代表一个当前
 * props            是当一个传参
 * value            是自定义的一个属性
 * children         是系统给的一个属性，它不是自定义的。
 * defaultValue     是改变成一个默认的值
 */


// Item  指定它的子元素
/**
 * children  不是自定义的， 是react系统当中给的一个属性，可以在它的子元素当中体现出来
 */
const Item = React.createClass({
    render(){
        return <li className="list-group-item">
                <span>{this.props.value}</span>
                <div className="item-box right">
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-edit"></a>
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-remove"></a>
                </div>
            </li>
    }
});

// ItemEditor
/**
 * value={this.props.value} 始终是它 <ItemEditor value="adadf"> 输入的值，因为这里固化了，所以不能编辑，
 *
 * 如果对它进行编辑的话，就要把 value={this.props.value} 改成 defaultValue={this.props.value} 默认的值
 */
const ItemEditor = React.createClass({
    getInitialState(){
        return {
            value:""
        }
    },
    changeHandle(event){

        this.state.value = event.target.value;  // 这是之前的写法
        this.forceUpdate();
        /**
         * 上面的代码类似以下的
         */
    },

    remove(){
        // removeItemEditor()
        this.props.onRemove(this.props.id);
    },

    save(){
        console.log("sssadafd");
        this.props.onSave(this.props.id, this.state.value);
    },


    render(){
        /**
         * onChange 更改事件
         */
        return  <li className="list-group-item">
                    {this.props.id}
                    <input type="text" className="item-edit" onChange={this.changeHandle} value={this.state.value} placeholder="请输入内容...." />
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-share" onClick={this.save}></a>
                    <a  href="javascript:void(0);" onClick={this.remove} className="glyphicon glyphicon-remove"></a>
                </li>
    }
});

// List  第二种写法，指定它的子元素
    /**
     *    <Item value="abc"/>  这些就是属于子元素
     */
    /**
    const List = React.createClass({
        render(){
            return <div>
                <input type="button" className="btn btn-success" value="Add"/>
                <ul className="list-group">
                    <Item value="abc"/>
                    <Item value="123"/>
                    <Item value="adafd"/>
                    <Item value="afdsaf"/>
                    <ItemEditor />
                    <ItemEditor />
                </ul>
            </div>
        }
    });*/

/**
 *    <Item value="abc">my name is cc</Item>  这些 "my name is cc" 属性子元素, 也就是 this.props.children
 *
 *    getInitialState() 是它react 自生的一个方法，在它自身创建的时候，会进行调用，它返回的是它的一个状态数据，所喟的状态数据，相于这个 pros这个属性是它自身的数据是可写的
 */
const List = React.createClass({
    /**
     *
     * @returns {{list: Set, editList: Set}}
     * 这个被翻译成界面的表现方式，也就是  const ListDOM = []; 和  const editListDOM = [];
     *
     * new Set()  是不能达到我们处理复杂的数据处理和删除 要使用 new Map()
     */
    /*getInitialState(){
        return {
            list:new Set(),
            editList:new Set()
        }
    },*/

    getInitialState(){
        return {
            // 初始化
            key:0,
            list:new Map(),
            editList:new Map()
        }
    },


    // 添加方法
    add(){
        const key = ++this.state.key;
        // 添加一个空的
        this.state.editList.set(key,"");
        // 强制更新
        this.forceUpdate();
    },

    // 删除
    removeItem(id){
        this.state.list.delete();
        this.forceUpdate();
    },
    removeItemEditor(id){
        this.state.editList.delete(id);
        this.forceUpdate();
    },

    save(id, value){
        this.state.editList.delete(id);
        this.state.list.set(id, value);
        this.forceUpdate();
    },

    render(){
        const listDOM = [];
        const editListDOM = [];
        /**
         *  要想访问到 getInitialState 里面的东西的话，必须要写成 this.state.list 这样才能访问才能得到
         *  state 它就是一个状态数据调用
         */

        // 这个是 item
        for(let entity of this.state.list){
            listDOM.push(<Item id={entity[0]} key={entity[0]} onRemove={this.removeItem} vlaue={entity[1]}/>);
        }

        for(let entity of this.state.editList){
            editListDOM.push(<ItemEditor onSave={this.save} key={entity[0]} onRemove={this.removeItemEditor} id={entity[0]} vlaue={entity[1]}/>);
        }

        /**
         * 通过上面生存的两个数据，然后把它加入到下面的 ul里面来
         *
         */
        return <div>
            <input type="button" onClick={this.add} className="btn btn-success" value="Add"/>
            <ul className="list-group">
                {listDOM}
                {editListDOM}
            </ul>
        </div>
    }
});


ReactDOM.render(
    <List />,
    document.querySelector("#container")
);

