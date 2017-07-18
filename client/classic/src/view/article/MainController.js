Ext.define('Arp.view.article.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.articleMain',

    requires: [
        'Arp.model.Article',
        'Arp.view.article.Form',
        'Ext.layout.container.Fit',
        'Ext.window.Window'
    ],
    routes: {
        'list': 'onList',
        'article': 'onArticle',
    },
    onStoreLoad: function () {
        var me = this, view = me.getView();
        var fields = view.query('textfield');
        Ext.each(fields, function (field) {
            field.on("change", me.onChange, me);
        });
    },
    onChange: function (field, value) {
        var me = this, grid = me.getView(), store = grid.getStore(), phantom;
        var widgetRecord = field.getWidgetRecord();
        if (widgetRecord && field.isValid()) {
            me.suspendFieldEvents();
            var dataIndex = field.getWidgetColumn().dataIndex;
            var article = Ext.create('Arp.model.Article', widgetRecord.getData());
            article.set(dataIndex, value);
            article.save({
                    success: function (result) {
                        var record = grid.getStore().getById(widgetRecord.getId());
                        if (record) {
                            record.set(result.getData());
                        } else {
                            console.error('No record in store 1with id: ', widgetRecord.getId());
                        }
                    },
                    failure: function () {
                        Ext.Msg.alert('Error', 'Error Save Article');
                    },
                    callback: function () {
                        me.resumeFieldEvents();
                    }
                }
            );
        }
    },
    onDelete: function (grid, rowIndex) {
        var record = grid.getStore().getAt(rowIndex);
        if (record) {
            Ext.getBody().mask('Delete Article...');
            var article = Ext.create('Arp.model.Article', record.getData());
            article.erase({
                    failure: function () {
                        Ext.Msg.alert('Error', 'Error Delete Article');
                    },
                    callback: function () {
                        grid.getStore().reload();
                        Ext.getBody().unmask();
                    }
                }
            )
        }
    },
    onAdd: function () {
        this.redirectTo('article', true);
    },
    onList: function () {
        var me = this, view = me.getView(), store = view.getStore();
        store.load();
    },
    onArticle: function () {
        Ext.create('Ext.window.Window', {
            title: 'New Article',
            modal: true,
            height: 400,
            width: 800,
            layout: 'fit',
            items: {
                xtype: 'articleForm'
            }
        }).show();
    },
    suspendFieldEvents: function () {
        var me = this, formPnl = me.getView();
        var fields = formPnl.query('textfield');
        Ext.each(fields, function (field) {
            field.suspendEvent('change');
        });
    },
    resumeFieldEvents: function () {
        var me = this, view = me.getView();
        var fields = view.query('field');
        Ext.each(fields, function (field) {
            field.resumeEvent('change');
        });
    },
});