import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import { AxiosError } from 'axios';

const DB = process.env.DB_NAME as string;
const COLLECTION = process.env.COLLECTION as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const client = await dbConnect;
		const db = client.db(DB);
		const risks = await db.collection(COLLECTION).find({}).toArray();
		return res.status(200).json(risks);
	} catch (error) {
		const errorObject = error as AxiosError;
		res.status(500).send(errorObject.response?.data);
	}
}
