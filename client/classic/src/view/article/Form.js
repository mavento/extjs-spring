Ext.define('Arp.view.article.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'articleForm',

    requires: [
        'Arp.view.article.FormController',
        'Arp.view.article.FormModel',
        'Ext.container.Container',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.layout.container.Anchor',
        'Ext.layout.container.HBox',
        'Ext.panel.Panel',
        'Ext.toolbar.Fill'
    ],

    controller: 'articleForm',

    viewModel: {
        type: 'articleForm'
    },

    bodyPadding: '5 5 0',

    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },
    items: [
        {
            xtype: 'container',
            layout: 'hbox',
            defaults: {
                border: false,
                xtype: 'panel',
                flex: 1,
                layout: 'anchor'
            },
            items: [
                {
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        allowBlank: false,
                        anchor: '-5',
                        name: 'name',
                        minLength: 3
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Price',
                        anchor: '-5',
                        name: 'price'
                    }]
                }, {
                    items: [{
                        xtype: 'textfield',
                        allowBlank: false,
                        fieldLabel: 'Code',
                        anchor: '100%',
                        name: 'code',
                        minLength: 5
                    }, {
                        xtype: 'combobox',
                        fieldLabel: 'Unit',
                        bind: {
                            store: '{currencies}'
                        },
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'id',
                        anchor: '100%',
                        name: 'unit'
                    }]
                }

            ]
        },
        {
            xtype: 'textarea',
            fieldLabel: 'Description',
            anchor: '-5',
            name: 'description'
        }
    ],
    buttons: ['->', {
        action: 'create',
        formBind: true,
        text: 'Create'
    }, {
        action: 'cancel',
        text: 'Cancel'
    }]

});