/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides default renderer for control sap.ui.commons.Toolbar
jQuery.sap.declare("sap.ui.commons.ToolbarRenderer");

/**
 * @class
 *
 * @static
 */
sap.ui.commons.ToolbarRenderer = {
};

/**
 * Renders the HTML for the given toolbar using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager The RenderManager that can be used for writing to the render output buffer.
 * @param {sap.ui.commons.Toolbar} oToolbar An object representation of the control that should be rendered.
 */
sap.ui.commons.ToolbarRenderer.render = function(oRenderManager, oToolbar) {
	var r = sap.ui.commons.ToolbarRenderer;
	var rm = oRenderManager;
	jQuery.sap.assert(oToolbar instanceof sap.ui.commons.Toolbar, "ToolbarRenderer.render: oToolbar must be a toolbar");

	if (!oToolbar.getVisible()) {
		return;
	}

	rm.write("<div role='toolbar' tabindex='0'"); // Tab index required for ItemNavigation, the Toolbar is actually not tabable
	rm.writeControlData(oToolbar);
	if (oToolbar.getWidth()) {
		rm.addStyle("width", oToolbar.getWidth());
	}

	rm.addClass("sapUiTb");
	rm.addClass("sapUiTbDesign" + oToolbar.getDesign());
	if (oToolbar.getStandalone()) {
		rm.addClass("sapUiTbStandalone");
	}

	rm.writeStyles();
	rm.writeClasses();
	rm.write("><div class='sapUiTbCont'><div class='sapUiTbInner'>");


	// Render each item, also the hidden ones, as they might become visible when the toolbar is resized
	var aItems = oToolbar.getItems();
	var iLength = aItems.length;
	for (var i = 0; i < iLength; i++) {
		var oToolbarItem = aItems[i];
		if (oToolbarItem) {
			jQuery.sap.assert(oToolbarItem.getMetadata().isInstanceOf("sap.ui.commons.ToolbarItem"), "ToolbarRenderer.render: oToolbarItem must be a ToolbarItem");

			// Render ToolbarSeparator elements internally, dispatch rendering of real controls
			if (oToolbarItem instanceof sap.ui.commons.ToolbarSeparator) {
				sap.ui.commons.ToolbarRenderer.renderSeparator(rm, oToolbarItem);
			} else {
				rm.renderControl(oToolbarItem);
			}
		}
	}

	// Render the overflow menu button and the cover hiding it, if appropriate
	rm.write('<div id="');
	rm.write(oToolbar.getId());
	rm.write('-mn"');
	rm.write(" class='sapUiTbOB' role='button' title='Toolbar Overflow'></div></div></div></div>"); // TODO: i18n, make translatable

};


/**
 * Renders the given ToolbarSeparator
 *
 * @param {sap.ui.core.RenderManager} oRm The RenderManager
 * @param {sap.ui.commons.ToolbarItem} oToolbarItem The ToolbarSeparator
 * @private
 */
sap.ui.commons.ToolbarRenderer.renderSeparator = function(oRm, oToolbarItem) {
	if (oToolbarItem.getDisplayVisualSeparator()) {
		oRm.write("<span ");
		oRm.writeElementData(oToolbarItem);
		oRm.write(" class='sapUiTbSeparator' role='separator'></span>");
	} else {
		oRm.write("<span ");
		oRm.writeElementData(oToolbarItem);
		oRm.write(" class='sapUiTbSpacer' role='separator'></span>");
	}
};


/**
 * Fills the overflow popup with the currently invisible toolbar items.
 *
 * @param {sap.ui.commons.Toolbar} oToolbar
 * @private
 */
sap.ui.commons.ToolbarRenderer.fillOverflowPopup = function(oToolbar) {
	var oPopupHolder = jQuery.sap.domById(oToolbar.getId() + "-pu");
	if (!oPopupHolder) {
		oPopupHolder = sap.ui.commons.ToolbarRenderer.initOverflowPopup(oToolbar).firstChild;
	}

	// Move all invisible items from the second row of the toolbar to the popup
	var iVisibleItems = oToolbar.getVisibleItemInfo().count;
	var oToolbarCont = oToolbar.getDomRef().firstChild.firstChild;
	var iPos = 0;
	var oChild = oToolbarCont.firstChild;
	var sOverflowButtonId = oToolbar.getId() + "-mn";
	while (oChild) {
		var nextChild = oChild.nextSibling;
		if (iPos >= iVisibleItems) {
			if (oChild.id == sOverflowButtonId) { // do not move overflow button and cover
				break;
			}

			oPopupHolder.appendChild(oChild);
		}
		oChild = nextChild;
		iPos++;
	}
};


/**
 * Creates the overflow popup inside the static area, but does not fill its contents (=no items).
 *
 * @param {sap.ui.commons.Toolbar} oToolbar
 * @private
 */
sap.ui.commons.ToolbarRenderer.initOverflowPopup = function(oToolbar) {
	var oStaticArea = sap.ui.getCore().getStaticAreaRef();
	var oPopupHolder = document.createElement("div");
	oPopupHolder.className = "sapUiTbDD sapUiTbDesignFlat";
	oPopupHolder.innerHTML = "<div id='" + oToolbar.getId() + "-pu' data-sap-ui=" + oToolbar.getId() + " tabindex='0'></div>";
	oStaticArea.appendChild(oPopupHolder);
	return oPopupHolder;
};


/**
 * Removes the toolbar items from the overflow popup and puts them back into the toolbar.
 *
 * @param {sap.ui.commons.Toolbar} oToolbar
 * @private
 */
sap.ui.commons.ToolbarRenderer.emptyOverflowPopup = function(oToolbar) {
	var oPopupHolder = jQuery.sap.domById(oToolbar.getId() + "-pu");
	var oOverflowButton = jQuery.sap.domById(oToolbar.getId() + "-mn");
	var oToolbarCont = oToolbar.getDomRef().firstChild.firstChild;
	while (oPopupHolder.hasChildNodes()) {
		oToolbarCont.insertBefore(oPopupHolder.firstChild, oOverflowButton);
	}
};


/**
 * Returns the area in which the overflow popup should be rendered.
 *
 * @param {sap.ui.commons.Toolbar} oToolbar The Toolbar whose popup area is requested
 *
 * @private
 */
sap.ui.commons.ToolbarRenderer.getPopupArea = function(oToolbar) {
	return jQuery.sap.domById(oToolbar.getId() + "-pu");
};

/**
 * @param {sap.ui.commons.Toolbar} oToolbar The Toolbar where the overflow button should be set active
 * @private
 */
sap.ui.commons.ToolbarRenderer.setActive = function(oToolbar) {
	jQuery.sap.byId(oToolbar.getId() + "-mn").addClass("sapUiTbOBAct");
};

/**
 * @param {sap.ui.commons.Toolbar} oToolbar The Toolbar where the overflow button should be set not active
 * @private
 */
sap.ui.commons.ToolbarRenderer.unsetActive = function(oToolbar) {
	jQuery.sap.byId(oToolbar.getId() + "-mn").removeClass("sapUiTbOBAct");
};