// main action
function doSyncData()
{
  var rs = getData4Web();
  var tableId = getTableId();
  cleanQuery(tableId);
  
  for (var i=0;i< rs.length; i++)
  {
      insertQuery(tableId,rs[i]);      
      sleep(1);
  }
}

//get UV data from open data
function getData4Web()
{
  //import地名轉座標 WGS84
  eval(UrlFetchApp.fetch('latlng.js').getContentText());  
  
  var response = UrlFetchApp.fetch("http://opendata.epa.gov.tw/ws/Data/UV/?$select=SiteName,UVI,County,PublishTime&$orderby=County&$skip=0&$top=1000&format=json");
  var json = JSON.parse(response);
  var output="", item;
  var rs = new Array();
  var counter = 0; 
  var location2;
  for ( i in json)
  {
    if (location[json[i].SiteName] !="undefined")
    {
      item = new Array("'"+json[i].SiteName+"'", "'"+json[i].UVI+"'", "'"+json[i].County+"'","'"+location[json[i].SiteName]+"'","'"+json[i].PublishTime+"'" );
      rs[counter] = item;
      counter++;
      //Logger.log("ok: "+json[i].County+" "+json[i].SiteName );
    }
    else
    {
      Logger.log("miss: "+json[i].SiteName );
    }
    
  } 
  //log("rs:"+rs);
  return rs;
}


//get FT id
function getTableId()
{
  var tables = FusionTables.Table.list();
  if (tables.items) 
  {    
      var table = tables.items[0];    
  }
  return table.tableId;
}

//add data
function insertQuery(tableId,val) {
  var column=' (SiteName,UVI,County, Location, PublishTime)';
  var sql = 'insert into ' + tableId + column +" values";
  
  var data = val.join(',');
  sql+= '('+data+')';
  
  var result = FusionTables.Query.sql(sql);  
}

// claen table
function cleanQuery(tableId) {
  var sql = 'delete from ' + tableId;
  var result = FusionTables.Query.sql(sql);  
}
