# JAVA-SCRIPT-1
ALL stuff
## Variabules

-- Let Var  Const 
   Block scope Let and Const 
   Var is globel scop e 
   Use Let and Const avoid var 
   var can be renamed reassined and redefined 
   | Feature             | `var`          | `let`       | `const`     |
| ------------------- | -------------- | ----------- | ----------- |
| Can be reassigned   | ✅ Yes          | ✅ Yes       | ❌ No        |
| Can be redeclared   | ✅ Yes          | ❌ No        | ❌ No        |
| Scope               | Function scope | Block scope | Block scope |
| Must be initialized | ❌ No           | ❌ No        | ✅ Yes       |


-- Assinment Operaters 

-- Functions 
-- Immediately Invoked Function Expression (IIFE) Runs immediately.
-- Callback Function
-- Arrow Functions
-- Normal Functions

 -- Asynk and await with moke APIS 

 












 A good way to remember them is:

| Method     | Purpose                          | Returns                                |
| ---------- | -------------------------------- | -------------------------------------- |
| `map()`    | Transform every item             | New array                              |
| `filter()` | Keep matching items              | New array                              |
| `find()`   | Get first matching item          | Single item or `undefined`             |
| `reduce()` | Combine all items into one value | Anything (number, object, array, etc.) |

---

## 1. `map()` — Transform Data

**Best use case:** Convert every item into a new form.

Example: Add tax to prices.

```javascript id="5h2bxq"
const prices = [100, 200, 300];

const pricesWithTax = prices.map(price => price * 1.18);

console.log(pricesWithTax);
// [118, 236, 354]
```

Another example:

```javascript id="04jwqt"
const users = [
    { name: "John" },
    { name: "Mary" },
    { name: "Bob" }
];

const names = users.map(user => user.name);

console.log(names);
// ["John", "Mary", "Bob"]
```

**Think:** "Change every item."

---

## 2. `filter()` — Select Items

**Best use case:** Keep only items that match a condition.

```javascript id="6a7frg"
const ages = [12, 18, 25, 15, 30];

const adults = ages.filter(age => age >= 18);

console.log(adults);
// [18, 25, 30]
```

Another example:

```javascript id="90l9fh"
const products = [
    { name: "Laptop", inStock: true },
    { name: "Phone", inStock: false },
    { name: "Tablet", inStock: true }
];

const available = products.filter(product => product.inStock);

console.log(available);
```

**Think:** "Keep only what I want."

---

## 3. `find()` — Find One Item

**Best use case:** Find the first matching record.

```javascript id="uq84mc"
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
    { id: 3, name: "Bob" }
];

const user = users.find(user => user.id === 2);

console.log(user);
// { id: 2, name: "Mary" }
```

Without `find()`:

```javascript id="vcx4js"
const user = users.filter(user => user.id === 2)[0];
```

`find()` is cleaner and stops searching once it finds a match.

**Think:** "Give me the first match."

---

## 4. `reduce()` — Combine Everything

**Best use case:** Calculate totals, counts, or build objects.

### Sum numbers

```javascript id="mbm34i"
const numbers = [10, 20, 30, 40];

const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);

console.log(total);
// 100
```

### Count occurrences

```javascript id="1gfjz5"
const fruits = ["apple", "banana", "apple", "orange"];

const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(count);
// { apple: 2, banana: 1, orange: 1 }
```

### Group data

```javascript id="sydtqi"
const people = [
    { name: "John", city: "NY" },
    { name: "Mary", city: "LA" },
    { name: "Bob", city: "NY" }
];

const grouped = people.reduce((acc, person) => {
    if (!acc[person.city]) {
        acc[person.city] = [];
    }

    acc[person.city].push(person);
    return acc;
}, {});

console.log(grouped);
```

**Think:** "Turn many values into one result."

---

## Real-world example

Suppose you have:

```javascript id="azfijr"
const employees = [
    { name: "John", salary: 50000, active: true },
    { name: "Mary", salary: 70000, active: true },
    { name: "Bob", salary: 40000, active: false }
];
```

### Filter active employees

```javascript id="zjtn5k"
const activeEmployees =
    employees.filter(emp => emp.active);
```

### Get their names

```javascript id="x4b3tt"
const names =
    activeEmployees.map(emp => emp.name);
```

### Find Mary

```javascript id="w6jwll"
const mary =
    employees.find(emp => emp.name === "Mary");
```

### Total salaries

```javascript id="a4j9e8"
const totalSalary =
    employees.reduce(
        (sum, emp) => sum + emp.salary,
        0
    );
```

### Interview shortcut

If you're unsure:

* **Need to transform every item?** → `map()`
* **Need fewer items?** → `filter()`
* **Need one item?** → `find()`
* **Need one final result (sum, object, count, group)?** → `reduce()`
