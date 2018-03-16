sap.ui.define([
		"com/apsolut/fiori/PO_display/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.apsolut.fiori.PO_display.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);