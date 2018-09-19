angular.module('indexModule', ['http']).factory('indexManagerService' ,function(http){
        var service={
            getUserInfo:function(callback){
                var url="/Sys/Auth/Login?Id="+10;
                http.get(url,null,callback)
            },
            Login:function(name,pass,callback){
                var url="/Sys/Auth/Login?name="+name+"&pass="+pass;
                http.get(url,null,callback)
            },
            saveUser:function(user,callback){
                var url="/Sys/Auth/SaveUser";
                var data={user:user}
                http.post(url,data,callback)
            },
            getUserByName:function(name,pass,callback){
                var url="/Sys/Auth/GetUserByName?name="+name;
                http.get(url,null,callback)
            },

            getString:function(name,callback){
                var url="/Sys/Auth/GetUserAll?name="+name;
                http.get(url,null,callback)
            },
        }
        return service;
    });