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
     * 桁数取得
	 * 対象文字列の桁数を返却します。
	 * 全角文字は2桁、半角文字（半角カナ含む）は1桁。半角カナの濁音は本体と別に1桁カウントします。（'ﾀﾞ'や'ﾋﾟ'の場合桁数は2桁になります。）
	 * @param str 桁数カウント対象文字列
	 * @returns {Number} 桁数
	 */
		getLength : function(str) {
			var r = 0;
			for (var i = 0; i < str.length; i++) {
				var c = str.charCodeAt(i);
				// Shift_JIS: 0x0 ～ 0x80, 0xa0 , 0xa1 ～ 0xdf , 0xfd ～ 0xff
				// Unicode : 0x0 ～ 0x80, 0xf8f0, 0xff61 ～ 0xff9f, 0xf8f1 ～ 0xf8f3
				if ( (c >= 0x0 && c < 0x81) || (c == 0xf8f0) || (c >= 0xff61 && c < 0xffa0) || (c >= 0xf8f1 && c < 0xf8f4)) {
					r += 1;
				} else {
					r += 2;
				}
			}
			return r;
		},
		
	/*
	 * 指定桁数埋め
	 * 対象文字列をTrimし、指定桁数になるまで'&nbsp;'を付与して返却します。
	 * @param value 対象文字列
	 * @param bytes 右パディングする桁数（半角１、全角２）
	 * @returns {String} Trim＋指定文字数まで右パディングした結果文字列
	 */
		convertTrimPadding : function(value, bytes) {
			value = value.trim();
			for (var i = bytes - this.getLength(value); i > 0; i -= 1){
				value += '&nbsp;';
			}
			return value;
		},
		
	/*
	 * あああああ
	 * 指定文字数に編集
	 */
		editLenB : function(elm,digit) {
			var i;
			var cnt = 0;
			var str = $(elm).val();
			var edit = '';
			for(i = 0; i < str.length; i++) {
				if(escape(str.charAt(i)).length < 4){
					cnt++;
				}else{
					cnt += 2;
				}
				if(digit < cnt){
					$(elm).val(edit);
					return null;
				}else{
					edit = edit + str.charAt(i);
				}
			}
			return null;
		}
	};
});
    