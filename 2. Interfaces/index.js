// Interface
var lol = {
    id: "1212AD1",
    color: "green",
    size: {
        width: 23,
        height: 23
    },
    wtf: true
};
var lol2 = {
    id: "12214",
    size: {
        width: 50,
        height: 76
    },
    wtf: true
};
lol2.color = "black";
// + еще 2 варианта как мы можем указывать к какому типу будет относится объект.
var lol3 = {};
var lol4 = {};
var lol5 = {
    id: "213123",
    color: "white",
    size: {
        width: 5,
        height: 9,
    },
    wtf: true,
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(lol5.getArea());
var Test2 = /** @class */ (function () {
    function Test2() {
        this.time = new Date();
    }
    Test2.prototype.setTime = function (date) {
        this.time = date;
    };
    return Test2;
}());
var css = {
    border: '1px solid black',
    marginTop: '25px',
    borderRadius: '5px',
};
console.log(css);
