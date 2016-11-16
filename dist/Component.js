sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"zhyi0010/commons/zhyi0010_0010.commons",
	"zhyi0010/model/zhyi0010_0010.model",
	"zhyi0010/utils/zhyi0010_0010.utils"
], function(UIComponent, Device, commons, models, utils) {
	"use strict";

	return UIComponent.extend("zhyi0010.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});