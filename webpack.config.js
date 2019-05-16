module.exports = {
    mode: 'development',
    entry: './www/src/entry.js',
    output: {
        path: __dirname + '/www/js',
        filename: 'index.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'svg-inline-loader',
                    options: {
                        removeTags: true,
                        removingTags: ["sodipodi:namedview"]
                    }
                }]
            }
        ]
    }
};