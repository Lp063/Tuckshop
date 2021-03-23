var config      =   require('../config/config');

class foodItems{

    constructor(eventId){
        this.eventId = eventId;
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
}

module.exports = foodItems;

//https://darifnemma.medium.com/how-to-interact-with-mysql-database-using-async-await-promises-in-node-js-9e6c81b683da
//https://usefulangle.com/post/77/nodejs-write-rest-api-class-in-module

//https://javascript.info/import-export
//https://ccoenraets.github.io/es6-tutorial/classes/