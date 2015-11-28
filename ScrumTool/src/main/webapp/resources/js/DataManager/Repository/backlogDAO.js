'use strict';
scrumTool.webdb.createTable.backlog = function () {

    var db = scrumTool.webdb.db;
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE " +
                "backlog(id INTEGER PRIMARY KEY ASC, idSprint integer NOT NULL, Como text NOT NULL, Quero text NOT NULL, Para text, titulo text NOT NULL, tag varchar(20), idpessoa integer NOT NULL, esforco integer, estado text)", []);
        console.log(tx);
    });
};


scrumTool.webdb.addItem = function (itemText) {
    var db = scrumTool.webdb.db;
    db.transaction(function (tx) {
        //var addedOn = new Date();
        tx.executeSql("INSERT INTO backlog(idSprint, Como, Quero,Para,titulo, tag, idpessoa, esforco,estado) VALUES (?,?,?,?,?,?,?,?,?)",
                itemText,
                scrumTool.webdb.onSuccess,
                scrumTool.webdb.onError);
    });
};

scrumTool.webdb.createTable.update = function () {
    var db = scrumTool.webdb.db;
    db.transaction(function (tx) {
        tx.executeSql("ALTER TABLE backlog ADD COLUMN estado SMALLINT[]", []);
        console.log(tx);
    });
};

scrumTool.webdb.getAllItems = function (renderFunc) {
    var db = scrumTool.webdb.db;
    db.transaction(function (tx) {
        tx.executeSql("SELECT * FROM backlog", [], renderFunc,
                scrumTool.webdb.onError);
    });
};

function render(tx, rs){
    return rs.rows;
}