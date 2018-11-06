
export interface styleCode{
    name: string;
    img:string;
    }
   
   
   export interface stockItem{
    id:string;
    code:string;
    stylecode:string; //LO
    descr:string;
    itemtype:string;
    rqside:boolean;
    rqkd:boolean;
    stock:string; // low InStock out
    price:number;
    price2:number;
    price3:number;
    cost:number;
     }
     export interface quotItem{
    quotid: string;
    quotitemid:string;
    stockitemid:string;
    code:string; // W1530
    stylecode:string; //LO
    itemtype: string //cab,acc,others,
    descr:string;
    rqside:boolean;
    lside:boolean;
    side:string;// left Right
    rqkd:boolean;
    kd:boolean; // yes=KD; no=Assemble
    qty: number;
    price:number; //assembled price
    price2:number; // kd price
    prices3:number;// special price
    discount:number; // discount amount;
    cost:number;
    tax: number;
     stock:string; // low InStock out
    }
   
    export interface quotItemSummary{
      cabinet:number; //Piece
      accessary:number; // piece
      others:number; // piece
      totalpiece:number;//piece
     
      discount:number;
      subtotal:number;
      tax:number;
       deliveryfee:number;
      total:number;

      styles:number;
 
   
    }


  export  interface addressInfo{
    addressid:string;
    name:string;
    address1:string;
    address2: string;
    city:string;
    state:string;
    zipcode:string;
    tel:string;
    altphone:string;
    fax:string;
    contact:string;
    email:string;
    addressmemo:string;
  }
