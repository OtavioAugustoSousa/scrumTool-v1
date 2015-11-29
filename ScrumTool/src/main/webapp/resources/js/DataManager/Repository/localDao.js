var scrumTool = {};
scrumTool.webdb = {};
scrumTool.webdb.db = null;
scrumTool.webdb.open = function () {
    var dbSize = 50 * 1024 * 1024;
    scrumTool.webdb.db = openDatabase("backlog", "1", "backlog manager", dbSize);
};
scrumTool.webdb.onError = function (tx, e) {
    console.log("Algo de errado aconteceu: " + e.message);
};
scrumTool.webdb.onSucess = function (tx, e) {
    scrumTool.webdb.getAllItens(loadItens);
};

scrumTool.webdb.createTable = function () {
    var db = scrumTool.webdb.db;
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS " +
                "projeto (ID INTEGER PRIMARY KEY ASC," +
                "nome text NOT NULL, datainicio date NOT NULL, datafim date NOT NULL)", []);
    });
};


scrumTool.webdb.dropTable = function () {
    var db = scrumTool.webdb.db;
    db.transaction(function (tx) {
        tx.executeSql("drop Table backlog", [], scrumTool.webdb.onSuccess,
                scrumTool.webdb.onError);
    });
};
scrumTool.webdb.addProjeto = function () {
    var db = scrumTool.webdb.db;
    db.transaction(function (tx) {
        var addedOn = new Date();
        tx.executeSql("INSERT INTO projeto(nome, datainicio, datafim) VALUES (?,?,?)",
                ["primeiroProjeto", "10/10/2010", "10/10/2012"],
                scrumTool.webdb.onSuccess,
                scrumTool.webdb.onError);
    });
};

/*scrumTool.webdb.addItem = function (itemText) {
    var db = scrumTool.webdb.db;
    db.transaction(function (tx) {
        var addedOn = new Date();
        tx.executeSql("INSERT INTO backlog(titulo, added_on) VALUES (?,?)",
                [itemText, addedOn],
                scrumTool.webdb.onSuccess,
                scrumTool.webdb.onError);
    });
};
*/
function loadItems(tx, rs) {
    var rowOutput = "";
    var items = document.getElementById("todoItems");
    for (var i = 0; i < rs.rows.length; i++) {
        rowOutput += renderTodo(rs.rows.item(i));
    }
    items.innerHTML = rowOutput;
}
;
function render(row) {
    return "<li>" + row.todo +
            " [<a href='javascript:void(0);' onclick=\'html5rocks.webdb.deleteTodo(" +
            row.ID + ");\'>Delete</a>]</li>";
}
;

scrumTool.webdb.deleteTodo = function (id) {
    var db = scrumTool.webdb.db;
    db.transaction(function (tx) {
        tx.executeSql("DELETE FROM backlog WHERE ID=?", [id],
                scrumTool.webdb.onSuccess,
                scrumTool.webdb.onError);
    });
};

function transaction(sql, param) {
    var db = scrumTool.webdb.db;
    db.transaction(function (tx) {
        tx.executeSql(sql, param,
                renderFunc,
                scrumTool.webdb.onError);
    });
}

function init() {
    scrumTool.webdb.open();
     scrumTool.webdb.createTable();
    //scrumTool.webdb.dropTable();
    scrumTool.webdb.createTable.backlog();
}

function renderFunc(tx, row) {
    console.log(row);
}

function addItem(item) {
    scrumTool.webdb.addItem(item);
}