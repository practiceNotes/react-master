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
 * 01-03划分出多组件
 */

// Item
const Item = React.createClass({
    render(){
        return <li className="list-group-item">
                <span>Cras justo odio</span>
                <div className="item-box right">
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-edit"></a>
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-remove"></a>
                </div>
            </li>
    }
});

// ItemEditor
const ItemEditor = React.createClass({
    render(){
        return  <li className="list-group-item">
                    <input type="text" className="item-edit" placeholder="请输入内容...." />
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-share"></a>
                </li>
    }
});


// List
const List = React.createClass({
    render(){
        return <div>
            <input type="button" className="btn btn-success" value="Add"/>
            <ul className="list-group">
                <Item />
                <ItemEditor />
                <ItemEditor />
            </ul>
        </div>
    }
});

ReactDOM.render(
    <List />,
    document.querySelector("#container")
);

