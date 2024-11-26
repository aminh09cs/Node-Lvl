import { model, Schema, Document, Types } from "mongoose";

const DOCUMENT_NAME = "Shop";
const COLLECTION_NAME = "Shops";

export enum ShopStatus {
  Active = "active",
  Inactive = "inactive",
}

export type ShopType = Document & {
  name?: string;
  email: string;
  password: string;
  status: ShopStatus;
  verify: boolean;
  roles: string[];
};

const shopSchema = new Schema<ShopType>(
  {
    name: {
      type: String,
      trim: true,
      maxLength: 150,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(ShopStatus), 
      default: ShopStatus.Inactive,
    },
    verify: {
      type: Schema.Types.Boolean,
      default: false,
    },
    roles: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

const ShopModel = model<ShopType>(DOCUMENT_NAME, shopSchema);
export default ShopModel;
