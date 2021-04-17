

//ARTICLES ------------------------------------------------------------------------------------

//images
import watermelonImage from './src/assets/watermelon-drink.jpg'

//categories
export const categories = [
    {
        label: 'travel',
        slug: '/category/travel'
    },
    {
        label: 'people',
        slug: '/category/people'
    },
    {
        label: 'food',
        slug: '/category/food'
    },
    {
        label: 'something',
        slug: '/category/something'
    }
];

//data
export const articles = [
    {
        title: 'something from somewhere',
        category: 'travel',
        slug: '/article/something-from-somewhere',
        imgSrc: watermelonImage,
        imgAlt: 'a giant peach',
        imgCaption: 'a giant peach',
        bodyHtml: "something from somwwhere <br> the reckoning of flubbernubblet",
        createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
        title: 'who went and done did it?!',
        category: 'people',
        slug: '/article/who-went-and-done-did-it',
        imgSrc: '/something',
        imgAlt: 'a giant peach',
        imgCaption: 'a giant peach',
        bodyHtml: "<p>terry tantrum gets angry....again</p>",
        createdAt: new Date(Date.now()).toLocaleString(),

    },
    {
        title: 'is your coffee keeping you up at night?',
        category: 'food',
        slug: '/article/is-your-coffee-keeping-you-up-at-night',
        imgSrc: '/something',
        imgAlt: 'a giant peach',
        imgCaption: 'a giant peach',
        bodyHtml: "8 reasons why caffiene make you hyper...<ul><li>No 1: ...its caffiene dummy</li></ul>",
        createdAt: new Date(Date.now()).toLocaleString(),

    },
]
