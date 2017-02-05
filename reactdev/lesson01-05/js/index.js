/*
ReactDOM.render(
    <div classNam="row">
        <input type="button" className="btn btn-default" value="Add" />
        <ul className="list-group">
            <li className="list-group-item">
                cras justo
                <a href="javascript:void(0);" className="right glyphicon glyphicon-edit"></a>
                <a href="javascript:void(0);" className="right glyphicon glyphicon-remove"></a>
            </li>
            <li className="list-group-item">
                <input className="item-edit" type="text" />
                <a href="javascript:void(0);" className="glyphicon glyphicon-share"></a>
                <a href="javascript:void(0);" className="glyphicon glyphicon-remove"></a>
            </li>
        </ul>
    </div>,
    document.getElementById("container")
);*/

// 01-05内部状态数据与添加功能的实现


// 行 Item
const Item = React.createClass({
    render(){
        return <li className="list-group-item">
            {this.props.value +"=>"+ this.props.children}
            <a href="javascript:void(0);" className="right glyphicon glyphicon-edit"></a>
            <a href="javascript:void(0);" className="right glyphicon glyphicon-remove"></a>
        </li>;
    }
});

// 编辑 ItemEditor
/**
 * <input className="item-edit" type="text" value={this.props.value}/>
 * 这里的那里 value=里面的值固化了。都不能进行修，如果要进行修改的话，那么就要把value改成defaultValue
 */
const ItemEditor = React.createClass({
    render(){
        return  <li className="list-group-item">
            <input className="item-edit" type="text" defaultValue={this.props.value}/>
            <a href="javascript:void(0);" className="glyphicon glyphicon-share"></a>
            <a href="javascript:void(0);" className="glyphicon glyphicon-remove"></a>
        </li>;
    }
});


// 列表 List
/**
 * getInitailState(){} 是react自身的一个方法
 */
const List = React.createClass({
    // 获取初始值的状态数据，它的内部自身是可写的
    getInitialState(){
        return {
            list:new Set(),
            editList:new Set()
        }
    },

    // 添加信息
    add(){
        this.state.editList.add({value:""});
        this.forceUpdate(); // 强制更新
    },

    render(){
        const listDOM = [];
        const editListDOM = [];

        // listDOM
        for(let item of this.state.list){
            listDOM.push(<Item value={item.value}/>);
        }

        // editListDOM
        for(let item of this.state.editList){
            editListDOM.push(<ItemEditor value={item.value}/>);
        }

        return <div className="row">
            <input onClick={this.add} type="button" className="btn btn-default" value="Add" />
            <ul className="list-group">
                {listDOM}
                {editListDOM}
            </ul>
        </div>;
    }
});


// 最后进行渲染
ReactDOM.render(
    <List />,
    document.getElementById("container")
);


