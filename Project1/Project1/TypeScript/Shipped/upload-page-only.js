var MyComponent3;
(function (MyComponent3) {
    var A = (function () {
        function A() {
        }
        A.aProp = MyComponent1.A.aProp;
        A.bProp = MyComponent1.B.bProp;
        return A;
    }());
    MyComponent3.A = A;
})(MyComponent3 || (MyComponent3 = {}));
