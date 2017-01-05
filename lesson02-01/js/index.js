/**
 * 02-01jsx的本质
 */

//01-1 React的写法
    /**
     ReactDOM.render(
        <h6>title</h6>,
        document.querySelector("#container")
    );*/

// 01-1 把上在面的React翻译成 javascript的写法
    /**
     ReactDOM.render(
        /!**
         *  React.createElement("h6", null, "title") 里面有三个参数，
         *  第一个：指定它的类型
         *  第二个：指定它的属性
         *  第三个：设置它的子元素
         *
         *  <h6>title</h6> 就是等价于 React.createElement("h6", null, "title")
         *!/
        React.createElement("h6", null, "title"),   // <h6>title</h6>

        document.getElementById("container")
    );*/



// 02-1 功能化的简化
const Item = React.createClass({
    render(){
        return <li>
            one one ! item
        </li>
    }
});

// 02-2
    ReactDOM.render(
        <ul>
            <Item />
            <Item />
        </ul>,
        document.getElementById("container")
    );

// 02-3 这是第一种写法，就是到后面添加多个
    /*ReactDOM.render(
        React.createElement(
            Item,
            null,
            null,
            React.createElement(Item),
            React.createElement(Item),
            React.createElement(Item)
        ),
        document.getElementById("container")
    );*/

// 02-04 第二种写法就是加入一个数组
    ReactDOM.render(
        React.createElement("ul", null, null, [
            <Item />,
            <Item />,
            <Item />,
            <Item />,
            <Item />
        ]),
        document.getElementById("container")
    );
    /*
     one one ! item
     one one ! item
     one one ! item
     one one ! item
     one one ! item
     */

