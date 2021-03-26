var config      =   require('../config/config');

class foodItems{

    constructor(itemId){
        this.itemId = itemId;
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
                connection.query('SELECT * FROM `tbl_items`',function(error, results, fields){
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

    updateOne(input){
        return new Promise((resolve,reject)=>{
            config.mysqlConnection.getConnection( function(err, connection) {
                if(err) { 
                    return reject(err); 
                }
                connection.query('UPDATE `tbl_items` name = ?, price = ?, serving = ? where id = ?',
                    [input.name, input.price, input.serving, this.itemId],
                    function(error, results, fields){
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