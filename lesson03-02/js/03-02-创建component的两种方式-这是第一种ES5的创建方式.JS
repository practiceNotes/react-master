/**
 * 03-02-创建component的两种方式
 */


// TODO: 这种是用ES5的写法
    const exf = {
        test(){
            alert("ok test mixins!"+this.props.group);
        }
    };

    // React.Component sub Class
    /**
     * 创建一个Component
     *
     * createClass      这是创建一个类
     * createElement    这时创建一个元素
     */

    const Item = React.createClass({
        // displayName 这是用来做测试用的
        displayName:"Item", // Test 这是用来做测试的

        // getDefaultProps 设置它的默认值
        getDefaultProps(){
            return {
                group:"JavaScript"
            }
        },

        // 测试
       /* test(){

        },*/

        // mixins:[] 混合，它指定的是一个数组
        mixins:[exf],

        // Prototype 这是原型的渲染方式
        render(){
            // 这里通常返回以下三个参数
             /*null
             false
             Element object*/


             // JSX 语法
             return <div>
                 {this.props.group}
                 <input type="button" onClick={this.test} value="clickMe1"/>
             </div>;
             //return React.createElement("div", null, "Hello world");
             //return React.createElement("div", null, this.props.group);

        }
    });

    // displayName = "Item"; 这是代表内容等于这个字符串
    ReactDOM.render(
        <Item group="Hello"/>,
        document.getElementById("container")

    );


// TODO: ES6 的写法
