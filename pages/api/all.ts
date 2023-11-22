// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getJsonFromCSV from '../../utils/getJsonFromCSV';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const data = await getJsonFromCSV();
  res.status(200).json(data);
}
