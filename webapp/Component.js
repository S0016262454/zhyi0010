sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"zhyi0010/commons/zhyi0010_0010.commons",
	"zhyi0010/model/zhyi0010_0010.model",

	"zhyi0010/utils/zhyi0010_0010.utils",
	"zhyi0010/utils/zhyi0010_0040.utils",
	"zhyi0010/utils/zhyi0010_0050.utils",
	"zhyi0010/utils/zhyi0010_0060.utils"
], function(UIComponent, Device, commons, models, utils0010, utils0040, utils0050, utils0060) {
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
			
			//後で消す        
			jQuery.sap.log.setLevel(jQuery.sap.log.Level.ERROR);
            jQuery.sap.log.error("This should never have happened!");
            jQuery.sap.log.error("●●●●●●●●●●●●●●●●●●●●●●●●カンマ除去●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0010.getCommaNoFormat("1,2,3,4,56,789"));
            jQuery.sap.log.error("●●●●●●●●●●●●●●●●●●●●●●●●カンマ付与●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0010.getCommaFormat("123123123123123"));
            jQuery.sap.log.error("●●●●●●●●●●●●●●●●●●●●●●●●数値変換●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0010.getToNum("123４５６"));
            jQuery.sap.log.error("●●●●●●●●●●●●●●●●●●●●●●●●半角数値チェック●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0010.isNumeric("123"));
            jQuery.sap.log.error("●●●●●●●●●●●●●●●●●●●●●●●●桁数取得●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0060.getLength("これは10！"));
            jQuery.sap.log.error("●●●●●●●●●●●●●●●●●●●●●●●●指定桁数埋め●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0060.convertTrimPadding("AAA",5));
            jQuery.sap.log.error("●●●●●●●●●●●●●●●●●●●●●●●●あああ●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0060.editLenB("1234567890",5));
        }
	});
});