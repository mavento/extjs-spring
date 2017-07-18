Ext.define('Arp.view.article.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.articleForm',

    requires: [
        'Arp.model.Article'
    ],

    config: {
        control: {
            '#': {
                showscreen: 'onShowScreen'
            },
            'button[itemId=saveButton]': {
                tap: 'onSaveTap'
            },
            'button[itemId=backButton]': {
                tap: 'onBackTap'
            },
            'button[itemId=deleteButton]': {
                tap: 'onDeleteTap'
            }
        }
    },
    onShowScreen: function (params) {
        var me = this, viewModel = me.getViewModel(), record = null;
        if (Ext.isNumber(params.id)) {
            Ext.Viewport.mask({xtype: 'loadmask', message: 'Loading...'});
            Arp.model.Article.load(params.id, {
                success: function (article) {
                    viewModel.set('record', article);
                },
                failure: function () {
                    Ext.Msg.alert('Error', 'Error loading article');
                    me.redirectTo('list', true);
                },
                callback: function () {
                    Ext.Viewport.unmask();
                }
            });
        } else {
            viewModel.set('record', Ext.create('Arp.model.Article'));
        }
    },
    onSaveTap: function () {
        var me = this, form = me.getView(), main = form.up('main'), list = main.down('articleList');
        var article = form.getRecord();
        article.set(form.getValues());
        var validation = article.getValidation();
        if (!validation.dirty) {
            (article.phantom) ? article.set('id', null) : null;
            Ext.Viewport.mask({xtype: 'loadmask', message: 'Saving...'});
            article.save({
                success: function (record) {
                    list.fireEvent('ceRefresh', record);
                },
                failure: function () {
                    Ext.Msg.alert('Error', 'Error saving article');
                },
                callback: function () {
                    Ext.Viewport.unmask();
                    me.redirectTo('list', true);
                }
            });
        } else {
            var errorMsg = [];
            Ext.Object.each(validation.data, function (key, value) {
                if (value !== true) {
                    errorMsg.push(key + ':' + value);
                }
            });
            if (errorMsg.length > 0) {
                Ext.Msg.alert('Error', errorMsg.join('<br>'));
            }
        }
    },
    onDeleteTap: function () {
        var me = this, form = me.getView(), main = form.up('main'), list = main.down('articleList');
        var store = list.down('list').getStore();
        var article = form.getRecord(), main = form.up('main')
        if (Ext.isNumber(article.getId())) {
            Ext.Viewport.mask({xtype: 'loadmask', message: 'Deleting...'});
            article.erase({
                success: function (record) {
                    store.remove(record);
                },
                failure: function () {
                    store.reload();
                    Ext.Msg.alert('Error', 'Error deleting article');
                },
                callback: function () {
                    Ext.Viewport.unmask();
                    me.redirectTo('list', true);
                }
            });
        }
    },
    onBackTap: function () {
        this.redirectTo('list', true);
    },
});