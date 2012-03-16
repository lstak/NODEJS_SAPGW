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
 * Initialization Code and shared classes of library sap.ui.commons (1.2.0)
 */
jQuery.sap.declare("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAPUI5 library with most common controls.
 *
 * @namespace
 * @name sap.ui.commons
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.commons",
  dependencies : ["sap.ui.core"],
  types: [
    "sap.ui.commons.ButtonStyle",
    "sap.ui.commons.HorizontalDividerHeight",
    "sap.ui.commons.HorizontalDividerType",
    "sap.ui.commons.LabelDesign",
    "sap.ui.commons.MenuBarDesign",
    "sap.ui.commons.MessageType",
    "sap.ui.commons.Orientation",
    "sap.ui.commons.PaginatorEvent",
    "sap.ui.commons.RatingIndicatorVisualMode",
    "sap.ui.commons.RowRepeaterDesign",
    "sap.ui.commons.TextViewColor",
    "sap.ui.commons.TextViewDesign",
    "sap.ui.commons.ToolbarDesign",
    "sap.ui.commons.enums.AreaDesign",
    "sap.ui.commons.enums.BorderDesign",
    "sap.ui.commons.layout.BackgroundDesign",
    "sap.ui.commons.layout.BorderLayoutAreaTypes",
    "sap.ui.commons.layout.HAlign",
    "sap.ui.commons.layout.Padding",
    "sap.ui.commons.layout.Separation",
    "sap.ui.commons.layout.VAlign"
  ],
  interfaces: [
    "sap.ui.commons.ToolbarItem"
  ],
  controls: [
    "sap.ui.commons.Accordion",
    "sap.ui.commons.ApplicationHeader",
    "sap.ui.commons.Button",
    "sap.ui.commons.CheckBox",
    "sap.ui.commons.ComboBox",
    "sap.ui.commons.DatePicker",
    "sap.ui.commons.Dialog",
    "sap.ui.commons.DropdownBox",
    "sap.ui.commons.FileUploader",
    "sap.ui.commons.HorizontalDivider",
    "sap.ui.commons.Image",
    "sap.ui.commons.ImageMap",
    "sap.ui.commons.Label",
    "sap.ui.commons.Link",
    "sap.ui.commons.ListBox",
    "sap.ui.commons.Menu",
    "sap.ui.commons.MenuBar",
    "sap.ui.commons.MenuButton",
    "sap.ui.commons.Message",
    "sap.ui.commons.MessageBar",
    "sap.ui.commons.MessageList",
    "sap.ui.commons.MessageToast",
    "sap.ui.commons.Paginator",
    "sap.ui.commons.Panel",
    "sap.ui.commons.PasswordField",
    "sap.ui.commons.ProgressIndicator",
    "sap.ui.commons.RadioButton",
    "sap.ui.commons.RadioButtonGroup",
    "sap.ui.commons.RatingIndicator",
    "sap.ui.commons.RoadMap",
    "sap.ui.commons.RowRepeater",
    "sap.ui.commons.SearchField",
    "sap.ui.commons.Slider",
    "sap.ui.commons.Splitter",
    "sap.ui.commons.Tab",
    "sap.ui.commons.TabStrip",
    "sap.ui.commons.TextArea",
    "sap.ui.commons.TextField",
    "sap.ui.commons.TextView",
    "sap.ui.commons.ToggleButton",
    "sap.ui.commons.Toolbar",
    "sap.ui.commons.Tree",
    "sap.ui.commons.layout.AbsoluteLayout",
    "sap.ui.commons.layout.BorderLayout",
    "sap.ui.commons.layout.HorizontalLayout",
    "sap.ui.commons.layout.MatrixLayout",
    "sap.ui.commons.layout.VerticalLayout"
  ],
  elements: [
    "sap.ui.commons.AccordionSection",
    "sap.ui.commons.Area",
    "sap.ui.commons.MenuItem",
    "sap.ui.commons.MenuItemBase",
    "sap.ui.commons.RichTooltip",
    "sap.ui.commons.RoadMapStep",
    "sap.ui.commons.RowRepeaterFilter",
    "sap.ui.commons.RowRepeaterSorter",
    "sap.ui.commons.SearchProvider",
    "sap.ui.commons.Title",
    "sap.ui.commons.ToolbarSeparator",
    "sap.ui.commons.TreeNode",
    "sap.ui.commons.layout.BorderLayoutArea",
    "sap.ui.commons.layout.MatrixLayoutCell",
    "sap.ui.commons.layout.MatrixLayoutRow",
    "sap.ui.commons.layout.PositionContainer"
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

// Provides enumeration sap.ui.commons.ButtonStyle.
jQuery.sap.declare("sap.ui.commons.ButtonStyle");

/**
 * @class different styles for a button.
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.ButtonStyle = {
  
    /**
     * Button is emphasized. 
     * @public
     */
    Emph : "Emph",

    /**
     * Accept button (normally green). 
     * @public
     */
    Accept : "Accept",

    /**
     * Reject button (normally red). 
     * @public
     */
    Reject : "Reject",

    /**
     * default style (no special styling). 
     * @public
     */
    Default : "Default"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.HorizontalDividerHeight.
jQuery.sap.declare("sap.ui.commons.HorizontalDividerHeight");

/**
 * @class Enumeration of possible HorizontalDivider height settings.
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.HorizontalDividerHeight = {
  
    /**
     * Divider gets no top and bottom margin. 
     * @public
     */
    Ruleheight : "Ruleheight",

    /**
     * Divider gets a small top and bottom margin. 
     * @public
     */
    Small : "Small",

    /**
     * Divider gets a medium top and bottom margin. 
     * @public
     */
    Medium : "Medium",

    /**
     * Divider gets a large top and bottom margin. 
     * @public
     */
    Large : "Large"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.HorizontalDividerType.
jQuery.sap.declare("sap.ui.commons.HorizontalDividerType");

/**
 * @class Enumeration of possible HorizontalDivider types.
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.HorizontalDividerType = {
  
    /**
     * Type Area 
     * @public
     */
    Area : "Area",

    /**
     * Type Page 
     * @public
     */
    Page : "Page"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.LabelDesign.
jQuery.sap.declare("sap.ui.commons.LabelDesign");

/**
 * @class Available label display modes.
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.LabelDesign = {
  
    /**
     * Displays the label in bold. 
     * @public
     */
    Bold : "Bold",

    /**
     * Displays the label in normal mode. 
     * @public
     */
    Standard : "Standard"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.MenuBarDesign.
jQuery.sap.declare("sap.ui.commons.MenuBarDesign");

/**
 * @class Determines the visual design of a MenuBar. The feature might be not supported by all themes.
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.MenuBarDesign = {
  
    /**
     * The MenuBar appears in standard design. 
     * @public
     */
    Standard : "Standard",

    /**
     * The MenuBar appears in header design. 
     * @public
     */
    Header : "Header"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.MessageType.
jQuery.sap.declare("sap.ui.commons.MessageType");

/**
 * @class [Enter description for MessageType]
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.MessageType = {
  
    /**
     * Error message 
     * @public
     */
    Error : "Error",

    /**
     * Warning message 
     * @public
     */
    Warning : "Warning",

    /**
     * Successful message 
     * @public
     */
    Success : "Success"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.Orientation.
jQuery.sap.declare("sap.ui.commons.Orientation");

/**
 * @class Orientation of an UI element
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.Orientation = {
  
    /**
     * Arrange Horizontally 
     * @public
     */
    Horizontal : "Horizontal",

    /**
     * Arrange Vertically 
     * @public
     */
    Vertical : "Vertical"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.PaginatorEvent.
jQuery.sap.declare("sap.ui.commons.PaginatorEvent");

/**
 * @class Disctinct paginator event types
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.PaginatorEvent = {
  
    /**
     * First page event 
     * @public
     */
    First : "First",

    /**
     * Previous page event 
     * @public
     */
    Previous : "Previous",

    /**
     * Go to page event 
     * @public
     */
    Goto : "Goto",

    /**
     * Next page event 
     * @public
     */
    Next : "Next",

    /**
     * Last page event 
     * @public
     */
    Last : "Last"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.RatingIndicatorVisualMode.
jQuery.sap.declare("sap.ui.commons.RatingIndicatorVisualMode");

/**
 * @class Possible values for the visualization of float values in the RatingIndicator Control.
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.RatingIndicatorVisualMode = {
  
    /**
     * Values are rounded to the nearest integer value (e.g. 1.7 -> 2). 
     * @public
     */
    Full : "Full",

    /**
     * Values are rounded to the nearest half value (e.g. 1.7 -> 1.5). 
     * @public
     */
    Half : "Half",

    /**
     * Values are not rounded. 
     * @public
     */
    Continuous : "Continuous"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.RowRepeaterDesign.
jQuery.sap.declare("sap.ui.commons.RowRepeaterDesign");

/**
 * @class Determines the visual design of a RowRepeater.
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.RowRepeaterDesign = {
  
    /**
     * The RowRepeater header and footer elements, as well as the row container background, appear solid. 
     * @public
     */
    Standard : "Standard",

    /**
     * The RowRepeater header and footer elements, as well as the row container background, appear transparent. 
     * @public
     */
    Transparent : "Transparent",

    /**
     * The RowRepeater will be displayed without header, toolbar or footer. Background will be transparent. 
     * @public
     */
    BareShell : "BareShell"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.TextViewColor.
jQuery.sap.declare("sap.ui.commons.TextViewColor");

/**
 * @class Semantic Colors of a text.
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.TextViewColor = {
  
    /**
     * Default color 
     * @public
     */
    Default : "Default",

    /**
     * Positive color 
     * @public
     */
    Positive : "Positive",

    /**
     * Negative color 
     * @public
     */
    Negative : "Negative",

    /**
     * Critical color 
     * @public
     */
    Critical : "Critical"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.TextViewDesign.
jQuery.sap.declare("sap.ui.commons.TextViewDesign");

/**
 * @class Designs for TextView.
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.TextViewDesign = {
  
    /**
     * Displays the text in standard letters. 
     * @public
     */
    Standard : "Standard",

    /**
     * Displays the text in bold letters 
     * @public
     */
    Bold : "Bold",

    /**
     * Displays the text in header 1 letters. 
     * @public
     */
    H1 : "H1",

    /**
     * Displays the text in header 2 letters. 
     * @public
     */
    H2 : "H2",

    /**
     * Displays the text in header 3 letters. 
     * @public
     */
    H3 : "H3",

    /**
     * Displays the text in header 4 letters. 
     * @public
     */
    H4 : "H4",

    /**
     * Displays the text in italic letters 
     * @public
     */
    Italic : "Italic",

    /**
     * Displays the text in smaller letters. 
     * @public
     */
    Small : "Small",

    /**
     * Displays the text in monospace letters. 
     * @public
     */
    Monospace : "Monospace",

    /**
     * underlined Text 
     * @public
     */
    Underline : "Underline"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.ToolbarDesign.
jQuery.sap.declare("sap.ui.commons.ToolbarDesign");

/**
 * @class Determines the visual design of a Toolbar.
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.ToolbarDesign = {
  
    /**
     * The toolbar elements such as buttons for example have their normal visual design, and the toolbar appears solid.
     * The feature might be not supported by all themes. 
     * @public
     */
    Standard : "Standard",

    /**
     * The controls included in the toolbar have a normal visual design where the toolbar appears transparent.
     * The feature might be not supported by all themes.
     *  
     * @public
     */
    Transparent : "Transparent",

    /**
     * The included controls have a very light appearance. The feature might be not supported by all themes. 
     * @public
     */
    Flat : "Flat"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.enums.AreaDesign.
jQuery.sap.declare("sap.ui.commons.enums.AreaDesign");

/**
 * @class Possible values for the background design of areas
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.enums.AreaDesign = {
  
    /**
     * Shows the area in a plain look. 
     * @public
     */
    Plain : "Plain",

    /**
     * Shows the label in a filled look. 
     * @public
     */
    Fill : "Fill",

    /**
     * Shows the area background as transparent. 
     * @public
     */
    Transparent : "Transparent"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.enums.BorderDesign.
jQuery.sap.declare("sap.ui.commons.enums.BorderDesign");

/**
 * @class Possible values for the border design of areas
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.enums.BorderDesign = {
  
    /**
     * Draws the border as a box around the area. 
     * @public
     */
    Box : "Box",

    /**
     * Suppresses the border. 
     * @public
     */
    None : "None"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.layout.BackgroundDesign.
jQuery.sap.declare("sap.ui.commons.layout.BackgroundDesign");

/**
 * @class
 * Background design (i.e. color), e.g. of a layout cell.
 * 
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.layout.BackgroundDesign = {
  
    /**
     * 
     * A background design suitable for borders.
     *  
     * @public
     */
    Border : "Border",

    /**
     * 
     * An opaque background design that looks dark filled.
     *  
     * @public
     */
    Fill1 : "Fill1",

    /**
     * 
     * An opaque background design that looks medium filled.
     *  
     * @public
     */
    Fill2 : "Fill2",

    /**
     * 
     * An opaque background design that looks light filled.
     *  
     * @public
     */
    Fill3 : "Fill3",

    /**
     * 
     * A background design suitable for headers.
     *  
     * @public
     */
    Header : "Header",

    /**
     * 
     * A plain but opaque background design.
     *  
     * @public
     */
    Plain : "Plain",

    /**
     * 
     * A transparent background.
     *  
     * @public
     */
    Transparent : "Transparent"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.layout.BorderLayoutAreaTypes.
jQuery.sap.declare("sap.ui.commons.layout.BorderLayoutAreaTypes");

/**
 * @class The type (=position) of a BorderLayoutArea
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.layout.BorderLayoutAreaTypes = {
  
    /**
     * Value to identify the top area. 
     * @public
     */
    top : "top",

    /**
     * Value to identify the begin area. 
     * @public
     */
    begin : "begin",

    /**
     * Value to identify the center area. 
     * @public
     */
    center : "center",

    /**
     * Value to identify the end area. 
     * @public
     */
    end : "end",

    /**
     * Value to identify the bottom area. 
     * @public
     */
    bottom : "bottom"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.layout.HAlign.
jQuery.sap.declare("sap.ui.commons.layout.HAlign");

/**
 * @class
 * Horizontal alignment, e.g. of a layout cell's content within the cell's borders.
 * Note that some values depend on the current locale's writing direction while
 * others do not.
 * 
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.layout.HAlign = {
  
    /**
     * 
     * Aligned towards the beginning of a line, in the current locale's writing direction.
     *  
     * @public
     */
    Begin : "Begin",

    /**
     * 
     * Horizontally centered.
     *  
     * @public
     */
    Center : "Center",

    /**
     * 
     * Aligned towards the end of a line, in the current locale's writing direction.
     *  
     * @public
     */
    End : "End",

    /**
     * 
     * Left aligned, regardless of the current locale's writing direction.
     *  
     * @public
     */
    Left : "Left",

    /**
     * 
     * Right aligned, regardless of the current locale's writing direction.
     *  
     * @public
     */
    Right : "Right"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.layout.Padding.
jQuery.sap.declare("sap.ui.commons.layout.Padding");

/**
 * @class
 * Padding, e.g. of a layout cell's content within the cell's borders.
 * Note that all options except "None" include a padding of 2px at the top and
 * bottom, and differ only in the presence of a 4px padding towards the beginning
 * or end of a line, in the current locale's writing direction.
 * 
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.layout.Padding = {
  
    /**
     * 
     * No padding at all.
     *  
     * @public
     */
    None : "None",

    /**
     * 
     * Top and bottom padding of 2px.
     * Padding of 4px towards the beginning of a line, in the current locale's
     * writing direction, but none towards its end.
     *  
     * @public
     */
    Begin : "Begin",

    /**
     * 
     * Top and bottom padding of 2px.
     * Padding of 4px towards the end of a line, in the current locale's
     * writing direction, but none towards its beginning.
     *  
     * @public
     */
    End : "End",

    /**
     * 
     * Top and bottom padding of 2px.
     * Padding of 4px towards both the beginning and end of a line.
     *  
     * @public
     */
    Both : "Both",

    /**
     * 
     * Top and bottom padding of 2px.
     * No padding towards neither the beginning nor end of a line.
     *  
     * @public
     */
    Neither : "Neither"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.layout.Separation.
jQuery.sap.declare("sap.ui.commons.layout.Separation");

/**
 * @class
 * Separation, e.g. of a layout cell from its neighbor, via a vertical gutter of
 * defined width, with or without a vertical line in its middle.
 * 
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.layout.Separation = {
  
    /**
     * 
     * No gutter at all (0px), and without a vertical line, of course.
     *  
     * @public
     */
    None : "None",

    /**
     * 
     * A small (17px) vertical gutter without a vertical line.
     *  
     * @public
     */
    Small : "Small",

    /**
     * 
     * A small (17px) vertical gutter with a vertical line in its middle.
     *  
     * @public
     */
    SmallWithLine : "SmallWithLine",

    /**
     * 
     * A medium (31px) vertical gutter without a vertical line.
     *  
     * @public
     */
    Medium : "Medium",

    /**
     * 
     * A medium (31px) vertical gutter with a vertical line in its middle.
     *  
     * @public
     */
    MediumWithLine : "MediumWithLine",

    /**
     * 
     * A large (63px) vertical gutter without a vertical line.
     *  
     * @public
     */
    Large : "Large",

    /**
     * 
     * A large (63px) vertical gutter with a vertical line in its middle.
     *  
     * @public
     */
    LargeWithLine : "LargeWithLine"

  };
  
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.commons.layout.VAlign.
jQuery.sap.declare("sap.ui.commons.layout.VAlign");

/**
 * @class
 * Vertical alignment, e.g. of a layout cell's content within the cell's borders.
 * 
 *
 * @version 1.2.0
 * @static
 * @public
 */
sap.ui.commons.layout.VAlign = {
  
    /**
     * 
     * Aligned at the bottom.
     *  
     * @public
     */
    Bottom : "Bottom",

    /**
     * 
     * Vertically centered.
     *  
     * @public
     */
    Middle : "Middle",

    /**
     * 
     * Aligned at the top.
     *  
     * @public
     */
    Top : "Top"

  };
  

// -----------------------------------------------------------------------------
// Begin of Library Initialization coding, copied from shared.js
// -----------------------------------------------------------------------------

// lazy imports for MessageBox
sap.ui.lazyRequire("sap.ui.commons.MessageBox", "alert confirm show");

//map the Orientation enum to new enums with uppercase
sap.ui.commons.Orientation.vertical = sap.ui.commons.Orientation.Vertical;
sap.ui.commons.Orientation.horizontal = sap.ui.commons.Orientation.Horizontal;
