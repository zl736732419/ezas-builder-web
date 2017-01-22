(function () {
	define(["jquery"], function ($) {
		var self = {
			log : function (msg) {
				if (window.console) {
					console.log(msg);
				}
			}
		};
		
		return self;
	});
})();
