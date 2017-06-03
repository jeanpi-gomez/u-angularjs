(function () {
  'use strict';

  describe('directive card', function () {
    var compile, rootScope, timeout, element, template;

    beforeEach(module('angularApp'));

    beforeEach(inject(function ($injector) {
      compile = $injector.get('$compile');
      rootScope = $injector.get('$rootScope');
      timeout = $injector.get('$timeout');
      var templateCache = $injector.get('$templateCache');
      var htmlTemplate = templateCache.get('app/components/card/card.html');
      templateCache.put('app/components/card/card.html', htmlTemplate);

      rootScope.card = {
        title: '',
        description: '',
        background: '',
        textColor: '',
        icon: '',
        favorite: function () {
          return true;
        },
        reservedBy: '© Talos Business Card'
      };

      template =
        '<div>' +
        '<card title="card.title"' +
        'description="card.description"' +
        'background="card.background"' +
        'text-color="card.textColor"' +
        'reserved-by="{{card.reservedBy}}"' +
        'cb-favorite="card.favorite(title)"' +
        'icon="{{card.icon}}">' +
        '</card>' +
        '</div>';
    }));

    afterEach(function () {
      element.remove();
      element = undefined;
      template = undefined;
    });

    describe('directive element', function () {

      it('directive render with no values just the hard coded text', function () {
        element = compile(angular.element(template))(rootScope);
        rootScope.$digest();

        expect(element.find('.title').text()).toEqual('');
        expect(element.find('.description').text()).toEqual('');
        expect(element.find('.icon').text()).toEqual('');
        expect(element.find('.reservedBy').text()).toEqual(rootScope.card.reservedBy);
      });

      it('directive render with values', function () {
        rootScope.card = {
          title: 'Jean Pierre',
          description: 'This is a business card',
          background: 'rgb(186, 186, 186)',
          textColor: 'rgb(170, 51, 85)',
          icon: 'account_circle',
          favorite: function () {
            return true;
          },
          reservedBy: '© Talos Business Card'
        };

        element = compile(angular.element(template))(rootScope);
        rootScope.$digest();

        spyOn(rootScope.card, 'favorite');

        expect(element.find('.title').text()).toEqual(rootScope.card.title);
        expect(element.find('.description').text()).toEqual(rootScope.card.description);
        expect(element.find('.icon').text()).toEqual(rootScope.card.icon);
        expect(element.find('.reservedBy').text()).toEqual(rootScope.card.reservedBy);
        timeout(function () {
          expect(element.find('.card').css('color')).toEqual(rootScope.card.textColor);
          expect(element.find('.card').css('background-color')).toEqual(rootScope.card.background);
        }, 100);
        timeout.flush();
        element.find('.favorite').click();
        expect(timeout.verifyNoPendingTasks).not.toThrow();
        expect(rootScope.card.favorite).toHaveBeenCalledWith(rootScope.card.title);
      });
    });

  });
})();
