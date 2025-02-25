
User
username: String,
email: String,
password: String,
role: enum [ "admin", ”seller”, "customer" ],
profile: Object ( firstName, lastName, avatar, address, ),
wishlist: Array of Product references,
cart: Array of embedded CartItem objects,
orders: Array of Order references,
createdAt: Date,

users/resister-user POST
users/login-user GET


ProductCategory
name: String, unique
description: String
parentCategory: Category reference (self-referencing for subcategories)
products: Array of Product references

Product
name : string,
description : string,
price : number,
brand : string,
category :  Category (ref),
stockQuantity : number,
images : Array of Strings (URLs),
reviews : Array of embedded Review objects,
comments : Array of Comment references,
timestamps : true (mongoose)

products/product POST
products/product GET
products/product/:id GET, PUT, DELETE







CartItem
product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
quantity: { type: Number, required: true, default: 1 }, 
price: { type: Number, required: true }, 
total: { type: Number, required: true },
addedAt: { type: Date, default: Date.now },

Cart
user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
cartItems: [{ type: Schema.Types.ObjectId, ref: 'CartItem' }],
totalItems: { type: Number, default: 0 },
totalPrice: { type: Number, default: 0 },
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now },


carts/cart POST
carts/cart GET
carts/cart/:id GET, PUT, DELETE


OrderItem
product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
quantity: { type: Number, required: true },
price: { type: Number, required: true }, 
total: { type: Number, required: true }, 


Order
user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
orderItems: [{ type: Schema.Types.ObjectId, ref: 'OrderItem' }],
totalItems: { type: Number, required: true },
totalPrice: { type: Number, required: true }, 
shippingAddress: { google: ['lan', 'lat'] },
paymentMethod: { type: String, required: true },
paymentStatus: { type: String, required: true, default: 'Pending' }, 
orderStatus: { type: String, required: true, default: 'Processing' },
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now },

orders/order POST
orders/order GET
orders/order/:id GET, PUT, DELETE





