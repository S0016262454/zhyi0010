sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"zhyi0010/commons/zhyi0010_0010.commons",
	"zhyi0010/model/zhyi0010_0010.model",
	"zhyi0010/utils/zhyi0010_0010.utils",
	"zhyi0010/utils/zhyi0010_0020.utils",
	"zhyi0010/utils/zhyi0010_0030.utils",
	"zhyi0010/utils/zhyi0010_0040.utils",
	"zhyi0010/utils/zhyi0010_0050.utils",
	"zhyi0010/utils/zhyi0010_0060.utils",
	"zhyi0010/utils/zhyi0010_0070.utils"
], function(UIComponent,
			Device,
			commons,
			models,
			utils0010,
			utils0020,
			utils0030,
			utils0040,
			utils0050,
			utils0060,
			utils0070) {

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
            var value = "1１?？AＡ!！&＆#＃";		//value変換前
            value = value.toOneByteAlphaNumeric();	//value変換後(戻り値)
            var sampleDate = new Date(2016,10,24);	//Date型のデータ sampleDate

			jQuery.sap.log.setLevel(jQuery.sap.log.Level.ERROR);
            jQuery.sap.log.error("This should never have happened!");
            jQuery.sap.log.error("001/getCommaNoFormat●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0010.getCommaNoFormat("1,2,3,4,56,789"));
            jQuery.sap.log.error("002/getCommaFormat●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0010.getCommaFormat("123123123123123"));
            jQuery.sap.log.error("003/getToNum●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0010.getToNum("123４５６"));
            jQuery.sap.log.error("004/isNumeric●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0010.isNumeric("123"));
            jQuery.sap.log.error("005/toOneByteAlphaNumeric●●●●●●●●●●●●●●●●●●●●●●●●：" + value);
//保留		jQuery.sap.log.error("006/encodeURIComponentSalesOrder●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0040.encodeURIComponentSalesOrder(～～～));
            jQuery.sap.log.error("007/localStorageSetItem●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0050.localStorageSetItem("AAA","6"));
            jQuery.sap.log.error("008/localStorageGetItem●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0050.localStorageGetItem("AAA"));
            jQuery.sap.log.error("009/getLength●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0060.getLength("これは10！"));
            jQuery.sap.log.error("010/convertTrimPadding●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0060.convertTrimPadding("AAA",5));
//ボツ      jQuery.sap.log.error("011/editLenB●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0060.editLenB(～～～));
			jQuery.sap.log.error("012/multiply　10*5=●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0030.multiply(10,5));
			jQuery.sap.log.error("013/divide　10/5=●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0030.divide(10,5));
			jQuery.sap.log.error("014/add　10000+5=●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0030.add(10000,5));
			jQuery.sap.log.error("015/subtract　10-5=●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0030.subtract(10,5));
			jQuery.sap.log.error("016/getMathNum●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0030.getMathNum(3.14000000,50.2000));
			jQuery.sap.log.error("017/zeroShift●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0030.zeroShift(100.01000000));
			jQuery.sap.log.error("018/getMonthEndDay●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0070.getMonthEndDay(2016,11));
			jQuery.sap.log.error("019/computeMonth●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0070.computeMonth(2016, 10, 22, 2));
			jQuery.sap.log.error("020/isCurrentDate●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0070.isCurrentDate(sampleDate,"20161101","20161130"));
			jQuery.sap.log.error("021/computeDate●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0070.computeDate("2016/11/22",3));
			jQuery.sap.log.error("022/dateFormat●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0060.dateFormat("20161122"));
			jQuery.sap.log.error("023/timeFormat●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0060.timeFormat("103015"));
			jQuery.sap.log.error("024/postCodeFormat●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0060.postCodeFormat("1234567"));
			jQuery.sap.log.error("025/getDateString●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0070.getDateString(sampleDate));
			jQuery.sap.log.error("026/mathFloat●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0030.mathFloat(123.456789,2,"round"));
			jQuery.sap.log.error("027/getByte●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0010.getByte("あ"));
			jQuery.sap.log.error("028/getDateString●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0070.getDateString(sampleDate));
			jQuery.sap.log.error("029/convertNumString●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0010.convertNumString("1234.5060",10,6));
			jQuery.sap.log.error("030/makeText●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0010.makeText("12345",10,true));
			jQuery.sap.log.error("031/addSlash●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0010.addSlash("12345"));
			jQuery.sap.log.error("032/floor_scale●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0030.floor_scale(5.5,5));
			jQuery.sap.log.error("033/round_scale●●●●●●●●●●●●●●●●●●●●●●●●：" + utils0030.round_scale(5.5,5));
        }
	});
});