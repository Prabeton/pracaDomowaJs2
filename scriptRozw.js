//............ Miłego spradzania .............
// Zadanie 1
console.log("");
console.log("--- Zadanie 1 ---");
console.log("");
const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
  },
  {
    firstName: "Mateo",
    lastName: "Loza",
  },
  {
    firstName: "Ip",
    lastName: "Ow",
  },
  {
    firstName: "Franciszek",
    lastName: "Marianka",
  },
  {
    firstName: "Agnieszka",
    lastName: "Bronowana",
  },
];

console.log(`Na początek wyświetlę tablicę wejściową "people" z dodanym obiektem testowym o krótkich imionach`);
console.log(`i jeszcze dwoma obiektami do warunków metody filter() z zadania 5:`);
console.log(people);

function callbackFn1(object) {
  const nick1 = object.firstName.slice(0, 3).split("").reverse().join("");
  const nick2 = object.lastName.slice(-3).split("").reverse().join("");
  const nickLower = (nick1 + nick2).toLowerCase().split("");
  for (i = 0; i < nickLower.length; i++) {
    if (i === 0) {
      nickLower[i] = nickLower[i].toUpperCase();
    }
  }
  const nickName = nickLower.join("");
  object.nickname = nickName;
  return object;
}
const people2 = people.map(callbackFn1);

console.log("");
console.log(`Wyświetla tablicę "people2" z dodanym polem "nickname", którego wartość jest dana trudnym algorytmem:`);
console.log(people2);

// Zadanie 2
console.log("");
console.log("--- Zadanie 2 ---");
console.log("");
// a)
function introduceYourself() {
  console.log("Cześć jestem " + this.firstName + " " + this.lastName + " ale w szkole mówią na mnie " + this.nickname);
}
function callbackFn2(object) {
  object.introduceYourself = introduceYourself;
  return object;
}
const people3 = people2.map(callbackFn2);
console.log("");
console.log(`Wyświetla tablicę "people3" z dodaną funkcją jako pole do każdego obiektu.`);
console.log(people3);
console.log("");
console.log('Tu widzimy pojedyńcze wywołanie funkcji dla jednego obiektu z tablicy "people3" za pomocą "people3[0].introduceYourself()":');
console.log("");
people3[0].introduceYourself();

// b)
function callbackFn2B(obiect) {
  obiect.introduceYourself();
}
console.log("                                                                                                                        ");
console.log(`Tutaj widzimy wywołanie funkcji "introduceYourself()" za pomocą metody forEach dla każdego obiektu w tablicy:`);
console.log("");
people3.forEach(callbackFn2B);
console.log("");

// Zadanie 3
console.log("");
console.log("--- Zadanie 3 ---");
console.log("");
const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

function getFavouriteColor(number) {
  let parameter = number;
  if (parameter < 1) {
    console.log("Podałeś za małą liczbę, liczba nie może być mniejsza niż 1");
  } else if (parameter > 30) {
    console.log("Podałeś za dużą liczbę, liczba nie może być większa niż 30");
  } else if (parameter == null) {
    parameter = 5;
    let sumaLiter = this.firstName.length + this.lastName.length + this.nickname.length;
    let index = Math.abs((sumaLiter - parameter) % colors.length);
    console.log(colors[index]);
  } else {
    let sumaLiter = this.firstName.length + this.lastName.length + this.nickname.length;
    let index = Math.abs((sumaLiter - parameter) % colors.length);
    console.log(colors[index]);
  }
}
function callbackFn3(object) {
  object.getFavouriteColor = getFavouriteColor;
  return object;
}
const people4 = people3.map(callbackFn3);

console.log("");
console.log(`Wyświetla tablicę "people4" z dodaną funkcją getFavouriteColor.`);
console.log(people4);
console.log("");
console.log(`Pojedyńcze wywołanie funkcji "people4[0].getFavouriteColor();":`);
people4[0].getFavouriteColor();
console.log("");
console.log(`Pojedyńcze wywołanie funkcji "people4[0].getFavouriteColor(14);":`);
people4[0].getFavouriteColor(14);
console.log("");
console.log(`Pojedyńcze wywołanie funkcji "people4[0].getFavouriteColor(0);":`);
people4[0].getFavouriteColor(0);
console.log("");
console.log(`Pojedyńcze wywołanie funkcji "people4[0].getFavouriteColor(32);":`);
people4[0].getFavouriteColor(32);
console.log("");
console.log(`Pojedyńcze wywołanie funkcji "people4[2].getFavouriteColor(5);":`);
people4[2].getFavouriteColor(5);

// Zadanie 4
console.log("");
console.log("--- Zadanie 4 ---");
console.log("");
function getFavouriteColorOutObject(object, number) {
  let parameter = number;
  if (parameter < 1) {
    console.log("Podałeś za małą liczbę, liczba nie może być mniejsza niż 1");
  } else if (parameter > 30) {
    console.log("Podałeś za dużą liczbę, liczba nie może być większa niż 30");
  } else if (parameter == null) {
    parameter = 5;
    let sumaLiter = object.firstName.length + object.lastName.length + object.nickname.length;
    let index = Math.abs((sumaLiter - parameter) % colors.length);
    console.log(colors[index]);
  } else {
    let sumaLiter = object.firstName.length + object.lastName.length + object.nickname.length;
    let index = Math.abs((sumaLiter - parameter) % colors.length);
    console.log(colors[index]);
  }
}
console.log("");
console.log(`Wywołanie funkcji getFavouriteColorOutObject(object, 5) w pętli for (object of people4)":`);
console.log("");
for (let object of people4) {
  getFavouriteColorOutObject(object, 5);
}
console.log("");

console.log(`Wywołanie funkcji getFavouriteColorOutObject(object, null) w pętli for (object of people4)":`);
console.log("");
for (let object of people4) {
  getFavouriteColorOutObject(object);
}
console.log("");

console.log(`Wywołanie funkcji getFavouriteColorOutObject(object, 0) w pętli for (object of people4)":`);
console.log("");
for (let object of people4) {
  getFavouriteColorOutObject(object, 0);
}
console.log("");

console.log(`Wywołanie funkcji getFavouriteColorOutObject(object, 32) w pętli for (object of people4)":`);
console.log("");
for (let object of people4) {
  getFavouriteColorOutObject(object, 32);
}
console.log("");

console.log(`Wywołanie funkcji getFavouriteColorOutObject(object, 23) w pętli for (object of people4)":`);
console.log("");
for (let object of people4) {
  getFavouriteColorOutObject(object, 23);
}
console.log("");

// Zadanie 5
console.log("");
console.log("--- Zadanie 5 ---");
console.log("");

function filterFn5(object) {
  let random = Math.floor(Math.random() * 100);
  let isElite = false;
  let primeNumber = true;
  for (i = 2; i < random; i++) {
    if (random % i === 0) {
      primeNumber = false;
    }
  }
  let number3i5;
  if (random % 3 === 0 && random % 5 === 0) {
    number3i5 = true;
  } else {
    number3i5 = false;
  }
  if (primeNumber === true || number3i5 === true) {
    isElite = true;
  }

  console.log(`"Parametr "isElite": ${isElite}"`);
  if (isElite) {
    return object;
  }
  if (object.firstName.charAt(object.firstName.length - 1) === "k" || object.firstName.charAt(object.firstName.length - 1) === "a") {
    if (object.lastName.length > 6) {
      if (object.nickname.includes("a")) {
        return object;
      }
    }
  }
}

function mapFn5(object) {
  delete object.introduceYourself;
  delete object.getFavouriteColor;
  for (let key in object) {
    object[object[key]] = key;
  }
  delete object.firstName;
  delete object.lastName;
  delete object.nickname;
  return object;
}
function reduceFn5(acc, curr) {
  for (let key in curr) {
    acc[key] = curr[key];
  }
  return acc;
}

const people5 = people4.filter(filterFn5).map(mapFn5).reduce(reduceFn5);

console.log("");
console.log("W obiekcie poniżej znajdują się odwrócone klucze z wartościami, wzięte z obiektów,");
console.log("które albo spełniają zestaw trudnych warunków postawionych w metodzie filter(),");
console.log(`albo dostały od losu elitarną kartę "isElite", albo mają zaliczone jedno i drugie.`);
console.log("");
console.log("Objekt people5: ");
console.log(people5);
console.log("");

// Zadanie 6
console.log("");
console.log("--- Zadanie 6 ---");
console.log("");

function multi(a) {
  let acc = a;
  let addMore = (b) => {
    acc = acc * b;
    return addMore;
  };
  addMore.add = () => acc;
  return addMore;
}
console.log("");
console.log(`Wywołanie funkcji: multi(5)(6).add(), która mnoży podane argumenty.`);
console.log(multi(5)(6).add());
console.log("");
console.log(`Wywołanie funkcji: multi(4)(5)(6)(10).add, która mnoży podane argumenty.`);
console.log(multi(4)(5)(6)(10).add());
console.log("");
function sum(a) {
  let acc = a;
  let addMore = (b) => {
    acc = acc * b;
    return addMore;
  };
  addMore.add = () => acc;
  return addMore;
}

const multiplyBySix = sum(6);
console.log(`Wywołanie zmiennej "multiplyBySix = sum(6)"`);
console.log(`przez console.log(multipyBySix(10).add())`);
console.log(`Funkcja sum() robi tutaj dokładnie to samo co funkcja multi() czyli mnoży argumenty.`);
console.log(multiplyBySix(10).add());
console.log("");

function multi4(a) {
  return (b) => {
    return (c) => {
      return (d) => {
        return a * b * c * d;
      };
    };
  };
}
console.log(`Wywołanie funkcji: multi4(4)(5)(6)(10), która mnoży podane argumenty,`);
console.log(`napisanej "klasycznie" dla 4 arumentów "na sztywno"`);
console.log(multi4(4)(5)(6)(10));
console.log("");

// Zadanie 7
console.log("");
console.log("--- Zadanie 7 ---");
console.log("");

const nestedObject = {
  name: "Kamil",
  children: [
    {
      name: "Zosia",
    },
    {
      name: "Krysia",
      name2: "Barbara",
      children: [
        {
          name: "Basia",
          children: [
            {
              name: "Monika",
              name2: "Viola",
              children: [
                {
                  name: "Mateusz",
                },
                {
                  name: "Sebastian",
                  name2: "August",
                  name3: "Franciszek",
                  children: [
                    {name: "Alex"},
                    {name: "Stasio"},
                    {
                      name: "Paulina",
                      children: [{name: "Kuba"}, {name: "Kacper"}],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const names = [];
function findNames(object) {
  let sklejone = "";
  for (let key in object) {
    if (typeof object[key] == "object") {
      findNames(object[key]);
    } else {
      sklejone = sklejone + " " + object[key];
    }
  }
  names.push(sklejone);
}

findNames(nestedObject);
const names2 = names.filter((name) => name.trim() !== "");

console.log(`Tablica z imionami wyciągniętymi z zagnieżdżonego obiektu`);
console.log(`po dokonaniu oczyszczenia tablicy z "pustych" rekordów: `);
console.log("");
console.log(names2);
console.log("");
