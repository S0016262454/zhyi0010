/**
 * zhyi0010_0010.utils.js
 * IPS共通JSライブラリ0010：書式変換系のJSライブラリ群
 * 
 * @namespace 
 */
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
		getCommaNoFormat: function(value) {
			if (value) {
				return value.split(',').join('');
			}
			return '';
		},

		/*
		 * カンマ付与
		 */
		getCommaFormat: function(value) {
			value = this.getToNum(value);
			var result;
			result = String(value).replace(/,/g, '');
			while (result != (result = result.replace(/^([-\+]?\d+)(\d{3})/, '$1,$2'))) {}
			return result;
		},

		/*
		 * 数値変換
		 */
		getToNum: function(value) {
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
		isNumeric: function(value) {
			return (String(this.getCommaNoFormat(value)).search(/^(\\|\$)?(0|-?[1-9]\d*|-?(0|[1-9]\d*)\.\d+)$/) != -1);
		},

		/*
		 * Byte数を算出します。
		 *  文字列のバイト数を求めるには１文字ずつ抜き出しescape()を使ってエンコードします。エンコード結果は１バイト文字ならば３文字以内(%nnかCなどの文字になります)、日本語などの２バイト文字は４文字以上になります。エンコードされた文字列の長さを調べて４文字未満ならば１バイト、４文字以上ならば２バイトとしてカウンタを加算し、文字列の長さ分だけカウントします。
		 * @param text 算出対象文字列
		 * @returns {Number} バイト数
		 */
		getByte: function(text) {
			var count = 0;
			for (var i = 0; i < text.length; i++) {
				var n = escape(text.charAt(i));
				if (n.length < 4) {
					count++;
				} else {
					count += 2;
				}
			}
			return count;
		},

		/*
		 * 簡単な説明文？
		 */
		convertNumString: function(_num, upperlength, underlength) {
			_num = '' + _num;
			var numvalue = _num.split('.');
			var upper = '' + this.getCommaFormat('' + parseInt(numvalue[0]));

			for (; upper.length < upperlength; upperlength--) {
				upper = '&nbsp;' + upper;
			}
			var under = '';
			if (numvalue.length > 1) {
				var numsplit = numvalue[1].split('0');
				for (var i = numsplit.length; i-- > 0;) {
					if (under.length > 0) {
						under = '0' + under;
					}
					under = numsplit[i] + under;
				}
				if (under.length > 0) {
					under = '.' + under;
				}
			}
			for (; under.length < underlength; underlength--) {
				under += '&nbsp;';
			}
			return upper + under;
		},

		/* 
		 * 入力文字列を指定した項目長の文字列にして返す、defaultで左寄せ
		 * @param str 入力文字列
		 * @param len 入力項目長
		 * @param right  true：右寄せ指定／false：左寄せ指定
		 * @return 指定した項目長の文字列
		 */
		makeText: function(str, len, right) {
			var ret = str;
			var padding = '';
			len -= str.length;
			if (ret.length > len) {
				ret = ret.substring(0, len);
			}
			for (var i = -1; ++i < len;) {
				padding = padding + '&nbsp;';
			}
			if (right) {
				ret = padding + ret;
			} else {
				ret = ret + padding;
			}
			return ret;
		},

		/*
		 * 簡単な説明文？
		 */
		addSlash: function(str) {
			if (str != undefined && str != null && str != '') {
				str = str + '/';
			}
			return str;
		}
	};
});