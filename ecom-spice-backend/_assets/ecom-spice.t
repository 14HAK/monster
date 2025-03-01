# demo data:
#-----------------------------------------------
[
  {
    "category": "Headphones",
    "brand": "Sony",
    "product_name": "WH-1000XM5",
    "model": "WH1000XM5/B",
    "type": "Over-Ear",
    "description": "Premium wireless noise-canceling headphones with superior sound and 30-hour battery life.",
    "connectivity": "Wireless",
    "price": 399.99,
    "discount": 10,
    "stock": 25,
    "status": "In Stock",
    "sku": "SONY-WH1000XM5-001",
    "weight": "250g",
    "dimensions": "8.8 x 6.4 x 3.1 inches",
    "warranty": "1 Year",
    "release_date": "2022-05-01",
    "ratings": 4.8,
    "reviews": 1250,
    "images": [
      "https://example.com/images/sony-wh1000xm5-1.jpg",
      "https://example.com/images/sony-wh1000xm5-2.jpg",
      "https://example.com/images/sony-wh1000xm5-3.jpg"
    ],
    "features": ["Active Noise Cancellation", "Bluetooth 5.2", "30-Hour Battery"]
  },
  {
    "category": "Headphones",
    "brand": "Bose",
    "product_name": "QuietComfort 45",
    "model": "QC45",
    "type": "Over-Ear",
    "description": "Advanced noise-canceling headphones with crystal-clear calls and comfortable fit.",
    "connectivity": "Wireless",
    "price": 329.99,
    "discount": 15,
    "stock": 40,
    "status": "In Stock",
    "sku": "BOSE-QC45-002",
    "weight": "238g",
    "dimensions": "7.25 x 6 x 3 inches",
    "warranty": "1 Year",
    "release_date": "2021-09-15",
    "ratings": 4.7,
    "reviews": 980,
    "images": [
      "https://example.com/images/bose-qc45-1.jpg",
      "https://example.com/images/bose-qc45-2.jpg",
      "https://example.com/images/bose-qc45-3.jpg"
    ],
    "features": ["Noise Cancellation", "Alexa Built-in", "24-Hour Battery"]
  },
  {
    "category": "Speakers",
    "brand": "JBL",
    "product_name": "Flip 6",
    "model": "JBLFLIP6BLKAM",
    "type": "Bluetooth Speaker",
    "description": "Portable waterproof Bluetooth speaker with powerful sound and 12-hour battery life.",
    "connectivity": "Wireless",
    "price": 129.99,
    "discount": 20,
    "stock": 35,
    "status": "Limited Stock",
    "sku": "JBL-FLIP6-003",
    "weight": "550g",
    "dimensions": "7 x 2.6 x 2.8 inches",
    "warranty": "2 Years",
    "release_date": "2021-11-10",
    "ratings": 4.6,
    "reviews": 530,
    "images": [
      "https://example.com/images/jbl-flip6-1.jpg",
      "https://example.com/images/jbl-flip6-2.jpg",
      "https://example.com/images/jbl-flip6-3.jpg"
    ],
    "features": ["Waterproof", "12-Hour Battery", "PartyBoost Support"]
  },
  {
    "category": "Car Audio",
    "brand": "Pioneer",
    "product_name": "AVH-2500NEX",
    "model": "AVH2500NEX",
    "type": "Car Stereo",
    "description": "Touchscreen double-DIN stereo with Apple CarPlay and Android Auto.",
    "connectivity": "Wired/Wireless",
    "price": 450.00,
    "discount": 12,
    "stock": 10,
    "status": "Low Stock",
    "sku": "PIONEER-AVH2500NEX-004",
    "weight": "2.9kg",
    "dimensions": "7 x 4 x 6 inches",
    "warranty": "1 Year",
    "release_date": "2020-08-25",
    "ratings": 4.5,
    "reviews": 320,
    "images": [
      "https://example.com/images/pioneer-avh2500nex-1.jpg",
      "https://example.com/images/pioneer-avh2500nex-2.jpg",
      "https://example.com/images/pioneer-avh2500nex-3.jpg"
    ],
    "features": ["Apple CarPlay", "Android Auto", "Touchscreen"]
  }
]

#--------------------------------------------------
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





