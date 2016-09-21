var MyComponent1;
(function (MyComponent1) {
    var A = (function () {
        function A() {
        }
        return A;
    }());
    MyComponent1.A = A;
})(MyComponent1 || (MyComponent1 = {}));
var MyComponent1;
(function (MyComponent1) {
    var B = (function () {
        function B() {
        }
        return B;
    }());
    MyComponent1.B = B;
})(MyComponent1 || (MyComponent1 = {}));
var MyComponent2;
(function (MyComponent2) {
    var A = (function () {
        function A() {
        }
        A.aProp = MyComponent1.A.aProp;
        A.bProp = MyComponent1.B.bProp;
        return A;
    }());
    MyComponent2.A = A;
})(MyComponent2 || (MyComponent2 = {}));
