Ext.define('Arp.view.article.Main', {
    extend: 'Ext.grid.Panel',
    xtype: 'articleList',

    requires: [
        'Arp.view.article.MainController',
        'Arp.view.article.MainModel',
        'Ext.button.Button',
        'Ext.form.field.Number',
        'Ext.form.field.Text',
        'Ext.grid.column.Action',
        'Ext.grid.column.Widget'
    ],

    viewModel: {
        type: 'articleMain'
    },
    controller: 'articleMain',

    title: 'Articles',
    bind: {
        store: '{articles}'
    },
    columns: [{
        text: 'Name',
        dataIndex: 'name',
        sortable: true,
        flex: 1,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'textfield',
            action: 'edit',
            allowBlank: false,
            minLength: 3
        }
    }, {
        text: 'Code',
        dataIndex: 'code',
        flex: 1,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'textfield',
            action: 'edit',
            allowBlank: false,
            minLength: 5

        }
    }, {
        text: 'Description',
        dataIndex: 'description',
        flex: 2,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'textfield'
        }
    }, {
        text: 'Price',
        dataIndex: 'price',
        flex: 2,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'numberfield'
        }
    }, {
        text: '', dataIndex: 'unit', width: 40, align: 'left',
        renderer: function (value, metaData, record) {
            return ' &' + record.get('unit').toLowerCase() + ';';
        }
    }, {
        menuDisabled: true,
        sortable: false,
        xtype: 'actioncolumn',
        width: 50,
        align: 'center',
        items: [{
            iconCls: 'x-fa fa-trash',
            tooltip: 'Delete Article',
            handler: 'onDelete'
        }]
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            itemId: 'addButton',
            iconCls: 'x-fa fa-plus',
            text: 'Add Article',
            width: 120,
            listeners: {
                click: 'onAdd'
            }
        }]
    }]
})

