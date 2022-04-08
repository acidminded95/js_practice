// Square code

console.group("Square");
function squarePerimeter(side) {
    return side * 4;
}
function squareArea(side) {
    return side * side;
}
console.groupEnd();

// Triangle code
console.group("Triangle");
function trianglePerimeter(sideA, sideB, base) {
    return sideA+sideB+base;
}
function isocelesHeight(base, side) {
    const right_triangle_base = base / 2;
    const raw_height = (side * side) - (right_triangle_base * right_triangle_base);
    const height = Math.sqrt(raw_height);
    return height;
}
function triangleArea(base, height) {
    return (base * height) / 2;
}
console.groupEnd();

// Circle code

console.group("Circle");
function circleDiameter(radio) {
    return radio * 2;
}
const PI = Math.PI;
function ciclePerimeter(radio) {
    const diameter = circleDiameter(radio);
    return diameter * PI;
}
function circleArea(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();

// Interact with HTML

function getSquarePerimeter() {
    const input = document.getElementById("square-side");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert(perimeter);
}

function getSquareArea() {
    const input = document.getElementById("square-side");
    const value = input.value;
    const area = squareArea(value);
    alert(area);
}

function getTriangleHeight() {
    const base_input = document.getElementById("triangle-base");
    const side_input = document.getElementById("triangle-side");
    const base_value =  base_input.value;
    const side_value =  side_input.value;
    const height = isocelesHeight(base_value, side_value);
    alert(height);
}