// Добавьте типы для классов. Используйте короткую запись для конструктора и сделайте метод log недоступным для инстансов обоих классов.

export class Rectangle {
  constructor(public width: number, public height: number) {
    this.log();
  }

  area(): number {
    return this.height * this.width;
  }

  private log(): void {
    console.log(`new Rectangle was create at ${new Date()}`);
  }
}

class Square extends Rectangle {
  constructor(public width: number, public color: string) {
    super(width, width);
  }

  paint(newColor: string): void {
    this.color = newColor;
  }
}

// Опишите типы для класса Temperature:

export class Temperature {
  constructor(public celsius: number) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = (value - 32) / 1.8;
  }

  public static fromFahrenheit(value: number) {
    return new Temperature(Math.round((value - 32) / 1.8));
  }
}
