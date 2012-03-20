
// Let's define some shortcuts to increase
// readability of the code
var ODataModel = sap.ui.model.odata.ODataModel,
    TextView = sap.ui.commons.TextView,
    Label = sap.ui.commons.Label,
    DataTable = sap.ui.table.DataTable,
    Toolbar = sap.ui.commons.Toolbar,
    Button = sap.ui.commons.Button,
    Column = sap.ui.table.Column,
    Right = sap.ui.commons.layout.HAlign.Right,
    Begin = sap.ui.commons.layout.HAlign.Begin,
    SelectionMode = sap.ui.table.SelectionMode;

  
// Specify the SAP Gateway SalesOrder service as an OData model.
// Please note: we do not connect directly to SAP Gateway (no host specified)
// Instead, the calls are made to the Node.js server, which will proxy the calls to SAP GW
// This way, we comply with Same Origin Policy of the browser. 
var salesOrderService =
        "/sap/opu/sdata/IWFND/SALESORDER",

    // SAP Gateway only supports XML, so don't use JSON
    asJson = false,
    salesOrderModel = new ODataModel(salesOrderService, asJson),
    salesOrderCollection = "SalesOrderCollection";



// Create a button to request an Excel workbook from server 
var button = new Button({
    text: "Download as Excel",
    icon: 'images/excel.png',
    iconFirst: false,
    height: '24px',
    press: function () {
        window.location = "/workbook"
    }
});

var toolbar = new Toolbar({ 
    items: [button]
});


// Create a master table with sales orders 
var salesOrders = new DataTable({
    title: "Sales Orders",
    width: "600px",
    visibleRowCount: 20,
    toolbar: toolbar,
    selectionMode: SelectionMode.None,
    editable: false
});

// define the relevant column options
var salesOrderColumns = [
    { header: "Sales Order ID", value: "{SalesOrderID}", width: '100px' },
    { header: "Customer Name", value: "{CustomerName}", width: '100%' },
    { header: "Net", value: "{NetSum}", width: '100px', hAlign: Right },
    { header: "Tax", value: "{Tax}", width: '100px', hAlign: Right },
    { header: "Total", value: "{TotalSum}", width: '100px', hAlign: Right }
];

// create the columns
salesOrderColumns.forEach(function (options) {
    var label = new Label({ text: options.header }),
        template = new TextView({ text: options.value }),
        column = new Column({
            label: label,
            template: template,
            width: options.width,
            hAlign: options.hAlign || Begin
        });
        
    salesOrders.addColumn(column);
});

// connect the data table to the SalesOrder service
salesOrders.setModel(salesOrderModel);

// An OData request for the SalesOrderCollection 
// will return the sales orders. 
// Each sales order should result in a table row.
salesOrders.bindRows(salesOrderCollection);

// Put table in the DOM.
// placeAt will automatically defer if 
// DOM is not ready yet (like in this demo).
salesOrders.placeAt("salesorders");










