Ext.define('Arp.view.article.List', {
    extend: 'Ext.Panel',
    xtype: 'articleList',

    requires: [
        'Arp.store.Articles',
        'Arp.view.article.ListController',
        'Ext.dataview.List',
        'Ext.plugin.ListPaging'
    ],

    controller: 'articleList',


    title: 'Articles',

    tools: [
        {
            xtype: 'button',
            iconCls: 'x-fa fa-plus',
            ui: 'action',
            itemId: 'newButton'
        }
    ],


    items: {
        xtype: 'list',
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                autoPaging: true
            }
        ],
        store: {
            type: 'articles'
        },
        loadingText: 'Loading Articles...',
        emptyText: 'No Articles found.',
        itemTpl: [
            '<h2 class="name">{name}</h2>',
            '<p class="description">{description}</p>'
        ],
        listeners: {
            painted: function () {
                var height = window.innerHeight
                    || document.documentElement.clientHeight
                    || document.body.clientHeight;
                this.setHeight(height - 100);
            }
        }
    }
});
