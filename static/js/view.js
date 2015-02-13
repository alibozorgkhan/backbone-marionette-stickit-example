define(['jquery', 'underscore', 'backbone', 'backbone.marionette', 'stickit'],
function($, _, Backbone, Marionette){
    return Marionette.ItemView.extend({
        template: _.template('\
            <div class="row text-center">\
                <h1>Hi! My name is <span id="name1"></span>!</h1>\
            </div>\
            <form class="form-horizontal">\
                <div class="form-group">\
                    <label for="name2" class="col-sm-offset-2 col-sm-2 control-label">Change it:</label>\
                    <div class="col-sm-6 ">\
                        <input type="text" class="form-control" id="name2" placeholder="Name">\
                    </div>\
                </div>\
            </form>\
        '),

        bindings: {
            '#name1': 'name',
            '#name2': 'name'
        },

        onRender: function() {
            this.stickit();
        }
    });
});