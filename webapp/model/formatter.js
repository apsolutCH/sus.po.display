sap.ui.define([], function() {
	"use strict";

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit: function(sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},
		stringToDate: function(sValue) {
			var sTemp = sValue.substr(0, 4) + "/" + sValue.substr(4, 2) + "/" + sValue.substr(6, 2);
			sValue = sTemp;
			return sValue;
		},
		percentage: function(sValue) {
			if (!sValue) {
				return "0%";
			} else {
				return sValue + "%";
			}
		},
		concatenate: function(sPart1, sPart2) {
			if (sPart1 && sPart2 ) {
				return sPart1 + " & " + sPart2;
			} else {
				return sPart1 + sPart2;
			} 
		}

	};

});