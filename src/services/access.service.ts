import { BadRequestError } from "../core/error.response";
import ShopModel from "../models/shop.model";

type SignUpInput = {
  name: string;
  email: string;
  password: string;
};

export class AccessService {
  static signUp = async (signUpInput: SignUpInput) => {
    const { name, email, password } = signUpInput;
    try {
      const holderShop = await ShopModel.findOne({ email }).lean();
      if (holderShop) {
        return new BadRequestError("ERROR: Shop already exists");
      }
    } catch (error) {
      return {
        code: "xxx",
      };
    }
  };
}
