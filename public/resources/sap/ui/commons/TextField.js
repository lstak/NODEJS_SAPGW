/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.TextField.
jQuery.sap.declare("sap.ui.commons.TextField");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new TextField.
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
 * <li>value : string</li>
 * <li>textDirection : sap.ui.core.TextDirection</li>
 * <li>enabled : boolean</li>
 * <li>editable : boolean</li>
 * <li>visible : boolean</li>
 * <li>required : boolean</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>maxLength : int</li>
 * <li>valueState : sap.ui.core.ValueState</li>
 * <li>textAlign : sap.ui.core.TextAlign</li>
 * <li>imeMode : sap.ui.core.ImeMode</li>
 * <li>design : sap.ui.core.Design</li>
 * <li>helpId : string</li>
 * <li>accessibleRole : sap.ui.core.AccessibleRole</li>
 * <li>accessibleDescription : string</li>
 * <li>accessibleName : string</li>
 * <li>name : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>change : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>liveChange : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * Control is used to enter text.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.TextField = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.TextField.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.TextField. 
 * Resulting metadata can be obtained via sap.ui.commons.TextField.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.TextField", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  interfaces : ["sap.ui.commons.ToolbarItem"],
  publicMethods : [
    // properties 
    "getValue", "setValue", "bindValue", "unbindValue", "getTextDirection", "setTextDirection", "getEnabled", "setEnabled", "getEditable", "setEditable", "getVisible", "setVisible", "getRequired", "setRequired", "getWidth", "setWidth", "getMaxLength", "setMaxLength", "getValueState", "setValueState", "getTextAlign", "setTextAlign", "getImeMode", "setImeMode", "getDesign", "setDesign", "getHelpId", "setHelpId", "getAccessibleRole", "setAccessibleRole", "getAccessibleDescription", "setAccessibleDescription", "getAccessibleName", "setAccessibleName", "getName", "setName", 
    // aggregations
    
    // associations
    
    // events
    "attachChange", "detachChange", "attachLiveChange", "detachLiveChange", 
    // methods
    "focus", "getLiveValue"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "value" : {name : "value", type : "string", group : "Data", defaultValue : ''},
    "textDirection" : {name : "textDirection", type : "sap.ui.core.TextDirection", group : "Appearance", defaultValue : sap.ui.core.TextDirection.Inherit},
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "editable" : {name : "editable", type : "boolean", group : "Behavior", defaultValue : true},
    "visible" : {name : "visible", type : "boolean", group : "Behavior", defaultValue : true},
    "required" : {name : "required", type : "boolean", group : "Appearance", defaultValue : false},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "maxLength" : {name : "maxLength", type : "int", group : "Behavior", defaultValue : 0},
    "valueState" : {name : "valueState", type : "sap.ui.core.ValueState", group : "Data", defaultValue : sap.ui.core.ValueState.None},
    "textAlign" : {name : "textAlign", type : "sap.ui.core.TextAlign", group : "Appearance", defaultValue : sap.ui.core.TextAlign.Begin},
    "imeMode" : {name : "imeMode", type : "sap.ui.core.ImeMode", group : "Behavior", defaultValue : sap.ui.core.ImeMode.Auto},
    "design" : {name : "design", type : "sap.ui.core.Design", group : "Appearance", defaultValue : sap.ui.core.Design.Standard},
    "helpId" : {name : "helpId", type : "string", group : "Behavior", defaultValue : ''},
    "accessibleRole" : {name : "accessibleRole", type : "sap.ui.core.AccessibleRole", group : "Accessibility", defaultValue : sap.ui.core.AccessibleRole.Textbox},
    "accessibleDescription" : {name : "accessibleDescription", type : "string", group : "Accessibility", defaultValue : ''},
    "accessibleName" : {name : "accessibleName", type : "string", group : "Accessibility", defaultValue : ''},
    "name" : {name : "name", type : "string", group : "Misc", defaultValue : null}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "change" : "change", 
    "liveChange" : "liveChange"
  }

});	

sap.ui.commons.TextField.M_EVENTS = {'change':'change','liveChange':'liveChange'};


/**
 * Getter for property <code>value</code>.
 * Text inside the textfield
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>value</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getValue = function() {
	return this.getProperty("value");
};

/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sValue  new value for property <code>value</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setValue = function(sValue) {
	this.setProperty("value", sValue);
	return this;
};


/**
 * Binder for property <code>value</code>.
 *
 * @param {string} sPath path to a property in the model 
 * @param {function} [fnFormatter=null] the formatter function
 * @param {sap.ui.model.BindingMode} [sMode=Default] the binding mode to be used for this property binding (e.g. one way) 
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.bindValue = function(sPath, fnFormatter, sMode) {
	this.bindProperty("value", sPath, fnFormatter, sMode);
	return this;
};

/**
 * Unbinder for property <code>value</code>.
 *
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.unbindValue = function() {
	this.unbindProperty("value");
	return this;
};


/**
 * Getter for property <code>textDirection</code>.
 * Direction of the text. Possible values: rtl, ltr.
 *
 * Default value is <code>Inherit</code>
 *
 * @return {sap.ui.core.TextDirection} the value of property <code>textDirection</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getTextDirection = function() {
	return this.getProperty("textDirection");
};

/**
 * Setter for property <code>textDirection</code>.
 *
 * Default value is <code>Inherit</code> 
 *
 * @param {sap.ui.core.TextDirection} oTextDirection  new value for property <code>textDirection</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setTextDirection = function(oTextDirection) {
	this.setProperty("textDirection", oTextDirection);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * Switches enabled state of the control. Disabled fields have different colors, and can not be focused.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>editable</code>.
 * Switches edit state of the control. Read-only fields have different colors, depending on customer setting.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getEditable = function() {
	return this.getProperty("editable");
};

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setEditable = function(bEditable) {
	this.setProperty("editable", bEditable);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * Invisible controls are not rendered.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>required</code>.
 * Depending on theme the TextField is shown as required.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>required</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getRequired = function() {
	return this.getProperty("required");
};

/**
 * Setter for property <code>required</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bRequired  new value for property <code>required</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setRequired = function(bRequired) {
	this.setProperty("required", bRequired);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * Width of text field. When it is set (CSS-size such as % or px), this is the exact size. When left blank, the text field length defines the width.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>maxLength</code>.
 * Maximum number of characters. Value '0' means the feature is switched off.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>maxLength</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getMaxLength = function() {
	return this.getProperty("maxLength");
};

/**
 * Setter for property <code>maxLength</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iMaxLength  new value for property <code>maxLength</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setMaxLength = function(iMaxLength) {
	this.setProperty("maxLength", iMaxLength);
	return this;
};


/**
 * Getter for property <code>valueState</code>.
 * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success.
 *
 * Default value is <code>None</code>
 *
 * @return {sap.ui.core.ValueState} the value of property <code>valueState</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getValueState = function() {
	return this.getProperty("valueState");
};

/**
 * Setter for property <code>valueState</code>.
 *
 * Default value is <code>None</code> 
 *
 * @param {sap.ui.core.ValueState} oValueState  new value for property <code>valueState</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setValueState = function(oValueState) {
	this.setProperty("valueState", oValueState);
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
sap.ui.commons.TextField.prototype.getTextAlign = function() {
	return this.getProperty("textAlign");
};

/**
 * Setter for property <code>textAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.core.TextAlign} oTextAlign  new value for property <code>textAlign</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setTextAlign = function(oTextAlign) {
	this.setProperty("textAlign", oTextAlign);
	return this;
};


/**
 * Getter for property <code>imeMode</code>.
 * State of the Input Method Editor (IME).
 *
 * Default value is <code>Auto</code>
 *
 * @return {sap.ui.core.ImeMode} the value of property <code>imeMode</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getImeMode = function() {
	return this.getProperty("imeMode");
};

/**
 * Setter for property <code>imeMode</code>.
 *
 * Default value is <code>Auto</code> 
 *
 * @param {sap.ui.core.ImeMode} oImeMode  new value for property <code>imeMode</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setImeMode = function(oImeMode) {
	this.setProperty("imeMode", oImeMode);
	return this;
};


/**
 * Getter for property <code>design</code>.
 * Font type. Standard, Monospace
 *
 * Default value is <code>Standard</code>
 *
 * @return {sap.ui.core.Design} the value of property <code>design</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getDesign = function() {
	return this.getProperty("design");
};

/**
 * Setter for property <code>design</code>.
 *
 * Default value is <code>Standard</code> 
 *
 * @param {sap.ui.core.Design} oDesign  new value for property <code>design</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setDesign = function(oDesign) {
	this.setProperty("design", oDesign);
	return this;
};


/**
 * Getter for property <code>helpId</code>.
 * Unique identifier used for help service.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>helpId</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getHelpId = function() {
	return this.getProperty("helpId");
};

/**
 * Setter for property <code>helpId</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sHelpId  new value for property <code>helpId</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setHelpId = function(sHelpId) {
	this.setProperty("helpId", sHelpId);
	return this;
};


/**
 * Getter for property <code>accessibleRole</code>.
 * Accessibility role for the text field.
 *
 * Default value is <code>Textbox</code>
 *
 * @return {sap.ui.core.AccessibleRole} the value of property <code>accessibleRole</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getAccessibleRole = function() {
	return this.getProperty("accessibleRole");
};

/**
 * Setter for property <code>accessibleRole</code>.
 *
 * Default value is <code>Textbox</code> 
 *
 * @param {sap.ui.core.AccessibleRole} oAccessibleRole  new value for property <code>accessibleRole</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setAccessibleRole = function(oAccessibleRole) {
	this.setProperty("accessibleRole", oAccessibleRole);
	return this;
};


/**
 * Getter for property <code>accessibleDescription</code>.
 * Accessibility description for the text field.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>accessibleDescription</code>
 * @public
 * 
 * @deprecated Since version 1.1.0. 
 * not needed
 */
sap.ui.commons.TextField.prototype.getAccessibleDescription = function() {
	jQuery.sap.log.warning("Using deprecated property 'accessibleDescription'.");
	return this.getProperty("accessibleDescription");
};

/**
 * Setter for property <code>accessibleDescription</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sAccessibleDescription  new value for property <code>accessibleDescription</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.1.0. 
 * not needed
 */
sap.ui.commons.TextField.prototype.setAccessibleDescription = function(sAccessibleDescription) {
	jQuery.sap.log.warning("Using deprecated property 'accessibleDescription'.");
	this.setProperty("accessibleDescription", sAccessibleDescription);
	return this;
};


/**
 * Getter for property <code>accessibleName</code>.
 * Accessibility name for the text field.
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>accessibleName</code>
 * @public
 * 
 * @deprecated Since version 1.1.0. 
 * not needed
 */
sap.ui.commons.TextField.prototype.getAccessibleName = function() {
	jQuery.sap.log.warning("Using deprecated property 'accessibleName'.");
	return this.getProperty("accessibleName");
};

/**
 * Setter for property <code>accessibleName</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sAccessibleName  new value for property <code>accessibleName</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.1.0. 
 * not needed
 */
sap.ui.commons.TextField.prototype.setAccessibleName = function(sAccessibleName) {
	jQuery.sap.log.warning("Using deprecated property 'accessibleName'.");
	this.setProperty("accessibleName", sAccessibleName);
	return this;
};


/**
 * Getter for property <code>name</code>.
 * The 'name' property to be used in the HTML code (e.g. for HTML forms that send data to the server via 'submit').
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>name</code>
 * @public
 * 
 */
sap.ui.commons.TextField.prototype.getName = function() {
	return this.getProperty("name");
};

/**
 * Setter for property <code>name</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sName  new value for property <code>name</code>
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setName = function(sName) {
	this.setProperty("name", sName);
	return this;
};


/**
 * Event is fired when the text in the field has changed AND the focus leaves the TextField or the Enter key is pressed. 
 *
 * @name sap.ui.commons.TextField#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.newValue The new / changed value of the textfield.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.TextField</code>.<br/>
 * Event is fired when the text in the field has changed AND the focus leaves the TextField or the Enter key is pressed. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.attachChange = function(oData, fnFunction, oListener) {
	this.attachEvent("change", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.TextField</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.detachChange = function(fnFunction, oListener) {
	this.detachEvent("change", fnFunction, oListener);
	return this;	
};

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new / changed value of the textfield.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.TextField.prototype.fireChange = function(mArguments) {
	this.fireEvent("change", mArguments);
	return this;
};


/**
 * This event if fired during typing into the TextField and returns the currently enterted value. This is not the content of the value property. The value property is only updated by ENTER and by leaving the control. 
 *
 * @name sap.ui.commons.TextField#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.liveValue Current value of the Textfield.
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.ui.commons.TextField</code>.<br/>
 * This event if fired during typing into the TextField and returns the currently enterted value. This is not the content of the value property. The value property is only updated by ENTER and by leaving the control. 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.attachLiveChange = function(oData, fnFunction, oListener) {
	this.attachEvent("liveChange", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.ui.commons.TextField</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.detachLiveChange = function(fnFunction, oListener) {
	this.detachEvent("liveChange", fnFunction, oListener);
	return this;	
};

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'liveValue' of type <code>string</code> Current value of the Textfield.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.TextField.prototype.fireLiveChange = function(mArguments) {
	this.fireEvent("liveChange", mArguments);
	return this;
};


/**
 * Puts the focus to this control.
 *
 * @name sap.ui.commons.TextField.prototype.focus
 * @function

 * @type void
 * @public
 */


/**
 * Returns the current value of the TextField. In case of editing the TextField you can access the current value via this method. The validated value is accessible via the property value.
 *
 * @name sap.ui.commons.TextField.prototype.getLiveValue
 * @function

 * @type string
 * @public
 */


// Start of sap/ui/commons/TextField.js
/**
 * Event handler called when control is receiving the focus
 *
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.TextField.prototype.onfocusin = function(oEvent) {

	if(this.getEditable() && this.getEnabled() && this.getRenderer().onfocus) {
		this.getRenderer().onfocus(this);
	}

};

/**
 * Event handler called when control is losing the focus
 *
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.TextField.prototype.onfocusout = function(oEvent) {
	if(this.getEditable() && this.getEnabled() && this.getRenderer().onblur) {
		this.getRenderer().onblur(this);
	}

	this._checkChange(oEvent);
};

/**
 * Event handler called when enter key is pressed.
 * @see sap.ui.commons.TextField#onfocusout
 * @protected
 */
sap.ui.commons.TextField.prototype.onsapenter = function(oEvent) {
	this._checkChange(oEvent);
};

/**
 * Compares the previous value with the current value and fires the change event
 * if the TextField is editable and the value has changed.
 *
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.TextField.prototype._checkChange = function(oEvent) {
	var oInput = this.getInputDomRef(),
		newVal = oInput && oInput.value,
		oldVal = this.getValue();

	if(this.getEditable() && this.getEnabled() && (oldVal != newVal)) {
		this.setProperty("value", newVal, true); // suppress rerendering
		this.fireChange({newValue:newVal}); // oldValue is not that easy in ComboBox and anyway not in API... thus skip it
	}
};

/**
 * Event handler called when text selection starts.
 * When the text field is disabled, the text should not be selectable, so cancel the event.
 *
 * @param {jQuery.Event} oEvent
 * @protected
 */
sap.ui.commons.TextField.prototype.onselectstart = function(oEvent) {
	if (!this.getEnabled()){
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};

/**
 * Event handler called when a key is pressed.
 * onsapescape did not work in firefox (the value update is ignored), so the keypress event is used instead
 * the value must be set to the old one before the changes
 * @protected
 */
sap.ui.commons.TextField.prototype.onkeypress = function(oEvent) {

	var oKC = jQuery.sap.KeyCodes;
	var iKC = oEvent.which || oEvent.keyCode;
	if(iKC == oKC.ESCAPE){
		var sValue = this.getProperty("value");
		var oInput = this.getInputDomRef();
		if(oInput && oInput.value !== sValue) {
			jQuery(oInput).val(sValue);
		}
	}

};

/**
 * Escape fires no keypress in webkit
 * the value must be set to the old one before the changes
 * @protected
 */
sap.ui.commons.TextField.prototype.onsapescape = function(oEvent) {

	if(jQuery.browser.webkit){
		var oKC = jQuery.sap.KeyCodes;
		var iKC = oEvent.which || oEvent.keyCode;
		if(iKC == oKC.ESCAPE){
			var sValue = this.getProperty("value");
			var oInput = this.getInputDomRef();
			if(oInput && oInput.value !== sValue) {
				jQuery(oInput).val(sValue);
			}
		}
	}

};

/**
 * Event handler for keyup.
 * fire the liveChange event
 * @protected
 */
sap.ui.commons.TextField.prototype.onkeyup = function(oEvent) {

	var sLiveValue = jQuery(this.getInputDomRef()).val();
	this.fireLiveChange({liveValue:sLiveValue});

};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the ValueState
 *
 * @param {Valuestate} oValueState
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setValueState = function(oValueState) {

	var oldValueState = this.getValueState();

	if( oldValueState == oValueState ){
		return this;
	}

	this.setProperty("valueState", oValueState, true); // do not render again

	if(!this.getDomRef()){
		//not already rendered.
		return this;
	}

	if(this.getRenderer().setValueState) {
		this.getRenderer().setValueState(this, oldValueState, oValueState);
	}

	if(this.delayedCallId) {
		jQuery.sap.clearDelayedCall(this.delayedCallId);
		this.delayedCallId = null;
	}
	if(sap.ui.core.ValueState.Success == oValueState) {
		this.delayedCallId = jQuery.sap.delayedCall(3000, this, "removeValidVisualization");
	}

	return this;
};

sap.ui.commons.TextField.prototype.removeValidVisualization = function() {
	if(this.getRenderer().removeValidVisualization){
		this.getRenderer().removeValidVisualization(this);
	}
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the editable state
 *
 * @param bEditable
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setEditable = function(bEditable) {

	this.setProperty('editable', bEditable, true); // No re-rendering

	if (this.getDomRef() && this.getRenderer().setEditable){
			this.getRenderer().setEditable(this, bEditable);
	}

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the enabled state
 *
 * @param bEnabled
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setEnabled = function(bEnabled) {

	this.setProperty('enabled', bEnabled, true); // No re-rendering

	if (this.getDomRef() && this.getRenderer().setEnabled){
			this.getRenderer().setEnabled(this, bEnabled);
	}

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the Required-State
 *
 * @param bRequired:
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setRequired = function(bRequired) {

	this.setProperty('required', bRequired, true); // No re-rendering

	if (this.getDomRef()){
		// If already rendered, adapt rendered control without complete re-rendering
		if(this.getRenderer().setRequired) {
			this.getRenderer().setRequired(this, bRequired);
		}
	}

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the Design
 *
 * @param sDesign:
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setDesign = function(sDesign) {

	this.setProperty('design', sDesign, true); // No re-rendering

	if (this.getDomRef()){
		// If already rendered, adapt rendered control without complete re-rendering
		if(this.getRenderer().setDesign) {
			this.getRenderer().setDesign(this, sDesign);
		}
	}

	return this;
};

/* Overwrite of generated function - no new JS-doc.
 * Property setter for the Value
 *
 * @param sValue:
 * @return {sap.ui.commons.TextField} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TextField.prototype.setValue = function(sValue) {
	var newValue = sValue;
	if( newValue && newValue.length > this.getMaxLength() && this.getMaxLength() > 0){
		newValue = newValue.substring(0,this.getMaxLength());
//		this.fireChange({newValue:newValue});
	}

	this.setProperty("value", newValue, true); // no re-rendering!
	var oInput = this.getInputDomRef();
	if(oInput && oInput.value !== newValue) {
		oInput.value = this.getValue();
	}

	return this;
};

/**
 * Method for accessing the DOM Ref of the input element.
 * Might be overwritten in child classes.
 *
 * @protected
 */
sap.ui.commons.TextField.prototype.getInputDomRef = function(){
	return this.getFocusDomRef();
};

/**
 * Applies the focus info
 * overwrite of the Element method because in IE8 on rerendering focus is lost
 * @param {object} oFocusInfo
 * @protected
 */
sap.ui.commons.TextField.prototype.applyFocusInfo = function (oFocusInfo) {

	if (jQuery.browser.msie && jQuery.browser.version == 8) {
		var oPos = this.getValue().length;
		var that = this;
		setTimeout(function(){
			that.focus();
			jQuery(that.getFocusDomRef()).cursorPos(oPos);
		}, 0);
	}else{
		this.focus();
	}
	return this;
};

/* 
 * Implementation of the getLiveValue method
 */
sap.ui.commons.TextField.prototype.getLiveValue = function() {
	var oIDomRef = this.getInputDomRef();
	if (oIDomRef) {
		return jQuery(oIDomRef).val();
	} else {
		return this.getValue();
	}
};
