requirejs.config({
    waitSeconds: 1000,
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        'backbone.marionette': '../bower_components/backbone.marionette/lib/core/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        requirejs: '../bower_components/requirejs/require',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        stickit: '../bower_components/backbone.stickit/backbone.stickit'
    },
    shim: {
        bootstrap: ['jquery']
    },
    config: {
        tpl: {
            interpolate: /\{\{(.+?)\}\}/g,
            escape: /\{\{=(.+?)\}\}/g,
            variable: 'data'
        }
    }
});

require(['backbone', 'view'], function(Backbone, MyView){
    var mv = new MyView({
        model: new Backbone.Model({
            name: 'Ali'
        })
    });
    mv.render();
    $('.container').html(mv.$el);
});