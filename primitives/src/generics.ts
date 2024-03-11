// Затипизируйте данную функцию:

function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}

append(1, [123, 123]);
append("qqq", ["12", "12"]);

// Опишите типы для двух функций:

export function keys<T extends object>(obj: T): Array<keyof T> {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}

export function values<T extends object>(obj: T): Array<T[keyof T]> {
  const currentValues = [];

  for (let key in obj) {
    currentValues.push(obj[key]);
  }

  return currentValues;
}

// Опишите типы для следующей функции:

export function createMap<T>(list: T[]) {
  return function <U>(cb: (x: T) => U): U[] {
    const result = [];

    for (let el of list) {
      result.push(cb(el));
    }

    return result;
  };
}
const mapNums = createMap([1, 2, 3]);
const result = mapNums((num) => num + 2);
