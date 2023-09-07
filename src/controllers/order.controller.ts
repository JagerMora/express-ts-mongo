import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
	user?: string | JwtPayload;
}

const getItems = (req: RequestExt, res: Response) => {
	try {
		res.send({
			data: "only JWT",
			user: req?.user,
		});
	} catch (e) {
		handleHttp(res, "ERROR_GET_ORDERS");
	}
};

export { getItems };
