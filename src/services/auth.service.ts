import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model.ts";
import { encrypt, verified } from "../utils/bcrypt.handler";
import { generateToken } from "../utils/jwt.handler";

const registerNewUser = async ({ email, password, name }: User) => {
	const user = await UserModel.findOne({ email });
	if (user) return "Already User";

	const passHash = await encrypt(password);
	const registerNewUser = await UserModel.create({
		email,
		password: passHash,
		name,
	});
	return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
	const user = await UserModel.findOne({ email });
	if (!user) return "NOT FOUND USER";

	const passwordHash = user.password;
	const login = await verified(password, passwordHash);
	const token = generateToken(user.email);
	const data = {
		user: user,
		token,
	};
	if (login) return data;
};

export { registerNewUser, loginUser };
