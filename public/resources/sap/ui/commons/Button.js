/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Button.
jQuery.sap.declare("sap.ui.commons.Button");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new Button.
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
 * <li>enabled : boolean</li>
 * <li>visible : boolean</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>helpId : string</li>
 * <li>icon : string</li>
 * <li>iconFirst : boolean</li>
 * <li>height : sap.ui.core.CSSSize</li>
 * <li>styled : boolean</li>
 * <li>lite : boolean</li>
 * <li>style : sap.ui.commons.ButtonStyle</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>press : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * <p>
 * Using the button control you enable end users to trigger actions such as Save or Print. For the button UI, you can define some text or an icon, or both.
 * </p>
 * 
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.Button = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.Button.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.commons.Button. 
 * Resulting metadata can be obtained via sap.ui.commons.Button.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.Button", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  interfaces : ["sap.ui.commons.ToolbarItem"],
  publicMethods : [
    // properties 
    "getText", "setText", "getEnabled", "setEnabled", "getVisible", "setVisible", "getWidth", "setWidth", "getHelpId", "setHelpId", "getIcon", "setIcon", "getIconFirst", "setIconFirst", "getHeight", "setHeight", "getStyled", "setStyled", "getLite", "setLite", "getStyle", "setStyle", 
    // aggregations
    
    // associations
    
    // events
    "attachPress", "detachPress", 
    // methods
    "focus"
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "text" : {name : "text", type : "string", group : "Appearance", defaultValue : ''},
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "visible" : {name : "visible", type : "boolean", group : "", defaultValue : true},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "helpId" : {name : "helpId", type : "string", group : "Behavior", defaultValue : ''},
    "icon" : {name : "icon", type : "string", group : "Appearance", defaultValue : ''},
    "iconFirst" : {name : "iconFirst", type : "boolean", group : "Appearance", defaultValue : true},
    "height" : {name : "height", type : "sap.ui.core.CSSSize", group : "Dimension", defaultValue : null},
    "styled" : {name : "styled", type : "boolean", group : "Appearance", defaultValue : true},
    "lite" : {name : "lite", type : "boolean", group : "Appearance", defaultValue : false},
    "style" : {name : "style", type : "sap.ui.commons.ButtonStyle", group : "Appearance", defaultValue : sap.ui.commons.ButtonStyle.Default}
  },
  
  aggregations : {},
  associations : {},
  events : {
    "press" : "press"
  }

});	

sap.ui.commons.Button.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>text</code>.
 * 
 * Control text displayed at runtime.
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getText = function() {
	return this.getProperty("text");
};

/**
 * Setter for property <code>text</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.setText = function(sText) {
	this.setProperty("text", sText);
	return this;
};


/**
 * Getter for property <code>enabled</code>.
 * 
 * Disabled buttons have other colors than enabled ones, depending on customer settings.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * 
 * Invisible buttons are not rendered.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * 
 * Control width as common CSS-size (px or % as unit, for example).
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>helpId</code>.
 * 
 * Unique identifier used for help service.
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>helpId</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getHelpId = function() {
	return this.getProperty("helpId");
};

/**
 * Setter for property <code>helpId</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sHelpId  new value for property <code>helpId</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.setHelpId = function(sHelpId) {
	this.setProperty("helpId", sHelpId);
	return this;
};


/**
 * Getter for property <code>icon</code>.
 * 
 * Icon displayed within the control at runtime.
 * 
 *
 * Default value is <code>''</code>
 *
 * @return {string} the value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getIcon = function() {
	return this.getProperty("icon");
};

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is <code>''</code> 
 *
 * @param {string} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.setIcon = function(sIcon) {
	this.setProperty("icon", sIcon);
	return this;
};


/**
 * Getter for property <code>iconFirst</code>.
 * 
 * The display sequence is 1.icon 2.control text.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>iconFirst</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getIconFirst = function() {
	return this.getProperty("iconFirst");
};

/**
 * Setter for property <code>iconFirst</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIconFirst  new value for property <code>iconFirst</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.setIconFirst = function(bIconFirst) {
	this.setProperty("iconFirst", bIconFirst);
	return this;
};


/**
 * Getter for property <code>height</code>.
 * The height of the Button.
 * NOTE: if this property is set, the height defined by the theme is not used anymore! The themes, however, define the official SAP design, so this property should only be used in justified special cases.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getHeight = function() {
	return this.getProperty("height");
};

/**
 * Setter for property <code>height</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.setHeight = function(sHeight) {
	this.setProperty("height", sHeight);
	return this;
};


/**
 * Getter for property <code>styled</code>.
 * Indicatied if the button is styled. If not it is rendered as native HTML-button. In this case a custom styling can be added usig addStyleClass.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>styled</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getStyled = function() {
	return this.getProperty("styled");
};

/**
 * Setter for property <code>styled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bStyled  new value for property <code>styled</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.setStyled = function(bStyled) {
	this.setProperty("styled", bStyled);
	return this;
};


/**
 * Getter for property <code>lite</code>.
 * The button is rendered as lite button.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>lite</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getLite = function() {
	return this.getProperty("lite");
};

/**
 * Setter for property <code>lite</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bLite  new value for property <code>lite</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.setLite = function(bLite) {
	this.setProperty("lite", bLite);
	return this;
};


/**
 * Getter for property <code>style</code>.
 * Style of the button.
 * (e.g. emphasized)
 *
 * Default value is <code>sap.ui.commons.ButtonStyle.Default</code>
 *
 * @return {sap.ui.commons.ButtonStyle} the value of property <code>style</code>
 * @public
 * 
 */
sap.ui.commons.Button.prototype.getStyle = function() {
	return this.getProperty("style");
};

/**
 * Setter for property <code>style</code>.
 *
 * Default value is <code>sap.ui.commons.ButtonStyle.Default</code> 
 *
 * @param {sap.ui.commons.ButtonStyle} oStyle  new value for property <code>style</code>
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.setStyle = function(oStyle) {
	this.setProperty("style", oStyle);
	return this;
};


/**
 * 
 * Event is fired when the user presses the control.
 *  
 *
 * @name sap.ui.commons.Button#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.commons.Button</code>.<br/>
 * 
 * Event is fired when the user presses the control.
 *  
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.attachPress = function(oData, fnFunction, oListener) {
	this.attachEvent("press", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.commons.Button</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.Button.prototype.detachPress = function(fnFunction, oListener) {
	this.detachEvent("press", fnFunction, oListener);
	return this;	
};

/**
 * Fire event press to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Button} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.Button.prototype.firePress = function(mArguments) {
	this.fireEvent("press", mArguments);
	return this;
};


/**
 * Puts the focus into the control.
 *
 * @name sap.ui.commons.Button.prototype.focus
 * @function

 * @type void
 * @public
 */


// Start of sap/ui/commons/Button.js
jQuery.sap.require("sap.ui.core.EnabledPropagator");

sap.ui.core.EnabledPropagator.apply(sap.ui.commons.Button.prototype, [true]);

/**
 * Function is called when button is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onclick = function(oEvent) {
	if (this.getEnabled()){
		this.firePress({/* no parameters */});
	}

	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Handles the sapenter event does not bubble
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onsapenter = function(oEvent) {
	oEvent.stopPropagation();
};

/**
 * Function is called when mouse key is clicked down. The button style classes
 * are replaced then.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onmousedown = function(oEvent) {
	if (this.getEnabled() && this.getRenderer().onactive) {
		this.getRenderer().onactive(this);
	}
};

/**
 * When mouse key is up again, reset the background images to normal.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onmouseup = function(oEvent) {
	if (this.getEnabled() && this.getRenderer().ondeactive) {
		this.getRenderer().ondeactive(this);
	}
	if (jQuery.browser.webkit) {
		this.focus(); // webkit does not focus a Button on click, it even unfocuses it onmousedown!
	}
};

/**
 * When mouse is going out of the control, reset the background images to normal.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onmouseout = function(oEvent) {
	if (this.getEnabled() && this.getRenderer().onmouseout) {
		this.getRenderer().onmouseout(this);
	}
};

/**
 * When the button looses the focus, this method is called.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.commons.Button.prototype.onfocusout = function(oEvent) {
	if (this.getEnabled() && this.getRenderer().onblur) {
		this.getRenderer().onblur(this);
	}
};