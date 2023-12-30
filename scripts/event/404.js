hexo.extend.generator.register('404', function(locals) {
    return {
        path: '404.html',
        layout: 'page',
        data: {'type': '404'},
    }
})