/**
 * Created by CJLEU on 2017/2/5.
 *
 * 02-02属于与行内样式
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
     *  02. 指定它的类型       可以是空 null，什么内容都不没有
     *  03. 设置子元素         设置为 标题
     *
     *
     */
    /*ReactDOM.render(
            React.createElement("h1", null, "title"),
            document.getElementById("container")
        );*/





// 02.创建一个组件
    const Item = React.createClass({
        render(){
            return <li>
                on on ! item
            </li>
        }
    });

    // 第一种写法
        /*ReactDOM.render(
            React.createElement(Item, null, null),
            document.getElementById("container")
        );*/


    // 别外一种写法
       /* ReactDOM.render(
            React.createElement(
                <ul>
                    <Item />
                    <Item />
                </ul>
            ),
            document.getElementById("container")
        );*/

    // 翻译成javascript的写法
        // 01. 加入单个，
        /*ReactDOM.render(
            React.createElement("ul", null,
                React.createElement(Item)
            ),
            document.getElementById("container")
        );*/

        // 02. 加入多个，
        /*ReactDOM.render(
            React.createElement("ul", null,
                React.createElement(Item),
                React.createElement(Item),
                React.createElement(Item)
            ),
            document.getElementById("container")
        );*/
        /*
         on on ! item
         on on ! item
         on on ! item
         */

        // 03. 加入一个数组的方式
        ReactDOM.render(
            React.createElement("ul", null,
                [
                    React.createElement(Item),
                    React.createElement(Item),
                    React.createElement(Item)
                ]

            ),
            document.getElementById("container")
        );


