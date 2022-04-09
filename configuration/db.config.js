const { default: mongoose } = require("mongoose");

module.exports.connectToDb = function() {
    
    const connectionString = getDatabaseConnectionStringWithPassword();
    
    mongoose.connect(connectionString, {
        useNewUrlParser: true
    }).then(connection => {
        console.log('Connection successfully established with Database');
        //console.log(connection.connection);
    });

}

function getDatabaseConnectionStringWithPassword() {
    try {
        console.log('Creating MongoDB Connection String');
        return process.env.DATABASE_CS.replace(process.env.DATABASE_CS_REPLACE_PASS_STRING, process.env.DATABASE_PASSWORD);
    } catch(error) {
        console.error('Error while creating database connection string');
        console.error(error);
        throw error;
    }
}