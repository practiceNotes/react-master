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
 * 02-05总结
 *
 *******************************************************/
// 01.创建一个组件
    /*const Item = React.createClass({
        render(){
            return <li>
                on on ! item
            </li>
        }
    });*/

    // 转换成 javascript的方法
    const Item = React.createClass({
        render(){
            // return React.createElement("li", null, "React1234");

            // React的写法
            /*return <div>
                <span>1111</span>
                <span>2222</span>
                <span>3333</span>
                <span>4444</span>
            </div>*/

            // 以上翻译过来
            return React.createElement("div", {sytle:{backgroundColor:false ? "red" : "pink"}},
                   React.createElement("p", null, "1111"),
                   React.createElement("p", null, "2222"),

                   true ? React.createElement("p", null, "2121") : React.createElement("p", null, "455145"),
                   React.createElement("p", null, "789745afd")

            );
        }
    });

//////////////////////////////////////////////////////////////////////////////////////////////
    /**
     *  复杂的判断的写法
     *
     *  必须在外层写
     */



    
    const bool = true;
    const reault = [];


    // Reacr的写法 翻译成 javascript的写法
        if(!bool){
            reault.push(React.createElement(Item));
            reault.push(React.createElement(Item));
            reault.push(React.createElement(Item));

        }else{
            reault.push(React.createElement("h1", null, "中国广东"));
            reault.push(React.createElement("h1", null, "中国深圳"));
        }


/**
 *
 * 总结 说明
 *  在对象里也可以写判断的
 *
 *      {style:{backgroundColor: bool ? "green" : "yellow"},abc:123} // 传进来的就是一个 props
 *
 *
 *
 */
ReactDOM.render(
        React.createElement("ul",
            {style:{backgroundColor: bool ? "green" : "yellow"},abc:123} // 传进来的就是一个 props
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

