export class ImgStyle{
    constructor(public code: string ,public path:string, public desc: string, public dimen: string){}
}

export class ImgDashboardCarousel{
    constructor(public name:string, public path:string){}
}

export class ImgVender{
    constructor(
        public name:string, 
        public path:string,
        public vendor: string,
        public desc:string,
        public updating: string
    ){}

}

export class Quot{
    constructor(
        public quotid:string,
        public vndrid:string,
        public vndrname:string,
        public styleid:string,
        public stylecode: string,// MW
        public subtotal: number, // item total
        public deliveryfee:number, //
        public salestax: number,//
        public amount: number, //item total+deliveryfee+salestax
        public ponumber: string
    ){}
}

export class QuotItem{
    constructor(
        public quotid: string,
       public qty: number,
       public	stylecode:string,//LO
       public   itemid:string, //vndrlo123
       public	itemname:string,//w3030
       public   itemtype:string,//cabinet/accessory
       public	descr:string,//LO Wall cabinet 30x30
       public 	lorr:string,// left or right on the cabinet
       public	KD:string, // KD or Asseble
       public   price:number, // $126.00
       public	amount:number,
       public	instock:number

    ){}
}



export class Vndr{
    constructor(
        public storeid: string,
        public vendorid: string,        
        public vendorname:string,
        public address1:string,
        public address2:string,
        public address3:string,
        public city: string,
        public state: string,
        public zipcode: string,
        public phone: string,
        public terms: string,
        public discount:number
    ){}
}

export class VndrShipping{
    constructor(
        public storeid: string,
        public vendorid: string,
        public shippingid: string,
        public deliveryfee:number
    ){} 
}

export class VndrStyle{
    constructor(
        public styleid:string,
        public vendorid:string,
        public stylecode:string,
        public imgpath:string,
        public descr:string

    ){}
}    



