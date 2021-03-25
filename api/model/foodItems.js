var config      =   require('../config/config');

class foodItems{

    constructor(eventId){
        this.eventId = eventId;
    }

    add(){
        
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