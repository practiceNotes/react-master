/**
 * 02-05总结
 */

// 02-1 功能化的简化
    const Item = React.createClass({
        render(){
            // 返回单个
                //return React.createElement("li", null, "afdafdasf")

            // react的写法：返回多个结果，在react不能返回多个结果，只能在它内部写多个子标签
                /*return <div>
                    <span>11111</span>
                    <span>22222</span>
                    <span>33333</span>
                </div>*/

            // javascript的写法 上面的等价于下面的
                /*
                return  React.createElement("div", null,
                        React.createElement("span", null, "12522"),
                        React.createElement("span", null, "12522"),
                        React.createElement("span", null, "12522"),
                        React.createElement("span", null, "12522")
                )*/

            // 三元运算 也可以这样用
            return  React.createElement("div", {style:{backgroundColor:false ? "red" : "green"}},
                React.createElement("span", null, "12522"),
                true ? React.createElement("span", null, "12522"):React.createElement("span", null, "5555"),
                React.createElement("span", null, "12522"),
                React.createElement("span", null, "12522")
            )
        }
    });


    // 第一种写法： 三元运算的写法
    const bool = false;
    const result = [];

    if (bool) {
        result.push(React.createElement(Item));
        result.push(React.createElement(Item));
    } else {
        result.push(React.createElement("h2", null, "111"));
        result.push(React.createElement("h2", null, "222"));
    }

    // 翻译成javascript的写法
    ReactDOM.render(
        React.createElement(
            "ul",
            {style: {background: "yellow"}},  // 这里就是相当于 props 传参的方式
            null,
            [
                //bool ? React.createElement(Item) : React.createElement("h5", null, "my name"),
                result,
                React.createElement(Item)
            ]
        ),
        document.getElementById("container")
    );



    // 重点说明：复杂的运算用if，就要在外层处理，简单的就用三元运算符在内层处理