// Базовые типы
define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var str = "Hello world";
    var isFetching = true;
    var isLoading = true;
    var int = 14;
    var float = 14.2;
    var num = 3e12;
    var arr = ['asdsad', 'lol', 'wtf'];
    var arr2 = [1, 32, 4, 6, 23, 2];
    var arr3 = [true, false, true, false, true, false];
    // Tuple 
    var contact = ['Misha', 123421341];
    // Any
    var variable = 42;
    variable = true;
    variable = 'new string';
    // ====
    function sayMyName(name) {
        console.log(name);
    }
    sayMyName("Хайзенберг");
    // Never
    function error(err) {
        throw new Error(err);
    }
    // error(`Error function`);
    function infiniti() {
        while (true) {
        }
    }
    ;
    var login = "tretyak";
    var id1 = "asdsadasdasd";
    var id2 = 123;
});
