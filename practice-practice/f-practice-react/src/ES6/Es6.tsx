import React from "react";

//es6 practice::
// const, let var:
// const pi = 3.116;
// let name = "dulon mahadi";
// name = 366;

// var number = 25;
// console.log(number);

//template literals:
// const life = `${"-ISLAM-"}`;
// const description = `man is mortal. you need to believe this. how much you live, ${25 + 30} years. thats very low level life. accept ${life}`;

// console.log(description);

//functions:
//function declaration:
// function party(age) {
//   if (age <= 17) {
//     return "you are so, youngest boy. don't drink any alcohol! -💕";
//   } else {
//     return "you are adult. Welcome our night fair club. enjoy-😂💖";
//   }
// }

// const result = party(18);
// console.log(result);

//arrow function:
// const ageEnsure = (age) => {
//   switch (true) {
//     case age <= 17:
//       return "you are so YOUNGEST boy";
//     case age <= 28:
//       return "you are YOUNG boy";
//     case age <= 40:
//       return "you are ADULT boy";
//     case age <= 100:
//       return "you are an OLD guy";

//     default:
//       return `something went wrong! age: ${age} years old. Try again...`;
//   }
// };

// const result = ageEnsure(15);
// console.log(result);

//typescript:::
//static typing:
// interface TUSER {
//   name: string;
//   age: number;
//   isMarried: boolean;
// }

// const user1: TUSER = {
//   name: "Dulon mahadi",
//   age: 29,
//   isMarried: false,
// };
// console.log(user1);

// generic types:
// function identity<T>(params: T): T {
//   return params;
// }

// const result = identity<number>(32);
// const result2 = identity<string>("Dulon Mahadi");
// console.log(result);
// console.log(result2);

//utility types:
// interface TPERSON {
//   name: string;
//   age: number;
//   isMarried: boolean;
// }

// type TPartialUser = Partial<TPERSON>; //all properties optional
// type TReadonlyUser = Readonly<TPERSON>; //all properties are readonly
// type TRequiredUser = Required<TPERSON>; //all properties are required

//unknown type::
// const value: unknown = "Hello";
// console.log(value);

//advance generic
// class DataStore<T> {
//   private data: T[] = [];

//   addItem(item: T): void {
//     this.data.push(item);
//   }

//   getItems(): T[] {
//     return this.data;
//   }
// }

// const stringStore = new DataStore<number>();
// stringStore.addItem(100);
// console.log(stringStore.getItems());

const Es6 = (): React.ReactElement => {
  return (
    <div className="flex items-center justify-between rounded-md bg-amber-500 p-2 text-7xl text-white">
      ES6 Feature Practice
    </div>
  );
};

export default Es6;
