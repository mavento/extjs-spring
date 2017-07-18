Ext.define('Arp.view.article.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    requires: [
        'Arp.view.article.Form',
        'Arp.view.article.List',
        'Arp.view.article.MainController',
        'Ext.layout.Card'
    ],

    controller: 'articleMain',

    layout: {
        type: 'card'
    },
    items: [{
        xtype: 'articleList',
        _direction: 'right'
    }, {
        xtype: 'articleForm',
        _direction: 'left'
    }]
});