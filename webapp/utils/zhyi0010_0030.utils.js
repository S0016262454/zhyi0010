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

    /*
     * 乗算処理
     */
       	multiply : function(value1, value2) {
			var arr = this.getMathNum(value1, value2);
			return (arr[0] * arr[1]) / arr[2] / arr[2];
		},

	/*
     * 除算処理
     */ 
		divide : function(value1, value2) {
			var arr = this.getMathNum(value1, value2);
			if (arr[1] == 0) {
				return 0;
			}
			return (arr[0] / arr[1]);
		},

	/*
     * 加算処理
     */ 
		add : function(value1, value2) {
			var arr = this.getMathNum(value1, value2);
			return (arr[0] + arr[1]) / arr[2];
		},

	/*
     * 減算処理
     */ 
		subtract : function(value1, value2) {
			var arr = this.getMathNum(value1, value2);
			return (arr[0] - arr[1]) / arr[2];
		},
		
	/*
     * 数値変換
     */ 
		getMathNum : function(value1, value2) {
			var ret = [String(value1), String(value2), '1'];
			var len1 = 0, len2 = 0, loopCnt = 0;
			if (ret[0].indexOf('.') >= 0) {
				ret[0] = this.zeroShift(ret[0]);
				if (ret[0].indexOf('.') >= 0) {
					var arr = ret[0].split('.');
					len1 = arr[1].length;
					if (len1 > 0) {
						loopCnt = len1;
					}
				}
			}
			if (ret[1].indexOf('.') >= 0) {
				ret[1] = this.zeroShift(ret[1]);
				if (ret[1].indexOf('.') >= 0) {
					var arr = ret[1].split('.');
					len2 = arr[1].length;
					if (len2 > 0 && len2 > len1) {
						loopCnt = len2;
					}
				}
			}
			for (var i = 0; i < loopCnt; i++) {
				if (ret[0].indexOf('.') >= 0) {
					if (ret[0].split('.')[1].length > 1) {
						ret[0] = ret[0].split('.')[0] + ret[0].split('.')[1].substring(0, 1) + '.' + ret[0].split('.')[1].substring(1);
					}else {
						ret[0] = ret[0].split('.')[0] + ret[0].split('.')[1];
					}
				}else {
					ret[0] = ret[0] + '0';
				}
				if (ret[1].indexOf('.') >= 0) {
					if (ret[1].split('.')[1].length > 1) {
						ret[1] = ret[1].split('.')[0] + ret[1].split('.')[1].substring(0, 1) + '.' + ret[1].split('.')[1].substring(1);
					}else {
						ret[1] = ret[1].split('.')[0] + ret[1].split('.')[1];
					}
				}else {
					ret[1] = ret[1] + '0';
				}
				ret[2] = ret[2] + '0';
			}
			for (var i = 0, len = ret[0].length; i < len; i++) {
				if (ret[0].substring(i, i + 1) != '0') {
					ret[0] = ret[0].substring(i);
					break;
				}
			}
			for (var i = 0, len = ret[1].length; i < len; i++) {
				if (ret[1].substring(i, i + 1) != '0') {
					ret[1] = ret[1].substring(i);
					break;
				}
			}
			ret[0] = utils0010.getToNum(ret[0]);
			ret[1] = utils0010.getToNum(ret[1]);
			ret[2] = utils0010.getToNum(ret[2]);
			return ret;
		},
		
	/*
     * ゼロシフト
     */ 
		zeroShift : function(val) {
			if (!val){
				return val;
			}
				var result = '';
				var arr = ('' + val).split('.');
				if (arr.length > 1) {
					var index = 0;
					for (var i = 0, len = arr[1].length; i < len; i++) {
						if (arr[1].substring(i, i + 1) != '0'){
							index = i + 1;
						}
					}
					if (index > 0) {
						result = arr[0] + '.' + arr[1].substring(0, index);
					} else {
						result =  arr[0];
					}
				} else {
					result =  val;
				}
				return  utils0010.getCommaFormat(result);
		},
	/*
	 * 小数点n位までを残す関数
	 * @param number 対象の数値
	 * @param n 残したい小数点以下の桁数
	 * @param type 'round':四捨五入,'floor':切り捨て,'ceil':切り上げ
	 * @returns 換算後の数値
	 */
		mathFloat : function(number, n, type) {
			var _pow = Math.pow( 10 , n );

		  switch (type) {
			case 'round':
				return Math.round( number * _pow ) / _pow ;
			case 'floor':
				return Math.floor( number * _pow ) / _pow ;
			case 'ceil':
				return Math.ceil ( number * _pow ) / _pow ;
			default:
			return number;
		  }
		},
		
	/*
     * num * scale / scale
     * 切り捨てver.
     */ 
		floor_scale : function(num,scale){
			num = Number(num);
			num = this.divide( Math.floor( this.multiply( num, scale )), scale );
			return num;
		},
		
	/*
     * num * scale / scale
     * 四捨五入ver.
     */ 
		round_scale : function(num,scale){
			num = Number(num);
			num = this.divide( Math.round( this.multiply( num, scale )), scale );
			return num;
		}
	};
});