var http = require('http'),
    express = require('express'),
    xml2js = require('xml2js'),
    app = express.createServer(),
    port = process.env.PORT,
    username = 'GW@ESW',
    password = 'ESW4GW';
    
var sapgw = {
    host: 'gw.esworkplace.sap.com',
    
    // we'll use Basic authentication
    headers:  { 
        'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
    }
}   
    
 
 // Action: Proxy an incoming (ie. from the user's browser) request to the SAP Gateway
function proxy (user_request, user_response) {
    
    // We're proxying calls,
    // so copy the path from the user request
    sapgw.path = user_request.url;
    
    // Use a client request to call SAP Gateway
    http.get(sapgw, function (sapgw_response) {
        // Include a content type in the response header
        user_response.header('Content-Type','application/atom+xml;type=feed');
        // then just pipe the response data from the Gateway to the user.
        sapgw_response.pipe(user_response);
    });
}
  
// Action: Generate an Excel workbook containing SalesOrders on the fly  
function workbook (req, res) {
    
    // We will fetch the SalesOrderCollection from SAP Gateway
    sapgw.path = '/sap/opu/sdata/IWFND/SALESORDER/SalesOrderCollection';
           
    
    http.get(sapgw, function (sapgw_response) {
        var xml = '';
        
        // Every time Node receives a chunk of data
        // from SAP Gateway, the 'data' event fires.
        // Just collect the complete response
        sapgw_response.on("data", function (chunk) {
            xml += chunk
        });
        
        // The 'end' event fires when the SAP Gateway response is complete 
        // We can start processing the XML response...
        sapgw_response.on("end", function () {
            
            // Node.js doesn't automatically parse the XML (like XmlHttpRequest),
            // so we need to do that explicitly.
            // We will use the xml2js module to parse an XML string
            // into a JavaScript object
            
            // Create a parser to convert the XML to JavaScript object
            var parser = new xml2js.Parser();
            
            // The 'end' event fires when the parser is done.
            // The resulting JS object is passed as parameter.
            parser.on('end', function (result) {
                // The result parameter is a complete representation 
                // of the parsed XML string.
                // We need to extract the values we need to render the workbook
                
                
                var rows = [],
                
                    // columns is the subset of properties we want to include
                    // in the Excel list
                    columns = [
                        'SalesOrderID',
                        'CustomerName',
                        'NetSum',
                        'Tax',
                        'TotalSum'
                    ];
                
    
                // result['atom:entry'] is an array of objects, representing <atom:entry>
                // in the XML string.
                // Each entry represents a SalesOrder
                result['atom:entry'].forEach(function (entry) {
                    var row = {},
                        // properties points to the parsed properties 
                        properties = entry['atom:content']['m:properties'];
                   
                    columns.forEach( function (property) {
                        // get the value for the property
                        row[property] = properties['d:'+property]['#'] || properties['d:'+property] ;
                    });
                    
                    // add it to the rows 
                    rows.push(row)
                    
                })
                
                // We're done processing the response and have extracted all data required to 
                // create the workbook.
                
                // First, include the proper HTTP headers
                res.header('content-disposition','attachment;filename=SalesOrders.xml');
                res.header('Content-Type','application/vnd.ms-excel');
 
                // Next, render the contents of Excel workbook as
                // Excel 2003 XML format, using the Workbook.ejs template
                res.render('Workbook.ejs', {
                    layout: false,
                    rows: rows
                });
                
            });
            
            // Set the parser in motion with the xml data received
            // from SAP Gateway. The parser will turn the XML string into
            // a JS object. When done, the 'end' event will fire
            // and the 'end' event handler defined above will extract the values
            // and render the Workbook.
            parser.parseString(xml);
        });
        
    });
};  
   
   
   
   
// Action: perform a redirect to the home page (index.html)   
function home (req, res) {
    res.redirect('/index.html')
}


// Now we are going to set up the routing the server...

// Look if the request is for a static file in the public directory
// this is where the client side html, css, js and SAPUI5 resources are located
app.use(express.static(__dirname + '/public'));

// If you just call the server (root), redirect to homepage
app.get('/', home);

// Requests starting '/sap/' are proxied to the SAP Gateway
app.get('/sap/*', proxy);

// Route for workbook action
app.get('/workbook', workbook);


// Routes are set up,
// Now start the app server...
app.listen(port);

console.log('Server started on port ' + port);