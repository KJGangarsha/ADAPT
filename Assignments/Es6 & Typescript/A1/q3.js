function id(id, title, price) {
    throw new Error("Function not implemented.");
}
function title(id, title, price) {
    throw new Error("Function not implemented.");
}
function price(id, title, price) {
    throw new Error("Function not implemented.");
}
var Order = {
    id: 0,
    title: '',
    price: 0,
    printOrder: function () { console.log(id, title, price); },
    getPrice: function () { console.log(price); },
    assign: function (id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
};
Order.assign(1, 'WOW', 200);
console.log(Order);
