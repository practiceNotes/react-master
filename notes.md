#### 网址：
```javascript
    /**
    1. https://facebook.github.io/react/docs/gitting-started.html

    2. JSX: HTML+JavaScrept => JavaScript
    
    3. 运用 JSX
        01. JSX 的本质
        02. 虚拟DOM
        
        
    4. HTML Element - DOM  关系是存在 Element 当中
    
    5. React 
            Element - Component 真的逻辑是存在 Component 当中
            Element　负责描述输出的结果
            Component 才是真正的组件 它是有状态的，也是有生命周期的
            
            组件的的输入 props / 自身的 state(是可变的。维持内部的信息) 输出是 Element (只存在于render()这个方法里)  
                
    
    6. Element 描述
        <div><span></span></div>
        
    7. DOM JavaScript Object 内部运行的机制就是在这里面
    
    
    
    
    
  
  */
    
    
    /**
     *
     * @type {Array}
     * 它只是用于创建这个Item的属性
     *
     */
    
    const Item = React.createClass({
        render(){
            return <li className="list-group-item">
                <span>{this.props.value + this.props.children}</span>
                <div className="item-box right">
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-edit"></a>
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-remove"></a>
                </div>
            </li>
        }
    });
    
    const editListDOM = [];
    editListDOM.push(React.createElement(Item, {id, key}));

```