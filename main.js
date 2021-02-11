const http = require('http');
const user = require('./user');
const options = {'content-type':'application/json',
}
const server = http.createServer(options,(req,res)=>{
    //res.writeHead('{status:200,content-type:"text/plain"}');
    if(req.url.includes('/user')){
        if(req.method == 'GET'){
            params_arr = req.url.split('/');  
            data = get(params_arr[params_arr.length-1]);
            res.writeHead(200,{"content-type":"application/json"})
            res.write(JSON.stringify(data));
          }else if(req.method == "POST"){

          }
    }
    res.end();
})

server.listen(8080);


function get(param){
    return user.getUser(param);
}

