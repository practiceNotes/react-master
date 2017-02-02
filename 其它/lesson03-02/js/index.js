/**
 * 03-02-创建component的两种方式
 */


/*****这种是用ES5的写法****************/
    /*const exf = {
        test(){
            alert("ok test mixins!"+this.props.group);
        }
    };

    // React.Component sub Class
    /!**
     * 创建一个Component
     *
     * createClass      这是创建一个类
     * createElement    这时创建一个元素
     *!/

    const Item = React.createClass({
        // TODO: displayName 这是用来做测试用的
        displayName:"Item", // Test 这是用来做测试的

        // TODO: getDefaultProps 设置它的默认值
        getDefaultProps(){
            return {
                group:"JavaScript"
            }
        },

        // getOmota;State 定一个初始化
        getInitialState(){
            return {
                resi;t:123
            }

        }

        // TODO: 测试
       /!* test(){

        },*!/

        // TODO: mixins:[] 混合，它指定的是一个数组
        mixins:[exf],

        // Prototype 这是原型的渲染方式
        render(){
            // TODO: 这里通常返回以下三个参数
             /!*null
             false
             Element object*!/


             // TODO: JSX 语法
             return <div>
                 {this.props.group}
                 <input type="button" onClick={this.test} value="clickMe1"/>
             </div>;
             //return React.createElement("div", null, "Hello world");
             //return React.createElement("div", null, this.props.group);

        }
    });

    // TODO: displayName = "Item"; 这是代表内容等于这个字符串
    ReactDOM.render(
        <Item group="Hello"/>,
        document.getElementById("container")

    );*/

/*****ES6 的写法********************************/

/*const exf = {
    test(){
        alert("ok test mixins!"+this.props.group);
    }
};*/



class Item extends React.Component{
    // constructor() 构造函数的写法
    constructor(props){
        super(props);


        // 这里行等价 getInitiaState, 以上在面的方法相同
        this.state = {
            result: 123
        }
    };

    // Test 测试
    test(){
        alert("ok test mixins!"+this.props.group);
    };
    // getDefaultProps 静态的方法
    static defaultProps(){
        return {
            group:"JavaScript"
        }
    }

    // mixins 混合的写法 重点：ES6不支持这种混合的写法
    /*mixins:[exf]*/

    // render 渲染DOM
    /**
     * 在 ES6 的 onClick事件里，一定要加一个 bind的事件
     * @returns {XML}
     */
    render(){
        return <div>
            {this.props.group}
            <input type="button" onClick={this.test.bind(this)} value="click me!"/>
        </div>
    }
}

ReactDOM.render(
    <Item />,
    document.getElementById("container")
);


