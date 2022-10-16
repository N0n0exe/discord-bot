const mysql = require("mysql")

module.exports = async nono => {

    const Database = new mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "botv14"
    })
    
    Database.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    
        console.log("📋 Base de données bien relié.")
    })
}
    module.exports = Database;
