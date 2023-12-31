import { Schema, Types, Model, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
	{
		name: {
			required: true,
			type: String,
		},
		password: {
			required: true,
			type: String,
		},
		email: {
			unique: true,
			required: true,
			type: String,
		},
		description: {
			type: String,
			default: "Default description ",
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

const UserModel = model("users", UserSchema);
export default UserModel;
