function id(id: any, title: any, price: any) {
    throw new Error("Function not implemented.");
}

function title(id: any, title: any, price: any) {
    throw new Error("Function not implemented.");
}

function price(id: any, title: any, price: any) {
    throw new Error("Function not implemented.");
}
const Order = {
    id: 0,
    title: '',
    price: 0,
    printOrder() { console.log(id, title, price) },
    getPrice() { console.log(price) },
    assign(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    },
};
Order.assign(1, 'WOW', 200);
console.log(Order);
