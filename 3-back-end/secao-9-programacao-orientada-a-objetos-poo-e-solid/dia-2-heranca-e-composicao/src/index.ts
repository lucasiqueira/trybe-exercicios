import { ConsoleLogger } from "./classes/ConsoleLogger";
import { ConsoleLogger2 } from "./classes/ConsoleLogger2";
import { ExampleDatabase } from "./classes/ExampleDatabase";
import { MyClass } from "./classes/MyClass";
import { Subclass, Superclass } from "./classes/Superclass";

function myFunc (superclass: Superclass) {
  console.log(superclass.isSuper);
  
};

const superClass = new Superclass();
const subClass = new Subclass();

myFunc(superClass);
myFunc(subClass);

// ---------------------------------------------

const myClass = new MyClass(5);

console.log(myClass.myFunc(60));

// -----------------------------

const console1 = new ConsoleLogger();
const console2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(console1);
const db2 = new ExampleDatabase(console2);
const db3 = new ExampleDatabase();

db1.save('chave 1', 'valor 1');
db2.save('chave 2', 'valor 2');
db3.save('chave 3', 'valor 3');
