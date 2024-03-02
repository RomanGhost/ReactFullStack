class Player {
    constructor(inventory, name, level) {
        this.inventory = inventory;
        this.name = name;
        this.level = level;
    }
    
    // Методы доступа к элементам массивов и полям
    getInventory() {
        return this.inventory;
    }
    
    getName() {
        return this.name;
    }
    
    getLevel() {
        return this.level;
    }
    
    // Функциональный метод
    getInventoryInfo() {
        return this.name + this.inventory[0] * this.level
    }
}
    
    // Создание массива объектов
let objectsArray = [
    new Player([29, 2, 3], "Piad", 1),
    new Player([1, 5, 6], "Piad", 29),
    new Player([7, 8, 9], "LongIAm", 6)
];

// Вывод полной информации обо всех объектах массива
console.log("Information about object:");
objectsArray.forEach(obj => {
    console.log(obj);
});

// Поиск объектов с одинаковым результатом функционального метода
let similarObjects = [];
objectsArray.forEach(obj1 => {
    objectsArray.forEach(obj2 => {
        if (obj1.getInventoryInfo() === obj2.getInventoryInfo() && obj1 !== obj2) {
            if (!similarObjects.includes(obj1)) {
                similarObjects.push(obj1);
            }
            if (!similarObjects.includes(obj2)) {
                similarObjects.push(obj2);
            }
        }
    });
});

console.log("Same objects:");
console.log(similarObjects)