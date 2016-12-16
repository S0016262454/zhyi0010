sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	
	"zhyi0010/utils/zhyi0010_0010.utils"
], function(JSONModel, Device, utils0010) {
	"use strict";

	return {
		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		compareFilterVal : function( filterVal , targetVal,isNum  ){
			if(!filterVal) return true;
			filterVal = filterVal.replace( /\//g , "" );
			targetVal = targetVal.replace( /\//g , "" );
			var arr = filterVal.split(',');
			for( var val in arr ){
				var arr2 = arr[val].split('..');
				if(arr2[1]){
					//範囲指定
					if(isNum){
						var targetNum = utils0010.getToNum(targetVal);
						if( targetNum >= utils0010.getToNum(arr2[0]) && targetNum  <= utils0010.getToNum(arr2[1]) ){
							return true;
						}
					}else{
						if( targetVal >= arr2[0] && targetVal  <= arr2[1] ){
							return true;
						}
					}
				}else{
					if(isNum){
						//数値の場合は、完全一致
						if(targetVal == arr[val]){
							return true;
						}
					}else{
						//数値ではない場合は、部分一致
						if(targetVal.match(arr[val])){
							return true;
						}
					}
				}
			}
			return false;
		}
	};
});