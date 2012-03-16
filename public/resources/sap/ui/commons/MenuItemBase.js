/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.MenuItemBase.
jQuery.sap.declare("sap.ui.commons.MenuItemBase");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new MenuItemBase.
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
 * <li>enabled : boolean</li>
 * <li>visible : boolean</li>
 * <li>startsSection : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>submenu : sap.ui.commons.Menu</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>select : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * For further parameters see {@link sap.ui.core.Element#constructor}
 *
 * @param {string}
 *        [sId] optional id for the new control; generated automatically if no id is given. 
 *        Note: this can be omitted, no matter whether <code>mSettings</code> is given or not!
 * @param {object}
 *        [mSettings] optional map/JSON-object with initial values for the new control.<br/>
 *
 * @class
 * Provides the standard properties for menu items.
 * @extends sap.ui.core.Element
 *
 * @author SAP AG 
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.commons.MenuItemBase = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.commons.MenuItemBase.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.commons.MenuItemBase. 
 * Resulting metadata can be obtained via sap.ui.commons.MenuItemBase.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.commons.MenuItemBase", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getEnabled", "setEnabled", "getVisible", "setVisible", "getStartsSection", "setStartsSection", 
    // aggregations
    "getSubmenu", "setSubmenu", "destroySubmenu", 
    // associations
    
    // events
    "attachSelect", "detachSelect"
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.commons",
  properties : {
    "enabled" : {name : "enabled", type : "boolean", group : "Behavior", defaultValue : true},
    "visible" : {name : "visible", type : "boolean", group : "Behavior", defaultValue : true},
    "startsSection" : {name : "startsSection", type : "boolean", group : "Behavior", defaultValue : false}
  },
  defaultAggregation : "submenu",
  aggregations : {
    "submenu" : {name : "submenu", type : "sap.ui.commons.Menu", multiple : false}
  },
  associations : {},
  events : {
    "select" : "select"
  }

});	

sap.ui.commons.MenuItemBase.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>enabled</code>.
 * 
 * Disabled items have different colors, depending on customer settings.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.commons.MenuItemBase.prototype.getEnabled = function() {
	return this.getProperty("enabled");
};

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.ui.commons.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuItemBase.prototype.setEnabled = function(bEnabled) {
	this.setProperty("enabled", bEnabled);
	return this;
};


/**
 * Getter for property <code>visible</code>.
 * 
 * Invisible controls are not rendered.
 * 
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.commons.MenuItemBase.prototype.getVisible = function() {
	return this.getProperty("visible");
};

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.ui.commons.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuItemBase.prototype.setVisible = function(bVisible) {
	this.setProperty("visible", bVisible);
	return this;
};


/**
 * Getter for property <code>startsSection</code>.
 * 
 * If set to true, a divider is displayed before the item
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>startsSection</code>
 * @public
 * 
 */
sap.ui.commons.MenuItemBase.prototype.getStartsSection = function() {
	return this.getProperty("startsSection");
};

/**
 * Setter for property <code>startsSection</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bStartsSection  new value for property <code>startsSection</code>
 * @return {sap.ui.commons.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuItemBase.prototype.setStartsSection = function(bStartsSection) {
	this.setProperty("startsSection", bStartsSection);
	return this;
};

	
/**
 * Getter for aggregation <code>submenu</code>.<br/>
 * Aggregation of a menu item's sub menu.
 * 
 * @return {sap.ui.commons.Menu}
 * @public
 */
sap.ui.commons.MenuItemBase.prototype.getSubmenu = function() {
	return this.getAggregation("submenu", null);
};


/**
 * Setter for the aggregated <code>submenu</code>.
 * @param oSubmenu {sap.ui.commons.Menu}
 * @return {sap.ui.commons.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuItemBase.prototype.setSubmenu = function(oSubmenu) {
	this.setAggregation("submenu", oSubmenu);
	return this;
};
	

/**
 * Destroys the submenu in the aggregation 
 * named <code>submenu</code>.
 * @return {sap.ui.commons.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuItemBase.prototype.destroySubmenu = function() {
	this.destroyAggregation("submenu");
	return this;
};


/**
 * Event is fired when an item is selected. The event is also available for items having a sub menu.
 * A mouse click or space bar click on a sub menu item fires the event.
 *  
 *
 * @name sap.ui.commons.MenuItemBase#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.commons.MenuItemBase} oControlEvent.getParameters.item Represents the current item
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'select' event of this <code>sap.ui.commons.MenuItemBase</code>.<br/>
 * Event is fired when an item is selected. The event is also available for items having a sub menu.
 * A mouse click or space bar click on a sub menu item fires the event.
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
 * @return {sap.ui.commons.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuItemBase.prototype.attachSelect = function(oData, fnFunction, oListener) {
	this.attachEvent("select", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'select' event of this <code>sap.ui.commons.MenuItemBase</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.commons.MenuItemBase} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.MenuItemBase.prototype.detachSelect = function(fnFunction, oListener) {
	this.detachEvent("select", fnFunction, oListener);
	return this;	
};

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'item' of type <code>sap.ui.commons.MenuItemBase</code> Represents the current item</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.MenuItemBase} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.commons.MenuItemBase.prototype.fireSelect = function(mArguments) {
	this.fireEvent("select", mArguments);
	return this;
};


// Start of sap/ui/commons/MenuItemBase.js
sap.ui.commons.MenuItemBase.prototype.init = function(){
   // do something for initialization...
};

sap.ui.commons.MenuItemBase.prototype.render = function(oRenderManager, oItem, oMenu){
	// Subclasses have to override this
	var rm = oRenderManager;
	rm.write("<li");
	rm.writeControlData(oItem);
	rm.write("><div style=\"white-space:nowrap;display:inline-block;padding:1px;color:black;\" id=\""+this.getId()+"-txt\">");
	rm.write(oItem.getId());
	if(this.getSubmenu()){
		rm.write("&nbsp;&nbsp;->");
	}
	rm.write("</div></li>");
};

/**
 * @protected
 */
sap.ui.commons.MenuItemBase.prototype.hover = function(bHovered, oMenu){
	// Subclasses have to override this
	jQuery.sap.byId(this.getId()+"-txt").attr("style", bHovered ? "white-space:nowrap;display:inline-block;padding:1px;color:red;" : "white-space:nowrap;display:inline-block;padding:1px;color:black;");
};