/**
 * 01-02把HTML嵌入JavaScript中
 */
ReactDOM.render(
    <div className="row">
        <input type="button" className="btn btn-success" value="Add"/>
        <ul className="list-group">
            <li className="list-group-item">
                <span>Cras justo odio</span>
                <div className="item-box right">
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-edit"></a>
                    <a  href="javascript:void(0);" className="glyphicon glyphicon-remove"></a>
                </div>
            </li>
            <li className="list-group-item">
                <input type="text" className="item-edit" placeholder="请输入内容...." />
                <a  href="javascript:void(0);" className="glyphicon glyphicon-share"></a>
            </li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    </div>,

    // get Element Id append container
    document.querySelector("#container")

);