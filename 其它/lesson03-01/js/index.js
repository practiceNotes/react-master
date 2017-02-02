/**
 * 03-01component与element
 *
 * 原型的讲解：ReactClass.js ReactComponent.js ReactElement.js
 *
 */

/**
 *
 * @type {Array}
 * 它只是用于创建这个Item的属性
 *
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

const editListDOM = [];
editListDOM.push(React.createElement(Item, {id, key}));