//Importar librerias
var http = require("http");
var path = require("path");
var filesystem = require("fs");

//Funcion de respuesta
function requestEvent(req, res){
	
    //
    //var contentType = "text/html";
    var resource = req.url;
    var extention = path.extname(resource);
    
    //Validar si la ubicación solicitada  es la raiz
    if(resource === "/"){
        resource = "/index.html";
    }
	
    resource = "."+resource;  

    switch(extention){
    	case ".css":
       		contentType = "text/css";
        	break;
    	case ".js":
        	contentType = "text/javascript";
        	break;
	default:
		contentType = "text/html";		
    }

    //Validar si existe el recurso
    fs.exists(recurso,function(exist){
        if(exist){
            fs.readFile(recurso,function(err,data){
                if(err){
                    res.writeHead(500);
                    res.end("Internal Error");
                }else{
                    res.writeHead(200,{"content-type":contentType});
                    res.end(data);
                }              
  
            });

        }else{
            res.writeHead(404);
            res.end("Not Found");
        }
    });
_
