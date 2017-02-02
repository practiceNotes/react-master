// refs
const Comp = React.createClass({
    click(){
        this.refs.myinput.focus();
    },

    componentDidMount(){
        this.refs.myinput2.focus();
        console.log("compont did mount");
    },

    render(){
        return <div>
            <input ref={function(dom){dom.focus();}}/>
            <input ref="myinput"/>
            <input ref="myinput2"/>
            <input onClick={this.click} type="button" value="Click me!"/>
        </div>
    }
});

ReactDOM.render(
    <Comp />,
    document.getElementById("container")
);