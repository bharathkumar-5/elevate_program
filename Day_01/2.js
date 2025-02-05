const products = [
    { id: 1, name: "Laptop", price: 1000, quantity: 5, supplierId: 101 },
    { id: 2, name: "Phone", price: 500, quantity: 0, supplierId: 102 },
    { id: 3, name: "Tablet", price: 300, quantity: 10, supplierId: 101 },
    { id: 4, name: "Monitor", price: 200, quantity: 8, supplierId: 103 }
  ];
  
  const suppliers = {
    101: { name: "Tech Corp", contact: "tech@example.com" },
    102: { name: "Gadget World", contact: "gadget@example.com" },
    103: { name: "Display Solutions", contact: "display@example.com" }
  };


// [
//     {
//       supplierId: 101,
//       supplierName: "Tech Corp",
//       contact: "tech@example.com",
//       products: [
//         { name: "Tablet", price: 300, quantity: 10 },
//         { name: "Laptop", price: 1000, quantity: 5 }
//       ],
//       totalInventoryValue: 8000
//     },
//     {
//       supplierId: 103,
//       supplierName: "Display Solutions",
//       contact: "display@example.com",
//       products: [
//         { name: "Monitor", price: 200, quantity: 8 }
//       ],
//       totalInventoryValue: 1600
//     }
//   ]

const productData = products.reduce((acc,{supplierId})=>{
    acc[supplierId].products.push({supplierId})
    return acc
},{})

console.log(productData)