/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.TextView
jQuery.sap.declare("sap.ui.commons.TextViewRenderer");
jQuery.sap.require("sap.ui.core.Renderer");

/**
 * @class TextView renderer.
 * @author SAP AG
 * @static
 */
sap.ui.commons.TextViewRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.core.Control} oTextView An object representation of the control that should be rendered.
 */
sap.ui.commons.TextViewRenderer.render = function(oRenderManager, oTextView) {

	var rm = oRenderManager;
	var r = sap.ui.commons.TextViewRenderer;

	// return immediately if control is invisible
	if (!oTextView.getVisible()) {
		return;
	}

	// Get parameters
	var enabled = oTextView.getEnabled() === true,
		oDesign = oTextView.getDesign(),
		tabIndex = 0;

	// Enable/disable
	if(!enabled) {
		tabIndex = -1;
		rm.addClass("sapUiTvDsbl");
		oTextView.allowTextSelection(false);
	}
	// Show error/warning states if they are enabled
	else {
		// error/warning state
		switch (oTextView.getSemanticColor()){
		case (sap.ui.commons.TextViewColor.Negative) :
			rm.addClass('sapUiTvErr');
			break;
		case (sap.ui.commons.TextViewColor.Positive) :
			rm.addClass('sapUiTvSucc');
			break;
		case (sap.ui.commons.TextViewColor.Critical) :
			rm.addClass('sapUiTvWarn');
			break;
		}
	}

	// Styles
	var TextViewDesign = sap.ui.commons.TextViewDesign;
	if (oDesign != TextViewDesign.Standard) {
		if (oDesign === TextViewDesign.Bold) {
			rm.addClass("sapUiTvEmph");
		} else if (oDesign === TextViewDesign.H1) {
			rm.addClass("sapUiTvH1");
		} else if (oDesign === TextViewDesign.H2) {
			rm.addClass("sapUiTvH2");
		} else if (oDesign === TextViewDesign.H3) {
			rm.addClass("sapUiTvH3");
		} else if (oDesign === TextViewDesign.H4) {
			rm.addClass("sapUiTvH4");
		} else if (oDesign === TextViewDesign.Italic) {
			rm.addClass("sapUiTvItalic");
		} else if (oDesign === TextViewDesign.Small) {
			rm.addClass("sapUiTvSmall");
		} else if (oDesign === TextViewDesign.Monospace) {
			rm.addClass("sapUiTvMono");
		} else if (oDesign === TextViewDesign.Underline) {
			rm.addClass("sapUiTvULine");
		}
	}

	if(!oTextView.getWrapping()){
		rm.addStyle("white-space", "nowrap");
		rm.addStyle("overflow", "hidden");
		rm.addStyle("text-overflow", "ellipsis");
	}

	if (oTextView.getWidth() && oTextView.getWidth() != '') {
		rm.addStyle("width", oTextView.getWidth());
	}

	rm.write("<span");
	rm.writeControlData(oTextView);

	rm.addClass("sapUiTv");

	if (oTextView.getTooltip_AsString()) {
		rm.writeAttributeEscaped("title", oTextView.getTooltip_AsString());
	}else if (oTextView.getText()) {
		rm.writeAttributeEscaped("title", oTextView.getText());
	}

	// Appearance
	var oTextDir = oTextView.getTextDirection();
	if(oTextDir) {
		rm.writeAttribute("dir", oTextDir);
	}

	var oTextAlign = oTextView.getTextAlign();
	if(oTextAlign) {
		rm.addStyle("text-align", r.getTextAlign(oTextAlign, oTextDir));
	}

	// Make control focusable via tab
	// according to Stefan Schnabel there shall not be a tabstop   rm.writeAttribute('tabindex', tabIndex);
	// Set Accessible Role
	rm.writeAttribute('role', oTextView.getAccessibleRole().toLowerCase());
	rm.writeAccessibilityState(oTextView, {invalid: oTextView.getSemanticColor() == sap.ui.commons.TextViewColor.Negative,
										   disabled: !oTextView.getEnabled()});

	rm.writeClasses();
	rm.writeStyles();
	rm.write(">");
	rm.write(oTextView.getTextAsHTML());
	rm.write("</span>");

};

/**
 * Dummy inheritance of static methods/functions.
 * @see sap.ui.core.Renderer.getTextAlign
 * @private
 */
sap.ui.commons.TextViewRenderer.getTextAlign = sap.ui.core.Renderer.getTextAlign;