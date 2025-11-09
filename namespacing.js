var MyNamespace = MyNamespace || {};

MyNamespace.MyClass = class {
  constructor(text){
    this.text = text;
  }
  
  sayHello(){
    return this.text
  }
}
