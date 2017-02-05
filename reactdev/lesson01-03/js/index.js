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

// 行 Item
const Item = React.createClass({
    render(){
        return <li className="list-group-item">
            cras justo
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
                <Item />
                <Item />
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


