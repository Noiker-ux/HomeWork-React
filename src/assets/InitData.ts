export interface IFilm {
	id: number,
	name: string,
	poster: string,
	rating: number,
	stars: number,
	sinopsis: string,
	type: string,
	relize: Date,
	duration: number,
	genre: string[],
	reviews?: IReview[]
}

interface IReview {
	date: Date,
	title: string,
	review: string
}

export const INIT_DATA = [
	{
		id: 1,
		name: 'Avengers: Endgame',
		poster: './public/posters/AvengersEndgame.png',
		rating: 8.3,
		stars: 269,
		sinopsis: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.',
		type: 'Movie',
		relize: new Date('2019-04-24'),
		duration: 181,
		genre: ['Adventure', 'Science Fiction', 'Action'],
		reviews: [
			{
				date:  new Date('2019-04-29'),
				title: 'Not as good as infinity war..',
				review: 'But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could&apos;ve been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship...'
			}
		]
	},
	{
		id: 2,
		name: 'Black Widow',
		poster: './public/posters/BlackWindow.png',
		rating: 6.3,
		stars: 324,
		sinopsis: 'Natasha Romanoff will have to face her past face to face. The Black Widow will have to remember what happened in her life long before joining the Avengers team, and learn about a dangerous conspiracy in which her old acquaintances Elena, Alexey (known as the Red Guardian) and Melina find themselves involved..',
		type: 'Movie',
		relize:new Date('2019-04-24'),
		duration: 134,
		genre: ['Adventure', 'Science Fiction', 'Action'],
		reviews: [
			{
				date: new Date('2019-04-30'),
				title: 'Only girls',
				review: 'So, the long-awaited \'Black Widow\'! Personally, I don\'t care, but it is considered that it is the long-awaited one. \'Take off the solo album about Natasha, well, take it off!\' Here you go, get it.'
			}
		]
	},
	{
		id: 3,
		name: 'Shang Chi',
		poster: './public/posters/Shang Chi.png',
		rating: 7.3,
		stars: 124,
		sinopsis: 'Many hundreds of years ago, the ambitious warrior Xu Wenu took possession of a magical martial artifact — ten rings, with which he defeated all enemies and created a secret organization. For centuries, he raised an army and secretly interfered in the course of world history, but in 1996 he met a beautiful girl, a martial artist from the hidden village of Ta Lo, settled down and started a family.\n\n San Francisco, 25 years later. Sean`s boyfriend works as an ordinary parking attendant, and spends his evenings at karaoke with his girlfriend and colleague Katie, a big fan of high—speed cars. One day, on the way to work, the friends are attacked by well-trained warriors in order to take the medallion from Sean, given by his mother.',
		type: 'Movie',
		relize: new Date('2021-08-16'),
		duration: 132,
		genre: ['Fantasy', 'Action', 'Science Fiction', 'Comedy', 'Adventure'],
		reviews: [
			{
				date: new Date('2022-04-29'),
				title: 'A couple of hotel parking attendants save the world in Kung Fu style',
				review: 'Well, it took more than 20 films to tell us about the first Asian superhero.'
			}
		]
	},
	{
		id: 4,
		name: 'Loki',
		poster: './public/posters/Loki.png',
		rating: 7.7,
		stars: 235,
		sinopsis: 'Loki gets into the mysterious organization "Time Change Management" after he stole the Tesseract, and travels through time, changing history.',
		type: 'Serial',
		relize: new Date('2021-06-09'),
		duration: 50,
		genre: ['Fantasy', 'Action', 'Science Fiction', 'Adventure'],
		reviews: [
			{
				date: new Date('2022-04-29'),
				title: 'Predictable, drawn out and boring',
				review: 'In principle, the title of the review perfectly describes the new series about Loki. In general, a strange trend is observed. If Vandavision really boasted freshness, originality, effects and a new look, then with each new series things are getting worse and worse. The Falcon and the Winter Soldier was no longer shining, and Loki was falling to the bottom.'
			}
		]
	},
	{
		id: 5,
		name: 'How I Met Your Mother',
		poster: './public/posters/HowIMetYourMother.png',
		rating: 8.6,
		stars: 123,
		sinopsis: '"How I Met Your Mother" is a comedy about Ted and how he fell in love. All the troubles begin with the fact that Ted`s best friend, Marshall, suddenly unexpectedly announces that he wants to propose to his longtime girlfriend Lily, a kindergarten teacher. By then, Ted realizes that he needs to put in more effort if he really hopes to find his true love. His friend Barney helps him in these searches - a staunch bachelor, always with his own, sometimes too much, opinion on everything that happens, with a penchant for costumes and the right way to get to know girls. When Ted meets Robin, he decides it`s love at first sight, but fate has something else in store.',
		type: 'Serial',
		relize: new Date('2005-09-19'),
		duration: 22,
		genre: ['Comedy', 'Romance', 'Drama'],
		reviews: [
			{
				date: new Date('2023-04-29'),
				title: 'There is only one reason to wait a whole month to sleep with a girl — if she is 17 years and 11 months old.',
				review: 'This sitcom got a decent second place in my hit parade of comedy series (of course, by first place I mean the giants of "friends"). And to be honest, I didn`t want to watch it because of the stupid title, which I didn`t trust at that time. But how wrong I was!'
			}
		]
	},
	{
		id: 6,
		name: 'Money Heist',
		poster: './public/posters/MoneyHeist.png',
		rating: 8.2,
		stars: 8125,
		sinopsis: 'The story is about criminals who decided to rob the Royal Mint of Spain and steal 2.4 billion euros.',
		type: 'Serial',
		relize: new Date('2017-05-02'),
		duration: 50,
		genre: ['Action', 'Thriller', 'Drama', 'Crime', 'Detective'],
		reviews: [
			{
				date: new Date('2023-11-19'),
				title: 'Excellent criminal drive',
				review: 'It remains only to regret that Russian TV openly neglects Southern European products. So the "Paper House" has not passed this cup. After all, he is not only Spanish, but also completely informal. All episodes are of unequal length and more than an hour! But it`s a pity, it would be better to show it instead of all the nonsense of self-made production.'
			}
		]
	},
	{
		id: 7,
		name: 'Friends',
		poster: './public/posters/Friends.png',
		rating: 9.2,
		stars: 123,
		sinopsis: 'Six friends – Rachel, Monica, Phoebe, Joey, Chandler and Ross – live next door, kill time together, share secrets and sometimes fall very much in love..',
		type: 'Serial',
		relize: new Date('1994-09-22'),
		duration: 22,
		genre: ['Comedy', 'Romance'],
		reviews: [
			{
				date: new Date('2023-11-19'),
				title: 'F – R – I – E – N – D – S',
				review: 'Nowadays, the popularity of various kinds of television series, you can see hundreds, maybe even thousands, of representatives of this direction, of all genres. TV channels are also flooded with comedy series, among which there are sometimes good things, sometimes bad, terrible, and often excellent. But apart from all the others, there is a series about six friends. The series, which appeared in 1994 in the USA, managed to captivate viewers for a good 10 years. What captured the attention of so many people of the American show, which at first glance does not differ in any special way from its counterparts? These are, of course, six phenomenal actors, each of whom is an actor in his own right with a capital letter, and together they create a kind of phenomenon of humorous madness.'
			}
		]
	},
	{
		id: 8,
		name: 'The Big Bang Theory',
		poster: './public/posters/TheBigBangTheory.png',
		rating: 8.6,
		stars: 12,
		sinopsis: 'Two brilliant physicists, Leonard and Sheldon, are great minds who understand how the universe works. But their genius does not help them at all to communicate with people, especially with women. Everything starts to change when the beautiful Penny settles in front of them.',
		type: 'Serial',
		relize: new Date('2013-05-13'),
		duration: 22,
		genre: ['Comedy', 'Romance'],
		reviews: [
			{
				date: new Date('2023-11-11'),
				title: '- Who is Sheldon portraying? - He`s the Doppler effect.',
				review: 'It`s a pity that there are very few decent sitcoms. Their authors fail to balance on the edge between comic and tasteless. Fortunately, this series is a pleasant exception. The story of two theoretical physicists, typical representatives of a class called `nerds`, next to whom a charming waitress lives, may evoke associations with the series `IT Crowd`, which, it should be said, was a good series, but these series differ radically.'
			}
		]
	}
];