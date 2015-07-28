'use strict';

var mode = angular.module('sos.modes.sampleImage', []);

mode.factory('modeSampleImage', function($log) {
	
	var mode = {};
	mode.id = "modeSampleImage";
	mode.title = "Sample Image";	
	
	mode.init = function($scope) {
		// init method
		$log.info("init: ", mode.id);

		var gif = new createjs.Bitmap("media/winter-is-coming.jpg");
		gif.image.onload = function() {
			gif.scaleX = $scope.getWidthScaleFactor(gif.getBounds().width);
			gif.scaleY = $scope.getHeightScaleFactor(gif.getBounds().height);
			$scope.stage.addChild(gif);
		};	
	}
	
	mode.update = function($scope) {
		// no updates needed for image
	}
	
	mode.deinit = function($scope) {
		// do clean up
		$log.info("deinit:", mode.id);
	}
	
	return mode;
});