Ext.define('Arp.store.Articles', {
    extend: 'Ext.data.Store',
    alias: 'store.articles',

    fields: [
        'id', 'name', 'code', 'unit', 'price'
    ],

    pageSize: 200,
    remoteSort: true,
    autoLoad: false,
    proxy: {
        type: 'ajax',
        api: {
            read: 'http://localhost:8080/api/article'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'totalCount'
        },
        simpleSortMode: true
    },
    sorters: [{
        property: 'name',
        direction: 'ASC'
    }]
});