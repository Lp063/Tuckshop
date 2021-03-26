var config      =   require('../config/config');

class foodItems{

    constructor(eventId){
        this.eventId = eventId;
    }

    addOne(insertItem){
        return new Promise((resolve,reject)=>{
            config.mysqlConnection.getConnection( function(err, connection) {
                if(err) { 
                    return reject(err); 
                }
                const item ={
                    name:insertItem.name,
                    price:parseInt(insertItem.price),
                    serving:insertItem.serving,
                    currency:"inr"
                };
                connection.query('INSERT into `tbl_items` SET ?',item,function(error, results, fields){
                    connection.release();
                    if(error) { 
                        return reject(error);
                    }else{
                        return resolve(results);
                    }
                });
            });
        });
    }

    get(input){
        return new Promise((resolve,reject)=>{
            config.mysqlConnection.getConnection( function(err, connection) {
                if(err) { 
                    return reject(err); 
                }
                connection.query('SELECT * FROM `tbl_items` where event_id = 1 ',function(error, results, fields){
                    connection.release();
                    if(error) { 
                        return reject(error);
                    }else{
                        return resolve(results);
                    }
                });
            });
        });
    }

    getOne(input){
        return new Promise((resolve,reject)=>{
            config.mysqlConnection.getConnection( function(err, connection) {
                if(err) { 
                    return reject(err); 
                }
                connection.query('SELECT * FROM `tbl_items` where id = ?',[input.id],function(error, results, fields){
                    connection.release();
                    if(error) { 
                        return reject(error);
                    }else{
                        return resolve(results);
                    }
                });
            });
        });
    }
}

module.exports = foodItems;