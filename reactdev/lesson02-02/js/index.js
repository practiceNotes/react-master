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
 * 02-02属于与行内样式
 *
 *******************************************************/
// 02.创建一个组件
    const Item = React.createClass({
        render(){
            return <li>
                on on ! item
            </li>
        }
    });

    // -1 错误的写法 按照 html内嵌式样式的写法  不符合 React 的写法
        /**
         * 错误的写法
         *  style="background-color:red"
         */

        /*ReactDOM.render(<ul style="background-color:red"></ul>,
            document.getElementById("container")
        );*/

    // -2 正确的写法
        /**
         * 正确的写法
         *  style={{backgroundColor:"red"}}
         */
        /*ReactDOM.render(<ul style={{backgroundColor:"red"}}></ul>,
            document.getElementById("container")
        );*/




    // 03. 加入一个数组的方式
    /**
     *  React.createElement(类型, 对象, 内容)
     *
     *  {style:{backgroundColor:"green"}}
     */
    ReactDOM.render(
            React.createElement("ul",
                {style:{backgroundColor:"green"},abc:123} // 传进来的就是一个 props
                ,
                [
                    React.createElement(Item),
                    React.createElement(Item),
                    React.createElement(Item)
                ]

            ),
            document.getElementById("container")
        );


    // 04 加入一些前缀的写法
        /**
         *  浏览器的内核兼容写法
         *   内核           在React里应该写成前面字母是大写的
         *  -webkit-        Webkit
         *  -ms-            ms  只的这个是小写的
         *
         *  margin-top      marginTop
         */

