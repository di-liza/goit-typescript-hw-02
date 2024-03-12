let some: unknown;
some = "Text";
let str: string;

// Перед присвоєнням потрібно зробити перевірку типів
if (typeof some === "string") {
  // Після перевірки проводимо операцію по приведенню типів
  str = some as string;
}

export {};
