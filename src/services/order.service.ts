import ItemModel from "../models/item.model";

const getOrders = async () => {
	const responseGetbyId = await ItemModel.find({});
	return responseGetbyId;
};

export { getOrders };
