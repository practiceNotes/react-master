
// 01-10对第一个应用优化
/**
 *
 * 优化，点自己进行优化
 */


// 行 Item
const Item = React.createClass({
    getInitialState(){
        return {
            isEdit:true
        }
    },

    // 编辑的方法
    edit(){
        this.setState({
            isEdit:true
        });
    },

    // 删除
    remove(){
        this.props.onRemove(this.props.id);
    },

    // 保存
    save(){
        this.props.onSave(this.props.id, this.refs["inputText"].value);
        this.setState({
            isEdit:false
        });
    },

    render(){
       return this.state.isEdit ? <li className="list-group-item">
            {this.props.id}
            <input className="item-edit" ref="inputText" onChange={this.changeHandle} type="text" defaultValue={this.state.value}/>
            <a href="javascript:void(0);" className="glyphicon glyphicon-share" onClick={this.save}></a>
            <a href="javascript:void(0);" onClick={this.remove} className="glyphicon glyphicon-remove"></a>
        </li>:
        <li className="list-group-item">
            {this.props.value}
            <a href="javascript:void(0);" className="right glyphicon glyphicon-edit" onClick={this.edit}></a>
            <a href="javascript:void(0);" className="right glyphicon glyphicon-remove" onClick={this.remove}></a>
        </li>;


    }
});

// 编辑 ItemEditor
const ItemEditor = React.createClass({
    // 生成一个默认的一个状态
    getInitialState(){
        return {
            value:this.props.value
        }
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
            list:new Map()    // map 是用健值 和值进行组成的，只要知道它的key就可以进行删除处理
            // editList:new Map()
        }
    },

    // 添加信息
    add(){
        const key = ++this.state.key;
        this.state.editList.set(key, "");
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
            listDOM.push(<Item id={entity[0]}  key={entity[0]} onRemove={this.removeItem} value={entity[1]} />);
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


