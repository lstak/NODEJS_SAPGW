/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.table.Column.
jQuery.sap.declare("sap.ui.table.Column");
jQuery.sap.require("sap.ui.table.library");
jQuery.sap.require("sap.ui.core.Element");

/**
 * Constructor for a new Column.
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
 * <li>width : sap.ui.core.CSSSize</li>
 * <li>flexible : boolean</li>
 * <li>resizable : boolean</li>
 * <li>hAlign : sap.ui.commons.layout.HAlign</li>
 * <li>sortProperty : string</li>
 * <li>filterProperty : string</li>
 * <li>filterOperator : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>label : sap.ui.core.Control</li>
 * <li>template : sap.ui.core.Control</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
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
 * The column allows to define column specific properties that will be applied when rendering the table.
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.2.0
 *
 * @constructor   
 * @public
 */
sap.ui.table.Column = function (sId, mSettings) {
	sap.ui.core.Element.apply(this, arguments);
};

// chain the prototypes
sap.ui.table.Column.prototype = jQuery.sap.newObject(sap.ui.core.Element.prototype);

/*
 * Describe the sap.ui.table.Column. 
 * Resulting metadata can be obtained via sap.ui.table.Column.getMetadata();
 */ 
sap.ui.core.Element.defineClass("sap.ui.table.Column", {

  // ---- object ----
  baseType : "sap.ui.core.Element",
  publicMethods : [
    // properties 
    "getWidth", "setWidth", "getFlexible", "setFlexible", "getResizable", "setResizable", "getHAlign", "setHAlign", "getSortProperty", "setSortProperty", "getFilterProperty", "setFilterProperty", "getFilterOperator", "setFilterOperator", 
    // aggregations
    "getLabel", "setLabel", "destroyLabel", "getTemplate", "setTemplate", "destroyTemplate"
    // associations
    
    // events
    
    // methods
    
  ],

  // ---- control specific ----
  library : "sap.ui.table",
  properties : {
    "width" : {name : "width", type : "sap.ui.core.CSSSize", group : "", defaultValue : null},
    "flexible" : {name : "flexible", type : "boolean", group : "", defaultValue : null},
    "resizable" : {name : "resizable", type : "boolean", group : "", defaultValue : true},
    "hAlign" : {name : "hAlign", type : "sap.ui.commons.layout.HAlign", group : "", defaultValue : sap.ui.commons.layout.HAlign.Begin},
    "sortProperty" : {name : "sortProperty", type : "string", group : "", defaultValue : null},
    "filterProperty" : {name : "filterProperty", type : "string", group : "", defaultValue : null},
    "filterOperator" : {name : "filterOperator", type : "string", group : "", defaultValue : 'Contains'}
  },
  defaultAggregation : "label",
  aggregations : {
    "label" : {name : "label", type : "sap.ui.core.Control", multiple : false}, 
    "template" : {name : "template", type : "sap.ui.core.Control", multiple : false}
  },
  associations : {},
  events : {}

});	


/**
 * Getter for property <code>width</code>.
 * Width of the column.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getWidth = function() {
	return this.getProperty("width");
};

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Column.prototype.setWidth = function(sWidth) {
	this.setProperty("width", sWidth);
	return this;
};


/**
 * Getter for property <code>flexible</code>.
 * Is the width of the column flexible (grows on resize)?
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {boolean} the value of property <code>flexible</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFlexible = function() {
	return this.getProperty("flexible");
};

/**
 * Setter for property <code>flexible</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {boolean} bFlexible  new value for property <code>flexible</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Column.prototype.setFlexible = function(bFlexible) {
	this.setProperty("flexible", bFlexible);
	return this;
};


/**
 * Getter for property <code>resizable</code>.
 * Is the column resizable or not?
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>resizable</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getResizable = function() {
	return this.getProperty("resizable");
};

/**
 * Setter for property <code>resizable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bResizable  new value for property <code>resizable</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Column.prototype.setResizable = function(bResizable) {
	this.setProperty("resizable", bResizable);
	return this;
};


/**
 * Getter for property <code>hAlign</code>.
 * Horizontal alignment of the column content.
 *
 * Default value is <code>Begin</code>
 *
 * @return {sap.ui.commons.layout.HAlign} the value of property <code>hAlign</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getHAlign = function() {
	return this.getProperty("hAlign");
};

/**
 * Setter for property <code>hAlign</code>.
 *
 * Default value is <code>Begin</code> 
 *
 * @param {sap.ui.commons.layout.HAlign} oHAlign  new value for property <code>hAlign</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Column.prototype.setHAlign = function(oHAlign) {
	this.setProperty("hAlign", oHAlign);
	return this;
};


/**
 * Getter for property <code>sortProperty</code>.
 * Specifies the binding property on which the column will sort.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>sortProperty</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getSortProperty = function() {
	return this.getProperty("sortProperty");
};

/**
 * Setter for property <code>sortProperty</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sSortProperty  new value for property <code>sortProperty</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Column.prototype.setSortProperty = function(sSortProperty) {
	this.setProperty("sortProperty", sSortProperty);
	return this;
};


/**
 * Getter for property <code>filterProperty</code>.
 * Specifies the binding property on which the column will filter.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>filterProperty</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterProperty = function() {
	return this.getProperty("filterProperty");
};

/**
 * Setter for property <code>filterProperty</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sFilterProperty  new value for property <code>filterProperty</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Column.prototype.setFilterProperty = function(sFilterProperty) {
	this.setProperty("filterProperty", sFilterProperty);
	return this;
};


/**
 * Getter for property <code>filterOperator</code>.
 * @see sap.ui.model.FilterOperator (default value: "Contains")
 *
 * Default value is <code>Contains</code>
 *
 * @return {string} the value of property <code>filterOperator</code>
 * @public
 * 
 */
sap.ui.table.Column.prototype.getFilterOperator = function() {
	return this.getProperty("filterOperator");
};

/**
 * Setter for property <code>filterOperator</code>.
 *
 * Default value is <code>Contains</code> 
 *
 * @param {string} sFilterOperator  new value for property <code>filterOperator</code>
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Column.prototype.setFilterOperator = function(sFilterOperator) {
	this.setProperty("filterOperator", sFilterOperator);
	return this;
};

	
/**
 * Getter for aggregation <code>label</code>.<br/>
 * Label (header renderer) of the column which is displayed in the column header.
 * 
 * @return {sap.ui.core.Control}
 * @public
 */
sap.ui.table.Column.prototype.getLabel = function() {
	return this.getAggregation("label", null);
};


/**
 * Setter for the aggregated <code>label</code>.
 * @param oLabel {sap.ui.core.Control}
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Column.prototype.setLabel = function(oLabel) {
	this.setAggregation("label", oLabel);
	return this;
};
	

/**
 * Destroys the label in the aggregation 
 * named <code>label</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Column.prototype.destroyLabel = function() {
	this.destroyAggregation("label");
	return this;
};

	
/**
 * Getter for aggregation <code>template</code>.<br/>
 * Template (cell renderer) of this column. The default is: sap.ui.commons.TextView.
 * 
 * @return {sap.ui.core.Control}
 * @public
 */
sap.ui.table.Column.prototype.getTemplate = function() {
	return this.getAggregation("template", null);
};


/**
 * Setter for the aggregated <code>template</code>.
 * @param oTemplate {sap.ui.core.Control}
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Column.prototype.setTemplate = function(oTemplate) {
	this.setAggregation("template", oTemplate);
	return this;
};
	

/**
 * Destroys the template in the aggregation 
 * named <code>template</code>.
 * @return {sap.ui.table.Column} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.table.Column.prototype.destroyTemplate = function() {
	this.destroyAggregation("template");
	return this;
};


// Start of sap/ui/table/Column.js
jQuery.sap.require("sap.ui.commons.Label");
jQuery.sap.require("sap.ui.commons.TextField");
jQuery.sap.require("sap.ui.commons.MenuItem");

/**
 * This file defines behavior for the control,
 */
sap.ui.table.Column.prototype.init = function() {

	this.oResBundle = sap.ui.getCore().getLibraryResourceBundle("sap.ui.table");

};

sap.ui.table.Column.prototype.exit = function() {

	if (this.oMenu) {
		this.oMenu.destroy();
	}

};

sap.ui.table.Column.prototype.onThemeChanged = function() {
	if (this.oMenu) {
		var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
		var oControl = sap.ui.getCore().byId(this.getId() + "_asc");
		if (oControl) {
			oControl.setIcon(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_asc.gif"));
		}
		var oControl = sap.ui.getCore().byId(this.getId() + "_desc");
		if (oControl) {
			oControl.setIcon(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_desc.gif"));
		}
		var oControl = sap.ui.getCore().byId(this.getId() + "_filter");
		if (oControl) {
			oControl.setIcon(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_filter.gif"));
		}
	}
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setLabel = function(vLabel) {
	var oLabel = vLabel;
	if (typeof (vLabel) === "string") {
		oLabel = new sap.ui.commons.Label({
			text : vLabel
		});
	}
	this.setAggregation("label", oLabel);
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
 */
sap.ui.table.Column.prototype.setTemplate = function(vTemplate) {
	var oTemplate = vTemplate;
	if (typeof (vTemplate) === "string") {
		oTemplate = new sap.ui.commons.TextView().bindText(vTemplate);
	}
	this.setAggregation("template", oTemplate);
	return this;
};

/*
 * @see JSDoc generated by SAPUI5 control API generator
sap.ui.table.Column.prototype.setEditorTemplate = function(vTemplate) {
	var oTemplate = vTemplate;
	if (typeof (vTemplate) === "string") {
		oTemplate = new sap.ui.commons.TextField().bindValue(vTemplate);
	}
	this.setAggregation("editorTemplate", oTemplate);
	return this;
};
 */

sap.ui.table.Column.prototype._openMenu = function() {

	if (!this.oMenu) {
		this.oMenu = new sap.ui.commons.Menu();
		var that = this;
		if (jQuery.browser.msie && jQuery.browser.version < 9) {
			// special handling for old IE's because strangewise
			// the focus is lost after closing the popup
			this.oMenu.getPopup().attachClosed(function(oEvent) {
				setTimeout(function() {
					that.focus();
				}, 0);
			});
		}
		var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
		if (this.getSortProperty()) {
			this.oMenu.addItem(new sap.ui.commons.MenuItem(this.getId() + "_asc", {
				text: this.oResBundle.getText("TBL_SORT_ASC"),
				icon: sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_asc.gif"),
				select: function(oEvent) { that.sort(oEvent) }
			}));
			this.oMenu.addItem(new sap.ui.commons.MenuItem(this.getId() + "_desc", {
				text: this.oResBundle.getText("TBL_SORT_DESC"),
				icon: sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_desc.gif"),
				select: function(oEvent) { that.sort(oEvent) }
			}));
		}
		if (this.getFilterProperty()) {
			// TODO: move MenuInputItem to commons or table and require correctly!!
			try {
				jQuery.sap.require("sap.ui.dev.MenuInputItem");
				if (sap.ui.dev && sap.ui.dev.MenuInputItem) {
					this.oMenu.addItem(new sap.ui.dev.MenuInputItem(this.getId() + "_filter", {
						text: this.oResBundle.getText("TBL_FILTER"),
						icon: sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_filter.gif"),
						select: function(oEvent) { that.filter(oEvent) }
					}));
				}
			} catch (ex) {
				jQuery.sap.log.warning("The filter feature is not working since sap.ui.dev library is not available.");
			}
		}
	}
	if (this.oMenu.getItems().length > 0) {
		var eDock = sap.ui.core.Popup.Dock;
		this.oMenu.open(false, this.getFocusDomRef(), eDock.BeginTop, eDock.BeginBottom, this.getDomRef());
	}

};

sap.ui.table.Column.prototype.sort = function(oEvent) {
	var oItem = oEvent.getParameter("item");
	var bDescending = (oItem.getId().indexOf('_asc') == -1);
	var aCols = this.getParent().getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		aCols[i].oSorter = undefined;
	}
	this.oSorter = new sap.ui.model.Sorter(this.getSortProperty(), bDescending);
	this.getParent().getBinding("rows").sort(this.oSorter);
	this._renderSortIcon(bDescending);
};

sap.ui.table.Column.prototype._renderSortIcon = function(bDescending) {
	var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
	var oImage = sap.ui.getCore().byId(this.getId() + "-sortIcon") || new sap.ui.commons.Image(this.getId() + "-sortIcon");
	oImage.addStyleClass("sapUiTblColIconsOrder");
	if (!bDescending) {
		oImage.setSrc(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_asc.gif"));
	} else {
		oImage.setSrc(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_sort_desc.gif"));
	}
	var oRenderManager = new sap.ui.core.RenderManager();
	var htmlImage = oRenderManager.getHTML(oImage);
	jQuery.sap.byId(this.getParent().getId()).find(".sapUiTblColIconsOrder").remove();
	jQuery.sap.byId(this.getParent().getId()).find("th").removeAttr("aria-sort");
	jQuery(htmlImage).prependTo(jQuery.sap.domById(this.getParent().getId() + "_icons_" + this.getId()));
	this.$().attr("aria-sort", bDescending ? "descending" : "ascending");
};

sap.ui.table.Column.prototype.filter = function(oEvent) {
	var oItem = oEvent.getParameter("item");
	if (oItem.getValue()) {
		var oFilterOperator = sap.ui.model.FilterOperator[this.getFilterOperator()] || sap.ui.model.FilterOperator.Contains;
		// determine the data type (to convert the value into )
		// TODO: remove the hack when databinding supports datatypes
		var vFilterValue = oItem.getValue();
		if (this.getParent().isBound()) {
			var oTable = this.getParent();
			var sType = typeof oTable.getModel().getProperty(this.getFilterProperty(), oTable.getContextByIndex(oTable.getFirstVisibleRow()));
			if (sType === "boolean") {
				vFilterValue = vFilterValue == "true";
			} else if (sType === "int") {
				vFilterValue = parseInt(vFilterValue, 10);
			} else if (sType === "float") {
				vFilterValue = parseFloat(vFilterValue);
			}
		}
		this.oFilter = new sap.ui.model.Filter(this.getFilterProperty(), oFilterOperator, vFilterValue);
	} else {
		this.oFilter = undefined;
	}
	var aFilters = [];
	var aCols = this.getParent().getColumns();
	for (var i = 0, l = aCols.length; i < l; i++) {
		if (aCols[i].oFilter) {
			aFilters.push(aCols[i].oFilter);
		}
	}
	this.getParent().getBinding("rows").filter(aFilters);
	this._renderFilterIcon(oItem.getValue());
};

sap.ui.table.Column.prototype._renderFilterIcon = function(bHasFilter) {
	var sCurrentTheme = sap.ui.getCore().getConfiguration().getTheme();
	var oImage = sap.ui.getCore().byId(this.getId() + "-filterIcon") || new sap.ui.commons.Image(this.getId() + "-filterIcon");
	jQuery.sap.byId(oImage.getId()).remove();
	oImage.addStyleClass("sapUiTblColIconsFilter");
	if (bHasFilter) {
		oImage.setSrc(sap.ui.resource("sap.ui.table", "themes/" + sCurrentTheme + "/img/ico12_filter.gif"));
		var oRenderManager = new sap.ui.core.RenderManager();
		var htmlImage = oRenderManager.getHTML(oImage);
		jQuery(htmlImage).prependTo(jQuery.sap.domById(this.getParent().getId() + "_icons_" + this.getId()));
	}
};

sap.ui.table.Column.prototype._restoreIcons = function() {
	
	if (this.oSorter) {
		this._renderSortIcon(this.oSorter.bDescending);
	}
	
	if (this.oFilter) {
		this._renderFilterIcon(true);
	}
		
};

sap.ui.table.Column.prototype.setResizable = function(bFlag) {
	this.setProperty("resizable", bFlag, true); // no re-rendering!
	if (bFlag) {
		this.$().find(".sapUiTblColResize").css("cursor", "");
	} else {
		this.$().find(".sapUiTblColResize").css("cursor", "auto");
	}
	return this;
};
