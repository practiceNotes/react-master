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

// 01-04通过属性代替固化数据
/**
 * 第一种写法
 */

// 行 Item
const Item = React.createClass({
    render(){
        return <li className="list-group-item">
            {this.props.value}
            <a href="javascript:void(0);" className="right glyphicon glyphicon-edit"></a>
            <a href="javascript:void(0);" className="right glyphicon glyphicon-remove"></a>
        </li>;
    }
});

// 编辑 ItemEditor
const ItemEditor = React.createClass({
    render(){
        return  <li className="list-group-item">
            <input className="item-edit" type="text" />
            <a href="javascript:void(0);" className="glyphicon glyphicon-share"></a>
            <a href="javascript:void(0);" className="glyphicon glyphicon-remove"></a>
        </li>;
    }
});


// 列表 List
const List = React.createClass({
    render(){
        return <div className="row">
            <input type="button" className="btn btn-default" value="Add" />
            <ul className="list-group">
                <Item value="abc"/>
                <Item value="12354"/>
                <Item value="dsafdsaf"/>
                <ItemEditor />
                <ItemEditor />
            </ul>
        </div>;
    }
});


// 最后进行渲染
ReactDOM.render(
    <List />,
    document.getElementById("container")
);


