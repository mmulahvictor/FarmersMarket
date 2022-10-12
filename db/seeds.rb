puts "seeding items..."

Item.create([
  {
    name: "beans",
    image_url: "https://rb.gy/dfu1ad",
    quantity: "3 bags",
    farmer_id: 1,
    customer_id: 1
  },
  {
    name: "tomatoes",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTZjWPbEZcKsxG-NHFqlkFRrwLnuXMjQIMA&usqp=CAU",
    quantity: "6 bags",
    farmer_id: 4,
    customer_id: 2
  },
  {
    name: "maize",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dAdaPnEnOFsLtvqyebrK7Jul-F4-svV85A&usqp=CAU",
    quantity: "13 bags",
    farmer_id: 3,
    customer_id: 4
  },
  {
    name: "mangoes",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVgwXjK5Wgc7nFT-RyFerDM-EefmVk_a-Bg&usqp=CAU",
    quantity: "1 bag",
    farmer_id: 4,
    customer_id: 1
  },
  {
    name: "pawpaws",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsifYrwc80Yz11QZw-1YDqsmsF_gttLJsDg&usqp=CAU",
    quantity: "32 bags",
    farmer_id: 2,
    customer_id: 3
  }
])

puts "seeding farmers..."

Farmer.create([
    {
        name: "Victor",
        phone: 254759966875,
        location: "Mbale",
        email: "victor@gmail.com",
        password: "123456"
    },
    {
        name: "Juliet",
        phone: 254759934575,
        location: "Nairobi",
        email: "juliet@gmail.com",
        password: "12juliet"
    },
    {
        name: "Moses",
        phone: 254745836238,
        location: "Nyahururu",
        email: "moses@gmail.com",
        password: "123moses456"
    },
    {
        name: "John",
        phone: 254736482947,
        location: "Machakos",
        email: "john@gmail.com",
        password: "4593john"
    }
])


puts "seeding customers..."

Customer.create([
    {
        name: "Doe",
        email: "doe@gmail.com",
        password: ",IamDoe"
    },
    {
        name: "Mmulah",
        email: "mmulah@gmail.com",
        password: "callmemmulah"
    },
    {
        name: "Peter",
        email: "peter@gmail.com",
        password: ",234peter"
    },
    {
        name: "Mary",
        email: "mary@gmail.com",
        password: "youknowme"
    }
])