// Js Crush Course

// Let variable → can change and re assigned

// Const —> never change fixed

// Typeof null => object javascript bug

// Undefined => value not assign

// Let x;

// Veriable is declear but it’s variable not assigned undefined.

let age = 24;
let classTest = "hi";

const hello: String = "Hiiiiiiiiiiiii";

enum PaymentGateway {
  Bkash,
  Nagad,
  Upay,
}

const payment = PaymentGateway.Bkash;

console.log(hello);

//Interface

interface User {
  name: String;
  id: Number;
}

const user: User = {
  name: "Naim",
  id: 2,
};

console.log(user);

//Composit type -- Union

type LockFile = "locked" | "unlocked";
type OddNumber = 1 | 3 | 5;

const lockfile: LockFile = "locked";
const oddNumber: OddNumber = 5;

const testLength = (params: string | string[]) => {
  return params.length;
};

console.log(testLength(["naim", "dsds"]));

console.log(testLength("tttttttt"));

//Programing with mos

// typescript crush course

// tsconfig.json
// noUnusedParameter: true
// noUnusedLocal: true
// noImplicitReturn:true

// Create typescript project
// npx create-react-app your-app-name --template typescript
