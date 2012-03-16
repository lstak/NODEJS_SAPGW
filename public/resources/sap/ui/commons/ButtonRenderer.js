/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.Button
jQuery.sap.declare("sap.ui.commons.ButtonRenderer");

/**
 * @class
 * @author SAP - TD Core UI&AM UI Infra
 * @version 1.2.0
 * @static
 */
sap.ui.commons.ButtonRenderer = {
};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.core.Control} oButton An object representation of the control that should be rendered.
 */
sap.ui.commons.ButtonRenderer.render = function(oRenderManager, oButton) {
	var rm = oRenderManager,
		r = sap.ui.commons.ButtonRenderer;

	// return immediately if control is invisible
	if (!oButton.getVisible()) {
		return;
	}

	rm.addClass("sapUiBtn");

	// button is rendered as a "<button>" element
	rm.write("<button type=\"button\""); // otherwise this turns into a submit button in IE8
	rm.writeControlData(oButton);
	if(oButton.getTooltip_AsString()) {
		rm.writeAttributeEscaped("title", oButton.getTooltip_AsString());
	}

	//styling
	if (oButton.getStyled()) {
		rm.addClass("sapUiBtnS");	
	}

	if (oButton.getLite()) {
		rm.addClass("sapUiBtnLite");	
	}else{
		rm.addClass("sapUiBtnNorm");	
	}

	var sStyle = oButton.getStyle();
	
	if (sStyle != "" && sStyle != sap.ui.commons.ButtonStyle.Default) {
		rm.addClass("sapUiBtn"+jQuery.sap.escapeHTML(sStyle));	
	}

	//ARIA
	rm.writeAccessibilityState(oButton, {disabled: !oButton.getEnabled()});
	rm.writeAttribute('role', 'button');

	if (!oButton.getEnabled()) {
		rm.write(" tabIndex=\"-1\"");
		rm.addClass("sapUiBtnDsbl");
	} else {
		rm.write(" tabIndex=\"0\"");
		rm.addClass("sapUiBtnStd");
	}

	var bImageOnly = false;
	if (!oButton.getText() && oButton.getIcon()) { // icon, but no text => reduce padding
		rm.addClass("sapUiBtnIconOnly");
		bImageOnly = true; // only the image is there, so it must have some meaning
	}

	if (oButton.getWidth() && oButton.getWidth() != '') {
		rm.addStyle("width", oButton.getWidth());
		rm.addClass("sapUiBtnFixedWidth");
	}
	if (oButton.getHeight() && oButton.getHeight() != '') {
		rm.addStyle("height", oButton.getHeight());
	}
	rm.writeStyles();

	if(this.renderButtonAttributes){
		this.renderButtonAttributes(rm, oButton);
	}

	// feature-dependent CSS class, written for browsers not understanding CSS gradients (=IE8, IE9)
	// required to avoid a large number of browser selectors which is needed to NOT serve filter:... to IE10
	if (jQuery.browser.msie && (!document.documentMode || document.documentMode < 10)) {
		rm.addClass("sapUiBtnNoGradient");
	}

	rm.writeClasses();

	rm.write(">");

	if(this.renderButtonContentBefore){
		this.renderButtonContentBefore(rm, oButton);
	}

	if (oButton.getIcon() && oButton.getIconFirst()) {
		this.writeImgHtml(rm, oButton, bImageOnly);
	}

	// write the button label
	if (oButton.getText()) {
		if (!oButton.getIcon() && !this.renderButtonContentBefore && !this.renderButtonContentAfter) {
			rm.writeEscaped(oButton.getText());
		} else { // if there is an icon, an additional span is required
			rm.write("<span class=\"sapUiBtnTxt\">");
			rm.writeEscaped(oButton.getText());
			rm.write("</span>");
		}
	}

	if (oButton.getIcon() && !oButton.getIconFirst()) {
		this.writeImgHtml(rm, oButton, bImageOnly);
	}

	if(this.renderButtonContentAfter){
		this.renderButtonContentAfter(rm, oButton);
	}

	// close button
	rm.write("</button>");
};

/**
 * Function called by button control on mouse down event.
 */
sap.ui.commons.ButtonRenderer.onactive = function(oButton) {
	jQuery.sap.byId(oButton.getId()).addClass("sapUiBtnAct").removeClass("sapUiBtnStd");
};

/**
 * Function called by button control on mouse up event.
 */
sap.ui.commons.ButtonRenderer.ondeactive = function(oButton) {
	jQuery.sap.byId(oButton.getId()).addClass("sapUiBtnStd").removeClass("sapUiBtnAct");
};

/**
 * Function called by button control on blur.
 */
sap.ui.commons.ButtonRenderer.onblur = function(oButton) {
	if (jQuery.browser.msie) {
		sap.ui.commons.ButtonRenderer.onmouseout(oButton);
	}
};

/**
 * Function called when mouse leaves button
 */
sap.ui.commons.ButtonRenderer.onmouseout = function(oButton) {
	jQuery.sap.byId(oButton.getId()).removeClass("sapUiBtnAct");
	jQuery.sap.byId(oButton.getId()).addClass("sapUiBtnStd");
};

/**
 * HTML for icon
 */
sap.ui.commons.ButtonRenderer.writeImgHtml = function(oRenderManager, oButton, bImageOnly) {
	var rm = oRenderManager,
		iconUrl = oButton.getIcon();

	rm.write("<img");
	rm.writeAttribute("id", oButton.getId() + "-img");
	rm.writeAttributeEscaped("src", iconUrl);
	if(oButton.getTooltip_AsString() && !oButton.getText()) {
		rm.writeAttributeEscaped("alt", oButton.getTooltip_AsString());
	} else {
		rm.writeAttribute("alt", ""); // there must be an ALT attribute
	}

	if (!bImageOnly) {
		rm.writeAttribute("role", "presentation");
	}

	rm.addClass("sapUiBtnIco");
	if (oButton.getText()) { // only add a distance to the text if there is text
		if (oButton.getIconFirst()) {
			rm.addClass("sapUiBtnIcoL");
		} else {
			rm.addClass("sapUiBtnIcoR");
		}
	}
	rm.writeClasses();

	rm.write("/>");
};