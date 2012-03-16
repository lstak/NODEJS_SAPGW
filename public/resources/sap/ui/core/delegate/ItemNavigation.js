/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2012 SAP AG. All rights reserved
 */

/**
 * @namespace
 * @name sap.ui.core.delegate
 * @public
 */

// Provides class sap.ui.core.delegate.ItemNavigation
jQuery.sap.declare("sap.ui.core.delegate.ItemNavigation");

/**
 * Creates an ItemNavigation delegate that can be attached to Controls requiring
 * capabilities for keyboard navigation between items.
 *
 * @class Delegate for the ItemNavigation with the keyboard
 *
 * @author Martin Schaus
 *
 * Delegate for the ItemNavigation with
 * arrow keys over a one dimensional list of items.
 *
 * The ItemNavigation gets a main DOM reference and
 * an array of DOM references that represent the
 * DOM nodes that should be focused.
 *
 * If there are disabled nodes or not focusable nodes like separators that should be used
 * (e.g. for paging issues) in the ItemNavigation they
 * can be added to the DOM reference array as empty (false) entries. These nodes are
 * not focused by keyboard navigation but are useful because the index of the nodes in the
 * ItemNavigation is the same like in the calling control.
 *
 * If the DOM references are submitted to the ItemNavigation the TabIndexes of the
 * nodes are adjusted regarding to the Focused Index.
 *
 * Per default the ItemNavigation cycles over the items.
 * It starts again on the top if arrow down is pressed while
 * the last item has the focus. It starts at the end if arrow up or
 * left is pressed while the first item has the focus.
 * If you like to stop the navigation at the first and last item,
 * call the <code>setCycling</code> method with a value of <code>false</code>.
 *
 * It is possible to have multiple columns in the item navigation. If multiple columns
 * are used the keyboard navigation changes. Right and left will get to the next or previous
 * node. but up and down will navigate the same way but in vertical direction.
 *
 * The ItemNavigation helper also allows to set a selected index that is used
 * if the user initially enters the navigated control (for a radio group there
 * is one selected).
 *
 * This class listens to mousedown event and if it occurs on an item in the
 * list aItemDomRefs, it sets the focus to it.
 *
 * Remembering the focused item after a server roundtrip or after re-rendering is
 * up to the control that uses this delegate.
 *
 * When the <code>setPageSize</code> method is called with a value &gt; 0,
 * then page up and down events will be handled.
 *
 * The <code>BeforeFocus</code> event is fired before the actual item is focused.
 * The control can register to this event and e.g. make the item visible
 * if it is not currently visible.
 * The index of the focused Item and the triggering event are returned.
 * !!! But this is not usable in the moment because not visible items are not reached
 * !!! by keyboard navigation. It is to late to make them visible on this event or it
 * !!! is fired to late.
 * !!! This must be redesigned if the feature is really needed. (e.g. in TabStrip for
 * !!! tabs that are not visible in the moment...)
 *
 * The <code>AfterFocus</code> event is fired after the actual item is focused.
 * The control can register to this event and react on the focus change.
 * The index of the focused Item and the triggering event are returned.
 *
 * @extends sap.ui.base.EventProvider
 *
 * @param {DOMNode} oDomRef the DOM node that is focused if the item navigation is started
 * @param {array} aItemDomRefs Array of DOM nodes representing the items for the navigation
 * @param {boolean} [bNotInTabChain=false] Whether the selected element should be in the tab chain or not
 *
 * @version 1.2.0
 * @constructor
 * @public
 */
sap.ui.core.delegate.ItemNavigation = function(oDomRef, aItemDomRefs, bNotInTabChain) {

	sap.ui.base.EventProvider.apply(this);

	//the surrounding dom ref that is focused initially
	this.oDomRef = null;
	if (oDomRef) {
		this.setRootDomRef(oDomRef);
	}
	//the array of dom refs representing the items
	this.aItemDomRefs = [];
	if (aItemDomRefs) {
		this.setItemDomRefs(aItemDomRefs);
	}

	//initialize Tabindex
	this.iTabIndex = -1;
	
	//whether the active element should get a tabindex of 0 or -1
	this.iActiveTabIndex = !!bNotInTabChain ? -1 : 0;
	
	//the initial focusedindex
	this.iFocusedIndex = -1;
	//the initial selected index (if any)
	this.iSelectedIndex = -1;
	//default for cycling
	this.bCycling = true;
	//the pagesize for pageup and down events
	this.iPageSize = -1;
	//a marker to enable focusin to decide HOW the focus arrived
	this._bMouseDownHappened = false;

};
sap.ui.core.delegate.ItemNavigation.prototype = jQuery.sap.newObject(sap.ui.base.EventProvider.prototype);

sap.ui.base.Object.defineClass("sap.ui.core.delegate.ItemNavigation", {
		// ---- object ----
		baseType : "sap.ui.base.EventProvider",
		publicMethods : []
	});

sap.ui.core.delegate.ItemNavigation.Events = {
		BeforeFocus:"BeforeFocus",
		AfterFocus:"AfterFocus"
};

/**
 * Sets the root reference surrounding the items
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining 
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setRootDomRef = function(oDomRef) {
	this.oDomRef = oDomRef;

	if(this.iFocusedIndex >= 0){
		jQuery(this.oDomRef).attr("tabIndex", this.iTabIndex);
	}else{
		jQuery(this.oDomRef).attr("tabIndex", this.iActiveTabIndex);
	}
	return this;
};

/**
 * Sets the item dom refs as an array the items
 * 
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining 
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setItemDomRefs = function(aItemDomRefs) {
	this.aItemDomRefs = aItemDomRefs;

	for (var i=0; i<this.aItemDomRefs.length; i++) {
		if (this.aItemDomRefs[i]) { // separators return null here
			if(i == this.iFocusedIndex){
				jQuery(this.aItemDomRefs[i]).attr("tabIndex", this.iActiveTabIndex);
			}else{
				jQuery(this.aItemDomRefs[i]).attr("tabIndex", -1);
			}
		}
	}
	return this;
};

/**
 * Destroys the delegate and releases all dom references
 */
sap.ui.core.delegate.ItemNavigation.prototype.destroy = function() {
	this.oDomRef = null;
	this.aItemDomRefs = null;
};

/**
 * Sets whether the ItemNavigation should cycle through the items
 * @param {boolean} bCycling true if cycling should be done, else false
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining 
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setCycling = function(bCycling) {
	this.bCycling = bCycling;
	return this;
};

/**
 * Sets the page size of the item navigation to allow pageup and down keys
 * @param {int} iPageSize the pagesize, needs to be at least 1
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining 
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setPageSize = function(iPageSize) {
	this.iPageSize = iPageSize;
	return this;
};

/**
 * Sets the selected index if the used control supports selection
 * @param {int} iIndex the index of the first selected item
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining 
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setSelectedIndex = function(iIndex) {
	this.iSelectedIndex = iIndex;
	return this;
};

/**
 * Sets whether the items are displayed in columns
 * @param {boolean} bCycling true if cycling should be done, else false
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining 
 * @public
 */
sap.ui.core.delegate.ItemNavigation.prototype.setColumns = function(iColumns) {
	this.iColumns = iColumns;
	return this;
};

/**
 * Sets the focus to the item with the given index
 * @param {int} iIndex the index of the item to focus
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.focusItem = function(iIndex, oEvent) {

	jQuery.sap.log.info('FocusItem: '+iIndex+' iFocusedIndex: '+this.iFocusedIndex);
	if(iIndex == this.iFocusedIndex && this.aItemDomRefs[this.iFocusedIndex] == document.activeElement){
		return; // item already focused -> nothing to do
	}
	// if there is no item to put the focus on, we don't even try it
	if(!this.aItemDomRefs[iIndex]) {
		return;
	}
	this.fireEvent(sap.ui.core.delegate.ItemNavigation.Events.BeforeFocus,{index:iIndex, event:oEvent});
	this.setFocusedIndex(iIndex);
	this.bISetFocus = true;
	jQuery.sap.focus(this.aItemDomRefs[this.iFocusedIndex]);

	this.fireEvent(sap.ui.core.delegate.ItemNavigation.Events.AfterFocus,{index:iIndex, event:oEvent});
};

/**
 * Sets the focused index to the given index
 * @param {int} iIndex the index of the item
 * @return {sap.ui.core.delegate.ItemNavigation} <code>this</code> to allow method chaining 
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.setFocusedIndex = function(iIndex) {
	if (iIndex < 0) {
		iIndex = 0;
	}
	if (iIndex > this.aItemDomRefs.length-1) {
		iIndex = this.aItemDomRefs.length-1;
	}

	jQuery(this.oDomRef).attr("tabIndex", this.iTabIndex);
	if (this.iFocusedIndex !== -1 && this.aItemDomRefs.length > this.iFocusedIndex) {
		jQuery(this.aItemDomRefs[this.iFocusedIndex]).attr("tabIndex", -1);
	}
	this.iFocusedIndex = iIndex;
	var oFocusItem = this.aItemDomRefs[this.iFocusedIndex];

	jQuery(oFocusItem).attr("tabIndex", this.iActiveTabIndex);
	
	return this;
};

/**
 * Returns the focused index
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.getFocusedIndex = function() {
	return(this.iFocusedIndex);
};

/**
 * Handles the onfocusin event
 * @param {jQuery.Event} oEvent the browser event
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.onfocusin = function(oEvent) {
	var oSource = oEvent.target;
	if (oSource == this.oDomRef) {
		//focus occured on the main dom ref

		// if the focus came by clicking AND it did not target one of the elements, but the root element, do nothing
		// (otherwise clicking the scrollbar re-focuses the previously focused element, which causes the browser to scroll it into view)
		if (this._bMouseDownHappened) {
			return;
		}

		this.focusItem(this.iSelectedIndex != -1 ?  this.iSelectedIndex : (this.iFocusedIndex != -1 ? this.iFocusedIndex : 0), oEvent);
		//cancel the bubbling of event in this case
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}else if(!this.bISetFocus){
		//give focused item to registered application
		this.fireEvent(sap.ui.core.delegate.ItemNavigation.Events.AfterFocus,{index:this.iFocusedIndex, event:oEvent});
	}
	this.bISetFocus = false;
};

/**
 * Handles the onsapfocusleave event
 * @param {jQuery.Event} oEvent the browser event
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.onsapfocusleave = function(oEvent) {
	if (!oEvent.relatedControlId || !jQuery.sap.containsOrEquals(this.oDomRef, sap.ui.getCore().byId(oEvent.relatedControlId).getFocusDomRef())) {
		// entirely leaving the control handled by this ItemNavigation instance
		this.setFocusedIndex(this.iSelectedIndex != -1 ?  this.iSelectedIndex : (this.iFocusedIndex != -1 ? this.iFocusedIndex : 0));
	}
};

/**
 * Handles the onmousedown event
 * Sets the focus to the item if it occured on an item
 * @param {jQuery.Event} oEvent the browser event
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.onmousedown = function(oEvent) {
	//set the focus to the clicked element or back to the last
	var oSource = oEvent.target;
	if (jQuery.sap.containsOrEquals(this.oDomRef,oSource)) {
		//the mouse down occured inside the main dom ref
		for (var i=0;i<this.aItemDomRefs.length;i++) {
			var oItem = this.aItemDomRefs[i];
			if (jQuery.sap.containsOrEquals(oItem,oSource)) {
				//the mouse down occured inside of an item
				this.focusItem(i, oEvent);
				oEvent.preventDefault();
				oEvent.stopPropagation();
				return;
			}
		}
		if (oSource == this.oDomRef) {
			// root DomRef of item navigation has been clicked
			// focus will also come in a moment - let it know that it was the mouse who caused the focus
			this._bMouseDownHappened = true;
			var that = this;
			window.setTimeout(
				function(){
					that._bMouseDownHappened = false;
				}, 20
			);
		}
	}
};

/**
 * Handles the onsapnext event
 * Sets the focus to the next item
 * @param {jQuery.Event} oEvent the browser event
 * @private
 
 */
sap.ui.core.delegate.ItemNavigation.prototype.onsapnext = function(oEvent) {

	if(!jQuery.sap.containsOrEquals(this.oDomRef,oEvent.target)){
		// current element is not part of the navigation content
		return;
	}
	
	//focus the next item
	var iIndex = this.iFocusedIndex;
	var bFirstTime = true;
	if (iIndex > -1) {
		do{
			if(this.iColumns > 1 && oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_DOWN){
				if( (iIndex + this.iColumns) >= this.aItemDomRefs.length){
					// on bottom -> begin on top of next column
					if((iIndex % this.iColumns) < (this.iColumns -1)){
						iIndex = (iIndex % this.iColumns) + 1;
					}else if(this.bCycling){
						iIndex = 0;
					}
				}else{
					iIndex = iIndex + this.iColumns;
				}
			}else{
				if (iIndex == this.aItemDomRefs.length-1){
					//last item, in cycling case focus first one, if not - don't change
					if(this.bCycling){
						iIndex = 0;
					}
				}else{
					iIndex++;
				}
			}
			
			if (iIndex == this.iFocusedIndex) {
				if (bFirstTime) {
					bFirstTime = false;
				} else {
					throw new Error("ItemNavigation has no visible/existing items and is hence unable to select the next one");
				}
			}
			
		// if item is not visible or a dummy item go to the next one
		}while(!this.aItemDomRefs[iIndex] || !jQuery(this.aItemDomRefs[iIndex]).is(":visible") || jQuery(this.aItemDomRefs[iIndex]).css('visibility') == 'hidden');
		this.focusItem(iIndex, oEvent);
		//cancel the event otherwise the browser will scroll
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};
/**
 * Ensure the sapnext event with modifiers is also handled
 * @see #onsapnext
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.onsapnextmodifiers = sap.ui.core.delegate.ItemNavigation.prototype.onsapnext;

/**
 * Handles the onsapprevious event
 * Sets the focus to the previous item
 * @param {jQuery.Event} oEvent the browser event
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.onsapprevious = function(oEvent) {

	if(!jQuery.sap.containsOrEquals(this.oDomRef,oEvent.target)){
		// current element is not part of the navigation content
		return;
	}
	
	//focus the previous item
	var iIndex = this.iFocusedIndex;
	var bFirstTime = true;
	if (iIndex > -1) {
		do{
			if(this.iColumns > 1 && oEvent.keyCode == jQuery.sap.KeyCodes.ARROW_UP){
				if( (iIndex - this.iColumns) < 0){
					// on top -> begin on end of previous column
					if((iIndex % this.iColumns) > 0){
						var iCol = (iIndex % this.iColumns) - 1;
					}else if(this.bCycling){
						var iCol = this.iColumns - 1;
					}
					var iRows = Math.ceil(this.aItemDomRefs.length / this.iColumns);
					iIndex = iCol + ((iRows-1)*this.iColumns);
					if(iIndex >= this.aItemDomRefs.length){
						iIndex = iIndex - this.iColumns;
					}
				}else{
					iIndex = iIndex - this.iColumns;
				}
			}else{
				if (iIndex == 0){
					//last item, in cycling case focus first one, if not - don't change
					if(this.bCycling){
						iIndex = this.aItemDomRefs.length;
					}
				}else{
					iIndex--;
				}
			}
			
			if (iIndex == this.iFocusedIndex) {
				if (bFirstTime) {
					bFirstTime = false;
				} else {
					throw new Error("ItemNavigation has no visible/existing items and is hence unable to select the previous one");
				}
			}
			
			
		// if item is not visible or a dummy item go to the next one
		}while(!this.aItemDomRefs[iIndex] || !jQuery(this.aItemDomRefs[iIndex]).is(":visible") || jQuery(this.aItemDomRefs[iIndex]).css('visibility') == 'hidden');
		this.focusItem(iIndex, oEvent);
		//cancel the event otherwise the browser will scroll
		oEvent.preventDefault();
		oEvent.stopPropagation();
	}
};
/**
 * Ensure the sapprevious event with modifiers is also handled
 * @see #onsapprevious
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.onsappreviousmodifiers = sap.ui.core.delegate.ItemNavigation.prototype.onsapprevious;

/**
 * Handles the onsappageup event
 * Sets the focus to the previous page item of iPageSize>0
 * @param {jQuery.Event} oEvent the browser event
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.onsappageup = function(oEvent) {

	if(!jQuery.sap.containsOrEquals(this.oDomRef,oEvent.target)){
		// current element is not part of the navigation content
		return;
	}

	if (this.iPageSize > 0) {
		var iIndex = this.iFocusedIndex;
		if (iIndex > -1) {
			iIndex = iIndex - this.iPageSize;
			if (iIndex < 0) {
				iIndex = 0;
			}
			this.focusItem(iIndex, oEvent);
		}
	}
	//cancel the event otherwise the browser will scroll
	oEvent.preventDefault();
	oEvent.stopPropagation();

};

/**
 * Handles the onsappagedown event
 * Sets the focus to the previous page item of iPageSize>0
 * @param {jQuery.Event} oEvent the browser event
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.onsappagedown = function(oEvent) {

	if(!jQuery.sap.containsOrEquals(this.oDomRef,oEvent.target)){
		// current element is not part of the navigation content
		return;
	}

	if (this.iPageSize > 0) {
		var iIndex = this.iFocusedIndex;
		if (iIndex > -1) {
			iIndex = iIndex + this.iPageSize;
			if (iIndex > this.aItemDomRefs.length-1) {
				iIndex = this.aItemDomRefs.length-1;
			}
			this.focusItem(iIndex, oEvent);
		}
	}
	//cancel the event otherwise the browser will scroll
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Handles the onsaphome event
 * Sets the focus to first visible and focusable item
 * @param {jQuery.Event} oEvent the browser event
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.onsaphome = function(oEvent) {

	if(!jQuery.sap.containsOrEquals(this.oDomRef,oEvent.target)){
		// current element is not part of the navigation content
		return;
	}

	var iIndex = 0;
	while(!this.aItemDomRefs[iIndex] || !jQuery(this.aItemDomRefs[iIndex]).is(":visible") || jQuery(this.aItemDomRefs[iIndex]).css('visibility') == 'hidden'){
		iIndex++;
		if (iIndex == this.aItemDomRefs.length) {
			// no visible item -> no new focus
			return;
		}
	};

	this.focusItem(iIndex, oEvent);
	//cancel the event otherwise the browser will scroll
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Handles the onsapend event
 * Sets the focus to last visible and focusable item
 * @param {jQuery.Event} oEvent the browser event
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.onsapend = function(oEvent) {

	if(!jQuery.sap.containsOrEquals(this.oDomRef,oEvent.target)){
		// current element is not part of the navigation content
		return;
	}

	var iIndex = this.aItemDomRefs.length-1;
	while(!this.aItemDomRefs[iIndex] || !jQuery(this.aItemDomRefs[iIndex]).is(":visible") || jQuery(this.aItemDomRefs[iIndex]).css('visibility') == 'hidden'){
		iIndex--;
		if (iIndex < 0) {
			// no visible item -> no new focus
			return;
		}
	};

	this.focusItem(iIndex, oEvent);
	//cancel the event otherwise the browser will scroll
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

/**
 * Sets tabIndex of the RootElement to 0. Is used, for example in image map for IE browser in order to avoid tabIndex -1 on image with what it would not be tabable at all.
 * @private
 */
sap.ui.core.delegate.ItemNavigation.prototype.setTabIndex0 = function() {

	this.iTabIndex = 0;
	this.iActiveTabIndex = 0;
	
};
