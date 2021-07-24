import {IProductCard} from "./types/product";

export interface IAdditive {
    name: string;
    disabled: boolean;
    imageUrl: string;
    price: number;
}

export interface IPizzaCard {
    cardInfo: IProductCard;
    sizes: ['small' | null, 'medium' | null, 'big' | null];
    doughs: ['traditional' | null, 'thin' | null];
    filling: Array<string>;
    additives: Array<IAdditive>
}

export interface IProducts {
    pizzas: Array<IPizzaCard>
}


export const products: IProducts = {
    pizzas: [{
        cardInfo: {
            description: "Ветчина, картошечка, моцарелла, соус альфредо",
            disabled: true,
            id: 1,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/8ded98610a684516974bf460eb328885_366x366.jpeg",
            lowestPrice: 449,
            title: "Пицца от Тучки с игрушкой из коллекции"
        },
        doughs: ["traditional", "thin"],
        sizes: ["small", "medium", null],
        filling: ["томаты", "сладкий перец", "красный лук", "соус песто", "моцарелла", "митболы из говядины"],
        additives: [
            {
                name: "Сырный бортик",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
                disabled: true,
                price: 169
            },
            {
                name: "Маслины",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5EA513EF2",
                disabled: false,
                price: 59
            },
            {
                name: "Острый халапеньо",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
                disabled: false,
                price: 59
            },
            {
                name: "Моцарелла",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
                disabled: false,
                price: 59
            },
            {
                name: "Острый цыпленок",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
                disabled: true,
                price: 59
            },
        ]
    }, {
        cardInfo: {
            description: "Цыпленок, картошечка, томаты, моцарелла, томатный соус",
            disabled: true,
            id: 2,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/8ded98610a684516974bf460eb328885_366x366.jpeg",
            lowestPrice: 449,
            title: "Пицца от Кеши с игрушкой из коллекции"
        },
        doughs: ["traditional", null],
        sizes: [null, null, "big"],
        filling: ["томаты", "сладкий перец", "красный лук", "соус песто", "моцарелла", "митболы из говядины"],
        additives: [
            {
                name: "Сырный бортик",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
                disabled: true,
                price: 169
            },
            {
                name: "Маслины",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5EA513EF2",
                disabled: false,
                price: 59
            },
            {
                name: "Острый халапеньо",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
                disabled: false,
                price: 59
            },
            {
                name: "Моцарелла",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
                disabled: false,
                price: 59
            },
            {
                name: "Острый цыпленок",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
                disabled: true,
                price: 59
            },
        ]
    }, {
        cardInfo: {
            description: "Томаты, сладкий перец, красный лук, соус песто, митболы из говядины, моцарелла, томатный соус",
            disabled: true,
            id: 3,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/f35b77ffb87d4fff8c06dc27320278bf_366x366.jpeg",
            lowestPrice: 395,
            title: "Фристайло"
        },
        doughs: ["traditional", null],
        sizes: ["small", null, "big"],
        filling: ["томаты", "сладкий перец", "красный лук", "соус песто", "моцарелла", "митболы из говядины"],
        additives: [
            {
                name: "Сырный бортик",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
                disabled: true,
                price: 169
            },
            {
                name: "Маслины",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5EA513EF2",
                disabled: false,
                price: 59
            },
            {
                name: "Острый халапеньо",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
                disabled: false,
                price: 59
            },
            {
                name: "Моцарелла",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
                disabled: false,
                price: 59
            },
            {
                name: "Острый цыпленок",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
                disabled: true,
                price: 59
            },
        ]
    }, {
        cardInfo: {
            description: "Острая чоризо, соус барбекю, томаты, красный лук, моцарелла, томатный соус",
            disabled: true,
            id: 4,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/64a38569a93246108d8f8b0cefd72fab_366x366.jpeg",
            lowestPrice: 395,
            title: "Колбаски Барбекю"
        },
        doughs: ["traditional", "thin"],
        sizes: ["small", "medium", "big"],
        filling: ["томаты", "сладкий перец", "красный лук", "соус песто", "моцарелла", "митболы из говядины"],
        additives: [
            {
                name: "Сырный бортик",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
                disabled: true,
                price: 169
            },
            {
                name: "Маслины",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5EA513EF2",
                disabled: false,
                price: 59
            },
            {
                name: "Острый халапеньо",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
                disabled: false,
                price: 59
            },
            {
                name: "Моцарелла",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
                disabled: false,
                price: 59
            },
            {
                name: "Острый цыпленок",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
                disabled: true,
                price: 59
            },
        ]
    }, {
        cardInfo: {
            description: "Пикантная пепперони, митболы из говядины, соус песто, томаты, красный лук, моцарелла, томатный соус, итальянские травы",
            disabled: true,
            id: 5,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/4bf37f95fcd341d780ab1ae93f64e3f4_366x366.jpeg",
            lowestPrice: 395,
            title: "Зенит"
        },
        doughs: ["traditional", "thin"],
        sizes: ["small", "medium", null],
        filling: ["томаты", "сладкий перец", "красный лук", "соус песто", "моцарелла", "митболы из говядины"],
        additives: [
            {
                name: "Сырный бортик",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
                disabled: true,
                price: 169
            },
            {
                name: "Маслины",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5EA513EF2",
                disabled: false,
                price: 59
            },
            {
                name: "Острый халапеньо",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
                disabled: false,
                price: 59
            },
            {
                name: "Моцарелла",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
                disabled: false,
                price: 59
            },
            {
                name: "Острый цыпленок",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
                disabled: true,
                price: 59
            },
        ]
    }, {
        cardInfo: {
            description: "Пикантная пепперони, увеличенная порция моцареллы, томаты, томатный соус",
            disabled: true,
            id: 6,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/5dffe4c7d3bc49668f50c1d08d920992_366x366.jpeg",
            lowestPrice: 245,
            title: "Пепперони фреш"
        },
        doughs: [null, null],
        sizes: [null, null, null],
        filling: ["томаты", "сладкий перец", "красный лук", "соус песто", "моцарелла", "митболы из говядины"],
        additives: [
            {
                name: "Сырный бортик",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
                disabled: true,
                price: 169
            },
            {
                name: "Маслины",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5EA513EF2",
                disabled: false,
                price: 59
            },
            {
                name: "Острый халапеньо",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
                disabled: false,
                price: 59
            },
            {
                name: "Моцарелла",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
                disabled: false,
                price: 59
            },
            {
                name: "Острый цыпленок",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
                disabled: true,
                price: 59
            },
        ]
    }, {
        cardInfo: {
            description: "Моцарелла, сыры чеддер и пармезан, соус альфредо",
            disabled: true,
            id: 7,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/ebf8b8670d6b4f078d9afa616d01202a_366x366.jpeg",
            lowestPrice: 245,
            title: "Сырная",
        },
        doughs: ["traditional", null],
        sizes: ["small", "medium", "big"],
        filling: ["томаты", "сладкий перец", "красный лук", "соус песто", "моцарелла", "митболы из говядины"],
        additives: [
            {
                name: "Сырный бортик",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
                disabled: true,
                price: 169
            },
            {
                name: "Маслины",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5EA513EF2",
                disabled: false,
                price: 59
            },
            {
                name: "Острый халапеньо",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
                disabled: false,
                price: 59
            },
            {
                name: "Моцарелла",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
                disabled: false,
                price: 59
            },
            {
                name: "Острый цыпленок",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
                disabled: true,
                price: 59
            },
        ]

    }, {
        cardInfo: {
            description: "Ветчина, моцарелла, соус альфредо",
            disabled: true,
            id: 8,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/679924dc-e4fd-45fd-aceb-be139f265425.jpg",
            lowestPrice: 295,
            title: "Ветчина и сыр"
        },
        doughs: [null, "thin"],
        sizes: ["small", "medium", null],
        filling: ["томаты", "сладкий перец", "красный лук", "соус песто", "моцарелла", "митболы из говядины"],
        additives: [
            {
                name: "Сырный бортик",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
                disabled: true,
                price: 169
            },
            {
                name: "Маслины",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5EA513EF2",
                disabled: false,
                price: 59
            },
            {
                name: "Острый халапеньо",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
                disabled: false,
                price: 59
            },
            {
                name: "Моцарелла",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
                disabled: false,
                price: 59
            },
            {
                name: "Острый цыпленок",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
                disabled: true,
                price: 59
            },
        ]
    }, {
        cardInfo: {
            description: "Цыпленок, моцарелла, соус альфредо",
            disabled: true,
            id: 9,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/dd4b719911d048e0b05c3e4219880e64_366x366.jpeg",
            lowestPrice: 295,
            title: "Двойной цыпленок"
        },
        doughs: [null, "thin"],
        sizes: ["small", null, null],
        filling: ["томаты", "сладкий перец", "красный лук", "соус песто", "моцарелла", "митболы из говядины"],
        additives: [
            {
                name: "Сырный бортик",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
                disabled: true,
                price: 169
            },
            {
                name: "Маслины",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5EA513EF2",
                disabled: false,
                price: 59
            },
            {
                name: "Острый халапеньо",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
                disabled: false,
                price: 59
            },
            {
                name: "Моцарелла",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
                disabled: false,
                price: 59
            },
            {
                name: "Острый цыпленок",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
                disabled: true,
                price: 59
            },
        ]
    }, {
        cardInfo: {
            description: "Пикантная пепперони, увеличенная порция моцареллы, томатный соус",
            disabled: true,
            id: 10,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/1df00c72-f3fd-4d4e-8537-3ff74035c2dc.jpg",
            lowestPrice: 395,
            title: "Пепперони"
        },
        doughs: [null, "thin"],
        sizes: ["small", "medium", null],
        filling: ["томаты", "сладкий перец", "красный лук", "соус песто", "моцарелла", "митболы из говядины"],
        additives: [
            {
                name: "Сырный бортик",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
                disabled: true,
                price: 169
            },
            {
                name: "Маслины",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5EA513EF2",
                disabled: false,
                price: 59
            },
            {
                name: "Острый халапеньо",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
                disabled: false,
                price: 59
            },
            {
                name: "Моцарелла",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
                disabled: false,
                price: 59
            },
            {
                name: "Острый цыпленок",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
                disabled: true,
                price: 59
            },
        ]
    }, {
        cardInfo: {
            description: "Ветчина, шампиньоны, увеличенная порция моцареллы, томатный соус",
            disabled: false,
            id: 11,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/26fa2948b6c74113afb9d09a3262fc26_366x366.jpeg",
            lowestPrice: 345,
            title: "Ветчина и грибы"
        },
        doughs: ["traditional", null],
        sizes: [null, null, "big"],
        filling: ["томаты", "сладкий перец", "красный лук", "соус песто", "моцарелла", "митболы из говядины"],
        additives: [
            {
                name: "Сырный бортик",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
                disabled: true,
                price: 169
            },
            {
                name: "Маслины",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5EA513EF2",
                disabled: false,
                price: 59
            },
            {
                name: "Острый халапеньо",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
                disabled: false,
                price: 59
            },
            {
                name: "Моцарелла",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
                disabled: false,
                price: 59
            },
            {
                name: "Острый цыпленок",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
                disabled: true,
                price: 59
            },
        ]
    }, {
        cardInfo: {
            description: "Увеличенная порция моцареллы, томаты, итальянские травы, томатный соус",
            disabled: false,
            id: 12,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/e8a8ded1f8154d11ab5065dc5208b187_366x366.jpeg",
            lowestPrice: 345,
            title: "Маргарита"
        },
        doughs: [null, "thin"],
        sizes: [null, "medium", "big"],
        filling: ["томаты", "сладкий перец", "красный лук", "соус песто", "моцарелла", "митболы из говядины"],
        additives: [
            {
                name: "Сырный бортик",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/d18f364cbd6a43a88bfefb38abd43fa2.png",
                disabled: true,
                price: 169
            },
            {
                name: "Маслины",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5EA513EF2",
                disabled: false,
                price: 59
            },
            {
                name: "Острый халапеньо",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA5E376B4DF",
                disabled: false,
                price: 59
            },
            {
                name: "Моцарелла",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411EA083CC540F6EE",
                disabled: false,
                price: 59
            },
            {
                name: "Острый цыпленок",
                imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/9a8a9f378d224bf1bb091128b189edf2.png",
                disabled: true,
                price: 59
            },
        ]
    },/* {
        cardInfo: {
            description: "Мясной соус болоньезе, соус бургер, соленые огурчики, томаты, красный лук, моцарелла",
            disabled: false,
            id: 13,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/8a813e3b734e457c848a60fc70a100d5_366x366.jpeg",
            lowestPrice: 395,
            title: "Чизбургер-пицца"
        },
        doughs: [null, "thin"],
        sizes: [null, "medium", null]
    }, {
        cardInfo: {
            description: "Цыпленок, моцарелла, сырный соус, томаты",
            disabled: true,
            id: 14,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/fc4d663d-fb00-48ea-8391-7a4648553f25.jpg",
            lowestPrice: 395,
            title: "Сырный цыпленок"
        },
        doughs: [null, null],
        sizes: ["small", "medium", null]
    }, {
        cardInfo: {
            description: "Бекон, цыпленок, ветчина, сыр блю чиз, сыры чеддер и пармезан, соус песто, кубики брынзы, томаты, красный лук, моцарелла, соус альфредо, чеснок, итальянские травы",
            disabled: false,
            id: 15,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/7ab909f55a5d480484fad99c145bb895_366x366.jpeg",
            lowestPrice: 495,
            title: "Додо Микс"
        },
        doughs: [null, "thin"],
        sizes: ["small", null, null]
    }, {
        cardInfo: {
            description: "Ветчина, ананасы, моцарелла, томатный соус",
            disabled: false,
            id: 16,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/424a58e7de454fc49ddd0bcf05be074c_366x366.jpeg",
            lowestPrice: 395,
            title: "Гавайская"
        },
        doughs: ["traditional", null],
        sizes: [null, "medium", null]
    }, {
        cardInfo: {
            description: "Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, томатный соус",
            disabled: true,
            id: 17,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/6d4e1c2c-1c81-40c6-95d9-0d19afcebcb5.jpg",
            lowestPrice: 395,
            title: "Четыре сезона"
        },
        doughs: [null, null],
        sizes: [null, null, "big"]
    }, {
        cardInfo: {
            description: "Цыпленок, острая чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок",
            disabled: true,
            id: 18,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/72c7882f35ad4db1805bb43f09717d8d_366x366.jpeg",
            lowestPrice: 395,
            title: "Аррива!"
        },
        doughs: ["traditional", null],
        sizes: ["small", "medium", "big"]
    }, {
        cardInfo: {
            description: "Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, соус альфредо, итальянские травы",
            disabled: true,
            id: 19,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/2c908343c09e49fb8bfbf596c87e28de_366x366.jpeg",
            lowestPrice: 445,
            title: "Карбонара"
        },
        doughs: ["traditional", "thin"],
        sizes: [null, "medium", "big"]
    }, {
        cardInfo: {
            description: "Лосось, томаты, соус песто, моцарелла, соус альфредо",
            disabled: false,
            id: 20,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/eb5e42dee16e4440873e3cb6b78c4a1f_366x366.jpeg",
            lowestPrice: 545,
            title: "Нежный лосось"
        },
        doughs: ["traditional", null],
        sizes: ["small", null, "big"]
    }, {
        cardInfo: {
            description: "Острый цыпленок, острый перец халапеньо, соус сальса, томаты, сладкий перец, красный лук, моцарелла, томатный соус",
            disabled: true,
            id: 21,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/dc5dc4e9-932a-4abf-9472-dfb6326ea9ee.jpg",
            lowestPrice: 445,
            title: "Мексиканская"
        },
        doughs: [null, null],
        sizes: [null, "medium", "big"]
    }, {
        cardInfo: {
            description: "Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, соус альфредо",
            disabled: false,
            id: 22,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/65bd1f183dab47e4ac2d7d7c6b44e762_366x366.jpeg",
            lowestPrice: 445,
            title: "Песто"
        },
        doughs: ["traditional", null],
        sizes: ["small", null, "big"]
    }, {
        cardInfo: {
            description: "Бекон, митболы из говядины, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, томатный соус",
            disabled: false,
            id: 23,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/c18cada2dfd349cbbf36a71236480e0b_366x366.jpeg",
            lowestPrice: 445,
            title: "Додо"
        },
        doughs: [null, null],
        sizes: ["small", null, null]
    }, {
        cardInfo: {
            description: "Цыпленок, ветчина, пикантная пепперони, острая чоризо, моцарелла, томатный соус",
            disabled: true,
            id: 24,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/88cfeba06c7d4863852c483d0817f763_366x366.jpeg",
            lowestPrice: 445,
            title: "Мясная"
        },
        doughs: ["traditional", null],
        sizes: [null, "medium", null]
    }, {
        cardInfo: {
            description: "Сыр блю чиз, сыры чеддер и пармезан, моцарелла, соус альфредо",
            disabled: false,
            id: 25,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/f2e043398dad4bd5b42f4ef1990439c2_366x366.jpeg",
            lowestPrice: 445,
            title: "Четыре сыра"
        },
        doughs: [null, null],
        sizes: [null, null, null]
    }, {
        cardInfo: {
            description: "Цыпленок, ветчина, соус ранч, моцарелла, томаты, чеснок",
            disabled: true,
            id: 26,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/2822916b-039c-4dfc-916a-73ca0daa9320.jpg",
            lowestPrice: 445,
            title: "Цыпленок ранч"
        },
        doughs: [null, null],
        sizes: [null, "medium", null]
    }, {
        cardInfo: {
            description: "Цыпленок, бекон, соус барбекю, красный лук, моцарелла, томатный соус",
            disabled: true,
            id: 27,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/14414e03-0322-4751-a431-820c8ce84e58.jpg",
            lowestPrice: 445,
            title: "Цыпленок барбекю"
        },
        doughs: [null, "thin"],
        sizes: ["small", null, "big"]
    }, {
        cardInfo: {
            description: "Двойная порция пикантной пепперони, увеличенная порция моцареллы, томатный соус",
            disabled: false,
            id: 28,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/9c046e19-b7a6-47f5-b2be-91bb9d77a74b.jpg",
            lowestPrice: 445,
            title: "Двойная пепперони"
        },
        doughs: [null, "thin"],
        sizes: ["small", null, null]
    }, {
        cardInfo: {
            description: "Пикантная пепперони, цыпленок, острая чоризо, бекон, митболы из говядины, моцарелла, томатный соус",
            disabled: true,
            id: 29,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/8b052931-395f-4b38-8af0-55f6fbd7c9e5.jpg",
            lowestPrice: 495,
            title: "Супермясная"
        },
        doughs: ["traditional", null],
        sizes: [null, null, "big"]
    }, {
        cardInfo: {
            description: "Шампиньоны, томаты, сладкий перец, красный лук, маслины, кубики брынзы, моцарелла, томатный соус, итальянские травы",
            disabled: false,
            id: 30,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/7a497170e99a435f8535f33c3ebaddc3_366x366.jpeg",
            lowestPrice: 395,
            title: "Овощи и грибы"
        },
        doughs: [null, null],
        sizes: ["small", null, "big"]
    }, {
        cardInfo: {
            description: "Ананасы, брусника, сгущенное молоко",
            disabled: true,
            id: 31,
            imageUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/3327d3dd-1feb-443f-97b6-731fa8e64fac.jpg",
            lowestPrice: 345,
            title: "Пицца-пирог"
        },
        doughs: ["traditional", null],
        sizes: [null, "medium", null]
    }*/]
}