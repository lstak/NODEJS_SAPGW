var http = require('http'),
    express = require('express'),
    xml2js = require('xml2js'),
    app = express.createServer(),
    port = process.env.PORT;
    
    

var sap_gateway = {
    host: 'gw.esworkplace.sap.com',
    path: '/sap/opu/sdata/IWFND/SALESORDER/SalesOrderCollection?&sap-user=GW@ESW&sap-password=ESW4GW'
};
    
function proxy (req, res) {
    http.get(sap_gateway, function (gw_res) {
        gw_res.pipe(res);
    });
}
  
function workbook (req, res) {
    
    res.header('content-disposition','attachment;filename=SalesOrders.xml');
    res.header('Content-Type','application/vnd.ms-excel');
   
    http.get(sap_gateway, function (gw_res) {
        var xml = ''
        gw_res.on("data", function (chunk) {
            xml += chunk
        });
        gw_res.on("end", function () {
            
            var parser = new xml2js.Parser();
            parser.on('end', function (result) {
                var rows = [];
    
                result['atom:entry'].forEach(function (entry) {
                    var salesorder = {},
                        properties = entry['atom:content']['m:properties'],
                        columns = [
                            'SalesOrderID',
                            'CustomerName',
                            'NetSum',
                            'Tax',
                            'TotalSum'
                        ];
                    
                    columns.forEach( function (property) {
                        var val =  properties['d:'+property]['#'] || properties['d:'+property] ;
                        
                        salesorder[property] = val;
                    });
                    //console.log(salesorder);
                    rows.push(salesorder)
                    
                })
                res.render('Workbook.ejs', {
                    layout: false,
                    rows: rows
                });
            });
            
            parser.parseString(xml);
        });
        
    });
};  
   


app.use('/public', express.static(__dirname + '/public'));


app.get('/sap*', proxy);
app.get('/workbook', workbook);


// Start the app server
app.listen(port);

console.log('Sample SAP Gateway app started on port ' + port);