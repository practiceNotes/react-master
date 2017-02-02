React

一、好在哪儿
    1.组件化----分工、合作
    2.虚拟DOM---性能高
    3.跨平台---移动端

二、缺点：
    1.学习曲线特别的陡
    2.设计思想有点特别


三、React全家桶(技术栈)
    1.React主体
    2.webpack: grunt、gulp自动化构建工具
    3.flex: 布局
    4.React-Route: 路由
    5.Redux：View层
    6.Mocha: 测试
    7.Istanbul:覆盖率

四、JSX：
    1.增强型JS语法---HTML代码直接放JS里
    2.babel
    

五、注意：
    1.有且仅有一个父元素
    2.模板字符串
        var oDiv = <span>{aaa}</span>
        
六、最强：
    1.组件化的框架
    2.状态
    
    
    
七、IndexPage    
    <Header/>
        <IndexContent/>
    </Footer>
    
    1.定义一个组件==class
       class 名字 extends React.Component{
            render(){
                return  <span></span>
            }
        }
    
    2.使用组件
        就跟标签一样用
        ReactDOM.render(
            <span>111</span>,
            oDiv            
        );
        
        ReactDOM.render(
            <Comp/>,
            oDiv
        );
        
        
        
八、属性--定死
    状态---变的
    
    1.状态是活的
        constructor 里面 --- this.state={};
        方法里面--this.setState({})
    
    2.事件大小写不能乱
        onChange
        onClick
        ...
        
    3.绑定事件
        onChange={fn}                   // fn是方法，不是函数
        onChange={this.fn}              // 不对，需要bind
        onChange={this.fn.bind(this)}   ok
        
        
    4.用了constructor的时候，必须用super
    
    
 
       
        
九、AngularJS霸道---原生定时器、jQuery
    react温柔--可以跟原生、jQuery配合起来
    
    
    
十、组件---生存周期

    componentWillMount();           创建之前
    componentDidMount();            创建之后
    
    componentWillUpdate();          更新之前
    componentDidUpdate();           更新之后
    
    componentWillUnmount();         卸载之前
    没有componentDidUnmount
       
    componentWillReceiveProps();    组件参数更新
    
    
    
十一、重用组件    
    
    // 错误的：
    <ul>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
    </ul>
    
    // 对的：
    arr.push(<Item />);
    arr.push(<Item />);
    arr.push(<Item />);
    arr.push(<Item />);
    ...
    
    <ul>
        {arr}
    </ul>
    
    
    
    
    
十二、组件、状态
    
    1. 组件内的节点(Node)
    2.refs
    3.ref
    
    
十三、延时加载

    1. React特别不爱管闲事
        组件、状态
    2. 组件内容节点
        ref="类似id"
        this.refs["名字"] ==>原生        
        
    *推荐状态
    
    
十四、表彰原件的问题
   
    1. 用value，改成 defaultValue 
    2. 用checked, 改成 defautlChecked
    
    
    
    
十五、 组件间通信


    父子级通信
    ---------------------------------------   
    
    
    webPack
    1.babel 实时编译，慢
    2.测试麻烦
    3.自己搭建服务器
    4.热更新
    ---------------------------------------
    
    
    webPack
    
    ---------------------------------------
    
    
   
    
    
    
    
    
    
    
    
    
    
    









