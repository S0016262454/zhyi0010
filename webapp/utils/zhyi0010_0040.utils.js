sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {
		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
    },
    
/*
 * インジェクション対策
 * （SAPでNGのダブルクォートとバックスラッシュを）
 * "→\"
 * \→\\に置き換えてから、エンコードします。
 * @param value エンコード対象文字列
 * @returns エンコード後の文字列
 */
		encodeURIComponentSalesOrder : function(value) {
			if (value) {
				var string = new String(value);
				return encodeURIComponent(string.replace(/\\/g,'\\\\').replace(/\"/g,'\\"'));
			}
			return encodeURIComponent(value);
		}
	};
});