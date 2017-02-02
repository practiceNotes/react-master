//05-02refs属性
const Form = React.createClass({
    // 内部进行更改
    getInitialState(){
        return {
            inputValue:"cc",
            inputValue2:"",
            checkboxValue:false,
            radioValue:false
        }
    },

    changeHandle(event){
        /*this.state.inputValue=event.targt.value;*/
        // 第一种方法：强制刷新
            /* this.forceUpdate;*/
        // 第二种方法：强制刷新
        this.setState({
            inputValue:event.target.value
        });
    },
    changeHandle2(event){
        this.state.inputValue2 = event.target.value;
        /*this.setState({
            inputValue2:event.target.value
        });*/
    },

    changeCheckboxHandle(){
        this.setState({
            checkboxValue:!this.state.checkboxValue
        });
    },

    changeRadioHandle(){
        this.setState({
            radioValue:!this.state.radioValue
        });
    },

    render(){
        return <form>
            <div className="row"><input type="text" defaultValue="125" onChange={this.changeHandle2}/></div>
            <div className="row"><input type="text" defaultValue="125" onChange={this.changeHandle}/></div>
            <div className="row"><input type="checkbox" defaultChecked/></div>
            <div className="row"><input type="checkbox" checked={this.state.checkboxValue} onChange={this.changeCheckboxHandle}/></div>
            <div className="row"><input type="radio" checked={this.state.radioValue} onChange={this.changeRadioHandle}/></div>
            <div className="row">
                <select value="B">
                    <option value="A">Aaaa</option>
                    <option value="B">Bbbb</option>
                    <option value="C">Cccc</option>
                </select>
            </div>
            <div className="row">
                <select multiple value={["A", "B"]}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </div>
            <div className="row">
                <textarea defaultValue="okasfdasfdasf"></textarea>
            </div>
        </form>
    }
});

ReactDOM.render(
    <Form />,
    document.getElementById("container")
);

setTimeout(()=>{
    ReactDOM.render(
        <Form />,
        document.getElementById("container")
    );
}, 500);