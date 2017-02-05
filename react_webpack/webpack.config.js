module.exports = {
    // 01.主文件
    entry: "index.js",

    // 02.编译后的文件放在哪里
    output: {
        path: __dirname,
        filename: "bundle.js" // 编译完了这个文件叫什么名字
    },
    devtool: "source-map",

    // 03.主要是这里要用到哪些模块
    module: {
        loaders: [
            // 如果是这个是以.css结尾的文件，就用 lader里的sytle!css来处理
            { test: /\.css$/, loader: "style!css" },
            // 如果是这个是以.js结尾的文件，就用 lader里的react-hot!babel来处理, 并且用exclude排除
            { test: /\.js$/, loader: "react-hot!babel", exclude: /node_modules/ }
        ]
    }
};
