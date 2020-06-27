var config      =   require('../config/config');

module.exports.getFoodItems = (input,callback)=>{
    var rows=[];
    config.mysqlConnection.query('SELECT * FROM `tbl_items` where event_id = 1 ',function(error, results, fields){
        if (results) {
            results.map(function($object){
                rows.push($object);
            });
            callback(null,rows);
        }
    });
}