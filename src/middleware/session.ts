import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handler";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
	user?: string | JwtPayload;
}

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
	try {
		const userJwt = req.headers.authorization || "";
		const jwt = userJwt.split(" ").pop();
		const isUser = verifyToken(`${jwt}`);
		console.log(isUser);

		if (!isUser) {
			res.status(401).send("not valid session");
		} else {
			req.user = isUser;
			console.log({ jwt });
			console.log({ userJwt });
			next();
		}
	} catch (error) {
		console.log(error);
		res.status(400).send("Invalid session");
	}
};

export { checkJwt };
