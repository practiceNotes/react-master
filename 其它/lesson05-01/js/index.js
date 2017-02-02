/**
 * 05-01表单属性
 *
 * -1. value="safdaf"  如果内部进设置了固定的值，外部是不能修改的。如果要修改那么就要设置一个修改的方法
 *
 * -2. 要想更改里面的value 只能通过事件的方式去修改。
 *
 */
const Form = React.createClass({
    // 获取状态对象
    getInitialState(){
        return {
            inputValue:"cc",
            inputValue2:"",
            checkboxValue:false,
            radioValue:false
        }
    },


    changeHandle(event){
        this.state.inputValue = event.target.value;
        /**
         * 刷新的方式有两种
         *      第一种：
         *          this.forceUpdate();
         *      第二种：
         *          this.setState({
         *
         *          })
         */

        // 第和种：刷新方式
        //this.forceUpdate();
        // 第二种：刷新的方式
        this.setState({
            inputValue: event.target.value
        });

    },

    // 修改 input type is text的类型方法
    changeHandle2(event){
        //this.state.inputValue = event.target.value;
        /**
         * 刷新的方式有两种
         *      第一种：
         *          this.forceUpdate();
         *      第二种：
         *          this.setState({
         *
         *          })
         */

        // 第和种：刷新方式
            //this.forceUpdate();
        // 第二种：刷新的方式
        this.state.inputValue2 = event.target.value;

    },

    changeCheckboxHandle(){
        this.setState({
            changeCheckboxHandle:!this.state.checkboxValue
        });
    },

    changeRadioHandle(){
        this.setState({
            radioValue:!this.state.radioValue
        });
    },

    render(){
        return <form>
            <input type="text" defaultValue="呈琛"  onChange={this.changeHandle2}/>
            <input type="checkbox" checked={this.state.checkbox} onChange={this.changeCheckboxHandle}/>

            <input type="radio" checked={this.state.checkboxValue} onChange={this.changeRadioHandle}/>
            <select value="B" onChange>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <select multiple>
                <option value="A">Aaa</option>
                <option value="B">Bbb</option>
                <option value="C">Ccc</option>
            </select>
            <textarea>

            </textarea>
        </form>
    }
});

ReactDOM.render(
    <Form />,
    document.querySelector("#container")
);