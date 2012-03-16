/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Label.
jQuery.sap.declare("sap.ui.commons.Label");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Label.
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
 * <li>design : sap.ui.commons.LabelDesign</li>
 * <li>textDirection : sap.ui.core.TextDirection</li>
 * <li>wrapping : boolean</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>text : string</li>
 * <li>visible : boolean</li>
 * <li>icon : string</li>
 * <li>textAlign : sap.ui.core.TextAlign</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>labelFor : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * 
 * Is used for labeling other controls. The API provides formatting options, for example for bold display or alignment. A label can have an icon.
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.Label = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.Label.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.Label. 
 * Resulting metadata can be obtained via sap.ui.commons.Label.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.Label", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getDesign", "setDesign", "getTextDirection", "setTextDirection", "getWrapping", "setWrapping", "getWidth", "setWidth", "getText", "setText", "getVisible", "setVisible", "getIcon", "setIcon", "getTextAlign", "setTextAlign", 
    // aggregations
    
    // associations
    "getLabelFor", "setLabelFor"
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "design" : {name : "design", type : "sap.ui.commons.LabelDesign", group : "Appearance", defaultValue : sap.ui.commons.LabelDesign.Standard},
    "textDirection" : {name : "textDirection", type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
    "wrapping" : {name : "wrapping", type : "boolean", group : "Appearance", defaultValue : false},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : ''},
    "text" : {name : "text", type : "string", group : "Misc", defaultValue : ''},
    "visible" : {name : "visible", type : "boolean", group : "Behavior", defaultValue : true},
    "icon" : {name : "icon", type : "string", group : "Appearance", defaultValue : null},
    "textAlign" : {name : "textAlign", type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin}
  },
  
  aggregations : {},
  associations : {
    "labelFor" : {name : "labelFor", type : "sap.ui.core.Control", multiple : false}
  },
  events : {}

});	


/**
 * Getter for property <code>design</code>.
 * 
 * Labels can have bold format.
 * 
 *
 * Default value is <code>sap.ui.commons.LabelDesign.Standard</code>
 *
 * @return {sap.ui.commons.LabelDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getDesign = function() {
	return this.getProperty("design");
};

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>sap.ui.commons.LabelDesign.Standard</code> 
 *
 * @param {sap.ui.commons.LabelDesign} oDesign  new value for property <code>design</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Label.prototype.setDesign = function(oDesign) {
	this.setProperty("design", oDesign);
	return this;
};


/**
 * Getter for property <code>textDirection</code>.
 * 
 * Options for the text direction are RTL and LTR. Alternatively, the control can inherit the text direction from its parent container.
 * 
 *
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getTextDirection = function() {
	return this.getProperty("textDirection");
};

/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>sap.ui.core.TextDirection.Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Label.prototype.setTextDirection = function(oTextDirection) {
	this.setProperty("textDirection", oTextDirection);
	return this;
};


/**
 * Getter for property <code>wrapping</code>.
 * 
 * Specifies whether a line wrapping shall be displayed when the text value is longer than the width (feature support in preparation)
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>wrapping</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getWrapping = function() {
	return this.getProperty("wrapping");
};

/**
 * Setter for property <code>wrapping</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bWrapping  new value for property <code>wrapping</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Label.prototype.setWrapping = function(bWrapping) {
	this.setProperty("wrapping", bWrapping);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * 
 * Control width as common CSS-size (px or % as unit, for example).
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Label.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>text</code>.
 * 
 * Text to be displayed.
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Label.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * 
 * Invisible labels are not rendered.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Label.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>icon</code>.
 * 
 * Icon to be displayed in the control.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getIcon = function() {
	return this.getProperty("icon");
};

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Label.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon);
	return this;
};


/**
 * Getter for property <code>textAlign</code>.
 * 
 * Available alignment settings are "Begin", "Center", "End", "Left", and "Right".
 * 
 *
 * Default value is <code>sap.ui.core.TextAlign.Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * 
 */
sap.ui.commons.Label.prototype.getTextAlign = function() {
	return this.getProperty("textAlign");
};

/**
 * Setter for property <code>textAlign</code>.
 *
 * Default value is <code>sap.ui.core.TextAlign.Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oTextAlign  new value for property <code>textAlign</code>
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Label.prototype.setTextAlign = function(oTextAlign) {
	this.setProperty("textAlign", oTextAlign);
	return this;
};


/**
 * Association to the labeled control.
 * By default the label set the for attribute to the ID of the labeled control. This can be changed implementing function getIdForLabel on the labelled control.
 *
 * @return {string} Id of the element which is the current target of the <code>labelFor</code> association, or null
 * @public
 */
sap.ui.commons.Label.prototype.getLabelFor = function() {
	return this.getAssociation("labelFor", null);
};

/**
 * Association to the labeled control.
 * By default the label set the for attribute to the ID of the labeled control. This can be changed implementing function getIdForLabel on the labelled control.
 *
 * @param {string | sap.ui.core.Control} vLabelFor 
 *    Id of an element which becomes the new target of this <code>labelFor</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.ui.commons.Label} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Label.prototype.setLabelFor = function(vLabelFor) {
	this.setAssociation("labelFor", vLabelFor);
	return this;
};


	
// Start of sap/ui/commons/Label.js
