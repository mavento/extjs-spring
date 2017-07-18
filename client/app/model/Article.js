Ext.define('Arp.model.Article', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.reader.Json',
        'Ext.data.reader.Json',
        'Ext.data.validator.Length',
        'Ext.data.writer.Json',
        'Ext.data.writer.Json',
        'Ext.data.writer.Json'
    ],
    fields: [
        {name: 'name', type: 'string'},
        {name: 'code', type: 'string'},
        {name: 'price', type: 'number'},
        {name: 'unit', type: 'string'},
        {name: 'description', type: 'string'}
    ],
    validators: {
        name: {type: 'length', min: 3},
        code: {type: 'length', min: 5}
    },
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/api/article',
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});