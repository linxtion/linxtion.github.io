require('babel-register')({
    plugins: ['transform-object-assign'],
    presets: ['es2015', 'react', 'stage-0']
})

require('./server.js')
