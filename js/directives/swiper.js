(function($angular, _, Hammer){
  'use strict';

  $angular.module('app')

  .directive('swiper', ['$state', function($state) {
    // get the snap location at 'panend' for where to animate the carousel
    var _setupSnaps = function(snaps){
      _.each(snaps, function(snap, i){
        var n = i > 0 ? i * -100 : 0;
        snap.key = i;
        snap.value = n;
      });
    };

    var _getSnap = function(snaps, pos) {
      var diff, min, key;
      // loop to find smallest diff, it is closest to the pos
      _.each(snaps, function(snap, i){
        var n = i > 0 ? i * -100 : 0;
        diff = Math.abs(pos - n);
        if (_.isUndefined(min) || diff < min) {
          min = diff; // smallest difference
          key = i; // best snap key
        }
      });
      return snaps[key];
    };

    return {
      restrict: 'A',
      scope: {
        snaps: '=?'
      },

      link: function(scope, element){
        var swiper = $angular.element(element[0]);
        var hammerSwiper = new Hammer(swiper[0]);
        var d, x;

        // HAMMER TIME
        hammerSwiper.get('pan').set({threshold: 0});

        hammerSwiper
        .on('panstart', function(){
          swiper.addClass('dragging');
        })
        .on('panleft panright panup pandown', function(e){
          d = Math.abs(parseInt(e.deltaX)) > Math.abs(parseInt(e.deltaY)) ? 'x' : 'y';
          x = scope.snap.value + ((parseInt(e.deltaX) / element[0].clientWidth) * 100 * scope.mod);
          swiper.css({transform: 'translate3d(' + x + '%, 0, 0)'});
        })
        .on('panend', function(){
          scope.snap = _getSnap(scope.snaps, x);
          swiper.removeClass('dragging').css({transform: 'translate3d(' + scope.snap.value + '%, 0, 0)'});
          window.console.log('end', scope.snap, x);
          $state.go(scope.snap.view);
          scope.$apply();
        });

        // DO THINGS
        var init = function(){
          scope.mod = 1;
          _setupSnaps(scope.snaps);
          scope.snap = _getSnap(scope.snaps, 0);
          swiper.css({transform: 'translate3d(' + scope.snap.value + '%, 0, 0)'});
          window.console.log('init', scope.snap);
        };

        init();
      }
    };
  }]);

})(window.angular, window._, window.Hammer);
