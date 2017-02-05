// 03-02-创建component的两种方式


// 扩展方未能
    /*const exf = {
        test(){
            alert("ok test mixins =>" + this.props.group);
        }
    }*/

// 01 它的全写是： React.Component sub class
    // 第一种创建方式
    /**const Item = React.createClass({

        // 开始进行一个测试 Test
        displayName:"Item", // Test

        // 获取默认的参数值
        getDefaultProps(){
            return {
                group:"javascript"
            }
        },

        // 混合的写法
        mixins:[exf],

        // prototype
        render(){
            // null
            // false
            // Element object

            // jsx
            return <div>
                {this.props.group}

                <input type="button" onClick={this.test} value="你点我呀！"/>
            </div>;
            //return React.createElement("div", null, this.props.group);
        }
    });*/


// ES6的写法
    // javascript ES6 实战视频课程
    class Item extends React.component{
        // 构造函数
        constructor(props){
            super(props);

            // 等价于 getInitialState
            this.state = {
                result:123
            }
        }


        // static 静态的方法
        static defaultProps(){
            return {
                group:"javascript"
            }
        }

        // 获取信息数据
        /*getInitialState(){
            return {
                result:123
            }
        }*/

        test(){
            alert("ok test mixins =>" + this.props.group);
        }

        // ES6不支持混合的写法
        //mixins:[exf]

        render(){
            return <div>
                {this.props.group}

                <input type="button" onClick={this.test.bind(this)} value="你点我呀！"/>
            </div>;
        }
    }

// 02 渲染
    /*
        displayName = "Item";
     */
    ReactDOM.render(
        <Item group="Hello" />,
        document.getElementById("container")

    );

    // 17.02
