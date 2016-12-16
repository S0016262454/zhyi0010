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
	 * 月末日取得
	 * 年月を指定して月末日を求める関数
	 * year 年
	 * month 月
	 */
		getMonthEndDay : function(year, month) {
			//日付を0にすると前月の末日を指定したことになります
			//指定月の翌月の0日を取得して末日を求めます
			//そのため、ここでは month - 1 は行いません
			var dt = new Date(year, month, 0);
			return dt.getDate();
		},
		
	/*
	 * nヶ月前 or nヶ月後の年月日取得
	 * 年月日と加算月からnヶ月後、nヶ月前の日付を求める
	 * year 年
	 * month 月
	 * day 日
	 * addMonths 加算月。マイナス指定でnヶ月前も設定可能
	 */
		computeMonth : function(year, month, day, addMonths) {
			month += addMonths;
			var endDay = this.getMonthEndDay(year, month);//ここで、前述した月末日を求める関数を使用します
			if(day > endDay){
				day = endDay;
			}
			var dt = new Date(year, month - 1, day);
			return dt;
		},
				
	/*
	 * 主機能名
	 * 現在有効か否かを判定する。
	 * @param currentdate	現在日時(Date型）
	 * @param startDate		有効開始日(yyyymmdd）
	 * @param termDate		有効終了日(yyyymmdd）
	 * @returns {Boolean}	有効：true、無効：false
	 */

		isCurrentDate : function(currentdate, startDate, termDate) {
			var sDate = new Date(Number(startDate.substring(0, 4)), Number(startDate.substring(4, 6)) - 1, Number(startDate.substring(6, 8)), 0, 0, 0);
			var eDate = new Date(Number(termDate.substring(0, 4)), Number(termDate.substring(4, 6)) - 1, Number(termDate.substring(6, 8)), 23, 59, 59);
			if ((sDate <= currentdate) && (currentdate <= eDate)){
				return true;
			}
			return false;
		},

		
	/*
	 * n日前 or n日後の取得
	 * 年月日と加算日からn日後、n日前を求める関数
	 * year 年
	 * month 月
	 * day 日
	 * addDays 加算日。マイナス指定でn日前も設定可能
	 */
		computeDate : function(dateStr, addDays) {
			dateStr = dateStr.split('/').join('');
			var year    = dateStr.substring(0,4);
			var month = dateStr.substring(4,6);
			var day     = dateStr.substring(6,8);
			var dt = new Date(year, month - 1, day);
			var baseSec = dt.getTime();
			var addSec = addDays * 86400000;//日数 * 1日のミリ秒数
			var targetSec = baseSec + addSec;
			dt.setTime(targetSec);
			return dt;
		},
		
	/*
	 * 日付の型と書式変換
	 * date 日付(date型)
	 * return 日付(文字列 yyyy/mm/dd)
	 */
		getDateString : function(date){
			var year    = date.getFullYear();
			var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() - 0 + 1)  : (date.getMonth() - 0 + 1);
			var day     = date.getDate()   < 10 ? "0" + date.getDate()    : date.getDate();
			return year + "/" + month + "/" + day;
		}
	};
});