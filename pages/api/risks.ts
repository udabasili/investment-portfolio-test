// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '@/lib/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';

const DB = process.env.DB_NAME as string;
const COLLECTION = process.env.COLLECTION as string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const client = await dbConnect;
		const db = client.db(DB);
		const risks = await db.collection(COLLECTION).find({}).toArray();
		return res.status(200).json(risks);
	} catch (e) {
		console.error(e);
	}
}
