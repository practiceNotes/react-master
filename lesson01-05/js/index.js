/*
ReactDOM.render(
    <div className="row">
        <input type="button" className="btn btn-success" value="Add"/>
        <ul className="list-group">
            <li className="list-group-item">
                <span>Cras justo odio</span>
                <div className="item-box right">
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-edit"></a>
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-remove"></a>
                </div>
            </li>
            <li className="list-group-item">
                <input type="text" className="item-edit" placeholder="请输入内容...." />
                <a  href="javascript:void(0);" className="glyphicon glyphicon-share"></a>
            </li>
        </ul>
    </div>,

    // get Element Id append container
    document.querySelector("#container")
);*/


/**
 *
 * 01-05内部状态数据与添加功能的实现
 *
 * this             是代表一个当前
 * props            是当一个传参
 * value            是自定义的一个属性
 * children         是系统给的一个属性，它不是自定义的。
 * defaultValue     是改变成一个默认的值
 */

// Item
    /**
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
     });*/

// Item  指定它的子元素
/**
 * children  不是自定义的， 是react系统当中给的一个属性，可以在它的子元素当中体现出来
 */
const Item = React.createClass({
    render(){
        return <li className="list-group-item">
                <span>{this.props.value + this.props.children}</span>
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
    render(){
        return  <li className="list-group-item">
                    <input type="text" className="item-edit" value={this.props.value} placeholder="请输入内容...." />
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-share"></a>
                </li>
    }
});


// List  第一种写法
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
    });
    */

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
     */
    getInitialState(){
        return {
            list:new Set(),
            editList:new Set()
        }
    },


    // 添加方法
    add(){
        // 添加一个空的
        this.state.editList.add({value:""});
        // 强制更新
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
        for(let item of this.state.list){
            listDOM.push(<Item vlaue={item.value} />);
        }

        for(let item of this.state.editList){
            editListDOM.push(<ItemEditor value={item.value}/>);
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

