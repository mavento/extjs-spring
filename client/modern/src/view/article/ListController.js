Ext.define('Arp.view.article.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.articleList',

    requires: [
        'Arp.model.Article',
        'Arp.view.article.Form',
        'Ext.form.Panel'
    ],
    config: {
        control: {
            '#': {
                showscreen: 'onShowScreen',
                ceRefresh: 'ceRefresh',
            },
            'list': {
                itemtap: 'onItemtap'
            },
            'button[itemId=newButton]': {
                tap: 'onNewTap'
            }
        }
    },
    onShowScreen: function () {
        var me = this, view = me.getView(), list = view.down('list'), store = list.getStore();
        if (!store.isLoaded()) {
            list.getStore().load();
        }
    },
    onNewTap: function () {
        this.redirectTo('article', true);
    },
    onItemtap: function (view, index, target, record) {
        this.redirectTo('article/' + record.getId(), true);
    },
    ceRefresh: function (article) {
        var me = this, view = me.getView(), list = view.down('list'), store = list.getStore();
        var record = store.getById(article.getId());
        if (!record) {
            store.reload();
        } else {
            record.set(article.getData());
        }
    }
});