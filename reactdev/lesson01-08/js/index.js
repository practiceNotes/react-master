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

// 01-08-编辑item功能实现
/**
 * 主要体现在
 */


// 行 Item
const Item = React.createClass({
    // this.props.onEdit -> function
    // 编辑的方法
    edit(){
        this.props.onEdit(this.props.id, this.props.value);
    },

    // 删除的方法
    remove(){
        // removeItemDditor(id)
        this.props.onRemove(this.props.id);
    },

    render(){
        return <li className="list-group-item">
            {this.props.value}
            <a href="javascript:void(0);" className="right glyphicon glyphicon-edit" onClick={this.edit}></a>
            <a href="javascript:void(0);" className="right glyphicon glyphicon-remove" onClick={this.remove}></a>
        </li>;
    }
});

// 编辑 ItemEditor
/**
 * <input className="item-edit" type="text" value={this.props.value}/>
 * 这里的那里 value=里面的值固化了。都不能进行修，如果要进行修改的话，那么就要把value改成defaultValue
 */
const ItemEditor = React.createClass({

    // 生成一个默认的一个状态
    getInitialState(){
        return {
            value:this.props.value
        }
    },

    // 处理函数
    changeHandle(ev){
        this.state.value = ev.target.value;
        // this.state.value
        this.forceUpdate(); // 强制刷新

        /*this.setState({
            value:ev.target.value

        });*/

    },

    // 删除
    remove(){
        // removeItemDditor(id)
        this.props.onRemove(this.props.id);


    },

    // 保存
    save(){
        console.log("dafdafsdafdaf");
        this.props.onSave(this.props.id, this.state.value);
    },

    render(){
        return  <li className="list-group-item">
            {this.props.id}
            <input className="item-edit" onChange={this.changeHandle} type="text" value={this.state.value}/>
            <a href="javascript:void(0);" className="glyphicon glyphicon-share" onClick={this.save}></a>
            <a href="javascript:void(0);" onClick={this.remove} className="glyphicon glyphicon-remove"></a>
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
            key:0,
            list:new Map(),     // map 是用健值 和值进行组成的，只要知道它的key就可以进行删除处理
            editList:new Map()
        }
    },

    // 添加信息
    add(){
        const key = ++this.state.key;
        this.state.editList.set(key, {value:""});
        this.forceUpdate(); // 强制更新
    },


    // 删除对应的是 Item
    removeItem(id){
        this.state.list.delete(id);
        this.forceUpdate();

    },

    // 删除对应的是 removeItemEditor
    removeItemEditor(id){
        this.state.editList.delete(id);
        this.forceUpdate();

    },

    // 删除再添加
    save(id, value){
        this.state.editList.delete(id);
        this.state.list.set(id, value);
        this.forceUpdate();

    },

    // 编辑
    edit(id, value){
        this.state.list.delete(id);
        this.state.editList.set(id, value);
        this.forceUpdate();
    },


    render(){
        const listDOM = [];
        const editListDOM = [];

        // listDOM
        for(let entity of this.state.list){
            listDOM.push(<Item id={entity[0]}  onEdit={this.edit}  key={entity[0]} onRemove={this.removeItem} value={entity[1]} />);
        }

        // editListDOM
        for(let entity of this.state.editList){
            editListDOM.push(<ItemEditor onSave={this.save} onRemove={this.removeItemEditor}  key={entity[0]} id={entity[0]} value={entity[1]}/>);
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


