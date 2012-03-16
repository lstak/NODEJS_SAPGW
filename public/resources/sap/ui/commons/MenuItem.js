/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.MenuItem.
jQuery.sap.declare("sap.ui.commons.MenuItem");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.MenuItemBase");

/**
 * Constructor for a new MenuItem.
 * 
 * It accepts one JSON-like object (object literal) as parameter <code>mSettings</code> that can define values for any property, 
 * aggregation, association or event.<br/> 
 * If for a control a specific name is ambiguous (a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order.<br/> 
 * To resolve ambiguities, add an "aggregation:", "association:" or "event:" prefix to the key in the JSON object.<br/>
 * Allowed values are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>text : string</li>
 * <li>icon : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * For further parameters see {@link sap.ui.commons.MenuItemBase#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Smallest unit in the menu hierarchy. An item can be a direct part of a menu bar, of a menu, or of a sub menu.
 * 
 * @extends sap.ui.commons.MenuItemBase
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.MenuItem = function (sId, mSettings) {
	sap.ui.commons.MenuItemBase.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.MenuItem.prototype = jQuery.sap.newObject(sap.ui.commons.MenuItemBase.prototype);

/*
 * Describe the sap.ui.commons.MenuItem. 
 * Resulting metadata can be obtained via sap.ui.commons.MenuItem.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.MenuItem", {

  // ---- object ----
  baseType : "sap.ui.commons.MenuItemBase",
  publicMethods : [
    // properties 
    "getText", "setText", "getIcon", "setIcon"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "text" : {name : "text", type : "string", group : "Appearance", defaultValue : ''},
    "icon" : {name : "icon", type : "string", group : "Appearance", defaultValue : ''}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>text</code>.
 * 
 * Item text
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.MenuItem.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.MenuItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuItem.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>icon</code>.
 * 
 * Icon to be displayed
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.commons.MenuItem.prototype.getIcon = function() {
	return this.getProperty("icon");
};

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.commons.MenuItem} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuItem.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon);
	return this;
};


// Start of sap/ui/commons/MenuItem.js
sap.ui.commons.MenuItem.prototype.render = function(oRenderManager, oItem, oMenu, oInfo){
	var rm = oRenderManager;
	var oSubMenu = oItem.getSubmenu();
	rm.write("<li ");
	rm.writeAttribute("class", "sapUiMnuItm" + (oMenu.checkEnabled(oItem) ? "" : " sapUiMnuItmDsbl"));
	if(oItem.getTooltip_AsString()) {
		rm.writeAttributeEscaped("title", oItem.getTooltip_AsString());
	}
	rm.writeControlData(oItem);

	// ARIA
	if(oInfo.bAccessible){
		rm.writeAttribute("role", "menuitem");
		rm.writeAttribute("aria-labelledby", oMenu.getId()+" "+this.getId()+"-txt "+this.getId()+"-scuttxt");
		rm.writeAttribute("aria-disabled", !oMenu.checkEnabled(oItem));
		rm.writeAttribute("aria-posinset", oInfo.iItemNo);
		rm.writeAttribute("aria-setsize", oInfo.iTotalItems);
		if (oSubMenu) {
			rm.writeAttribute("aria-haspopup", true);
		}
	}

	// Left border
	rm.write("><div class=\"sapUiMnuItmL\"></div>");

	// icon/check column
	rm.write("<div class=\"sapUiMnuItmIco\">");
	if (oItem.getIcon()) {
		rm.write("<img");
		rm.writeAttributeEscaped("src", oItem.getIcon());
		rm.write("/>");
	}
	rm.write("</div>");

	// Text column
	rm.write("<div id=\""+this.getId()+"-txt\" class=\"sapUiMnuItmTxt\">");
	rm.writeEscaped(oItem.getText());
	rm.write("</div>");

	// Shortcut column
	rm.write("<div id=\""+this.getId()+"-scuttxt\" class=\"sapUiMnuItmSCut\"></div>");

	// Submenu column
	rm.write("<div class=\"sapUiMnuItmSbMnu\">");
	if(oSubMenu) {
		rm.write("<div>&nbsp;</div>");
	}
	rm.write("</div>");

	// Right border
	rm.write("<div class=\"sapUiMnuItmR\"></div>");

	rm.write("</li>");
};

/**
 * @protected
 */
sap.ui.commons.MenuItem.prototype.hover = function(bHovered, oMenu){
	if(bHovered){
		jQuery(this.getDomRef()).addClass("sapUiMnuItmHov");
	}else{
		jQuery(this.getDomRef()).removeClass("sapUiMnuItmHov");
	}
};