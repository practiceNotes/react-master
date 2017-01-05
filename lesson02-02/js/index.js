/**
 * TODO: 02-02属于与行内样式
 */

// 02-1 功能化的简化
const Item = React.createClass({
    render(){
        return <li>
            one one ! item
        </li>
    }
});

// 02-2
/**
 * 加入一些属性和方法
 *      错误的写法： style="background-color:red"
 *      正确的写法：是以对象的方式来写
 */
    // 错误的写法
   /* ReactDOM.render(
        <ul style="background-color:red">
            <Item />
            <Item />
        </ul>,
        document.getElementById("container")
    );*/

   // 正确的写法，是以对象的方式来写
    /**
    ReactDOM.render(
        <ul style={{backgroundColor:"#DDD"}}>
            <Item />
            <Item />
        </ul>,
        document.getElementById("container")
    );
     */



    // 翻译成javascript的写法
/**
 *  兼容的写法
 *  -webkit-
 *  -ms-        ms
 *  -webkit-    Webkit      除了这个是前缘大写，其它的都是小写
 *  margin-top  marginTop
 */
ReactDOM.render(
        React.createElement(
            "ul",
            {style:{background:"yellow"}},  // 这里就是相当于 props 传参的方式
            null,
            [
                <Item />,
                <Item />,
                <Item />,
                <Item />,
                <Item />
            ]
        ),
        document.getElementById("container")
    );