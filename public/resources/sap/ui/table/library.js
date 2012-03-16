/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.ui.table (1.2.0)
 */
jQuery.sap.declare("sap.ui.table.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library with table controls.
 *
 * @namespace
 * @name sap.ui.table
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");
jQuery.sap.require("sap.ui.commons.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.table",
  dependencies : ["sap.ui.core","sap.ui.commons"],
  types: [
    "sap.ui.table.SelectionMode"
  ],
  interfaces: [],
  controls: [
    "sap.ui.table.DataTable",
    "sap.ui.table.Table"
  ],
  elements: [
    "sap.ui.table.Column",
    "sap.ui.table.Row"
  ],
  version: "1.2.0"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.table.SelectionMode.
jQuery.sap.declare("sap.ui.table.SelectionMode");

/**
 * @class Selection mode of the table
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.table.SelectionMode = {
  
    /**
     * Select multiple rows at a time. 
     * @public
     */
    Multi : "Multi",

    /**
     * Select multiple rows at a time - a click toggles the selection. 
     * @public
     */
    MultiToggle : "MultiToggle",

    /**
     * Select one row at a time. 
     * @public
     */
    Single : "Single",

    /**
     * No rows can be selected. 
     * @public
     */
    None : "None"

  };
  

// -----------------------------------------------------------------------------
// Begin of Library Initialization coding, copied from shared.js
// -----------------------------------------------------------------------------

// map the new Column to the old ColumnHeader
sap.ui.table.ColumnHeader = sap.ui.table.Column;

// map the SelectionMode All to MultiToggle
sap.ui.table.SelectionMode.All = sap.ui.table.SelectionMode.MultiToggle;