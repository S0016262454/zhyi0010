sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	/*
	 * 存在チェック
	 */
	if (String.prototype.toOneByteAlphaNumeric == undefined) {
		// 全角英数字文字列を半角文字列に変換する
		String.prototype.toOneByteAlphaNumeric = function() {
    	return this.replace(/[Ａ-Ｚａ-ｚ０-９－！”＃＄％＆’（）＝＜＞，．？＿［］｛｝＠＾～￥]/g, function(s) {
    	return String.fromCharCode(s.charCodeAt(0) - 65248);
    	});
	};
	}

	return {
		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
    },
    
  	/*
   	 * カンマ除去
   	 */
    	getCommaNoFormat : function(value) {
    		if (value){
    			return value.split(',').join('');
    		}
    		return '';
    	},
		 
   	/*
   	 * カンマ付与
   	 */
    	 getCommaFormat : function(value) {
   			value = this.getToNum(value);
   			var result;
   			result = String(value).replace(/,/g, '');
   			while (result != (result = result.replace(/^([-\+]?\d+)(\d{3})/, '$1,$2'))){}
   			return result;
    	},

   	/*
   	 * 数値変換
   	 */
		getToNum : function(value) {
    		value = this.getCommaNoFormat(String(value));
    		value = value.toOneByteAlphaNumeric();
    		if (isNaN(value) || !this.isNumeric(value)) {
    			return 0;
    		} else {
    			return Number(value);
    		}
    	},
   
   	/*
   	 * 半角数値チェック
     */
	    isNumeric : function(value) {
    		return (String(this.getCommaNoFormat(value)).search(/^(\\|\$)?(0|-?[1-9]\d*|-?(0|[1-9]\d*)\.\d+)$/) != -1);
    	}
	};
});