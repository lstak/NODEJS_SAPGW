/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

// Provides class sap.ui.model.odata.ODataPropertyBinding
jQuery.sap.declare("sap.ui.model.odata.ODataPropertyBinding");
jQuery.sap.require("sap.ui.model.PropertyBinding");

/**
 *
 * @class
 * Property binding implementation for oData format
 *
 * @param sPath
 * @param [oModel]
 */
sap.ui.model.odata.ODataPropertyBinding = function(oModel, sPath, oContext){
	sap.ui.model.PropertyBinding.apply(this, arguments);

	this.oValue = this._getValue();
};
sap.ui.model.odata.ODataPropertyBinding.prototype = jQuery.sap.newObject(sap.ui.model.PropertyBinding.prototype);

/**
 * Returns the current value of the bound target
 * @return {object} the current value of the bound target
 * @protected
 */
sap.ui.model.odata.ODataPropertyBinding.prototype.getValue = function(){
	return this.oValue;
};

/**
 * Returns the current value of the bound target (incl. re-evaluation)
 * @return {object} the current value of the bound target
 */
sap.ui.model.odata.ODataPropertyBinding.prototype._getValue = function(){
	return this.oModel._getObject(this.sPath, this.oContext);
};

/**
 * @see sap.ui.model.PropertyBinding.prototype.setValue
 */
sap.ui.model.odata.ODataPropertyBinding.prototype.setValue = function(oValue){
	// TODO do nothing because currently setValue not supported because of OneWay Binding
};

/**
 * Setter for context
 */
sap.ui.model.odata.ODataPropertyBinding.prototype.setContext = function(oContext) {
	this.oContext = oContext;
	this.checkUpdate();
};

/**
 * Check whether this Binding would provide new values and in case it changed,
 * inform interested parties about this.
 */
sap.ui.model.odata.ODataPropertyBinding.prototype.checkUpdate = function(){
	var oValue = this._getValue();
	if(oValue !== this.oValue) {// optimize for not firing the events when unneeded
		this.oValue = oValue;
		this._fireChange();
	}
};