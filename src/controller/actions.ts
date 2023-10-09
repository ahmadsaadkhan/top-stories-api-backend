import express from 'express';

export const fetchNews = async (req: express.Request, res: express.Response) => {
    try {
        const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NY_API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`There is some problem: ${response.status}`);
        }
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error:', error);
        return res.sendStatus(400)
    }
}