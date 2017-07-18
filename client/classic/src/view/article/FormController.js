Ext.define('Arp.view.article.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.articleForm',

    requires: [
        'Arp.model.Article'
    ],

    config: {
        control: {
            'button[action=create]': {
                click: 'onCreateClick'
            },
            'button[action=cancel]': {
                click: 'onCancelClick'
            }
        }
    },
    onCreateClick: function (button) {
        var me = this, form = me.getView(), win = form.up('window');
        if (form.isValid()) {
            var article = Ext.create('Arp.model.Article', form.getValues());
            article.set('id', null);
            Ext.getBody().mask('Create Article...');
            article.save(
                {
                    failure: function () {
                        console.error('Error Creating Article')
                    },
                    callback: function () {
                        Ext.getBody().unmask();
                        me.redirectTo('list', true);
                        win.close();
                    }
                }
            );
        }
    },
    onCancelClick: function (button) {
        var me = this, form = me.getView(), win = form.up('window');
        Ext.getBody().unmask();
        me.redirectTo('list', true);
        win.close();
    }


});