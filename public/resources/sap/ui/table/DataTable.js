/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.table.DataTable.
jQuery.sap.declare("sap.ui.table.DataTable");
jQuery.sap.require("sap.ui.table.library");
jQuery.sap.require("sap.ui.core.Control");

/**
 * Constructor for a new DataTable.
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
 * <li>title : string</li>
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>visibleRowCount : int</li>
 * <li>expandedVisibleRowCount : int</li>
 * <li>firstVisibleRow : int</li>
 * <li>selectionMode : sap.ui.table.SelectionMode</li>
 * <li>editable : boolean</li>
 * <li>expanded : boolean</li>
 * <li>threshold : int</li>
 * <li>selectedIndex : int</li>
 * <li>rowHeight : sap.ui.core.CSSSize</li>
 * <li>allowColumnReordering : boolean</li>
 * <li>hierarchical : boolean</li>
 * <li>expandFirstLevel : boolean</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>columns : sap.ui.table.Column</li>
 * <li>toolbar : sap.ui.commons.Toolbar</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>rowSelect : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>columnSelect : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>toggleOpenState : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
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
 * The DataTable control provides a set of sophisticated and comfort functions for table design. For example, you can make settings for the number of visible rows and a number for the displayed rows in the case the user expands the table. The first visible row can be explicitly set. For the selection of columns and rows, a Multi, a Single, a None, and an All mode are available. Setting the Editable property to true lets the user make changes on the table cell entries.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.table.DataTable = function (sId, mSettings) {
	sap.ui.core.Control.apply(this, arguments);
};

// chain the prototypes
sap.ui.table.DataTable.prototype = jQuery.sap.newObject(sap.ui.core.Control.prototype);

/*
 * Describe the sap.ui.table.DataTable. 
 * Resulting metadata can be obtained via sap.ui.table.DataTable.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.table.DataTable", {

  // ---- object ----
  baseType : "sap.ui.core.Control",
  publicMethods : [
    // properties 
    "getTitle", "setTitle", "getWidth", "setWidth", "getVisibleRowCount", "setVisibleRowCount", "getExpandedVisibleRowCount", "setExpandedVisibleRowCount", "getFirstVisibleRow", "setFirstVisibleRow", "getSelectionMode", "setSelectionMode", "getEditable", "setEditable", "getExpanded", "setExpanded", "getThreshold", "setThreshold", "getSelectedIndex", "setSelectedIndex", "getRowHeight", "setRowHeight", "getAllowColumnReordering", "setAllowColumnReordering", "getHierarchical", "setHierarchical", "getExpandFirstLevel", "setExpandFirstLevel", 
    // aggregations
    "getColumns", "insertColumn", "addColumn", "removeColumn", "removeAllColumns", "indexOfColumn", "destroyColumns", "getToolbar", "setToolbar", "destroyToolbar", 
    // associations
    
    // events
    "attachRowSelect", "detachRowSelect", "attachColumnSelect", "detachColumnSelect", "attachToggleOpenState", "detachToggleOpenState", 
    // methods
    "bindRows", "unbindRows", "addSelectedIndex", "removeSelectedIndex", "getSelectedIndices", "setSelectedIndices", "addSelectedIndices", "isIndexSelected", "clearSelection", "selectAll", "getContextByIndex"
  ],

  // ---- control specific ----
  library : "sap.ui.table",
  properties : {
    "title" : {name : "title", type : "string", group : "", defaultValue : null},
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "", defaultValue : 'auto'},
    "visibleRowCount" : {name : "visibleRowCount", type : "int", group : "", defaultValue : 10},
    "expandedVisibleRowCount" : {name : "expandedVisibleRowCount", type : "int", group : "", defaultValue : null},
    "firstVisibleRow" : {name : "firstVisibleRow", type : "int", group : "", defaultValue : 0},
    "selectionMode" : {name : "selectionMode", type : "sap.ui.table.SelectionMode", group : "", defaultValue : sap.ui.table.SelectionMode.Multi},
    "editable" : {name : "editable", type : "boolean", group : "", defaultValue : false},
    "expanded" : {name : "expanded", type : "boolean", group : "", defaultValue : false},
    "threshold" : {name : "threshold", type : "int", group : "", defaultValue : 100},
    "selectedIndex" : {name : "selectedIndex", type : "int", group : "", defaultValue : -1},
    "rowHeight" : {name : "rowHeight", type : "sap.ui.core.CSSSize", group : "", defaultValue : ''},
    "allowColumnReordering" : {name : "allowColumnReordering", type : "boolean", group : "", defaultValue : true},
    "hierarchical" : {name : "hierarchical", type : "boolean", group : "", defaultValue : false},
    "expandFirstLevel" : {name : "expandFirstLevel", type : "boolean", group : "", defaultValue : false}
  },
  defaultAggregation : "columns",
  aggregations : {
    "columns" : {name : "columns", type : "sap.ui.table.Column", multiple : true, singularName : "column"}, 
    "toolbar" : {name : "toolbar", type : "sap.ui.commons.Toolbar", multiple : false}
  },
  associations : {},
  events : {
    "rowSelect" : "rowSelect", 
    "columnSelect" : "columnSelect", 
    "toggleOpenState" : "toggleOpenState"
  }

});	

sap.ui.table.DataTable.M_EVENTS = {'rowSelect':'rowSelect','columnSelect':'columnSelect','toggleOpenState':'toggleOpenState'};


/**
 * Getter for property <code>title</code>.
 * Title of the Table (if not set/empty) the title will be hidden)
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getTitle = function() {
	return this.getProperty("title");
};

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setTitle = function(sTitle) {
	this.setProperty("title", sTitle);
	return this;
};


/**
 * Getter for property <code>width</code>.
 * Width of the Table
 *
 * Default value is <code>auto</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>auto</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>visibleRowCount</code>.
 * Count of visible rows
 *
 * Default value is <code>10</code>
 *
 * @return {int} the value of property <code>visibleRowCount</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getVisibleRowCount = function() {
	return this.getProperty("visibleRowCount");
};

/**
 * Setter for property <code>visibleRowCount</code>.
 *
 * Default value is <code>10</code> 
 *
 * @param {int} iVisibleRowCount  new value for property <code>visibleRowCount</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setVisibleRowCount = function(iVisibleRowCount) {
	this.setProperty("visibleRowCount", iVisibleRowCount);
	return this;
};


/**
 * Getter for property <code>expandedVisibleRowCount</code>.
 * Count of visible rows when expanded
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>expandedVisibleRowCount</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getExpandedVisibleRowCount = function() {
	return this.getProperty("expandedVisibleRowCount");
};

/**
 * Setter for property <code>expandedVisibleRowCount</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iExpandedVisibleRowCount  new value for property <code>expandedVisibleRowCount</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setExpandedVisibleRowCount = function(iExpandedVisibleRowCount) {
	this.setProperty("expandedVisibleRowCount", iExpandedVisibleRowCount);
	return this;
};


/**
 * Getter for property <code>firstVisibleRow</code>.
 * First visible row
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>firstVisibleRow</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getFirstVisibleRow = function() {
	return this.getProperty("firstVisibleRow");
};

/**
 * Setter for property <code>firstVisibleRow</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iFirstVisibleRow  new value for property <code>firstVisibleRow</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setFirstVisibleRow = function(iFirstVisibleRow) {
	this.setProperty("firstVisibleRow", iFirstVisibleRow);
	return this;
};


/**
 * Getter for property <code>selectionMode</code>.
 * Selection mode of the Table
 *
 * Default value is <code>Multi</code>
 *
 * @return {sap.ui.table.SelectionMode} the value of property <code>selectionMode</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getSelectionMode = function() {
	return this.getProperty("selectionMode");
};

/**
 * Setter for property <code>selectionMode</code>.
 *
 * Default value is <code>Multi</code> 
 *
 * @param {sap.ui.table.SelectionMode} oSelectionMode  new value for property <code>selectionMode</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setSelectionMode = function(oSelectionMode) {
	this.setProperty("selectionMode", oSelectionMode);
	return this;
};


/**
 * Getter for property <code>editable</code>.
 * Flag whether the controls of the Table are editable or not
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getEditable = function() {
	return this.getProperty("editable");
};

/**
 * Setter for property <code>editable</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEditable  new value for property <code>editable</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setEditable = function(bEditable) {
	this.setProperty("editable", bEditable);
	return this;
};


/**
 * Getter for property <code>expanded</code>.
 * Flag whether the Table is expanded or not
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getExpanded = function() {
	return this.getProperty("expanded");
};

/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setExpanded = function(bExpanded) {
	this.setProperty("expanded", bExpanded);
	return this;
};


/**
 * Getter for property <code>threshold</code>.
 * Threshold to fetch the next chunk of data. The minimal threshold can be the visible row count of the DataTable. (**experimental**!!)
 *
 * Default value is <code>100</code>
 *
 * @return {int} the value of property <code>threshold</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getThreshold = function() {
	return this.getProperty("threshold");
};

/**
 * Setter for property <code>threshold</code>.
 *
 * Default value is <code>100</code> 
 *
 * @param {int} iThreshold  new value for property <code>threshold</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setThreshold = function(iThreshold) {
	this.setProperty("threshold", iThreshold);
	return this;
};


/**
 * Getter for property <code>selectedIndex</code>.
 * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the first selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>selectedIndex</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getSelectedIndex = function() {
	return this.getProperty("selectedIndex");
};

/**
 * Setter for property <code>selectedIndex</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iSelectedIndex  new value for property <code>selectedIndex</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setSelectedIndex = function(iSelectedIndex) {
	this.setProperty("selectedIndex", iSelectedIndex);
	return this;
};


/**
 * Getter for property <code>rowHeight</code>.
 * Row Height of the Table
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>rowHeight</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getRowHeight = function() {
	return this.getProperty("rowHeight");
};

/**
 * Setter for property <code>rowHeight</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sRowHeight  new value for property <code>rowHeight</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setRowHeight = function(sRowHeight) {
	this.setProperty("rowHeight", sRowHeight);
	return this;
};


/**
 * Getter for property <code>allowColumnReordering</code>.
 * Flag to enable or disable column reordering
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>allowColumnReordering</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getAllowColumnReordering = function() {
	return this.getProperty("allowColumnReordering");
};

/**
 * Setter for property <code>allowColumnReordering</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bAllowColumnReordering  new value for property <code>allowColumnReordering</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setAllowColumnReordering = function(bAllowColumnReordering) {
	this.setProperty("allowColumnReordering", bAllowColumnReordering);
	return this;
};


/**
 * Getter for property <code>hierarchical</code>.
 * Flag, whether the table displays its content hierarchical or not (**experimental**!!)
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>hierarchical</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getHierarchical = function() {
	return this.getProperty("hierarchical");
};

/**
 * Setter for property <code>hierarchical</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bHierarchical  new value for property <code>hierarchical</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setHierarchical = function(bHierarchical) {
	this.setProperty("hierarchical", bHierarchical);
	return this;
};


/**
 * Getter for property <code>expandFirstLevel</code>.
 * Flag to enable or disable expanding of first level.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>expandFirstLevel</code>
 * @public
 * 
 */
sap.ui.table.DataTable.prototype.getExpandFirstLevel = function() {
	return this.getProperty("expandFirstLevel");
};

/**
 * Setter for property <code>expandFirstLevel</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bExpandFirstLevel  new value for property <code>expandFirstLevel</code>
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setExpandFirstLevel = function(bExpandFirstLevel) {
	this.setProperty("expandFirstLevel", bExpandFirstLevel);
	return this;
};

	
/**
 * Getter for aggregation <code>columns</code>.<br/>
 * Columns of the Table
 * 
 * @return {sap.ui.table.Column[]}
 * @public
 */
sap.ui.table.DataTable.prototype.getColumns = function() {
	return this.getAggregation("columns", []);
};


/**
 * Inserts a column into the aggregation named <code>columns</code>.
 *
 * @param {sap.ui.table.Column}
 *          oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the column should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the column is inserted at 
 *             the last position        
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.insertColumn = function(oColumn, iIndex) {
	this.insertAggregation("columns", oColumn, iIndex);
	return this;
};

/**
 * Adds some column <code>oColumn</code> 
 * to the aggregation named <code>columns</code>.
 *
 * @param {sap.ui.table.Column}
 *            oColumn the column to add; if empty, nothing is inserted
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public 
 */
sap.ui.table.DataTable.prototype.addColumn = function(oColumn) {
	this.addAggregation("columns", oColumn);
	return this;
};

/**
 * Removes an column from the aggregation named <code>columns</code>.
 *
 * @param {int | string | sap.ui.table.Column} vColumn the column to remove or its index or id
 * @return {sap.ui.table.Column} the removed column or null
 * @public
 */
sap.ui.table.DataTable.prototype.removeColumn = function(vColumn) {
	return this.removeAggregation("columns", vColumn);
};

/**
 * Removes all the controls in the aggregation named <code>columns</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.table.Column[]} an array of the removed elements (might be empty)
 * @public
 */
sap.ui.table.DataTable.prototype.removeAllColumns = function() {
	return this.removeAllAggregation("columns");
};

/**
 * Checks for the provided <code>sap.ui.table.Column</code> in the aggregation named <code>columns</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.table.Column}
 *            oColumn the column whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 */
sap.ui.table.DataTable.prototype.indexOfColumn = function(oColumn) {
	return this.indexOfAggregation("columns", oColumn);
};
	

/**
 * Destroys all the columns in the aggregation 
 * named <code>columns</code>.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.destroyColumns = function() {
	this.destroyAggregation("columns");
	return this;
};

	
/**
 * Getter for aggregation <code>toolbar</code>.<br/>
 * Toolbar of the Table (if not set it will be hidden)
 * 
 * @return {sap.ui.commons.Toolbar}
 * @public
 */
sap.ui.table.DataTable.prototype.getToolbar = function() {
	return this.getAggregation("toolbar", null);
};


/**
 * Setter for the aggregated <code>toolbar</code>.
 * @param oToolbar {sap.ui.commons.Toolbar}
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.setToolbar = function(oToolbar) {
	this.setAggregation("toolbar", oToolbar);
	return this;
};
	

/**
 * Destroys the toolbar in the aggregation 
 * named <code>toolbar</code>.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.destroyToolbar = function() {
	this.destroyAggregation("toolbar");
	return this;
};


/**
 * fired when a row of the table has been selected (in case of multi selection the lead selection will be returned!) 
 *
 * @name sap.ui.table.DataTable#rowSelect
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.rowIndex index of the selected row
 * @param {object} oControlEvent.getParameters.rowContext binding context of the selected row
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'rowSelect' event of this <code>sap.ui.table.DataTable</code>.<br/>
 * fired when a row of the table has been selected (in case of multi selection the lead selection will be returned!) 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.attachRowSelect = function(oData, fnFunction, oListener) {
	this.attachEvent("rowSelect", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'rowSelect' event of this <code>sap.ui.table.DataTable</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.detachRowSelect = function(fnFunction, oListener) {
	this.detachEvent("rowSelect", fnFunction, oListener);
	return this;	
};

/**
 * Fire event rowSelect to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'rowIndex' of type <code>int</code> index of the selected row</li>
 * <li>'rowContext' of type <code>object</code> binding context of the selected row</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.table.DataTable.prototype.fireRowSelect = function(mArguments) {
	this.fireEvent("rowSelect", mArguments);
	return this;
};


/**
 * fired when a column of the table has been selected 
 *
 * @name sap.ui.table.DataTable#columnSelect
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.ui.table.Column} oControlEvent.getParameters.column reference to the clicked column
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'columnSelect' event of this <code>sap.ui.table.DataTable</code>.<br/>
 * fired when a column of the table has been selected 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.attachColumnSelect = function(oData, fnFunction, oListener) {
	this.attachEvent("columnSelect", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'columnSelect' event of this <code>sap.ui.table.DataTable</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.detachColumnSelect = function(fnFunction, oListener) {
	this.detachEvent("columnSelect", fnFunction, oListener);
	return this;	
};

/**
 * Fire event columnSelect to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'column' of type <code>sap.ui.table.Column</code> reference to the clicked column</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.table.DataTable.prototype.fireColumnSelect = function(mArguments) {
	this.fireEvent("columnSelect", mArguments);
	return this;
};


/**
 * fired when a node has been expanded or collapsed (only available in hierachical mode) 
 *
 * @name sap.ui.table.DataTable#toggleOpenState
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.rowIndex index of the selected row
 * @param {object} oControlEvent.getParameters.rowContext binding context of the selected row
 * @param {boolean} oControlEvent.getParameters.expanded flag whether the node has been expanded or collapsed
 * @public
 */
 
/**
 * Attach event-handler <code>fnFunction</code> to the 'toggleOpenState' event of this <code>sap.ui.table.DataTable</code>.<br/>
 * fired when a node has been expanded or collapsed (only available in hierachical mode) 
 *
 * @param {object}
 *            [oData] The object, that should be passed along with the event-object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs. This function will be called on the
 *            oListener-instance (if present) or on the this control instance.
 * @param {object}
 *            [oListener] Object on which to call the given function. If empty, this control instance is used.
 *
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.attachToggleOpenState = function(oData, fnFunction, oListener) {
	this.attachEvent("toggleOpenState", oData, fnFunction, oListener);
	return this;
};

/**
 * Detach event-handler <code>fnFunction</code> from the 'toggleOpenState' event of this <code>sap.ui.table.DataTable</code>.<br/>
 *
 * The passed function and listener object must match the ones previously used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Object on which the given function had to be called.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.DataTable.prototype.detachToggleOpenState = function(fnFunction, oListener) {
	this.detachEvent("toggleOpenState", fnFunction, oListener);
	return this;	
};

/**
 * Fire event toggleOpenState to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'rowIndex' of type <code>int</code> index of the selected row</li>
 * <li>'rowContext' of type <code>object</code> binding context of the selected row</li>
 * <li>'expanded' of type <code>boolean</code> flag whether the node has been expanded or collapsed</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.table.DataTable} <code>this</code> to allow method chaining
 * @protected
 */
sap.ui.table.DataTable.prototype.fireToggleOpenState = function(mArguments) {
	this.fireEvent("toggleOpenState", mArguments);
	return this;
};


/**
 * Binds the rows of the DataTable against the given binding path.
 *
 * @name sap.ui.table.DataTable.prototype.bindRows
 * @function
 * @param {string} 
 *         sPath
 *         Binding path for the rows of the DataTable.
 * @param {object} 
 *         sSorter
 *         Initial sorting property (defined by sap.ui.model/Sorter).
 * @param {object[]} 
 *         aFilters
 *         Predefined filter for the DataTable (defined by sap.ui.model/Filter).

 * @type void
 * @public
 */


/**
 * Unbinds the rows of the DataTable.
 *
 * @name sap.ui.table.DataTable.prototype.unbindRows
 * @function

 * @type void
 * @public
 */


/**
 * Adds the given index to current selection. When multi-selection is disabled, this replaces the current selection. When the given index is invalid, the call is ignored.
 *
 * @name sap.ui.table.DataTable.prototype.addSelectedIndex
 * @function
 * @param {int} 
 *         iIndex
 *         Index to add to selection.

 * @type void
 * @public
 */


/**
 * Removes the given index from this selection. When the index is invalid or not selected, the call is ignored.
 *
 * @name sap.ui.table.DataTable.prototype.removeSelectedIndex
 * @function
 * @param {int} 
 *         iIndex
 *         Index that shall be removed from selection.

 * @type void
 * @public
 */


/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 *
 * @name sap.ui.table.DataTable.prototype.getSelectedIndices
 * @function

 * @type int[]
 * @public
 */


/**
 * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
 * When multi-selection is disabled and multiple items are given, the selection is set to the index of the first valid index in the given array.
 * Any invalid indices are ignored.
 *
 * @name sap.ui.table.DataTable.prototype.setSelectedIndices
 * @function
 * @param {int[]} 
 *         aIndices
 *         Indices of the items to be selected.

 * @type void
 * @public
 */


/**
 * Adds the given indices to selection. Any invalid indices are ignored.
 *
 * @name sap.ui.table.DataTable.prototype.addSelectedIndices
 * @function
 * @param {int[]} 
 *         aIndices
 *         Indices of the items that shall additionally be selected.

 * @type void
 * @public
 */


/**
 * Returns whether the given index is selected.
 *
 * @name sap.ui.table.DataTable.prototype.isIndexSelected
 * @function
 * @param {int} 
 *         iIndex
 *         Index which is checked for selection state.

 * @type boolean
 * @public
 */


/**
 * Removes complete selection.
 *
 * @name sap.ui.table.DataTable.prototype.clearSelection
 * @function

 * @type void
 * @public
 */


/**
 * Add all rows to the selection.
 *
 * @name sap.ui.table.DataTable.prototype.selectAll
 * @function

 * @type void
 * @public
 */


/**
 * Returns the context of a row by its index.
 *
 * @name sap.ui.table.DataTable.prototype.getContextByIndex
 * @function
 * @param {int} 
 *         iIndex
 *         Index of the row to return the context from.

 * @type object
 * @public
 */


// Start of sap/ui/table/DataTable.js
jQuery.sap.require("sap.ui.core.Popup");
jQuery.sap.require("sap.ui.commons.Label");


/**
 * Initialization of the DataTable control
 * @private
 */
sap.ui.table.DataTable.prototype.init = function() {

	this.oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.table");
	this.bIsACC = sap.ui.getCore().getConfiguration().getAccessibility();
	this.bRTL = sap.ui.getCore().getConfiguration().getRTL();

	this.aSelectedIndices = []; // selected contexts

	this.iRowHeight = 0; // renderer sets the row height
	this.iBindingTimeout = 50;
	
	this._bNeedsUpdateBindings = false; // flag for updating the bindings in the onAfterRendering phase

	this.oPopup = new sap.ui.core.Popup(this.getId() + "-vsb-tt");
	this.oPopup.setContent(new sap.ui.commons.Label()).setDurations(250, 1000).setAutoClose(true);
	this.oPopup.getContent().addStyleClass("sapUiTblVSbTooltip");

	this.attachBrowserEvent(jQuery.browser.mozilla ? "DOMMouseScroll" : "mousewheel", jQuery.proxy(this.onmousewheel, this));

};


/**
 * Termination of the DataTable control
 * @private
 */
sap.ui.table.DataTable.prototype.exit = function() {

	// cleanup of the toolbar popup
	this.oPopup.destroy();

	// timer cleanup (hint of F.W.)
	if (this._sBindingTimer) {
		jQuery.sap.clearDelayedCall(this._sBindingTimer);
	}
	if (this._sTooltipTimer) {
		jQuery.sap.clearDelayedCall(this._sTooltipTimer);
	}
	if (this._sDragStartTimer) {
		jQuery.sap.clearDelayedCall(this._sDragStartTimer);
	}

	// cleanup the resize handler
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}

};


sap.ui.table.DataTable.prototype.onThemeChanged = function() {
	this._renderVSb();
};


sap.ui.table.DataTable.prototype.onresize = function() {
	
	// added rudimentary scrolling support for DataTable 
	var $this = this.$();
	var $Scr = $this.find(".sapUiTblCtrlScr");
	if ($this.find(".sapUiTblCtrl").width() > $Scr.width()) {
		$Scr.css("overflow-x", "scroll");
		$this.find(".sapUiTblVSb").css("bottom", "16px");
	} else {
		$Scr.css("overflow-x", "hidden");
		$this.find(".sapUiTblVSb").css("bottom", "0");
	}
	
};


// *****************************************************************************
// > API FUNCTIONALITY
// *****************************************************************************

/**
 * returns the current visible row count of the Table. Once the table is expanded
 * it returns the expanded row count otherwise it returns the default row count.
 * @returns {int} current visible row count
 * @public
 */
sap.ui.table.DataTable.prototype.getCurrentVisibleRowCount = function() {
	if (this.getExpanded()) {
		return Math.max(this.getVisibleRowCount(), this.getExpandedVisibleRowCount());
	} else {
		return this.getVisibleRowCount();
	}
};

sap.ui.table.DataTable.prototype.getContextByIndex = function(index) {
	// TODO: ODataListBinding needs to make sure to prevent loading multiple times
	return this.isBound() ? this.getBinding().getContexts(index, 1)[0] : undefined;
};


sap.ui.table.DataTable.prototype.setFirstVisibleRow = function(iFirstVisibleRow) {

	// check the bounds if table has a model
	if (this.isBound()) {
		iFirstVisibleRow = Math.max(iFirstVisibleRow, 0);
		iFirstVisibleRow = Math.min(iFirstVisibleRow, this.getBinding().getLength() - this.getCurrentVisibleRowCount());
	}

	// only do something if the first visible row has been changed!
	if (iFirstVisibleRow === this.getFirstVisibleRow()) {
		return;
	}
	this.setProperty("firstVisibleRow", iFirstVisibleRow, true); // no re-rendering!

	// if the table is rendered update the bindings
	if (this.bOutput) {
	
		// update the scrollbar
		this._renderVSb();
		
		// render the tooltip
		this._renderVSbToolTip();
	
		// delete the existing timer
		if (this._sBindingTimer) {
			jQuery.sap.clearDelayedCall(this._sBindingTimer); 
		}
	
		// use a delayed binding to update the bindings of the table
		this._sBindingTimer = jQuery.sap.delayedCall(this.iBindingTimeout, this, "_updateBindings");
		
	}

};

// *****************************************************************************
// > RENDERING FUNCTIONALITY
// *****************************************************************************

/**
 * Rerendering handling
 * @private
 */
sap.ui.table.DataTable.prototype.onBeforeRendering = function() {

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}

	var $this = this.$();
	$this.find("table > tbody > tr").unbind();
	$this.find("table > tbody > tr > td:first-child").unbind();
	$this.find("table > thead > tr > th").unbind();
	$this.find(".sapUiTblExp").unbind();
	if (this.isTreeBinding) {
		$this.find(".sapUiTblTreeIcon").unbind();
	}

};


/**
 * Rerendering handling
 * @private
 */
sap.ui.table.DataTable.prototype.onAfterRendering = function(oEvent) {

	// row hover effects and selection
	var $this = this.$();
	var oRows = $this.find("table > tbody > tr");
	oRows.hover(jQuery.proxy(this._onRowHover, this));
	oRows.mousemove(jQuery.proxy(this._onRowOver, this));
	if (this.getSelectionMode() != sap.ui.table.SelectionMode.None) {
		var oRowSelectors = undefined;
		if (this.getEditable()) {
			oRowSelectors = $this.find("table > tbody > tr > td:first-child");
		} else {
			oRowSelectors = $this.find("table > tbody > tr");
		}
		oRowSelectors.click(jQuery.proxy(this._onRowSelect, this));
	}

	// column hover effects and selection
	var oTHs = $this.find("table > thead > tr > th");
	oTHs.hover(jQuery.proxy(this._onColumnHover, this));
	oTHs.mousemove(jQuery.proxy(this._onColumnOver, this));
	oTHs.click(jQuery.proxy(this._onColumnSelect, this));

	// expand / collapse
	$this.find(".sapUiTblExp").click(jQuery.proxy(function(oEvent) {
		this.setExpanded(!this.getExpanded());
	}, this));
	
	// select all handler
	$this.find(".sapUiTblColSelAll").click(jQuery.proxy(function(oEvent) {
		if (this.isBound()) {
			if (this.getBinding().getLength() === this.aSelectedIndices.length) {
				this.clearSelection();
				this.fireRowSelect({rowIndex: -1});
			} else {
				this.selectAll();
				this.fireRowSelect({rowIndex: 0, rowContext: this.getContextByIndex(0)});
			}
		}
	}, this));

	// column drag and drop (delayed start to avoid start when simply clicking)
	oTHs.mousedown(jQuery.proxy(function(oEvent) {
		this._bDragAndDrop = false;
		if (!this._sDragStartTimer) {
			this._sDragStartTimer = jQuery.sap.delayedCall(150, this, "_onColumnDragStart", [oEvent]);
		}
	}, this));
	oTHs.mouseup(jQuery.proxy(function(oEvent) {
		if (this._sDragStartTimer) {
			jQuery.sap.clearDelayedCall(this._sDragStartTimer);
		}
		this._sDragStartTimer = null;
	}, this));

	// tree expanding and collapsing
	if (this.isTreeBinding()) {
		$this.find(".sapUiTblTreeIcon").click(jQuery.proxy(this._onNodeClick, this));
	}
	
	// restore the column icons
	var aCols = this.getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		aCols[i]._restoreIcons();
	}

	// scrollbar
	this._renderVSb();
	
	// listen to resize events of the browser (or surrounding DOM elements)
	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this.getDomRef(), jQuery.proxy(this.onresize, this));
	this.onresize();
	
	// update the bindings (with a delay - otherwise the invalidation does not 
	// work of the controls which binding context has been changed)
	if (this._bNeedsUpdateBindings) {

		// delete the existing timer
		if (this._sBindingTimer) {
			jQuery.sap.clearDelayedCall(this._sBindingTimer); 
			this._sBindingTimer = null;
		}
	
		// use a delayed binding to update the bindings of the table
		if ( !this._sBindingTimer ) {
			this._bNeedsUpdateBindings = false;
			this._sBindingTimer = jQuery.sap.delayedCall(0, this, "_updateBindings");
		}
	
	}

};

sap.ui.table.DataTable.prototype._onRowHover = function(oEvent) {
	var oRows = this.$().find("table > tbody > tr");
	oRows.removeClass("sapUiTblRowHvr");
};

sap.ui.table.DataTable.prototype._onRowOver = function(oEvent) {
	var $parent = jQuery(oEvent.target).parents("tr");
	if ($parent.length == 0) {
		$parent = jQuery(oEvent.target);
	}
	$parent.addClass("sapUiTblRowHvr");
};

sap.ui.table.DataTable.prototype._onRowSelect = function(oEvent) {
	// TODO: cleanup dirty row selection
	if (!this.isBound()) return;
	var bSingleSelection = this.getSelectionMode() == sap.ui.table.SelectionMode.Single;
	var bShift = !bSingleSelection && oEvent.shiftKey;
	var $parent = jQuery(oEvent.target).parents("tr");
	if ($parent.length > 0) {
		var iRow = parseInt($parent[0].id.substring((this.getId() + "-row").length), 10); 
		var iRowIndex = this.getFirstVisibleRow() + iRow;
		if (iRowIndex < this.getBinding().getLength()) {
			if (!bShift) {
				// standard selection behavior
				if (this.isIndexSelected(iRowIndex) && !!oEvent.metaKey) {
					this.removeSelectedIndex(iRowIndex, true);
					this._visualizeSelection(iRow, false);
					this.fireRowSelect({rowIndex: -1});
				} else {
					if (bSingleSelection || !oEvent.metaKey) {
						for (var i = 0, l = this.getCurrentVisibleRowCount(); i < l; i++) {
							this._visualizeSelection(i, false);
						}
						this.setSelectedIndex(iRowIndex, true);
					} else {
						this.addSelectedIndex(iRowIndex, true);
					}
					if (this.isIndexSelected(iRowIndex)) {
						this._visualizeSelection(iRow, true);
					}
					this.fireRowSelect({rowIndex: iRowIndex, rowContext: this.getContextByIndex(iRowIndex)});
				}
			} else {
				if (!bSingleSelection) {
					// append selection behavior
					var iSelRowIndex = this.getSelectedIndex();
					this.clearSelection(true);
					var aSelIndices = [];
					if (iSelRowIndex < iRowIndex) {
						for (var i = iSelRowIndex; i <= iRowIndex; i++) {
							aSelIndices.push(i);
						}
					} else {
						for (var i = iSelRowIndex; i >= iRowIndex; i--) {
							aSelIndices.push(i);
						}
					}
					this.addSelectedIndices(aSelIndices, true);
					this._updateBindings();
					this.fireRowSelect({rowIndex: iRowIndex, rowContext: this.getContextByIndex(iRowIndex)});
				}
			}
		}
		// FIREFOX HACK TO PREVENT TEXT SELECTION (no select or selectall event)
		this._clearTextSelection();
	}
};

sap.ui.table.DataTable.prototype._onColumnHover = function(oEvent) {
	var oTHs = this.$().find("table > thead > tr > th");
	oTHs.removeClass("sapUiTblColHvr");
};

sap.ui.table.DataTable.prototype._onColumnOver = function(oEvent) {
	var $parent = jQuery(oEvent.target).parents("th");
	if ($parent.length == 0) {
		$parent = jQuery(oEvent.target);
	}
	$parent.addClass("sapUiTblColHvr");
};

sap.ui.table.DataTable.prototype._onColumnSelect = function(oEvent) {
	if (this._bDragAndDrop) {
		return;
	}

	var oDomTableCell = jQuery(oEvent.target).closest("th").get(0);

	var oColumn;
	jQuery.each(this.getColumns(), function(sKey, oValue) {
		if (oValue.getId() === oDomTableCell.id) {
			oColumn = oValue;
			return true;
		}
	});
	if (oColumn) {
		var oParams = {column: oColumn, bCancel: false};
		this.fireColumnSelect(oParams);
		if (!oParams.bCancel) {
			oColumn._openMenu();
		}
	}

};

sap.ui.table.DataTable.prototype._onSelectStart = function(oEvent) {
	oEvent.preventDefault();
	oEvent.stopPropagation();
	return false;
}
;
sap.ui.table.DataTable.prototype._onColumnDragStart = function(oEvent) {

	this._bDragAndDrop = true;

	this._sSourceColumnId = jQuery(oEvent.target).closest("th").get(0).id;
	//jQuery.sap.log.info("_onColumnDragStart: " + this._sSourceColumnId);

	// check for resize
	var oColumn = sap.ui.getCore().byId(this._sSourceColumnId);
	var $Column = oColumn.$();
	var iOffsetRight = $Column.offset().left + $Column.width();
	var bIsResize = jQuery("#" + this.getId() + "_resize_" + this._sSourceColumnId).rectContains(oEvent.pageX, oEvent.pageY);

	// only continue if column is resizable or column reordering is allowed
	// in case of column reordering is allowed we need to check for the 
	// hierarchical mode because there we do not allow the reordering of the
	// first column!
	if (bIsResize && oColumn.getResizable() || 
		!bIsResize && this.getAllowColumnReordering() && 
			(!this.isTreeBinding() || jQuery.inArray(oColumn, this.getColumns()) > 0)) {
	
		// FIREFOX HACK TO PREVENT TEXT SELECTION (no select or selectall event)
		this._clearTextSelection();
	
	 	// prevent text selection in the browser
		jQuery(document.body).bind("selectstart", this._onSelectStart);

		// listen to mouse move and up event
		jQuery(document.body).mousemove(jQuery.proxy(!bIsResize ? this._onColumnDrag : this._onColumnResize, this));
		jQuery(document.body).mouseup(jQuery.proxy(!bIsResize ? this._onColumnDrop : this._onColumnResized, this));
		
	}

};

sap.ui.table.DataTable.prototype._onColumnDrag = function(oEvent) {

	// FIREFOX HACK TO PREVENT TEXT SELECTION (no select or selectall event)
	this._clearTextSelection();

	// prevent the reordering of the select all cell (when visible)
	var oTHs = this.$().find("table > thead > tr > th:not(.sapUiTblColSelCell)");
	// in case of hierarchical mode we prevent the reordering of the first column:
	if (this.isTreeBinding()) {
		oTHs = oTHs.filter(function(i) {
			return i > 0;
		});
	}

	oTHs.css("borderColor", "");
	var that = this;
	jQuery.each(oTHs, function(sKey, oValue) {

		var $Value = jQuery(oValue);
		if (oEvent.pageX >= $Value.offset().left &&
			oEvent.pageX <= $Value.offset().left + $Value.width()) {

			var bBefore = oEvent.pageX <= $Value.offset().left + $Value.outerWidth() / 2;

			var eDock = bBefore ? sap.ui.core.Popup.Dock.BeginTop : sap.ui.core.Popup.Dock.EndTop;
			var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
			that.oMarkerPopup = that.oMarkerPopup ||
				new sap.ui.core.Popup(that.getId() + "-dnd", false, false, true).
					setContent(new sap.ui.commons.Image({src: sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_help_options.gif")})).
					setDurations(250, 1000);
			that.oMarkerPopup.setPosition(eDock, eDock, oValue, bBefore ? "-7 -9" : "5 -9");
			if (!that.oMarkerPopup.isOpen()) {
				that.oMarkerPopup.open();
			}

		}

	});

};

sap.ui.table.DataTable.prototype._onColumnDrop = function(oEvent) {

	//jQuery.sap.log.info("_onColumnDrop");

	// prevent the reordering of the select all cell (when visible)
	var oTHs = this.$().find("table > thead > tr > th:not(.sapUiTblColSelCell)");
	// in case of hierarchical mode we prevent the reordering of the first column:
	if (this.isTreeBinding()) {
		oTHs = oTHs.filter(function(i) {
			return i > 0;
		});
	}
	
	oTHs.css("borderColor", "");
	var that = this;
	jQuery.each(oTHs, function(sKey, oValue) {

		var $Value = jQuery(oValue);
		if (oEvent.pageX >= $Value.offset().left &&
			oEvent.pageX <= $Value.offset().left + $Value.width()) {

			var bBefore = oEvent.pageX <= $Value.offset().left + $Value.width() / 2;

			var oSourceColumn = that.getColumnById(that._sSourceColumnId);
			var oTargetColumn = that.getColumnById(oValue.id);

			if (oSourceColumn != oTargetColumn) {
				that.removeColumn(oSourceColumn);
				that.insertColumn(oSourceColumn, that.indexOfColumn(oTargetColumn) + (bBefore ? 0 : 1));
			}

		}

	});

	if (this.oMarkerPopup && this.oMarkerPopup.isOpen()) {
		this.oMarkerPopup.close();
	}

	jQuery(document.body).unbind("selectstart", this._onSelectStart);
	jQuery(document.body).unbind("mousemove", this._onColumnDrag);
	jQuery(document.body).unbind("mouseup", this._onColumnDrop);

	this._sSourceColumnId = "";

};

sap.ui.table.DataTable.prototype._onColumnResize = function(oEvent) {

	// FIREFOX HACK TO PREVENT TEXT SELECTION (no select or selectall event)
	this._clearTextSelection();

	var $Column = jQuery.sap.byId(this._sSourceColumnId);
	var iNewWidth = Math.max(1, oEvent.pageX - $Column.offset().left);

	$Column.css("width", iNewWidth + "px");
	this.getColumnById(this._sSourceColumnId).setProperty("width", iNewWidth + "px", true);

};

sap.ui.table.DataTable.prototype._onColumnResized = function(oEvent) {

	jQuery(document.body).unbind("selectstart", this._onSelectStart);
	jQuery(document.body).unbind("mousemove", this._onColumnResize);
	jQuery(document.body).unbind("mouseup", this._onColumnResized);

	this._sSourceColumnId = "";

};

sap.ui.table.DataTable.prototype._onNodeClick = function(oEvent) {

	var $parent = jQuery(oEvent.target).parents("tr");
	if ($parent.length > 0) {
		var iRowIndex = this.getFirstVisibleRow() + parseInt($parent[0].id.substring((this.getId() + "-row").length), 10);
		var oContext = this.getContextByIndex(iRowIndex);
		this.fireToggleOpenState({
			rowIndex: iRowIndex,
			rowContext: oContext,
			expanded: !this.getBinding().isExpanded(oContext)
		});
		this.getBinding().toggleContext(oContext);
	}
	
	oEvent.preventDefault();
	oEvent.stopPropagation();
	
};


sap.ui.table.DataTable.prototype._clearTextSelection = function() {
	// FIREFOX HACK TO PREVENT TEXT SELECTION (no select or selectall event)
	if (window.getSelection && window.getSelection().removeAllRanges) {
		try {
			// try catch required due to error:
			//   Could not complete the operation due to error 800a025e.
			window.getSelection().removeAllRanges();
		} catch (ex) {}
	}
};


// *****************************************************************************
// > SCROLLING FUNCTIONALITY
// *****************************************************************************

/**
 * handles the event "mousewheel" on the Table control and finally forwards this
 * event to the virtual scrollbar
 * @param {event} oEvent event object
 * @private
 */
sap.ui.table.DataTable.prototype.onmousewheel = function(oEvent) {

	if (this._$VSb) {

		// set the focus to the scrollbar
		this._$VSb.focus();

		// determine the current position of the scroll bar
		var currentScrollTop = this._$VSb.scrollTop();

		// find out if the user is scrolling up or down
		var bDown = (oEvent.detail && oEvent.detail > 0) || (oEvent.wheelDelta && oEvent.wheelDelta < 0);

		// Set the new scrollTop according to the mouse wheel event
		var newScrollTop = currentScrollTop + this.iRowHeight * (bDown ? 1 : -1);

		// scroll to the new position (next record)
		this._$VSb.scrollTop(newScrollTop);

		// prevent the default behavior
		oEvent.preventDefault();
		oEvent.stopPropagation();
		return false;

	}

};


/**
 * handles the "scroll" event of the virtual scrollbar and uses a delay to
 * trigger the re-binding of the corresponding UI controls.
 * @param {event} oEvent event object
 * @private
 */
sap.ui.table.DataTable.prototype.onscroll = function(oEvent) {

	// calculate the first visible row
	var iCurrentScrollTop = this._$VSb ? this._$VSb.scrollTop() : 0;
	var iFirstVisibleRow = Math.round(iCurrentScrollTop / this.iRowHeight);
	if (isNaN(iFirstVisibleRow)) {
		iFirstVisibleRow = 0;
	}
	
	// set the new first visible row
	this.setFirstVisibleRow(iFirstVisibleRow);

};


// *****************************************************************************
// > DATA BINDING FUNCTIONALITY
// *****************************************************************************

sap.ui.table.DataTable.prototype.bindAggregation = function(sName, sPath, oTemplate, oSorter, aFilters) {
	var oTmpl = sName === "rows" && !oTemplate ? {} : oTemplate;
	sap.ui.core.Element.prototype.bindAggregation.call(this, sName, sPath, oTmpl, oSorter, aFilters);
};

sap.ui.table.DataTable.prototype._bindAggregation = function(sName, sPath, oTemplate, oSorter, aFilters) {
	sap.ui.core.Element.prototype._bindAggregation.apply(this, arguments);
	var oBinding = this.getBinding();
	if (sName === "rows" && oBinding) {
		oBinding.attachSort(this._onBindingSort, this);
		oBinding.attachFilter(this._onBindingFilter, this);
	}
	return this;
};

sap.ui.table.DataTable.prototype.unbindAggregation = function(sName, sPath, oTemplate, oSorter, aFilters) {
	var oBinding = this.getBinding();
	if (sName === "rows" && oBinding) {
		oBinding.detachSort(this._onBindingSort);
		oBinding.detachFilter(this._onBindingFilter);
	}
	return sap.ui.core.Element.prototype.unbindAggregation.apply(this, arguments);
};

sap.ui.table.DataTable.prototype.bindRows = function(sPath, oSorter, aFilters) {
	return this.bindAggregation("rows", sPath, undefined, oSorter, aFilters);
};

sap.ui.table.DataTable.prototype.unbindRows = function() {
	return this.unbindAggregation("rows");
};

sap.ui.table.DataTable.prototype._addControl = function(vElement, bSuppressRerendering) {
	return this.addAggregation("rows", vElement, bSuppressRerendering);
};

sap.ui.table.DataTable.prototype._destroyControls = function(bSuppressRerendering) {
	return this.destroyAggregation("rows", bSuppressRerendering);
};

sap.ui.table.DataTable.prototype._onBindingSort = function(oEvent) {
	this.clearSelection(true);
	this.fireRowSelect({rowIndex: -1});
	this._updateBindings();
};

sap.ui.table.DataTable.prototype._onBindingFilter = function(oEvent) {
	this.clearSelection(true);
	this.fireRowSelect({rowIndex: -1});
	this._updateBindings();
};


sap.ui.table.DataTable.prototype.getBinding = function(sName) {
	var oBinding = sap.ui.core.Element.prototype.getBinding.apply(this, [sName || "rows"]);
	if (oBinding && this.isTreeBinding() && (sName || "rows") === "rows" && !oBinding.getLength) {
		// SIMULATE A LIST BINDING FOR THE TREE BINDING!
		//jQuery.sap.log.info("Enhancing Binding Object - Tree to List Binding");
		jQuery.extend(oBinding, ({
			_init: function() {
				return this;
			},
			updateData: function() {
				this.aContexts = this.getRootContexts();
				this.mContextInfo = {};
				for (var i = 0, l = this.aContexts.length; i < l; i++) {
					this.mContextInfo[this.aContexts[i]] = {
						iLevel: 0,
						bExpanded: false,
						bHasChildren: this.hasChildContexts(this.aContexts[i])
					};
				}
			},
			getLength: function() {
				return this.aContexts.length;
			},
			getContexts: function(iStartIndex, iLength) {
				var aContextsCopy = [];
				for (var i = iStartIndex, l = iStartIndex + iLength; i < l; i++) {
					aContextsCopy.push(this.aContexts[i]);
				}
				return aContextsCopy;
			},
			getLevel: function(oContext) {
				return this.mContextInfo[oContext] ? this.mContextInfo[oContext].iLevel : -1;
			},
			isExpanded: function(oContext) {
				return this.mContextInfo[oContext] ? this.mContextInfo[oContext].bExpanded : false;
			},
			hasChildren: function(oContext) {
				return this.mContextInfo[oContext] ? this.mContextInfo[oContext].bHasChildren : false;
			},
			hasChildContexts: function(oContext) {
				return this.getNodeContexts(oContext).length > 0;
			},
			expandContext: function(oContext) {
				var oContextInfo = this.mContextInfo[oContext];
				if (oContextInfo && !oContextInfo.bExpanded) {
					var iIndex = jQuery.inArray(oContext, this.aContexts);
					var aNodeContexts = this.getNodeContexts(oContext);
					for (var i = 0, l = aNodeContexts.length; i < l; i++) {
						this.aContexts.splice(iIndex + i + 1, 0, aNodeContexts[i]);
						this.mContextInfo[aNodeContexts[i]] = {
							iLevel: this.mContextInfo[oContext].iLevel + 1,
							bExpanded: false,
							bHasChildren: this.hasChildContexts(aNodeContexts[i])
						};
					}
					this.mContextInfo[oContext].bExpanded = true;
					this._fireChange();
				}
			},
			collapseContext: function(oContext) {
				var oContextInfo = this.mContextInfo[oContext];
				if (oContextInfo && oContextInfo.bExpanded) {
					for (var i = this.aContexts.length - 1; i > 0; i--) {
						if (this.aContexts[i] !== oContext &&
							this.aContexts[i].substring(0, oContext.length) === oContext) {
							this.aContexts.splice(i, 1);
						}
					}
					this.mContextInfo[oContext].bExpanded = false;
					this._fireChange();
				}
			},
			toggleContext: function(oContext) {
				if (this.mContextInfo[oContext].bExpanded) {
					this.collapseContext(oContext);
				} else {
					this.expandContext(oContext);
				}
			},
			attachSort: function() {},
			detachSort: function() {},
			attachFilter: function() {},
			detachFilter: function() {}
		}._init()));
		oBinding.updateData();
		if (this.getExpandFirstLevel() && oBinding.aContexts) {
			jQuery.each(oBinding.aContexts.slice(), function(iIndex, oContext) {
				oBinding.expandContext(oContext);
			});
		}
	}
	return oBinding;
};

sap.ui.table.DataTable.prototype.getBindingPath = function(sName) {
	return sap.ui.core.Element.prototype.getBindingPath.apply(this, [sName || "rows"]);
};

sap.ui.table.DataTable.prototype.isBound = function(sName) {
	return sap.ui.core.Element.prototype.isBound.apply(this, [sName || "rows"]);
};

/**
 * Enhance the Element's updateBindings function to also consider the
 * table binding path.
 * @private
 */
sap.ui.table.DataTable.prototype.updateRows = function() {
	this._renderVSb();
	this._updateBindings();
};

/**
 * TODO
 */
sap.ui.table.DataTable.prototype.isTreeBinding = function(sName) {
	return this.getHierarchical();
};

/**
 * updates the bindings of the Table control
 * @private
 */
sap.ui.table.DataTable.prototype._updateBindings = function() {

	if (this.isBound()) {
	
		if (this.getDomRef()) {

			//jQuery.sap.log.info("_updateBindings");
			
			var oBinding = this.getBinding();
	
			var oDate = new Date();
			var iStartIndex = this.getFirstVisibleRow();
			var iOffset = this.getCurrentVisibleRowCount();
			var iLength = oBinding.getLength();
			var bHierarchical = this.isTreeBinding();
	
			if (iStartIndex + iOffset > iLength) {
				iStartIndex = 0;
				this.setProperty("firstVisibleRow", iStartIndex, true); // no re-rendering!
			}
	
			// fetch the data for the section
			var aContexts = oBinding.getContexts(iStartIndex, iOffset, this.getThreshold());
			//jQuery.sap.log.warning("Rendering: "+ iStartIndex + " - " + iOffset);
		
			var sBaseUrl = jQuery.sap.getModulePath("sap.ui.table", '/') + "themes/" + sap.ui.getCore().getConfiguration().getTheme() + "/img/";
			for (var row = 0; row < this._aRows.length; row++) {
				//var oContext = aContexts[row + (iStartIndex - iSectionStart)];
				var oContext = aContexts[row];
				//jQuery.sap.log.info("Row "+ row + " context: " + oContext);
				for (var col = 0; col < this._aRows[row].length; col++) {
					var oCellControl = this._aRows[row][col];
					if (oCellControl.getBindingContext() != oContext) {
						oCellControl.setBindingContext(oContext);
					}
				}
				var $row = jQuery.sap.byId(this.getId() + "-row" + row);
				if (row + iStartIndex < iLength) {
					this._visualizeSelection(row, this.isIndexSelected(row + iStartIndex));
					if (bHierarchical) {
						var iLevel = oBinding.getLevel(oContext);
						var $TreeIcon = jQuery.sap.byId(this.getId() + "-row" + row).find(".sapUiTblTreeIcon");
						$TreeIcon.css("marginLeft", iLevel * 17);
						var sTreeIconClass = "sapUiTblTreeIconLeaf";
						if (oBinding.hasChildren(oContext)) {
							sTreeIconClass = oBinding.isExpanded(oContext) ? "sapUiTblTreeIconNodeOpen" : "sapUiTblTreeIconNodeClosed";
						}
						$TreeIcon.removeClass("sapUiTblTreeIconLeaf sapUiTblTreeIconNodeOpen sapUiTblTreeIconNodeClosed").addClass(sTreeIconClass);
						$row.attr("data-sap-ui-level", iLevel)
					}
					$row.removeClass("sapUiTblCntHdn");
				} else {
					$row.addClass("sapUiTblCntHdn");
					if (bHierarchical) {
						$row.removeAttr("data-sap-ui-level");
					}
					this._visualizeSelection(row, false);
				}
			}
	
			var iDelay = new Date() - oDate;
			this.iBindingTimeout = iDelay + 10;
			//jQuery.sap.log.debug("this.iBindingTimeout: " + this.iBindingTimeout);
	
		} else {
		
			this._bNeedsUpdateBindings = true;
		
		}

	}

	this._sBindingTimer = null;

};


/** 
 * visualizes the selection of a table row
 * @private
 */
sap.ui.table.DataTable.prototype._visualizeSelection = function(iRow, bSelected) {
	if (bSelected) {
		jQuery.sap.byId(this.getId() + "-row" + iRow).
			addClass("sapUiTblRowSel").find(".sapUiTblRowSelCell").
				attr("title", this.oResBundle.getText("TBL_ROW_DESELECT")).
				attr("aria-selected", "true");
	} else {
		jQuery.sap.byId(this.getId() + "-row" + iRow).
			removeClass("sapUiTblRowSel").find(".sapUiTblRowSelCell").
				attr("title", this.oResBundle.getText("TBL_ROW_SELECT")).
				attr("aria-selected", "false");
	}
};


// *****************************************************************************
// > CLIENT SIDE RENDERER FUNCTIONALITY
// *****************************************************************************

sap.ui.table.DataTable.prototype._renderVSb = function() {

	// cleanup old scrollbar
	if (this._$VSb) {
		this.iRowHeight = 0;
		this._$VSb.unbind();
		this._$VSb = null;
	}

	// reference to the tds for visibility change
	var $Tbl = this.$();
	var $SbPH = $Tbl.find(".sapUiTblVSb");

	// find the relevant DOM elements => scrollbar
	var oSbCont = jQuery.sap.domById(this.getId() + "-vsbcont");

	// calculate the row height
	var oBinding = this.getBinding("rows");
	if (this.bOutput && oBinding) {

		var iFirstVisibleRow = Math.max(0, this.getFirstVisibleRow());
		var iVisibleRowCount = this.getCurrentVisibleRowCount();
		var iRowCount = oBinding.getLength();

		if (iRowCount > iVisibleRowCount) {

			var $SbCont = jQuery(oSbCont),
				$Sb = jQuery.sap.byId(this.getId() + "-vsb"),
				$SbImg = jQuery.sap.byId(this.getId() + "-vsbimg");

			$Tbl.addClass("sapUiTblHasVSb");

			this.iRowHeight = $Sb.height() / iVisibleRowCount;
			this.iStepSize = this.iRowHeight * iRowCount / ($Sb.height() - 32 - 1);

			// reset scrollbar and apply new height
			$SbImg.height(this.iRowHeight * iRowCount);
			$Sb.scrollTop(this.iRowHeight * iFirstVisibleRow);

			// bind the scroll event
			this._$VSb = $Sb;
			this._$VSb.bind("scroll", jQuery.proxy(this.onscroll, this));

		} else {
			$Tbl.removeClass("sapUiTblHasVSb");
		}

	} else {
		$Tbl.removeClass("sapUiTblHasVSb");
	}

};


sap.ui.table.DataTable.prototype._renderVSbToolTip = function() {

	if (this._$VSb) {

		var iStartIndex = this.getFirstVisibleRow();
		var sText = this.oResBundle.getText("TBL_TOOLTIP",
				[iStartIndex + 1,
				 iStartIndex + this.getCurrentVisibleRowCount(),
				 this.getBinding("rows").getLength()]);
		this.oPopup.getContent().setProperty("text", sText, true);
		this.oPopup.getContent().rerender();

		var eDock = sap.ui.core.Popup.Dock;
		var oOffset = this._$VSb.offset();
		var sOffset = this.bRTL ? "20" : "-20";
		if (this.bRTL && (jQuery.browser.webkit || jQuery.browser.mozilla && jQuery.browser.fVersion < 4)) {
			sOffset = "36";
		}
		var oDock = this.bRTL ? eDock.BeginTop : eDock.EndTop;
		this.oPopup.setPosition(oDock, oDock, this._$VSb[0], sOffset + " " + (16 + this._$VSb.scrollTop() / this.iStepSize));
		if (!this.oPopup.isOpen()) {
			this.oPopup.open();
		}

		if (this._sTooltipTimer) {
			jQuery.sap.clearDelayedCall(this._sTooltipTimer);
		}

		this._sTooltipTimer = jQuery.sap.delayedCall(1000, this, function() {
			this.oPopup.close();
			this._sTooltipTimer = null;
		});

	}

};


// *****************************************************************************
// > COLUMN HEADERS
// *****************************************************************************

/**
 * Retrieves a columnHeader object, based on a column id
 * @param {String} columnId column id for which we are looking for
 * @private
 */
sap.ui.table.DataTable.prototype.getColumnById = function(columnId) {
	// loop through all column headers until we find the right columnHeader object
	var cols = this.getColumns();
	for (var i = 0 ; i < cols.length ; i++){
		if (cols[i].getId() == columnId){
			return cols[i];
		}
	}
	// should never get here
	return null;
};


// *****************************************************************************
// > SELECTION API FUNCTIONALITY
// *****************************************************************************

sap.ui.table.DataTable.prototype.getSelectedIndex = function() {
	if (this.aSelectedIndices.length > 0) {
		return this.aSelectedIndices[0];
	}
	return -1;
};

sap.ui.table.DataTable.prototype.setSelectedIndex = function(iIndex, bSuppressRerendering) {
	if ( !this.isBound() ||iIndex < 0 || iIndex >= this.getBinding().getLength()) {
		return;
	}
	this.aSelectedIndices = [ iIndex ];
	// update
	if (!bSuppressRerendering) {
		this.invalidate();
	}
};

sap.ui.table.DataTable.prototype.addSelectedIndex = function(iIndex, bSuppressRerendering) {
	// only single selection is allowed
	if (this.getSelectionMode() == sap.ui.table.SelectionMode.Single) {
		this.setSelectedIndex(iIndex, bSuppressRerendering);
	} else {
		// selection changed?
		if (!this.isBound() || iIndex < 0 || iIndex >= this.getBinding().getLength()) {
			return;
		}
		if (jQuery.inArray(iIndex, this.aSelectedIndices) == -1) {
			this.aSelectedIndices.push(iIndex);
			// update
			if (!bSuppressRerendering) {
				this.invalidate();
			}
		}
	}
};

sap.ui.table.DataTable.prototype.removeSelectedIndex = function(iIndex, bSuppressRerendering) {
	// selection changed?
	var iIndexToRemove = jQuery.inArray(iIndex, this.aSelectedIndices);
	if (iIndexToRemove != -1) {
		this.aSelectedIndices.splice(iIndexToRemove, 1);
		// update
		if (!bSuppressRerendering) {
			this.invalidate();
		}
	}
};

sap.ui.table.DataTable.prototype.clearSelection = function(bSuppressRerendering) {
	// unselect all rows
	this.aSelectedIndices = [];
	// update
	if (!bSuppressRerendering) {
		this.invalidate();
	}
};

sap.ui.table.DataTable.prototype.selectAll = function(bSuppressRerendering) {
	// select all rows
	this.aSelectedIndices = [];
	for (var i = 0, l = this.getBinding().getLength(); i < l; i++) {
		this.aSelectedIndices.push(i);
	}
	// update
	if (!bSuppressRerendering) {
		this.invalidate();
	}
};

sap.ui.table.DataTable.prototype.getSelectedIndices = function() {
	var aSelectedIndices = this.aSelectedIndices.slice();
	aSelectedIndices.sort(function(a, b) { return a - b; });
	return aSelectedIndices;
};

sap.ui.table.DataTable.prototype.setSelectedIndices = function(aIndices, bSuppressRerendering) {
	if (this.getSelectionMode() == sap.ui.table.SelectionMode.Single) {
		return;
	}
	// clear the selection
	this.clearSelection(bSuppressRerendering);
	// add each index to the selected ones
	for (var i = 0; i < aIndices.length; i++) {
		this.addSelectedIndex(aIndices[i], bSuppressRerendering);
	}
};

sap.ui.table.DataTable.prototype.addSelectedIndices = function(aIndices, bSuppressRerendering) {
	if (!this.getSelectionMode() == sap.ui.table.SelectionMode.Single) {
		return;
	}
	// add each index to the selected ones
	for (var i = 0; i < aIndices.length; i++) {
		this.addSelectedIndex(aIndices[i], bSuppressRerendering);
	}
};

sap.ui.table.DataTable.prototype.isIndexSelected = function(iIndex) {
	return jQuery.inArray(iIndex, this.aSelectedIndices) != -1;
};


// *****************************************************************************
// > KEYBOARD HANDLING
// *****************************************************************************


sap.ui.table.DataTable.prototype.onkeypress = function(oEvent) {
	if (oEvent.keyCode == jQuery.sap.KeyCodes.F2) {
		jQuery.sap.log.info(this.getId() + ": F2");
	}
};

sap.ui.table.DataTable.prototype.onsapleft = function(oEvent) {
	jQuery.sap.log.info(this.getId() + ": sapleft");
};

sap.ui.table.DataTable.prototype.onsapleftmodifiers = function(oEvent) {
	jQuery.sap.log.info(this.getId() + ": sapleftmodifiers");
};

sap.ui.table.DataTable.prototype.onsapright = function(oEvent) {
	jQuery.sap.log.info(this.getId() + ": sapright");
};

sap.ui.table.DataTable.prototype.onsaprightmodifiers = function(oEvent) {
	jQuery.sap.log.info(this.getId() + ": saprightmodifiers");
};

sap.ui.table.DataTable.prototype.onsapdown = function(oEvent) {
	var $target = jQuery(oEvent.target);
	if ($target.hasClass("sapUiTblRowSelCell")) {
		var $next = $target.parent().next().children();
		if ($next.length > 0) {
			$next.get(0).focus();
		} else {
			// we are at the end => scroll one down if possible
			if (this.getFirstVisibleRow() < this.getBinding().getLength() - this.getCurrentVisibleRowCount()) {
				this.setFirstVisibleRow(this.getFirstVisibleRow() + 1);
				this._renderVSb();
			}
		}
	} else {
		jQuery.sap.log.info(this.getId() + ": sapdown");
	}
};

sap.ui.table.DataTable.prototype.onsapdownmodifiers = function(oEvent) {
	jQuery.sap.log.info(this.getId() + ": sapdownmodifiers");
};

sap.ui.table.DataTable.prototype.onsapup = function(oEvent) {
	var $target = jQuery(oEvent.target);
	if ($target.hasClass("sapUiTblRowSelCell")) {
		var $prev = $target.parent().prev().children();
		if ($prev.length > 0) {
			$prev.get(0).focus();
		} else {
			// we are at the beginning => scroll one up if possible
			if (this.getFirstVisibleRow() > 0) {
				this.setFirstVisibleRow(this.getFirstVisibleRow() - 1);
				this._renderVSb();
			}
		}
	} else {
		jQuery.sap.log.info(this.getId() + ": sapup");
	}
};

sap.ui.table.DataTable.prototype.onsapupmodifiers = function(oEvent) {
	jQuery.sap.log.info(this.getId() + ": sapupmodifiers");
};

sap.ui.table.DataTable.prototype.onsaphome = function(oEvent) {
	jQuery.sap.log.info(this.getId() + ": saphome");
};

sap.ui.table.DataTable.prototype.onsapend = function(oEvent) {
	jQuery.sap.log.info(this.getId() + ": sapend");
};

sap.ui.table.DataTable.prototype.onsaptop = function(oEvent) {
	jQuery.sap.log.info(this.getId() + ": saptop");
};

sap.ui.table.DataTable.prototype.onsapbottom = function(oEvent) {
	jQuery.sap.log.info(this.getId() + ": sapbottom");
};

sap.ui.table.DataTable.prototype.onsappageup = function(oEvent) {
	var $target = jQuery(oEvent.target);
	if ($target.hasClass("sapUiTblRowSelCell")) {
		this.setFirstVisibleRow(this.getFirstVisibleRow() - this.getCurrentVisibleRowCount());
		this._renderVSb();
	} else {
		jQuery.sap.log.info(this.getId() + ": sappageup");
	}
};

sap.ui.table.DataTable.prototype.onsappagedown = function(oEvent) {
	var $target = jQuery(oEvent.target);
	if ($target.hasClass("sapUiTblRowSelCell")) {
		this.setFirstVisibleRow(this.getFirstVisibleRow() + this.getCurrentVisibleRowCount());
		this._renderVSb();
	} else {
		jQuery.sap.log.info(this.getId() + ": sappagedown");
	}
};

sap.ui.table.DataTable.prototype.onsapenter = function(oEvent) {
	jQuery.sap.log.info(this.getId() + ": sapenter");
};

sap.ui.table.DataTable.prototype.onsapentermodifiers = function(oEvent) {
	jQuery.sap.log.info(this.getId() + ": sapentermodifiers");
};
