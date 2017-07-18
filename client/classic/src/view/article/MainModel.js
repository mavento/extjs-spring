Ext.define('Arp.view.article.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.articleMain',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    stores: {
        articles: {
            fields: [
                {name: 'name', type: 'string'},
                {name: 'code', type: 'string'},
                {name: 'price', type: 'number'},
                {name: 'unit', type: 'string'},
                {name: 'description', type: 'string'}
            ],
            buffered: true,
            remoteSort: true,
            remoteFilter: true,
            pageSize: 100,
            leadingBufferZone: 300,
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'http://localhost:8080/api/article',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    successProperty: 'success',
                    totalProperty: 'totalCount'
                },
                simpleSortMode: true
            },
            sorters: [{
                property: 'name',
                direction: 'ASC'
            }],
            listeners: {
                load: 'onStoreLoad'
            }
        }
    },
    data: {}
});