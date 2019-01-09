exports.webPort = 8000;
//Postgres db connection
exports.dbConfig = {
    server: "localhost",
    database: "Ekart_DB_V1",
    user: "postgres",
    password: "postgres",
    port: 5432
}
exports.secret="ilovesmysoreverymuch";
exports.secretKeyExpires=600;
exports.httpMsgsFormat = "HTML";
exports.FileRepository="d:/FileRepository/Content/";
exports.clientApp="http://localhost:4200";

// exports.dbConfig = {
//     server: "mongodb://127.0.0.1:27017",
//     database: "PhotoDB",
//     user: "punith",
//     password: "punith"
// }