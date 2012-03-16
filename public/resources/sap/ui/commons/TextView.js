/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.TextView.
jQuery.sap.declare("sap.ui.commons.TextView");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new TextView.
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
 * <li>textDirection : sap.ui.core.TextDirection</li>
 * <li>visible : boolean</li>
 * <li>enabled : boolean</li>
 * <li>helpId : string</li>
 * <li>accessibleRole : sap.ui.core.AccessibleRole</li>
 * <li>design : sap.ui.commons.TextViewDesign</li>
 * <li>wrapping : boolean</li>
 * <li>semanticColor : sap.ui.commons.TextViewColor</li>
 * <li>textAlign : sap.ui.core.TextAlign</li>
 * <li>width : sap.ui.core.CSSSize</li></ul>
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
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Is used to display some continous text. The control can inherit the text direction from its parent control.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.TextView = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.TextView.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.TextView. 
 * Resulting metadata can be obtained via sap.ui.commons.TextView.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.TextView", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getText", "setText", "bindText", "unbindText", "getTextDirection", "setTextDirection", "getVisible", "setVisible", "getEnabled", "setEnabled", "getHelpId", "setHelpId", "getAccessibleRole", "setAccessibleRole", "getDesign", "setDesign", "getWrapping", "setWrapping", "getSemanticColor", "setSemanticColor", "getTextAlign", "setTextAlign", "getWidth", "setWidth"
    // aggregations
    
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "text" : {name : "text", type : "string", group : "", defaultValue : ''},
    "textDirection" : {name : "textDirection", type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
    "visible" : {name : "visible", type : "boolean", group : "Behavior", defaultValue : true},
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "helpId" : {name : "helpId", type : "string", group : "Behavior", defaultValue : ''},
    "accessibleRole" : {name : "accessibleRole", type : "sap.ui.core.AccessibleRole", group : "Accessibility", defaultValue : sap.ui.core.AccessibleRole.Document},
    "design" : {name : "design", type : "sap.ui.commons.TextViewDesign", group : "Data", defaultValue : sap.ui.commons.TextViewDesign.Standard},
    "wrapping" : {name : "wrapping", type : "boolean", group : "Appearance", defaultValue : true},
    "semanticColor" : {name : "semanticColor", type : "sap.ui.commons.TextViewColor", group : "Appearance", defaultValue : sap.ui.commons.TextViewColor.Default},
    "textAlign" : {name : "textAlign", type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>text</code>.
 * Text to be displayed.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Binder for property <code>text</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.bindText = function(sPath, fnFormatter, sMode) {
	this.bindProperty("text", sPath, fnFormatter, sMode);
	return this;
};

/**
 * Unbinder for property <code>text</code>.
 *
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.unbindText = function() {
	this.unbindProperty("text");
	return this;
};


/**
 * Getter for property <code>textDirection</code>.
 * Available options are LTR and RTL. Alternatively, the control can inherit the text direction from its parent control.
 *
 * Default value is <code>Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getTextDirection = function() {
	return this.getProperty("textDirection");
};

/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.setTextDirection = function(oTextDirection) {
	this.setProperty("textDirection", oTextDirection);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Invisible text views are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * When the control is disabled, it is greyed out and no longer focusable.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>helpId</code>.
 * Unique identifier used for help services.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>helpId</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getHelpId = function() {
	return this.getProperty("helpId");
};

/**
 * Setter for property <code>helpId</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sHelpId  new value for property <code>helpId</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.setHelpId = function(sHelpId) {
	this.setProperty("helpId", sHelpId);
	return this;
};


/**
 * Getter for property <code>accessibleRole</code>.
 * The ARIA role for the control.
 *
 * Default value is <code>Document</code>
 *
 * @return {sap.ui.core.AccessibleRole} the value of property <code>accessibleRole</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getAccessibleRole = function() {
	return this.getProperty("accessibleRole");
};

/**
 * Setter for property <code>accessibleRole</code>.
 *
 * Default value is <code>Document</code> 
 *
 * @param {sap.ui.core.AccessibleRole} oAccessibleRole  new value for property <code>accessibleRole</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.setAccessibleRole = function(oAccessibleRole) {
	this.setProperty("accessibleRole", oAccessibleRole);
	return this;
};


/**
 * Getter for property <code>design</code>.
 * Defines the visual appearance of the control.
 *
 * Default value is <code>Standard</code>
 *
 * @return {sap.ui.commons.TextViewDesign} the value of property <code>design</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getDesign = function() {
	return this.getProperty("design");
};

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>Standard</code> 
 *
 * @param {sap.ui.commons.TextViewDesign} oDesign  new value for property <code>design</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.setDesign = function(oDesign) {
	this.setProperty("design", oDesign);
	return this;
};


/**
 * Getter for property <code>wrapping</code>.
 * Disabled automatic wrapping of the text.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>wrapping</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getWrapping = function() {
	return this.getProperty("wrapping");
};

/**
 * Setter for property <code>wrapping</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bWrapping  new value for property <code>wrapping</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.setWrapping = function(bWrapping) {
	this.setProperty("wrapping", bWrapping);
	return this;
};


/**
 * Getter for property <code>semanticColor</code>.
 * Semantic color of the text View
 *
 * Default value is <code>Default</code>
 *
 * @return {sap.ui.commons.TextViewColor} the value of property <code>semanticColor</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getSemanticColor = function() {
	return this.getProperty("semanticColor");
};

/**
 * Setter for property <code>semanticColor</code>.
 *
 * Default value is <code>Default</code> 
 *
 * @param {sap.ui.commons.TextViewColor} oSemanticColor  new value for property <code>semanticColor</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.setSemanticColor = function(oSemanticColor) {
	this.setProperty("semanticColor", oSemanticColor);
	return this;
};


/**
 * Getter for property <code>textAlign</code>.
 * Sets the horizontal alignment of the text.
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.core.TextAlign} the value of property <code>textAlign</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getTextAlign = function() {
	return this.getProperty("textAlign");
};

/**
 * Setter for property <code>textAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oTextAlign  new value for property <code>textAlign</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.setTextAlign = function(oTextAlign) {
	this.setProperty("textAlign", oTextAlign);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * Width of the TextView
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.TextView.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.TextView} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextView.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


// Start of sap/ui/commons/TextView.js
/**
 * returns the text of the TextView as HTML markup (escaped and and the line
 * breaks are converted into &lt;br&gt; tags.
 * @returns {String} text as HTML or an empty string if undefined
 * @public
 */
sap.ui.commons.TextView.prototype.getTextAsHTML = function(sTextToConvert) {
	var sText = sTextToConvert ? sTextToConvert : this.getText();
	return sText ? jQuery.sap.escapeHTML(sText).replace(/(\r\n)|(\n\r)|\r|\n/g,"<br />") : "";
};


/*
 * @see JSDoc generated by SAPUI5 Control API generator
 */
sap.ui.commons.TextView.prototype.setText = function(sText) {
	this.setProperty("text", sText, true); // no re-rendering!
	var oDomRef = this.getDomRef();
	if (oDomRef) {
		oDomRef.innerHTML = this.getTextAsHTML();
		// when no tooltip is applied use the text as tooltip
		if (!this.getTooltip_AsString() && sText) {
			oDomRef.title = sText;
		}
	}
	return this;
};