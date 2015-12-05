(function (angular) {
    'use strict';
    function backlogRepository($q) {
        var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        var db = null;
        var lastIndexBacklog = 0;

        var open = function () {
            var deferred = $q.defer();
            var version = 6;
            var request = indexedDB.open("scrumToolDB", version);
            request.onupgradeneeded = function (e) {
                db = e.target.result;
                e.target.transaction.onerror = indexedDB.onerror;
                db.createObjectStore("backlog", {
                    keyPath: "id",
                    autoIncrement: true
                });
            }
            request.onsuccess = function (e) {
                db = request.result;
                deferred.resolve();
            };

            request.onerror = function () {
                deferred.reject("An error occurs opening database");
            };

            return deferred.promise;
        }

        var getBacklogs = function () {
            var deferred = $q.defer();
            if (db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = db.transaction(["backlog"], "readwrite");
                var store = trans.objectStore("backlog");
                var backlogs = [];

                // Get everything in the store;
                var keyRange = IDBKeyRange.lowerBound(0);
                var cursorRequest = store.openCursor(keyRange);

                cursorRequest.onsuccess = function (e) {
                    var result = e.target.result;
                    if (result === null || result === undefined) {
                        deferred.resolve(backlogs);
                    } else {
                        backlogs.push(result.value);
                        if (result.value.id > lastIndexBacklog) {
                            lastIndexBacklog = result.value.id;
                        }
                        result.continue();
                    }
                };

                cursorRequest.onerror = function (e) {
                    deferred.reject("Backlog item couldn't be found!");
                    console.log(e.value);
                    console.log("Something went wrong!!!");
                };
            }

            return deferred.promise;

        };

        var saveBacklog = function (backlog) {
            var deferred = $q.defer();
            if (db === null) {
                deferred.reject("IndexDB is not opened yet!");
            } else {
                var trans = db.transaction(["backlog"], "readwrite");
                var store = trans.objectStore("backlog");
                var request = store.put(backlog);

                request.onsuccess = function (e) {
                    deferred.resolve();
                };

                request.onerror = function (e) {
                    deferred.reject("Backlog item couldn't be added!");
                };
            }

            return deferred.promise;
        };
        return {
            open: open,
            getbacklogs: getBacklogs,
            saveBacklog: saveBacklog
        }
    }
    angular
        .module('app.repository')
        .factory('backlogRepository', backlogRepository);
        backlogRepository.$inject = ['$q'];

})(window.angular);

