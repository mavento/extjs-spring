Ext.define('Arp.view.article.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'articleForm',

    requires: [
        'Arp.view.article.FormController',
        'Arp.view.article.FormModel',
        'Ext.field.Select',
        'Ext.field.Text',
        'Ext.field.TextArea',
        'Ext.form.FieldSet'
    ],


    controller: 'articleForm',

    viewModel: {
        type: 'articleForm'
    },

    scrollable: 'vertical',

    bind: {
        record: '{record}'
    },


    items: [
        {
            xtype: "toolbar",
            docked: "top",
            title: "Edit Article",
            items: [
                {
                    xtype: "button",
                    ui: "back",
                    iconCls: 'x-fa fa-home',
                    itemId: "backButton"
                },
                {xtype: "spacer"},
                {
                    xtype: "button",
                    ui: "action",
                    iconCls: 'x-fa fa-check',
                    itemId: "saveButton"
                }
            ]
        },
        {
            xtype: "toolbar",
            docked: "bottom",
            items: [
                {
                    xtype: "button",
                    iconCls: 'x-fa fa-trash',
                    iconMask: true,
                    itemId: "deleteButton"
                }
            ]
        },
        {
            xtype: "fieldset",
            items: [{
                xtype: 'textfield',
                name: 'name',
                label: 'Name',
                required: false
            }, {
                xtype: 'textfield',
                name: 'price',
                label: 'Price'
            }, {
                xtype: 'selectfield',

                name: 'unit',
                label: 'Unit',
                bind: {
                    store: '{currencies}'
                },
                displayField: 'name',
                valueField: 'id'
            }, {
                xtype: 'textfield',
                name: 'code',
                label: 'Code',
                required: true
            }]
        },
        {
            xtype: "fieldset",
            border: false,
            title: 'Description',
            items: [
                {
                    xtype: 'textareafield',
                    name: 'description',
                    maxRows: 4
                }
            ]
        },
    ]


});