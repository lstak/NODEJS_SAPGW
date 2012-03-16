/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

//Provides default renderer for control sap.ui.table.DataTable
jQuery.sap.declare("sap.ui.table.DataTableRenderer");

/**
 * @class DataTableRenderer
 * @static
 */
sap.ui.table.DataTableRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.table.DataTableRenderer.render = function(oRenderManager, oControl) {

	// convenience variable
	var rm = oRenderManager;
	var r = sap.ui.table.DataTableRenderer; 

	// define the table container
	rm.write("<div");
	if (oControl.bIsACC) {
		rm.writeAttribute("tabindex", "0");
		var aAriaOwnsIds = []; 
		if (oControl.getToolbar()) {
			aAriaOwnsIds.push(oControl.getToolbar().getId());
		}
		aAriaOwnsIds.push(oControl.getId() + "-table");
		rm.writeAttribute("aria-owns", aAriaOwnsIds.join(" "));
	}
	rm.writeControlData(oControl);
	rm.addClass("sapUiTbl");
	if (!oControl.getTitle()) {
		rm.addClass("sapUiTblNoHeader");
	}
	rm.writeClasses();
	if (oControl.getWidth()) {
		rm.addStyle("width", oControl.getWidth());
	}
	rm.writeStyles();
	rm.write(">");

	// render the title
	r.renderTitle(rm, oControl);

	// render the toolbar
	r.renderToolbar(rm, oControl);

	// render the table
	r.renderTable(rm, oControl);

	// render the footer
	r.renderFooter(rm, oControl);

	// end of table container
	rm.write("</div>");

	// update the control bindings and the selection status (only when already rendered)
	if (oControl.bOutput) {
		oControl._bNeedsUpdateBindings = true;
	}
	
};


// =============================================================================
// SUB RENDERER
// =============================================================================


sap.ui.table.DataTableRenderer.renderTitle = function(rm, oControl) {
	// render the title of the table if specified
	if (oControl.getTitle()) {
		rm.write("<div");
		rm.addClass("sapUiTblHdr");
		rm.writeClasses();
		if (oControl.bIsACC) {
			rm.writeAttribute("role", "heading");
		}
		rm.write(">");
		rm.write(oControl.getTitle());
		rm.write("</div>");
	}
};


sap.ui.table.DataTableRenderer.renderToolbar = function(rm, oControl) {
	if (oControl.getToolbar()) {
		rm.renderControl(oControl.getToolbar());
	}
};

sap.ui.table.DataTableRenderer.renderTable = function(rm, oControl) {

	// render information
	var bRenderHSb = false;
	var bShowRowSelectors = oControl.getSelectionMode() != sap.ui.table.SelectionMode.None;
	var bShowSelectAllButton = oControl.getSelectionMode() === sap.ui.table.SelectionMode.All || oControl.getSelectionMode() === sap.ui.table.SelectionMode.Multi;
	
	// model information
	var oBinding = oControl.getBinding();

	rm.write("<div");
	rm.writeAttribute("class", "sapUiTblCtrlCnt");
	rm.write(">");

	rm.write("<div");
	rm.writeAttribute("class", "sapUiTblCtrlScr");
	rm.write(">");

	rm.write("<table");
	rm.writeAttribute("id", oControl.getId() + "-table");
	rm.writeAttribute("class", "sapUiTblCtrl");
	rm.write(">");
	
	// -------------------------------------------------------------------------
	// THEAD: Column Headers
	// -------------------------------------------------------------------------

	rm.write("<thead><tr>");
	if (bShowRowSelectors) {
		rm.write("<th class=\"sapUiTblColSelCell sapUiTblColFirst\"");
		if (oControl.bIsACC) {
			rm.writeAttribute("role", "columnheader");
			rm.writeAttribute("tabindex", "0");
		}
		if (bShowSelectAllButton) {
			rm.writeAttribute("title", oControl.oResBundle.getText("TBL_SELECT_ALL"));
		}
		rm.write(">");
		if (bShowSelectAllButton) {
			rm.write("<div id=\"" + oControl.getId() + "-selall\" class=\"sapUiTblColSelAll\"></div>");
		}
		rm.write("</th>");
	}
	var aHeaders = oControl.getColumns();
	var bHasHeaders = aHeaders.length > 0;
	var iHeaderCount = Math.max(1, aHeaders.length);
	for (var col = 0; col < iHeaderCount; col++) {
		rm.write("<th");
		if (oControl.bIsACC) {
			rm.writeAttribute("role", "columnheader");
			rm.writeAttribute("tabindex", "0");
		}
		if (!bShowRowSelectors && col === 0) {
			rm.addClass("sapUiTblColFirst");
		}
		if (col === iHeaderCount - 1) {
			rm.addClass("sapUiTblColLast");
		}
		rm.writeClasses();
		var sWidth = aHeaders[col] && aHeaders[col].getWidth();
		if (sWidth) {
			rm.addStyle("width", sWidth);
		}
		rm.writeStyles();
		var sId = aHeaders[col] && aHeaders[col].getId();
		if (sId) {
			rm.writeElementData(aHeaders[col])
		}
		rm.write(">");
		if (sId) {
			rm.write("<div id=\"" + oControl.getId() + "_resize_" + sId + "\" class=\"sapUiTblColResize\"");
			if (aHeaders[col] && !aHeaders[col].getResizable()) {
				rm.write(" style=\"cursor: auto;\"");
			}
			rm.write("></div>");
			rm.write("<div id=\"" + oControl.getId() + "_icons_" + sId + "\" class=\"sapUiTblColIcons\"></div>");
		}
		rm.write("<div class=\"sapUiTblCnt\"");
		/*
		if (oControl.getHeaderHeight()) {
			rm.addStyle("height", oControl.getHeaderHeight());
		}
		*/
		rm.writeStyles();
		rm.write(">");
		var oLabel = aHeaders[col] && aHeaders[col].getLabel();
		if (oLabel) {
			rm.renderControl(oLabel);
		}
		rm.write("</div>");
		rm.write("</th>");
	}
	rm.write("</tr></thead>");

	// -------------------------------------------------------------------------
	// TFOOT: Horizontal Scrollbar (TODO)
	// -------------------------------------------------------------------------

	/*
	if (bHasHeaders && bRenderHSb) {
		rm.write("<tfoot>");
		rm.write("<tr class=\"sapUiTblHSb\">");
		if (bShowRowSelectors) {
			rm.write("<td class=\"sapUiTblRowSelCell\"></td>");
		}
		rm.write("<td colspan=\"" + aHeaders.length + "\" style=\"background-color: green;\">");
		rm.write("</td>");
		rm.write("<td class=\"sapUiTblVSb\"></td>");
		rm.write("</tr>");
		rm.write("</tfoot>");
	}
	*/

	// -------------------------------------------------------------------------
	// TBODY: Content Cells
	// -------------------------------------------------------------------------

	// get the information for the content rendering
	var iFirstVisibleRow = oControl.getFirstVisibleRow();
	var iVisibleRowCount = oControl.getCurrentVisibleRowCount();

	// by default we check the length of the list binding
	var iRowCount = oBinding ? oBinding.getLength() : 0;

	// determine the scope for the visible
	var iMin = Math.max(Math.min(iFirstVisibleRow, iRowCount), 0);
	var iMax = Math.max(Math.min(iMin + iVisibleRowCount, iRowCount), iMin);
	if (iMax - iMin != iVisibleRowCount) {
		iMin = Math.max(iMax - iVisibleRowCount, 0);
	}
	oControl.setProperty("firstVisibleRow", iMin, true); // no re-rendering!

	// fetch the contexts from the model to apply them immediately
	var aContexts = [];
	if (oBinding) {
		aContexts = oBinding.getContexts(iMin, iMax, oControl.getThreshold());
	} 

	rm.write("<tbody>");
	oControl._aRows = [];
	oControl._destroyControls(true);

	var bHierarchical = oControl.getHierarchical(),
	    iMarginPx = 0, 
	    iLevel = 0;
	     
	for (var row = 0; row < iVisibleRowCount; row++) {

		// create the cells array
		oControl._aRows[row] = [];

		// row
		rm.write("<tr ");
		rm.writeAttribute("id", oControl.getId() + "-row" + row);
		if (oControl.bIsACC){
			rm.writeAttribute("role", "row");
			rm.writeAttribute("aria-label", oControl.oResBundle.getText("TBL_ROW_SELECT") + " " + row);
			rm.writeAttribute("tabindex", "0");
		}

		// determine hierarchical infos
		if (bHierarchical && oBinding) {
			iLevel = oBinding.getLevel(aContexts[row]);
			iMarginPx = iLevel * 17;
			rm.writeAttribute("data-sap-ui-level", iLevel);
		}

		rm.write(">");

		// row selector cell:
		if (bShowRowSelectors) {
			rm.write("<td id=\"");
			rm.write(oControl.getId() + "-rowsel" + row);
			rm.write("\" class=\"sapUiTblRowSelCell sapUiTblColFirst\" role=\"gridcell\" tabIndex=\"0\"></td>");
		}

		// content cells:
		for (var col = 0; col < iHeaderCount; col++) {
			rm.write("<td role=\"gridcell\""); 
			if (!bShowRowSelectors && col === 0) {
				rm.addClass("sapUiTblColFirst");
			}
			if (col === iHeaderCount - 1) {
				rm.addClass("sapUiTblColLast");
			}
			rm.writeClasses();
			rm.write("><div class=\"sapUiTblCnt\" ");
			if (oControl.getRowHeight()) {
				rm.addStyle("height", oControl.getRowHeight());
			}
			if (aHeaders[col]) {
				var sHAlign = sap.ui.table.DataTableRenderer.getHAlign(aHeaders[col].getHAlign(), oControl.bRTL);
				if (sHAlign) {
					rm.addStyle("text-align", sHAlign);
				}
			}
			rm.writeStyles();
			rm.write(">");
			if (col === 0 && bHierarchical) {
				var sTreeIconClass = "sapUiTblTreeIconLeaf";
				rm.write("<div class=\"sapUiTblTreeIcon " + sTreeIconClass + "\" tabindex=\"0\" style=\"margin-left:" + iMarginPx + "px;\"></div>");
			}
			var oTemplate = aHeaders[col] && aHeaders[col].getTemplate();
			if (oTemplate) {
				oTemplate = oTemplate.clone("_row_" + row + "_col_" + col);
				if (oTemplate.setEditable) {
					oTemplate.setEditable(oControl.getEditable());
				}
				if (aContexts[row]) {
					oTemplate.setBindingContext(aContexts[row]);
				}
				oControl._addControl(oTemplate, true);
				rm.renderControl(oTemplate);
				oControl._aRows[row][col] = oTemplate;
			}
			rm.write("</div></td>");
		}

		rm.write("</tr>");
	}
	rm.write("</tbody>");

	rm.write("</table>");

	// vertical scrollbar:
	if (bHasHeaders) {
		rm.write("<div class=\"sapUiTblVSb\">");
		rm.write("<div id=\"" + oControl.getId() + "-vsbcont\">");
		rm.write("<div id=\"" + oControl.getId() + "-vsb\">");
		rm.write("<img id=\"" + oControl.getId() + "-vsbimg\" src=\"");
		rm.write(sap.ui.resource('sap.ui.core', 'themes/base/img/1x1.gif'));
		rm.write("\"></img>");
		rm.write("</div>");
		rm.write("</div>");
		rm.write("</div>");
	}
	
	rm.write("</div>");
	rm.write("</div>");


};


sap.ui.table.DataTableRenderer.renderFooter = function(rm, oControl) {

	var iExpandedVisibleRowCount = oControl.getExpandedVisibleRowCount();
	if (iExpandedVisibleRowCount && iExpandedVisibleRowCount > oControl.getVisibleRowCount()) {
		rm.write("<div class=\"sapUiTblFtr\">&nbsp;");
		var sText = oControl.getExpanded() ? oControl.oResBundle.getText("TBL_SHOW_LESS") : oControl.oResBundle.getText("TBL_SHOW_MORE");
		var sClass = oControl.getExpanded() ? "sapUiTblExpLess" : "sapUiTblExpMore";
		rm.write("<a id=\"" + oControl.getId() + "_expand\" class=\"sapUiTblExp\" href=\"javascript:void(0);\">");
		rm.write("<span class=\"" + sClass + "\"></span>");
		rm.write("<span class=\"sapUiTblExpText\">" + sText + "</span></a>");
		rm.write("</div>");
	}

};



// =============================================================================
// HELPER FUNCTIONALITY
// =============================================================================

/**
 * Returns the value for the HTML "align" attribute according to the given
 * horizontal alignment and RTL mode, or NULL if the HTML default is fine.
 *
 * @param {sap.ui.commons.layout.HAlign} oHAlign
 * @param {boolean} bRTL
 * @type string
 */
sap.ui.table.DataTableRenderer.getHAlign = function(oHAlign, bRTL) {
  switch (oHAlign) {
	case sap.ui.commons.layout.HAlign.Center:
	  return "center";
	case sap.ui.commons.layout.HAlign.End:
	case sap.ui.commons.layout.HAlign.Right:
	  return bRTL ? "left" : "right";
  }
  // case sap.ui.commons.layout.HAlign.Left:
  // case sap.ui.commons.layout.HAlign.Begin:
  return bRTL ? "right" : "left";
};
