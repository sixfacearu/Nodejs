var fs=require('fs');
var http=require('http');
fs.readFile('sixface.txt',function(err,data){
	if(err) {
		console.log("error");
	}
	else{
		http.createServer(function(req,res){
	    res.writeHead(200,{'Content-Type':'text/plain'});
	    res.write(data.toString());
	    res.end();
      }).listen(8888);
	}
});
