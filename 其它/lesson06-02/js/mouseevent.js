// 06-02鼠标事件实例讲解

const data = new Map();
data.set("id001", "id001");
data.set("id002", "id002");
data.set("id003", "id003");
data.set("id004", "id004");

const DND = React.createClass({
    // init
    getInitialState(){
        return {
            rightdata:this.props.data,
            leftdata:new Map()
        }

    },
    render(){
        const rightList = [];
        const leftList = [];

       for(let item of this.state.rightdata){
           rightList.push(
               <span>{item}</span>
           );
       }

        return <div>
            <div id="leftsection"></div>
            <div id="rightsection">

            </div>
        </div>
    }
});

ReactDOM.render(
    <DND data={data}/>,
    document.body
);