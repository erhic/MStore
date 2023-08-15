
//Main purpose of the inteface is to enable strict typing of the listed variables ,an interface is an object with keys and property
export interface  Product{
  id: number,
  name:string,
  price:number,
  description:string
}

// a json file to act as a backend  data
// a json file is an array that consists objects

export const products = [
  {
  id: 1,
  name:'PIhone',
  price:488,
  description:'A large phone with one of the best screens'
},
{
  id: 2,
  name:'Huawei',
  price:800,
  description:'A extra large phone with one of the best screens'
},
{
  id: 3,
  name:'Samsung',
  price:444,
  description:'A medium phone with one of the best screens'
},
{
  id: 4,
  name:'Nokia',
  price:703,
  description:'A small phone with one of the best screens'
}

];