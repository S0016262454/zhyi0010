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
 * ローカルストレージより、データを取得します。
 * @param key  キー項目 (宗達（コスモ・バイオ）では、項目名（IDではない）を指定します。)
 * @returns {Array} 値 （宗達（コスモ・バイオ）では、値（実際のオートコンプリートに表示する文字列です。）
 */
	//ローカルストレージデータ取得
	localStorageGetItem : function(key) {
		// 検索用ワード配列
		var historyObj = JSON.parse(localStorage.getItem(key));
		var historyArray = [];        // 取得したオブジェクトを補完する配列
		var filterHistoryArray = [];  // 取得したオブジェクトを整形した配列
		// オブジェクトを配列に変換 (スペースだけのものを弾く)
		for (var k in historyObj) {
			if (typeof historyObj[k] !== "undefined" &&
				historyObj[k].replace(/\s+/g, "") !== "") {
				historyArray.push(historyObj[k]);
			}
		}
		// 同じ入力値を弾く
		if (historyArray.length !== 0) {
			filterHistoryArray = historyArray.filter(function(x, i, self) {
			return self.indexOf(x) === i;
			});
		}
		return filterHistoryArray;
	},
	/*
 * ローカルストレージにデータを保管します。
 * @param key キー項目 (宗達（コスモ・バイオ）では、項目名（IDではない）を指定します。)
 * @param val 値 （宗達（コスモ・バイオ）では、値（実際のオートコンプリートに表示する文字列です。）
 */
	//ローカルストレージデータ保管
	localStorageSetItem : function(key, val) {
		if (!key || !val) return; // キー項目もしくは値がなければ、何も処理しない。
			var historyObj = JSON.parse(localStorage.getItem(key));
			if (historyObj === null) {
				historyObj = JSON.stringify({});
				historyObj = JSON.parse(historyObj);
			}
		// 取得した値をparseする
		var tmpHistories = $(historyObj)[0];
		var keyNumber = 0;
		for (var hk in tmpHistories) {
			if (typeof tmpHistories[hk] === "undefined") {
				return true;
			}
			if (keyNumber < parseInt(hk)){
				keyNumber = parseInt(hk);
			}
		}
		var historyArray = [];   // 取得したオブジェクトを補完する配列
		// オブジェクトを配列に変換 (スペースだけのものを弾く)
		for (var k in historyObj) {
			if (typeof historyObj[k] !== "undefined" &&
				historyObj[k].replace(/\s+/g, "") !== ""){
					historyArray.push(historyObj[k]);
			}
		}
		historyArray.reverse();         // 古いもの順に並び替える。
		historyArray[keyNumber+1] = val.replace(/^ *\n/g, '').replace(/ *\n/g, '\n').replace(/ *$/g, ""); // 今回追加分を投入
		historyArray.reverse();         // 新しい順に並び替える。（重複データ削除のため）
		var filterHistoryArray = []; //取得したオブジェクトを整形した配列
		// 同じ入力値を弾く
		if (historyArray.length !== 0) {
			filterHistoryArray = historyArray.filter(function(x, i, self) {
				return self.indexOf(x) === i;
			});
		}
		localStorage.setItem(key, JSON.stringify(filterHistoryArray));
		}
	};
});