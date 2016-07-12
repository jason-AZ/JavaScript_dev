function A() {
  // 函数闭包动态附加属性
  this.say = function() {
     console.log("Fuck!");
  }
}

A.prototype.print = function() {
  console.log("Hello!");
}

A.speak = function() {
  console.log("From static Function");
}

var a = new A();
a.print();
A.speak();

function B()
{

}

B.prototype = new A();
var b = new B();
b.print();
b.say();