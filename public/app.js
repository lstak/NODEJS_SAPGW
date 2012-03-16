
// Let's define some shortcuts to increase
// readability of the code
var ODataModel = sap.ui.model.odata.ODataModel,
    TextField = sap.ui.commons.TextField,
    TextView = sap.ui.commons.TextView,
    Label = sap.ui.commons.Label,
    DataTable = sap.ui.table.DataTable,
    Toolbar = sap.ui.commons.Toolbar,
    Button = sap.ui.commons.Button,
    Column = sap.ui.table.Column,
    HAlign = sap.ui.commons.layout.HAlign,
    SelectionMode = sap.ui.table.SelectionMode;

  
// Specify the SAP Gateway SalesOrder service as an OData model
var salesOrderService =
        "/sap/opu/sdata/IWFND/SALESORDER",

    // The SalesOrder service requires authentication
    // get the username/password from the SDN page.
    //username = "GW@ESW",
    //password = "ESW4GW",

    // SAP Gateway only supports XML, so don't use JSON
    asJson = false,
    salesOrderModel = new ODataModel(salesOrderService, asJson)
    salesOrderCollection = "SalesOrderCollection";


var doDownloadExcel = function () {
        window.location = "http://nodejs_sapgw.lstak_1.c9.io/workbook"
    };

var button = new Button({
    text: "Download as Excel",
    icon: 'images/excel.png',
    iconFirst: false,
    height: '24px',
    press: doDownloadExcel
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

// define the relevant column properties
var salesOrderColumns = [
    { header: "Sales Order ID", value: "{SalesOrderID}", width: '100px' },
    { header: "Customer Name", value: "{CustomerName}", width: '50%' },
    { header: "Net", value: "{NetSum}", width: '100px', hAlign: HAlign.Right },
    { header: "Tax", value: "{Tax}", width: '100px', hAlign: HAlign.Right },
    { header: "Total", value: "{TotalSum}", width: '100px', hAlign: HAlign.Right }
];

// create the columns
salesOrderColumns.forEach(function (column) {
    var label = new Label({ text: column.header }),
        template = new TextView({ text: column.value }),
        col = new Column({
            label: label,
            template: template,
            width: column.width,
            hAlign: column.hAlign || HAlign.Begin
        });
        
    salesOrders.addColumn(col);
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










