

export interface Product {
    _id:string;
    productName:string;
    _type:"product";
    image? : {
        asset : {
            _ref : string;
            _type:"image";
        }
    };
    price : number;
    description:string;
    label?:string;
    color?:string;
    id?:string;
    colors?:string;
    newArrival?:string;
    category?:string;
    inventory:number;
    slug: {
        _type : "slug"
        current : string;
    }



}