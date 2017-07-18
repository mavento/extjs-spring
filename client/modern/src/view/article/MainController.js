Ext.define('Arp.view.article.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.articleMain',

    routes: {
        'list': 'showList',

        'article': 'showForm',

        'article/:id': {
            action: 'showForm',
            conditions: {
                ':id': '([0-9]+)'
            }
        }
    },
    showList: function () {
        this.switchScreen('articleList');
    },
    showForm: function (id) {
        var me = this, params = {};
        if (Ext.isDefined(id)) {
            params.id = +id;
        }
        me.switchScreen('articleForm', params);
    },
    switchScreen: function (screenXType, params) {
        var me = this, view = me.getView(), screen, direction;
        params = params || {};
        screen = view.down(screenXType);
        if (!screen) {
            screen = Ext.widget(screenXType);
            view.add(screen);
        }
        view.animateActiveItem(screen, {type: 'slide', direction: screen._direction });
        screen.fireEvent('showscreen', params);
    }
});