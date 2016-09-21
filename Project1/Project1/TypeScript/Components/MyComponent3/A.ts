/// <reference path="../../Definitions/MyComponent1.d.ts"/>

namespace MyComponent3 {
    export class A {
        public static aProp = MyComponent1.A.aProp;
        public static bProp = MyComponent1.B.bProp;
    }
}