// Создайте шаблонный литерал, соответствующий типам доступных значений для css-свойства border-style.

type Style = "none" | "dotted" | "dashed" | "solid";

type Color = "Red" | "Green" | "Blue" | "Black" | "White";

type BorderStyle = `${Style} ${Uncapitalize<Color>}`;

let borderStyle: BorderStyle = "solid red";

let borderStyle2: BorderStyle = "dashed white";
