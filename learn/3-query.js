// select *  from customers where _id = 'beni'
db.customers.find({
    _id: "beni"
});

// select *  from customers where _id = 'beni' and name = 'Beni Handoko
db.customers.find({
    _id: "beni",
    name: "Beni Handoko"
});

// select * from customers where name = 'Beni Handoko'
db.customers.find({
    name: "Beni Handoko"
});

// select * from products where price = 2000
db.products.find({
    price: 2000
});


// search in embedded document
// select * from orders where items.product_id = 1
db.orders.find({
    "items.product_id": 1
});