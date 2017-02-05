/**
 * Created by CJLEU on 2017/2/5.
 */

"usr strict";

// 01 React 的写法
    /*ReactDOM.render(
        <h1>标题</h1>,
        document.getElementById("container")
    );*/

    // 翻译成 jvascript的写法
    /**
     *  源生的写法的，它有三个参娄
     *  React.createElement('类型', "指定它的属性", "设置子元素");
     *  01. 类型              元素
     *  02. 指定它的类型       可以是空 null，什么内容都不没有, 也是一个对象。
     *  03. 设置子元素         设置为 标题
     *
     *
     */
    /*ReactDOM.render(
            React.createElement("h1", null, "title"),
            document.getElementById("container")
        );*/

/*******************************************************
 *
 * 02-03三元运算与复杂判断
 *
 *******************************************************/
// 01.创建一个组件
    const Item = React.createClass({
        render(){
            return <li>
                on on ! item
            </li>
        }
    });


// 02-03三元运算与复杂判断

    // 01 React判断的写法
        /**
        const bool = false;
        ReactDOM.render(<ul style={{background:"red"}} abc="123">
                {bool ? <Item /> : <h1>my name is h1</h1>}
                <Item />
        </ul>,
        document.getElementById("container")
        );
        */

    // 编译成 javascript的写法
        /**
        const bool = false;
        ReactDOM.render(
                React.createElement("ul",
                    {style:{backgroundColor:"green"},abc:123} // 传进来的就是一个 props
                    ,
                    [
                        bool ? React.createelement(Item) : React.createElement("h1", null, "my is name cc"),
                        React.createElement(Item)
                    ]

                ),
                document.getElementById("container")
            );
        */


//////////////////////////////////////////////////////////////////////////////////////////////
    /**
     *  复杂的判断的写法
     *
     *  必须在外层写
     */

    const bool = true;
    const reault = [];

    // React的写法
        /*if(bool){
            reault.push(<Item />);
            reault.push(<Item />);
            reault.push(<Item />);
            reault.push(<Item />);
        }else{
            reault.push(<h1>广东</h1>);
            reault.push(<h1>深圳</h1>);
        }

        ReactDOM.render(<ul style={{background:"red"}} abc="123">
                {reault}
                <Item />
            </ul>,
            document.getElementById("container")
        );

        */
        /*
         on on ! item
         on on ! item
         on on ! item
         on on ! item
         on on ! item
         */



    // Reacr的写法 翻译成 javascript的写法
        if(!bool){
            reault.push(React.createElement(Item));
            reault.push(React.createElement(Item));
            reault.push(React.createElement(Item));

        }else{
            reault.push(React.createElement("h1", null, "中国广东"));
            reault.push(React.createElement("h1", null, "中国深圳"));
        }


    ReactDOM.render(
        React.createElement("ul",
            {style:{backgroundColor:"green"},abc:123} // 传进来的就是一个 props
            ,
            [
                //bool ? React.createelement(Item) : React.createElement("h1", null, "my is name cc"),
                reault,
                React.createElement(Item)
            ]
        ),
        document.getElementById("container")
    );
    /*
     中国广东
     中国深圳
     on on ! item
     */

