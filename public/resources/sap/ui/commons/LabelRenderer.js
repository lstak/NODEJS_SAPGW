/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.Label
jQuery.sap.declare("sap.ui.commons.LabelRenderer");
jQuery.sap.require("sap.ui.core.Renderer");


/**
 * @class
 *
 * @author SAP - TD Core UI&AM UI Infra
 * @version 0.1
 * @static
 */
sap.ui.commons.LabelRenderer = {
//	sap.ui.core.Renderer.apply(this, arguments);
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render-output-buffer.
 * @param {sap.ui.core.Control} oLabel An object representation of the control that should be rendered.
 */
sap.ui.commons.LabelRenderer.render = function(oRenderManager, oLabel) {
	// Some convenience variables.
	var rm = oRenderManager;
	var r = sap.ui.commons.LabelRenderer;

	// Return immediately if control is invisible
	if (!oLabel.getVisible()) {
		return;
	}

	var myStyles = "";

	rm.write("<label");
	rm.writeControlData(oLabel);

	if (oLabel.getLabelFor()) {
		var oFor = sap.ui.getCore().byId(oLabel.getLabelFor());
		rm.write(" for=\"");
		// for some controls the label must point to an special HTML element, not the outer one. 
		if ( oFor && oFor.getIdForLabel) {
			rm.write(oFor.getIdForLabel());
		} else{
			rm.write(oLabel.getLabelFor());
		}
		rm.write("\"");

		// check whether a 'required' marker is needed
		// control must exist, have a getter for property 'required' and a boolean value of true
		if ( oFor && oFor.getRequired && oFor.getRequired() === true ) {
			rm.addClass('sapUiLblReq');
		}
	}

	// Styles
	rm.addClass("sapUiLbl");
	if (oLabel.getDesign() == sap.ui.commons.LabelDesign.Bold) {
		rm.addClass("sapUiLblEmph");
	}

	// Text direction
	var oTextDir = oLabel.getTextDirection();
	if (oTextDir) {
		rm.writeAttribute("dir", oTextDir);
	}

	// Style for text alignment
	var oTextAlign = oLabel.getTextAlign();
	if(oTextAlign) {
		myStyles += "text-align:" + r.getTextAlign(oTextAlign, oTextDir) + ";";
	}

	// Style for width
	var sWidth = oLabel.getWidth();
	if(sWidth) {
		myStyles += "width:" + sWidth + ";";
	}

	rm.writeAttribute("style", myStyles);
	rm.writeClasses();

	// Close start tag
	rm.write(">");

	// Get image fragment if there is one, and write
	if (oLabel.getIcon()) {
		this.writeImgHtml(rm, oLabel);
	}

	// Write the label text
	if (oLabel.getText()) {
		if (!oLabel.getIcon()) {
			rm.writeEscaped(oLabel.getText());
		} else { // if there is an icon, an additional span is required
			rm.write("<span class=\"sapUiLblTxt\">");
			rm.writeEscaped(oLabel.getText());
			rm.write("</span>");
		}
	}

	// Close tag
	rm.write("</label>");
};


sap.ui.commons.LabelRenderer.writeImgHtml = function(oRenderManager, oLabel) {
	var rm = oRenderManager;
	var iconUrl = oLabel.getIcon();
	var oConfig = oRenderManager.getConfiguration();
	rm.write("<img");
	rm.writeAttributeEscaped("src", iconUrl);
	rm.writeAttributeEscaped("title", oLabel.getText());
	rm.addClass("sapUiLblIco");
	if (oLabel.getTextDirection()=="RTL" || (oLabel.getTextDirection()=="Inherit" && oConfig.getRTL())) {
		rm.addClass("sapUiLblIcoR");
	} else {
		rm.addClass("sapUiLblIcoL");
	}
	rm.writeClasses();
	rm.write("/>");
};

/**
 * Dummy inheritance of static methods/functions.
 * @see sap.ui.core.Renderer.getTextAlign
 * @private
 */
sap.ui.commons.LabelRenderer.getTextAlign = sap.ui.core.Renderer.getTextAlign;
