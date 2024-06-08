import { Schema, model,Document } from "mongoose";

export interface IService extends Document {
    name: string;
    description: string;
    created: Date;
    price: number;
    promotionPrice?: number;
    discountPrice?: number;
    isPromotion: boolean;
    estimatedTime: number;
    animal: string;
    image?: string;
    reservationCount: number;
    calculateFinalPrice(): Promise<number>;
}


const ServiceSchema = new Schema<IService>({
    name:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    created:{type:Date,default:Date.now()},
    price:{type:Number,requied:true,},
    promotionPrice:{type:Number,},
    discountPrice:{type:Number},
    isPromotion:{type:Boolean,default:false},
    estimatedTime:{type:Number,required:true},
    animal:{type:String,required:true},
    image:{type:String},
    reservationCount:{type:Number,default:0}
    
})

ServiceSchema.methods.calculateFinalPrice =async function() {
    return await this.isPromotion ? this.promotionPrice : this.price;
};

const Service = model("Service",ServiceSchema);
export default Service;