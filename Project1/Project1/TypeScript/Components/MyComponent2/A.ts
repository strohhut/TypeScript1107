/// <reference path="../MyComponent1/_component.ts"/>

namespace MyComponent2 {
    export class A {
        public static aProp = MyComponent1.A.aProp;
        public static bProp = MyComponent1.B.bProp;
    }
}