const mysql = require('mysql');

function DBconnect(){
    let con = mysql.createConnection({
        host: process.env.DBhost,
        user: process.env.DBuser,
        password: process.env.DBpass,
        database: process.env.DBname
    });

    return con;
}

function DBquery(sql){
    return new Promise((resolve,reject) => {
        con = DBconnect();
        con.connect((err) => {
            if(err){
                console.log(err);
                con.end()
                reject(err);
            }else{
                con.query(sql, (err,result,fiels) => {
                    if(err){
                        console.log(err);
                        con.end()
                        reject(err);
                    }else{
                        //console.log(result[0]);
                        con.end()
                        resolve(result[0]);
                    }
                });
            }
        });
    });
}

exports.retriveConfig = async (guildID) => {
    let query;
    let sql = "SELECT * FROM `config` WHERE `guildID` = '"+guildID+"'";
    query = DBquery(sql);
    try {
        const result = await query;
        return result;
    }
    catch (err) {
        console.log(err);
    }
}