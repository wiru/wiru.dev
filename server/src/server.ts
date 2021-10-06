import express from 'express';
import Parser from 'rss-parser';
import cors from 'cors';
import { Url } from 'url';

const app = express();
app.use(cors());
app.listen(5000, () => console.log('SPINNY THING'));

interface Enclosure {
	url: Url,
	length: number,
	type: HTMLImageElement,
}
type CustomFeed = {title: string};
type Article = {
	title: string,
	link: Url,
	pubDate: Date,
	enclosure: Enclosure,
	content: string, 
	contentSnippet: string,
	guid: Url,
	isoDate: Date
};
const maxTitleLength: number = 50;
const maxContentLength: number = 80;
const parser: Parser<CustomFeed, Article> = new Parser({
});

const feedData = async () => {
	const feed = await parser.parseURL('https://www.space.com/feeds/all');
	const result :Article[] = [];
	let count = 0;
	for (let object in feed.items) {
		if (count < 12) {
		result.push(feed.items[object] as Article)
		// console.log(feed.items[object]);
		count++;
		}
	console.log(result)
	for (let object in result) {
		if (result[object].title.length > maxTitleLength) {
			result[object].title = `${result[object].title.substring(0, 50)}..`;
		}
		if (result[object].content.length > maxContentLength) {
			result[object].content = `${result[object].content.substring(0, 80)}..`;
		}
	}
	app.get('/rss', function (req, res) {
		res.send(result);
	});
	}
};
feedData();
