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
 * 01-04通过属性代替固化数据
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
 */
const List = React.createClass({
    render(){
        return <div>
            <input type="button" className="btn btn-success" value="Add"/>
            <ul className="list-group">
                <Item value="abc">my name is cc</Item>
                <ItemEditor value="dsafdasfds" />
                <ItemEditor value="99999dsaf" />
            </ul>
        </div>
    }
});


ReactDOM.render(
    <List />,
    document.querySelector("#container")
);

