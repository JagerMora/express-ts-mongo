import { hash, compare } from "bcrypt";

const encrypt = async (pass: string) => {
	const passwordHash = await hash(pass, 8);
	return passwordHash;
};

const verified = async (pass: string, passHash: string) => {
	const verify = await compare(pass, passHash);
	return verify;
};

export { encrypt, verified };
