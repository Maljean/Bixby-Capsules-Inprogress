var http = require('http')

module.exports.function = function BuildPoleStatus(serviceInfo) {
  var url = "http://mobile311.sfgov.org/open311/v2/services/"+serviceInfo.serviceCode+".json"
  var data = JSON.parse(http.getUrl(url, {format: 'text'}))
  for (var i = 0; i < data.attributes.length; i += 1) {
    if (data.attributes[i].description.toLowerCase() == "pole status") {
      return (data.attributes[i].values)
    }
  }
  return ;
}