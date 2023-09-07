import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item.model";

const getCar = async (id: string) => {
	const responseGetbyId = await ItemModel.findOne({ _id: id });
	return responseGetbyId;
};

const getCars = async () => {
	const responseItem = await ItemModel.find({});
	return responseItem;
};

const insertCar = async (item: Car) => {
	const responseInsert = await ItemModel.create(item);
	return responseInsert;
};

const updateCar = async (id: string, data: Car) => {
	const responseItem = await ItemModel.findOneAndUpdate(
		{
			_id: id,
		},
		data,
		{
			new: true,
		}
	);
	return responseItem;
};

const deleteCar = async (id: string) => {
	const responseGetbyId = await ItemModel.findOneAndRemove({ _id: id });
	return responseGetbyId;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
