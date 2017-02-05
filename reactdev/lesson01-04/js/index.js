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
 * 第二种写法
 * children     是react自己的一个属性，可以在它的子元素体现出来
 *
 */

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
const List = React.createClass({
    render(){
        return <div className="row">
            <input type="button" className="btn btn-default" value="Add" />
            <ul className="list-group">
                <Item value="abc">dafdasfdsaf</Item>
                <ItemEditor value="afdsafdsafdsaf"/>
                <ItemEditor value="99999999"/>
            </ul>
        </div>;
    }
});


// 最后进行渲染
ReactDOM.render(
    <List />,
    document.getElementById("container")
);


