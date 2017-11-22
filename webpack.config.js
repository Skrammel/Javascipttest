module.exports = { 
    entry: "./Scripts/Code.ts",
    output: {
        filename: "distribution/bundle.js"
    },
    resolve: {
        extensions: ['.ts']
    },
     module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
};


