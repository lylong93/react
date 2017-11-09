const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './app/index.jsx',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    //模块解析
    resolve:{
        extensions:['.js','.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'sass-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000
                        }
                    }
                ]
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        //css前缀
        require('autoprefixer'),

        // html 模板插件
        new HtmlWebpackPlugin({
            title: 'new html',
            template: 'index.html'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        // new webpack.DefinePlugin({
        //   __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        // })
    ],

    devServer: {
    }
}
