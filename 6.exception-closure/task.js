//Задача 1. Форматтер чисел//
function parseCount(num) {
    let parametr = Number.parseFloat(num);
    if (Number.isNaN(parametr)) {
        throw new Error("Невалидное значение");
    } else {
        return parametr;
    }
}

function validateCount(num) {
    try {
        return parseCount(num);
    } catch(error) {
        return error;
  }
}

//Задача 2. Трейгольник//

class Triangle {
    constructor(a, b, c) {
        if (((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

get perimetr() {
    let per = (this.a + this.b + this.c);
    return per;
}

get area() {
    let p = (this.a + this.b + this.c) / 2;
    let ar = Math.round(Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.b))) * 1000) / 1000;
    return ar;
}
}

function getTriangle(a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle;
    }
    catch (error) {
        let err = {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
        return err;
    }
    finally {
    }
}

