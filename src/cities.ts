import {ICity} from "./types/delivery";

const cities: Array<ICity> = [
  {
    city: "Абаза",
    rating: 4,
    deliveryTime: 4
  },
  {
    city: "Хакасия",
    rating: 4,
    deliveryTime: 35
  },
  {
    city: "Абакан",
    rating: 3,
    deliveryTime: 3
  },
  {
    city: "Абдулино",
    rating: 2,
    deliveryTime: 46
  },
  {
    city: "Оренбургская область",
    rating: 4,
    deliveryTime: 16
  },
  {
    city: "Абинск",
    rating: 2,
    deliveryTime: 12
  },
  {
    city: "Краснодарский край",
    rating: 1,
    deliveryTime: 12
  },
  {
    city: "Агидель",
    rating: 4,
    deliveryTime: 12
  },
  {
    city: "Башкортостан",
    rating: 4,
    deliveryTime: 12
  },
  {
    city: "Агрыз",
    rating: 1,
    deliveryTime: 4
  },
  {
    city: "Татарстан",
    rating: 4,
    deliveryTime: 50
  },
  {
    city: "Адыгейск",
    rating: 5,
    deliveryTime: 21
  },
  {
    city: "Адыгея",
    rating: 1,
    deliveryTime: 24
  },
  {
    city: "Азнакаево",
    rating: 1,
    deliveryTime: 16
  },
  {
    city: "Азов",
    rating: 4,
    deliveryTime: 36
  },
  {
    city: "Ростовская область",
    rating: 5,
    deliveryTime: 4
  },
  {
    city: "Ак-Довурак",
    rating: 3,
    deliveryTime: 9
  },
  {
    city: "Тыва",
    rating: 3,
    deliveryTime: 26
  },
  {
    city: "Аксай",
    rating: 1,
    deliveryTime: 36
  },
  {
    city: "Алагир",
    rating: 4,
    deliveryTime: 20
  },
  {
    city: "Северная Осетия — Алания",
    rating: 3,
    deliveryTime: 12
  },
  {
    city: "Алапаевск",
    rating: 5,
    deliveryTime: 14
  },
  {
    city: "Свердловская область",
    rating: 2,
    deliveryTime: 15
  },
  {
    city: "Алатырь",
    rating: 4,
    deliveryTime: 36
  },
  {
    city: "Чувашия",
    rating: 5,
    deliveryTime: 50
  },
  {
    city: "Алдан",
    rating: 3,
    deliveryTime: 50
  },
  {
    city: "Якутия",
    rating: 3,
    deliveryTime: 25
  },
  {
    city: "Алейск",
    rating: 5,
    deliveryTime: 25
  },
  {
    city: "Алтайский край",
    rating: 3,
    deliveryTime: 49
  },
  {
    city: "Александров",
    rating: 5,
    deliveryTime: 2
  },
  {
    city: "Владимирская область",
    rating: 4,
    deliveryTime: 34
  },
  {
    city: "Александровск",
    rating: 2,
    deliveryTime: 48
  },
  {
    city: "Пермский край",
    rating: 2,
    deliveryTime: 26
  },
  {
    city: "Александровск-Сахалинский",
    rating: 3,
    deliveryTime: 16
  },
  {
    city: "Сахалинская область",
    rating: 5,
    deliveryTime: 15
  },
  {
    city: "Алексеевка",
    rating: 4,
    deliveryTime: 34
  },
  {
    city: "Белгородская область",
    rating: 1,
    deliveryTime: 47
  },
  {
    city: "Алексин",
    rating: 4,
    deliveryTime: 6
  },
  {
    city: "Тульская область",
    rating: 1,
    deliveryTime: 40
  },
  {
    city: "Алзамай",
    rating: 2,
    deliveryTime: 6
  },
  {
    city: "Иркутская область",
    rating: 1,
    deliveryTime: 44
  },
  {
    city: "Алупка",
    rating: 2,
    deliveryTime: 21
  },
  {
    city: "Оспаривается",
    rating: 1,
    deliveryTime: 13
  },
  {
    city: "Крым",
    rating: 3,
    deliveryTime: 29
  },
  {
    city: "Алушта",
    rating: 4,
    deliveryTime: 41
  },
  {
    city: "Оспаривается",
    rating: 3,
    deliveryTime: 4
  },
  {
    city: "Альметьевск",
    rating: 1,
    deliveryTime: 1
  },
  {
    city: "Амурск",
    rating: 3,
    deliveryTime: 45
  },
  {
    city: "Хабаровский край",
    rating: 5,
    deliveryTime: 3
  },
  {
    city: "Анадырь",
    rating: 3,
    deliveryTime: 11
  },
  {
    city: "Чукотский АО",
    rating: 4,
    deliveryTime: 41
  },
  {
    city: "Анапа",
    rating: 4,
    deliveryTime: 15
  },
  {
    city: "Ангарск",
    rating: 1,
    deliveryTime: 48
  },
  {
    city: "Андреаполь",
    rating: 2,
    deliveryTime: 48
  },
  {
    city: "Тверская область",
    rating: 4,
    deliveryTime: 31
  },
  {
    city: "Анжеро-Судженск",
    rating: 1,
    deliveryTime: 28
  },
  {
    city: "Кемеровская область",
    rating: 3,
    deliveryTime: 1
  },
  {
    city: "Анива",
    rating: 3,
    deliveryTime: 26
  },
  {
    city: "Апатиты",
    rating: 4,
    deliveryTime: 15
  },
  {
    city: "Мурманская область",
    rating: 2,
    deliveryTime: 27
  },
  {
    city: "Апрелевка",
    rating: 1,
    deliveryTime: 33
  },
  {
    city: "Московская область",
    rating: 3,
    deliveryTime: 49
  },
  {
    city: "Апшеронск",
    rating: 1,
    deliveryTime: 22
  },
  {
    city: "Арамиль",
    rating: 2,
    deliveryTime: 8
  },
  {
    city: "Аргун",
    rating: 5,
    deliveryTime: 37
  },
  {
    city: "Чечня",
    rating: 1,
    deliveryTime: 40
  },
  {
    city: "Ардатов",
    rating: 4,
    deliveryTime: 34
  },
  {
    city: "Мордовия",
    rating: 1,
    deliveryTime: 38
  },
  {
    city: "Ардон",
    rating: 2,
    deliveryTime: 14
  },
  {
    city: "Арзамас",
    rating: 1,
    deliveryTime: 4
  },
  {
    city: "Нижегородская область",
    rating: 2,
    deliveryTime: 10
  },
  {
    city: "Аркадак",
    rating: 4,
    deliveryTime: 13
  },
  {
    city: "Саратовская область",
    rating: 3,
    deliveryTime: 15
  },
  {
    city: "Армавир",
    rating: 1,
    deliveryTime: 20
  },
  {
    city: "Армянск",
    rating: 4,
    deliveryTime: 9
  },
  {
    city: "Оспаривается",
    rating: 2,
    deliveryTime: 4
  },
  {
    city: "Арсеньев",
    rating: 5,
    deliveryTime: 24
  },
  {
    city: "Приморский край",
    rating: 3,
    deliveryTime: 30
  },
  {
    city: "Арск",
    rating: 5,
    deliveryTime: 17
  },
  {
    city: "Артём",
    rating: 5,
    deliveryTime: 16
  },
  {
    city: "Артёмовск",
    rating: 4,
    deliveryTime: 31
  },
  {
    city: "Красноярский край",
    rating: 1,
    deliveryTime: 38
  },
  {
    city: "Артёмовский",
    rating: 1,
    deliveryTime: 5
  },
  {
    city: "Архангельск",
    rating: 1,
    deliveryTime: 18
  },
  {
    city: "Архангельская область",
    rating: 1,
    deliveryTime: 30
  },
  {
    city: "Асбест",
    rating: 3,
    deliveryTime: 2
  },
  {
    city: "Асино",
    rating: 4,
    deliveryTime: 25
  },
  {
    city: "Томская область",
    rating: 2,
    deliveryTime: 20
  },
  {
    city: "Астрахань",
    rating: 2,
    deliveryTime: 1
  },
  {
    city: "Астраханская область",
    rating: 3,
    deliveryTime: 5
  },
  {
    city: "Аткарск",
    rating: 3,
    deliveryTime: 13
  },
  {
    city: "Ахтубинск",
    rating: 3,
    deliveryTime: 29
  },
  {
    city: "Ачинск",
    rating: 1,
    deliveryTime: 4
  },
  {
    city: "Аша",
    rating: 2,
    deliveryTime: 25
  },
  {
    city: "Челябинская область",
    rating: 5,
    deliveryTime: 35
  },
  {
    city: "Бабаево",
    rating: 3,
    deliveryTime: 21
  },
  {
    city: "Вологодская область",
    rating: 4,
    deliveryTime: 47
  },
  {
    city: "Бабушкин",
    rating: 3,
    deliveryTime: 49
  },
  {
    city: "Бурятия",
    rating: 4,
    deliveryTime: 15
  },
  {
    city: "Бавлы",
    rating: 5,
    deliveryTime: 42
  },
  {
    city: "Багратионовск",
    rating: 4,
    deliveryTime: 9
  },
  {
    city: "Калининградская область",
    rating: 4,
    deliveryTime: 38
  },
  {
    city: "Байкальск",
    rating: 4,
    deliveryTime: 24
  },
  {
    city: "Баймак",
    rating: 5,
    deliveryTime: 34
  },
  {
    city: "Бакал",
    rating: 3,
    deliveryTime: 14
  },
  {
    city: "Баксан",
    rating: 2,
    deliveryTime: 44
  },
  {
    city: "Кабардино-Балкария",
    rating: 1,
    deliveryTime: 16
  },
  {
    city: "Балабаново",
    rating: 5,
    deliveryTime: 14
  },
  {
    city: "Калужская область",
    rating: 5,
    deliveryTime: 3
  },
  {
    city: "Балаково",
    rating: 4,
    deliveryTime: 24
  },
  {
    city: "Балахна",
    rating: 5,
    deliveryTime: 14
  },
  {
    city: "Балашиха",
    rating: 2,
    deliveryTime: 27
  },
  {
    city: "Балашов",
    rating: 3,
    deliveryTime: 4
  },
  {
    city: "Балей",
    rating: 4,
    deliveryTime: 41
  },
  {
    city: "Забайкальский край",
    rating: 4,
    deliveryTime: 42
  },
  {
    city: "Балтийск",
    rating: 3,
    deliveryTime: 13
  },
  {
    city: "Барабинск",
    rating: 3,
    deliveryTime: 29
  },
  {
    city: "Новосибирская область",
    rating: 3,
    deliveryTime: 25
  },
  {
    city: "Барнаул",
    rating: 1,
    deliveryTime: 11
  },
  {
    city: "Барыш",
    rating: 1,
    deliveryTime: 5
  },
  {
    city: "Ульяновская область",
    rating: 5,
    deliveryTime: 16
  },
  {
    city: "Батайск",
    rating: 3,
    deliveryTime: 44
  },
  {
    city: "Бахчисарай",
    rating: 3,
    deliveryTime: 12
  },
  {
    city: "Оспаривается",
    rating: 2,
    deliveryTime: 36
  },
  {
    city: "Бежецк",
    rating: 2,
    deliveryTime: 48
  },
  {
    city: "Белая Калитва",
    rating: 2,
    deliveryTime: 29
  },
  {
    city: "Белая Холуница",
    rating: 1,
    deliveryTime: 24
  },
  {
    city: "Кировская область",
    rating: 1,
    deliveryTime: 6
  },
  {
    city: "Белгород",
    rating: 5,
    deliveryTime: 3
  },
  {
    city: "Белебей",
    rating: 4,
    deliveryTime: 25
  },
  {
    city: "Белёв",
    rating: 4,
    deliveryTime: 36
  },
  {
    city: "Белинский",
    rating: 1,
    deliveryTime: 20
  },
  {
    city: "Пензенская область",
    rating: 5,
    deliveryTime: 12
  },
  {
    city: "Белово",
    rating: 4,
    deliveryTime: 33
  },
  {
    city: "Белогорск",
    rating: 4,
    deliveryTime: 3
  },
  {
    city: "Амурская область",
    rating: 5,
    deliveryTime: 13
  },
  {
    city: "Белогорск",
    rating: 3,
    deliveryTime: 35
  },
  {
    city: "Оспаривается",
    rating: 4,
    deliveryTime: 32
  },
  {
    city: "Белозерск",
    rating: 3,
    deliveryTime: 35
  },
  {
    city: "Белокуриха",
    rating: 1,
    deliveryTime: 30
  },
  {
    city: "Беломорск",
    rating: 4,
    deliveryTime: 40
  },
  {
    city: "Карелия",
    rating: 2,
    deliveryTime: 39
  },
  {
    city: "Белоозёрский",
    rating: 1,
    deliveryTime: 50
  },
  {
    city: "Белорецк",
    rating: 3,
    deliveryTime: 26
  },
  {
    city: "Белореченск",
    rating: 5,
    deliveryTime: 1
  },
  {
    city: "Белоусово",
    rating: 2,
    deliveryTime: 6
  },
  {
    city: "Белоярский",
    rating: 3,
    deliveryTime: 7
  },
  {
    city: "Ханты-Мансийский АО — Югра",
    rating: 2,
    deliveryTime: 28
  },
  {
    city: "Белый",
    rating: 4,
    deliveryTime: 9
  },
  {
    city: "Бердск",
    rating: 4,
    deliveryTime: 49
  },
  {
    city: "Березники",
    rating: 4,
    deliveryTime: 15
  },
  {
    city: "Берёзовский",
    rating: 3,
    deliveryTime: 10
  },
  {
    city: "Берёзовский",
    rating: 1,
    deliveryTime: 1
  },
  {
    city: "Беслан",
    rating: 1,
    deliveryTime: 50
  },
  {
    city: "Бийск",
    rating: 2,
    deliveryTime: 37
  },
  {
    city: "Бикин",
    rating: 2,
    deliveryTime: 30
  },
  {
    city: "Билибино",
    rating: 5,
    deliveryTime: 40
  },
  {
    city: "Биробиджан",
    rating: 3,
    deliveryTime: 24
  },
  {
    city: "Еврейская АО",
    rating: 2,
    deliveryTime: 32
  },
  {
    city: "Бирск",
    rating: 1,
    deliveryTime: 46
  },
  {
    city: "Бирюсинск",
    rating: 4,
    deliveryTime: 2
  },
  {
    city: "Бирюч",
    rating: 3,
    deliveryTime: 2
  },
  {
    city: "Благовещенск",
    rating: 3,
    deliveryTime: 26
  },
  {
    city: "Благовещенск",
    rating: 4,
    deliveryTime: 1
  },
  {
    city: "Благодарный",
    rating: 2,
    deliveryTime: 5
  },
  {
    city: "Ставропольский край",
    rating: 1,
    deliveryTime: 17
  },
  {
    city: "Бобров",
    rating: 5,
    deliveryTime: 31
  },
  {
    city: "Воронежская область",
    rating: 2,
    deliveryTime: 32
  },
  {
    city: "Богданович",
    rating: 2,
    deliveryTime: 4
  },
  {
    city: "Богородицк",
    rating: 4,
    deliveryTime: 32
  },
  {
    city: "Богородск",
    rating: 3,
    deliveryTime: 21
  },
  {
    city: "Боготол",
    rating: 4,
    deliveryTime: 22
  },
  {
    city: "Богучар",
    rating: 3,
    deliveryTime: 14
  },
  {
    city: "Бодайбо",
    rating: 4,
    deliveryTime: 10
  },
  {
    city: "Бокситогорск",
    rating: 2,
    deliveryTime: 19
  },
  {
    city: "Ленинградская область",
    rating: 4,
    deliveryTime: 6
  },
  {
    city: "Болгар",
    rating: 5,
    deliveryTime: 32
  },
  {
    city: "Бологое",
    rating: 5,
    deliveryTime: 21
  },
  {
    city: "Болотное",
    rating: 1,
    deliveryTime: 50
  },
  {
    city: "Болохово",
    rating: 5,
    deliveryTime: 41
  },
  {
    city: "Болхов",
    rating: 3,
    deliveryTime: 21
  },
  {
    city: "Орловская область",
    rating: 3,
    deliveryTime: 24
  },
  {
    city: "Большой Камень",
    rating: 5,
    deliveryTime: 6
  },
  {
    city: "Бор",
    rating: 3,
    deliveryTime: 17
  },
  {
    city: "Борзя",
    rating: 3,
    deliveryTime: 29
  },
  {
    city: "Борисоглебск",
    rating: 3,
    deliveryTime: 17
  },
  {
    city: "Боровичи",
    rating: 1,
    deliveryTime: 29
  },
  {
    city: "Новгородская область",
    rating: 5,
    deliveryTime: 1
  },
  {
    city: "Боровск",
    rating: 3,
    deliveryTime: 41
  },
  {
    city: "Бородино",
    rating: 3,
    deliveryTime: 48
  },
  {
    city: "Братск",
    rating: 3,
    deliveryTime: 20
  },
  {
    city: "Бронницы",
    rating: 1,
    deliveryTime: 28
  },
  {
    city: "Брянск",
    rating: 3,
    deliveryTime: 27
  },
  {
    city: "Брянская область",
    rating: 1,
    deliveryTime: 38
  },
  {
    city: "Бугульма",
    rating: 5,
    deliveryTime: 24
  },
  {
    city: "Бугуруслан",
    rating: 4,
    deliveryTime: 15
  },
  {
    city: "Будённовск",
    rating: 2,
    deliveryTime: 44
  },
  {
    city: "Бузулук",
    rating: 5,
    deliveryTime: 17
  },
  {
    city: "Буинск",
    rating: 4,
    deliveryTime: 32
  },
  {
    city: "Буй",
    rating: 2,
    deliveryTime: 17
  },
  {
    city: "Костромская область",
    rating: 5,
    deliveryTime: 29
  },
  {
    city: "Буйнакск",
    rating: 4,
    deliveryTime: 38
  },
  {
    city: "Дагестан",
    rating: 4,
    deliveryTime: 15
  },
  {
    city: "Бутурлиновка",
    rating: 2,
    deliveryTime: 34
  },
  {
    city: "Валдай",
    rating: 5,
    deliveryTime: 10
  },
  {
    city: "Валуйки",
    rating: 3,
    deliveryTime: 25
  },
  {
    city: "Велиж",
    rating: 2,
    deliveryTime: 15
  },
  {
    city: "Смоленская область",
    rating: 1,
    deliveryTime: 47
  },
  {
    city: "Великие Луки",
    rating: 2,
    deliveryTime: 18
  },
  {
    city: "Псковская область",
    rating: 2,
    deliveryTime: 44
  },
  {
    city: "Великий Новгород",
    rating: 3,
    deliveryTime: 50
  },
  {
    city: "Великий Устюг",
    rating: 4,
    deliveryTime: 14
  },
  {
    city: "Вельск",
    rating: 3,
    deliveryTime: 5
  },
  {
    city: "Венёв",
    rating: 1,
    deliveryTime: 28
  },
  {
    city: "Верещагино",
    rating: 3,
    deliveryTime: 47
  },
  {
    city: "Верея",
    rating: 3,
    deliveryTime: 49
  },
  {
    city: "Верхнеуральск",
    rating: 5,
    deliveryTime: 43
  },
  {
    city: "Верхний Тагил",
    rating: 3,
    deliveryTime: 26
  },
  {
    city: "Верхний Уфалей",
    rating: 5,
    deliveryTime: 38
  },
  {
    city: "Верхняя Пышма",
    rating: 2,
    deliveryTime: 19
  },
  {
    city: "Верхняя Салда",
    rating: 3,
    deliveryTime: 21
  },
  {
    city: "Верхняя Тура",
    rating: 2,
    deliveryTime: 37
  },
  {
    city: "Верхотурье",
    rating: 1,
    deliveryTime: 2
  },
  {
    city: "Верхоянск",
    rating: 1,
    deliveryTime: 41
  },
  {
    city: "Весьегонск",
    rating: 5,
    deliveryTime: 21
  },
  {
    city: "Ветлуга",
    rating: 4,
    deliveryTime: 34
  },
  {
    city: "Видное",
    rating: 5,
    deliveryTime: 21
  },
  {
    city: "Вилюйск",
    rating: 2,
    deliveryTime: 50
  },
  {
    city: "Вилючинск",
    rating: 2,
    deliveryTime: 4
  },
  {
    city: "Камчатский край",
    rating: 3,
    deliveryTime: 3
  },
  {
    city: "Вихоревка",
    rating: 2,
    deliveryTime: 24
  },
  {
    city: "Вичуга",
    rating: 1,
    deliveryTime: 10
  },
  {
    city: "Ивановская область",
    rating: 3,
    deliveryTime: 13
  },
  {
    city: "Владивосток",
    rating: 2,
    deliveryTime: 17
  },
  {
    city: "Владикавказ",
    rating: 4,
    deliveryTime: 31
  },
  {
    city: "Владимир",
    rating: 5,
    deliveryTime: 36
  },
  {
    city: "Волгоград",
    rating: 3,
    deliveryTime: 5
  },
  {
    city: "Волгоградская область",
    rating: 2,
    deliveryTime: 43
  },
  {
    city: "Волгодонск",
    rating: 5,
    deliveryTime: 32
  },
  {
    city: "Волгореченск",
    rating: 1,
    deliveryTime: 44
  },
  {
    city: "Волжск",
    rating: 2,
    deliveryTime: 8
  },
  {
    city: "Марий Эл",
    rating: 1,
    deliveryTime: 28
  },
  {
    city: "Волжский",
    rating: 5,
    deliveryTime: 40
  },
  {
    city: "Вологда",
    rating: 5,
    deliveryTime: 33
  },
  {
    city: "Володарск",
    rating: 5,
    deliveryTime: 32
  },
  {
    city: "Волоколамск",
    rating: 5,
    deliveryTime: 11
  },
  {
    city: "Волосово",
    rating: 4,
    deliveryTime: 38
  },
  {
    city: "Волхов",
    rating: 5,
    deliveryTime: 20
  },
  {
    city: "Волчанск",
    rating: 2,
    deliveryTime: 37
  },
  {
    city: "Вольск",
    rating: 1,
    deliveryTime: 7
  },
  {
    city: "Воркута",
    rating: 4,
    deliveryTime: 11
  },
  {
    city: "Коми",
    rating: 4,
    deliveryTime: 34
  },
  {
    city: "Воронеж",
    rating: 5,
    deliveryTime: 1
  },
  {
    city: "Ворсма",
    rating: 3,
    deliveryTime: 16
  },
  {
    city: "Воскресенск",
    rating: 2,
    deliveryTime: 1
  },
  {
    city: "Воткинск",
    rating: 5,
    deliveryTime: 14
  },
  {
    city: "Удмуртия",
    rating: 2,
    deliveryTime: 28
  },
  {
    city: "Всеволожск",
    rating: 3,
    deliveryTime: 9
  },
  {
    city: "Вуктыл",
    rating: 3,
    deliveryTime: 18
  },
  {
    city: "Выборг",
    rating: 1,
    deliveryTime: 46
  },
  {
    city: "Выкса",
    rating: 1,
    deliveryTime: 49
  },
  {
    city: "Высоковск",
    rating: 2,
    deliveryTime: 7
  },
  {
    city: "Высоцк",
    rating: 4,
    deliveryTime: 3
  },
  {
    city: "Вытегра",
    rating: 5,
    deliveryTime: 45
  },
  {
    city: "Вышний Волочёк",
    rating: 1,
    deliveryTime: 26
  },
  {
    city: "Вяземский",
    rating: 3,
    deliveryTime: 30
  },
  {
    city: "Вязники",
    rating: 1,
    deliveryTime: 1
  },
  {
    city: "Вязьма",
    rating: 1,
    deliveryTime: 3
  },
  {
    city: "Вятские Поляны",
    rating: 5,
    deliveryTime: 16
  },
  {
    city: "Гаврилов Посад",
    rating: 1,
    deliveryTime: 26
  },
  {
    city: "Гаврилов-Ям",
    rating: 4,
    deliveryTime: 22
  },
  {
    city: "Ярославская область",
    rating: 3,
    deliveryTime: 3
  },
  {
    city: "Гагарин",
    rating: 4,
    deliveryTime: 38
  },
  {
    city: "Гаджиево",
    rating: 4,
    deliveryTime: 31
  },
  {
    city: "Гай",
    rating: 2,
    deliveryTime: 42
  },
  {
    city: "Галич",
    rating: 2,
    deliveryTime: 27
  },
  {
    city: "Гатчина",
    rating: 5,
    deliveryTime: 24
  },
  {
    city: "Гвардейск",
    rating: 2,
    deliveryTime: 18
  },
  {
    city: "Гдов",
    rating: 4,
    deliveryTime: 2
  },
  {
    city: "Геленджик",
    rating: 3,
    deliveryTime: 45
  },
  {
    city: "Георгиевск",
    rating: 1,
    deliveryTime: 25
  },
  {
    city: "Глазов",
    rating: 4,
    deliveryTime: 8
  },
  {
    city: "Голицыно",
    rating: 4,
    deliveryTime: 35
  },
  {
    city: "Горбатов",
    rating: 3,
    deliveryTime: 13
  },
  {
    city: "Горно-Алтайск",
    rating: 4,
    deliveryTime: 49
  },
  {
    city: "Алтай",
    rating: 4,
    deliveryTime: 37
  },
  {
    city: "Горнозаводск",
    rating: 5,
    deliveryTime: 9
  },
  {
    city: "Горняк",
    rating: 5,
    deliveryTime: 10
  },
  {
    city: "Городец",
    rating: 3,
    deliveryTime: 30
  },
  {
    city: "Городище",
    rating: 2,
    deliveryTime: 33
  },
  {
    city: "Городовиковск",
    rating: 1,
    deliveryTime: 29
  },
  {
    city: "Калмыкия",
    rating: 3,
    deliveryTime: 19
  },
  {
    city: "Гороховец",
    rating: 3,
    deliveryTime: 17
  },
  {
    city: "Горячий Ключ",
    rating: 2,
    deliveryTime: 17
  },
  {
    city: "Грайворон",
    rating: 4,
    deliveryTime: 9
  },
  {
    city: "Гремячинск",
    rating: 5,
    deliveryTime: 42
  },
  {
    city: "Грозный",
    rating: 5,
    deliveryTime: 11
  },
  {
    city: "Грязи",
    rating: 1,
    deliveryTime: 39
  },
  {
    city: "Липецкая область",
    rating: 2,
    deliveryTime: 35
  },
  {
    city: "Грязовец",
    rating: 4,
    deliveryTime: 31
  },
  {
    city: "Губаха",
    rating: 2,
    deliveryTime: 6
  },
  {
    city: "Губкин",
    rating: 3,
    deliveryTime: 1
  },
  {
    city: "Губкинский",
    rating: 4,
    deliveryTime: 43
  },
  {
    city: "Ямало-Ненецкий АО",
    rating: 3,
    deliveryTime: 32
  },
  {
    city: "Гудермес",
    rating: 2,
    deliveryTime: 42
  },
  {
    city: "Гуково",
    rating: 1,
    deliveryTime: 12
  },
  {
    city: "Гулькевичи",
    rating: 2,
    deliveryTime: 3
  },
  {
    city: "Гурьевск",
    rating: 5,
    deliveryTime: 45
  },
  {
    city: "Гурьевск",
    rating: 4,
    deliveryTime: 43
  },
  {
    city: "Гусев",
    rating: 1,
    deliveryTime: 15
  },
  {
    city: "Гусиноозёрск",
    rating: 2,
    deliveryTime: 25
  },
  {
    city: "Гусь-Хрустальный",
    rating: 3,
    deliveryTime: 5
  },
  {
    city: "Давлеканово",
    rating: 1,
    deliveryTime: 32
  },
  {
    city: "Дагестанские Огни",
    rating: 2,
    deliveryTime: 30
  },
  {
    city: "Далматово",
    rating: 1,
    deliveryTime: 22
  },
  {
    city: "Курганская область",
    rating: 4,
    deliveryTime: 32
  },
  {
    city: "Дальнегорск",
    rating: 2,
    deliveryTime: 27
  },
  {
    city: "Дальнереченск",
    rating: 2,
    deliveryTime: 4
  },
  {
    city: "Данилов",
    rating: 1,
    deliveryTime: 31
  },
  {
    city: "Данков",
    rating: 4,
    deliveryTime: 13
  },
  {
    city: "Дегтярск",
    rating: 4,
    deliveryTime: 41
  },
  {
    city: "Дедовск",
    rating: 3,
    deliveryTime: 41
  },
  {
    city: "Демидов",
    rating: 5,
    deliveryTime: 15
  },
  {
    city: "Дербент",
    rating: 3,
    deliveryTime: 49
  },
  {
    city: "Десногорск",
    rating: 5,
    deliveryTime: 24
  },
  {
    city: "Джанкой",
    rating: 1,
    deliveryTime: 27
  },
  {
    city: "Оспаривается",
    rating: 5,
    deliveryTime: 8
  },
  {
    city: "Дзержинск",
    rating: 3,
    deliveryTime: 7
  },
  {
    city: "Дзержинский",
    rating: 5,
    deliveryTime: 18
  },
  {
    city: "Дивногорск",
    rating: 4,
    deliveryTime: 4
  },
  {
    city: "Дигора",
    rating: 4,
    deliveryTime: 18
  },
  {
    city: "Димитровград",
    rating: 1,
    deliveryTime: 37
  },
  {
    city: "Дмитриев",
    rating: 5,
    deliveryTime: 11
  },
  {
    city: "Курская область",
    rating: 5,
    deliveryTime: 3
  },
  {
    city: "Дмитров",
    rating: 2,
    deliveryTime: 12
  },
  {
    city: "Дмитровск",
    rating: 5,
    deliveryTime: 40
  },
  {
    city: "Дно",
    rating: 3,
    deliveryTime: 26
  },
  {
    city: "Добрянка",
    rating: 1,
    deliveryTime: 7
  },
  {
    city: "Долгопрудный",
    rating: 4,
    deliveryTime: 43
  },
  {
    city: "Долинск",
    rating: 3,
    deliveryTime: 32
  },
  {
    city: "Домодедово",
    rating: 2,
    deliveryTime: 35
  },
  {
    city: "Донецк",
    rating: 4,
    deliveryTime: 6
  },
  {
    city: "Донской",
    rating: 5,
    deliveryTime: 47
  },
  {
    city: "Дорогобуж",
    rating: 5,
    deliveryTime: 10
  },
  {
    city: "Дрезна",
    rating: 5,
    deliveryTime: 35
  },
  {
    city: "Дубна",
    rating: 4,
    deliveryTime: 25
  },
  {
    city: "Дубовка",
    rating: 1,
    deliveryTime: 1
  },
  {
    city: "Дудинка",
    rating: 4,
    deliveryTime: 38
  },
  {
    city: "Духовщина",
    rating: 5,
    deliveryTime: 40
  },
  {
    city: "Дюртюли",
    rating: 2,
    deliveryTime: 21
  },
  {
    city: "Дятьково",
    rating: 5,
    deliveryTime: 24
  },
  {
    city: "Евпатория",
    rating: 3,
    deliveryTime: 4
  },
  {
    city: "Оспаривается",
    rating: 2,
    deliveryTime: 47
  },
  {
    city: "Егорьевск",
    rating: 3,
    deliveryTime: 15
  },
  {
    city: "Ейск",
    rating: 5,
    deliveryTime: 28
  },
  {
    city: "Екатеринбург",
    rating: 4,
    deliveryTime: 7
  },
  {
    city: "Елабуга",
    rating: 4,
    deliveryTime: 21
  },
  {
    city: "Елец",
    rating: 2,
    deliveryTime: 12
  },
  {
    city: "Елизово",
    rating: 2,
    deliveryTime: 38
  },
  {
    city: "Ельня",
    rating: 4,
    deliveryTime: 29
  },
  {
    city: "Еманжелинск",
    rating: 2,
    deliveryTime: 31
  },
  {
    city: "Емва",
    rating: 1,
    deliveryTime: 7
  },
  {
    city: "Енисейск",
    rating: 2,
    deliveryTime: 10
  },
  {
    city: "Ермолино",
    rating: 4,
    deliveryTime: 20
  },
  {
    city: "Ершов",
    rating: 2,
    deliveryTime: 40
  },
  {
    city: "Ессентуки",
    rating: 5,
    deliveryTime: 43
  },
  {
    city: "Ефремов",
    rating: 2,
    deliveryTime: 3
  },
  {
    city: "Железноводск",
    rating: 2,
    deliveryTime: 29
  },
  {
    city: "Железногорск",
    rating: 3,
    deliveryTime: 23
  },
  {
    city: "Железногорск",
    rating: 1,
    deliveryTime: 43
  },
  {
    city: "Железногорск-Илимский",
    rating: 3,
    deliveryTime: 20
  },
  {
    city: "Жердевка",
    rating: 2,
    deliveryTime: 29
  },
  {
    city: "Тамбовская область",
    rating: 5,
    deliveryTime: 39
  },
  {
    city: "Жигулёвск",
    rating: 1,
    deliveryTime: 16
  },
  {
    city: "Самарская область",
    rating: 4,
    deliveryTime: 36
  },
  {
    city: "Жиздра",
    rating: 4,
    deliveryTime: 12
  },
  {
    city: "Жирновск",
    rating: 4,
    deliveryTime: 42
  },
  {
    city: "Жуков",
    rating: 3,
    deliveryTime: 11
  },
  {
    city: "Жуковка",
    rating: 1,
    deliveryTime: 8
  },
  {
    city: "Жуковский",
    rating: 5,
    deliveryTime: 40
  },
  {
    city: "Завитинск",
    rating: 3,
    deliveryTime: 25
  },
  {
    city: "Заводоуковск",
    rating: 4,
    deliveryTime: 48
  },
  {
    city: "Тюменская область",
    rating: 5,
    deliveryTime: 40
  },
  {
    city: "Заволжск",
    rating: 3,
    deliveryTime: 32
  },
  {
    city: "Заволжье",
    rating: 3,
    deliveryTime: 6
  },
  {
    city: "Задонск",
    rating: 4,
    deliveryTime: 36
  },
  {
    city: "Заинск",
    rating: 4,
    deliveryTime: 35
  },
  {
    city: "Закаменск",
    rating: 3,
    deliveryTime: 8
  },
  {
    city: "Заозёрный",
    rating: 5,
    deliveryTime: 20
  },
  {
    city: "Заозёрск",
    rating: 2,
    deliveryTime: 39
  },
  {
    city: "Западная Двина",
    rating: 3,
    deliveryTime: 37
  },
  {
    city: "Заполярный",
    rating: 2,
    deliveryTime: 15
  },
  {
    city: "Зарайск",
    rating: 1,
    deliveryTime: 47
  },
  {
    city: "Заречный",
    rating: 5,
    deliveryTime: 30
  },
  {
    city: "Заречный",
    rating: 5,
    deliveryTime: 36
  },
  {
    city: "Заринск",
    rating: 3,
    deliveryTime: 34
  },
  {
    city: "Звенигово",
    rating: 3,
    deliveryTime: 11
  },
  {
    city: "Звенигород",
    rating: 2,
    deliveryTime: 12
  },
  {
    city: "Зверево",
    rating: 1,
    deliveryTime: 7
  },
  {
    city: "Зеленогорск",
    rating: 2,
    deliveryTime: 14
  },
  {
    city: "Зеленоградск",
    rating: 1,
    deliveryTime: 7
  },
  {
    city: "Зеленодольск",
    rating: 2,
    deliveryTime: 38
  },
  {
    city: "Зеленокумск",
    rating: 3,
    deliveryTime: 21
  },
  {
    city: "Зерноград",
    rating: 4,
    deliveryTime: 20
  },
  {
    city: "Зея",
    rating: 5,
    deliveryTime: 29
  },
  {
    city: "Зима",
    rating: 2,
    deliveryTime: 2
  },
  {
    city: "Златоуст",
    rating: 5,
    deliveryTime: 28
  },
  {
    city: "Злынка",
    rating: 1,
    deliveryTime: 40
  },
  {
    city: "Змеиногорск",
    rating: 2,
    deliveryTime: 7
  },
  {
    city: "Знаменск",
    rating: 2,
    deliveryTime: 32
  },
  {
    city: "Зубцов",
    rating: 5,
    deliveryTime: 50
  },
  {
    city: "Зуевка",
    rating: 2,
    deliveryTime: 35
  },
  {
    city: "Ивангород",
    rating: 3,
    deliveryTime: 36
  },
  {
    city: "Иваново",
    rating: 5,
    deliveryTime: 2
  },
  {
    city: "Ивантеевка",
    rating: 2,
    deliveryTime: 18
  },
  {
    city: "Ивдель",
    rating: 4,
    deliveryTime: 40
  },
  {
    city: "Игарка",
    rating: 1,
    deliveryTime: 12
  },
  {
    city: "Ижевск",
    rating: 5,
    deliveryTime: 31
  },
  {
    city: "Избербаш",
    rating: 4,
    deliveryTime: 49
  },
  {
    city: "Изобильный",
    rating: 4,
    deliveryTime: 39
  },
  {
    city: "Иланский",
    rating: 1,
    deliveryTime: 19
  },
  {
    city: "Инза",
    rating: 1,
    deliveryTime: 6
  },
  {
    city: "Иннополис",
    rating: 1,
    deliveryTime: 23
  },
  {
    city: "Инсар",
    rating: 2,
    deliveryTime: 16
  },
  {
    city: "Инта",
    rating: 2,
    deliveryTime: 22
  },
  {
    city: "Ипатово",
    rating: 2,
    deliveryTime: 17
  },
  {
    city: "Ирбит",
    rating: 1,
    deliveryTime: 15
  },
  {
    city: "Иркутск",
    rating: 4,
    deliveryTime: 6
  },
  {
    city: "Исилькуль",
    rating: 4,
    deliveryTime: 16
  },
  {
    city: "Омская область",
    rating: 5,
    deliveryTime: 15
  },
  {
    city: "Искитим",
    rating: 1,
    deliveryTime: 22
  },
  {
    city: "Истра",
    rating: 5,
    deliveryTime: 44
  },
  {
    city: "Ишим",
    rating: 3,
    deliveryTime: 15
  },
  {
    city: "Ишимбай",
    rating: 3,
    deliveryTime: 1
  },
  {
    city: "Йошкар-Ола",
    rating: 1,
    deliveryTime: 4
  },
  {
    city: "Кадников",
    rating: 3,
    deliveryTime: 30
  },
  {
    city: "Казань",
    rating: 4,
    deliveryTime: 12
  },
  {
    city: "Калач",
    rating: 5,
    deliveryTime: 15
  },
  {
    city: "Калач-на-Дону",
    rating: 1,
    deliveryTime: 34
  },
  {
    city: "Калачинск",
    rating: 2,
    deliveryTime: 16
  },
  {
    city: "Калининград",
    rating: 5,
    deliveryTime: 35
  },
  {
    city: "Калининск",
    rating: 1,
    deliveryTime: 4
  },
  {
    city: "Калтан",
    rating: 4,
    deliveryTime: 39
  },
  {
    city: "Калуга",
    rating: 5,
    deliveryTime: 28
  },
  {
    city: "Калязин",
    rating: 3,
    deliveryTime: 17
  },
  {
    city: "Камбарка",
    rating: 2,
    deliveryTime: 39
  },
  {
    city: "Каменка",
    rating: 5,
    deliveryTime: 24
  },
  {
    city: "Каменногорск",
    rating: 3,
    deliveryTime: 5
  },
  {
    city: "Каменск-Уральский",
    rating: 2,
    deliveryTime: 3
  },
  {
    city: "Каменск-Шахтинский",
    rating: 5,
    deliveryTime: 26
  },
  {
    city: "Камень-на-Оби",
    rating: 3,
    deliveryTime: 47
  },
  {
    city: "Камешково",
    rating: 3,
    deliveryTime: 33
  },
  {
    city: "Камызяк",
    rating: 1,
    deliveryTime: 37
  },
  {
    city: "Камышин",
    rating: 2,
    deliveryTime: 20
  },
  {
    city: "Камышлов",
    rating: 2,
    deliveryTime: 22
  },
  {
    city: "Канаш",
    rating: 5,
    deliveryTime: 34
  },
  {
    city: "Кандалакша",
    rating: 5,
    deliveryTime: 45
  },
  {
    city: "Канск",
    rating: 1,
    deliveryTime: 18
  },
  {
    city: "Карабаново",
    rating: 2,
    deliveryTime: 27
  },
  {
    city: "Карабаш",
    rating: 2,
    deliveryTime: 24
  },
  {
    city: "Карабулак",
    rating: 2,
    deliveryTime: 42
  },
  {
    city: "Ингушетия",
    rating: 3,
    deliveryTime: 37
  },
  {
    city: "Карасук",
    rating: 1,
    deliveryTime: 40
  },
  {
    city: "Карачаевск",
    rating: 2,
    deliveryTime: 40
  },
  {
    city: "Карачаево-Черкесия",
    rating: 3,
    deliveryTime: 31
  },
  {
    city: "Карачев",
    rating: 4,
    deliveryTime: 17
  },
  {
    city: "Каргат",
    rating: 4,
    deliveryTime: 32
  },
  {
    city: "Каргополь",
    rating: 5,
    deliveryTime: 5
  },
  {
    city: "Карпинск",
    rating: 3,
    deliveryTime: 3
  },
  {
    city: "Карталы",
    rating: 1,
    deliveryTime: 23
  },
  {
    city: "Касимов",
    rating: 2,
    deliveryTime: 1
  },
  {
    city: "Рязанская область",
    rating: 3,
    deliveryTime: 11
  },
  {
    city: "Касли",
    rating: 2,
    deliveryTime: 43
  },
  {
    city: "Каспийск",
    rating: 2,
    deliveryTime: 1
  },
  {
    city: "Катав-Ивановск",
    rating: 4,
    deliveryTime: 26
  },
  {
    city: "Катайск",
    rating: 2,
    deliveryTime: 31
  },
  {
    city: "Качканар",
    rating: 4,
    deliveryTime: 13
  },
  {
    city: "Кашин",
    rating: 2,
    deliveryTime: 21
  },
  {
    city: "Кашира",
    rating: 3,
    deliveryTime: 47
  },
  {
    city: "Кедровый",
    rating: 3,
    deliveryTime: 20
  },
  {
    city: "Кемерово",
    rating: 1,
    deliveryTime: 29
  },
  {
    city: "Кемь",
    rating: 2,
    deliveryTime: 48
  },
  {
    city: "Керчь",
    rating: 3,
    deliveryTime: 22
  },
  {
    city: "Оспаривается",
    rating: 1,
    deliveryTime: 42
  },
  {
    city: "Кизел",
    rating: 1,
    deliveryTime: 6
  },
  {
    city: "Кизилюрт",
    rating: 5,
    deliveryTime: 22
  },
  {
    city: "Кизляр",
    rating: 3,
    deliveryTime: 9
  },
  {
    city: "Кимовск",
    rating: 2,
    deliveryTime: 6
  },
  {
    city: "Кимры",
    rating: 1,
    deliveryTime: 39
  },
  {
    city: "Кингисепп",
    rating: 4,
    deliveryTime: 6
  },
  {
    city: "Кинель",
    rating: 1,
    deliveryTime: 25
  },
  {
    city: "Кинешма",
    rating: 3,
    deliveryTime: 49
  },
  {
    city: "Киреевск",
    rating: 1,
    deliveryTime: 28
  },
  {
    city: "Киренск",
    rating: 1,
    deliveryTime: 27
  },
  {
    city: "Киржач",
    rating: 5,
    deliveryTime: 6
  },
  {
    city: "Кириллов",
    rating: 1,
    deliveryTime: 28
  },
  {
    city: "Кириши",
    rating: 4,
    deliveryTime: 21
  },
  {
    city: "Киров",
    rating: 3,
    deliveryTime: 33
  },
  {
    city: "Киров",
    rating: 2,
    deliveryTime: 41
  },
  {
    city: "Кировград",
    rating: 5,
    deliveryTime: 8
  },
  {
    city: "Кирово-Чепецк",
    rating: 2,
    deliveryTime: 44
  },
  {
    city: "Кировск",
    rating: 1,
    deliveryTime: 8
  },
  {
    city: "Кировск",
    rating: 3,
    deliveryTime: 23
  },
  {
    city: "Кирс",
    rating: 3,
    deliveryTime: 13
  },
  {
    city: "Кирсанов",
    rating: 3,
    deliveryTime: 40
  },
  {
    city: "Киселёвск",
    rating: 2,
    deliveryTime: 48
  },
  {
    city: "Кисловодск",
    rating: 2,
    deliveryTime: 27
  },
  {
    city: "Клин",
    rating: 4,
    deliveryTime: 15
  },
  {
    city: "Клинцы",
    rating: 5,
    deliveryTime: 50
  },
  {
    city: "Княгинино",
    rating: 2,
    deliveryTime: 42
  },
  {
    city: "Ковдор",
    rating: 2,
    deliveryTime: 47
  },
  {
    city: "Ковров",
    rating: 4,
    deliveryTime: 44
  },
  {
    city: "Ковылкино",
    rating: 3,
    deliveryTime: 18
  },
  {
    city: "Когалым",
    rating: 1,
    deliveryTime: 4
  },
  {
    city: "Кодинск",
    rating: 3,
    deliveryTime: 41
  },
  {
    city: "Козельск",
    rating: 4,
    deliveryTime: 31
  },
  {
    city: "Козловка",
    rating: 1,
    deliveryTime: 45
  },
  {
    city: "Козьмодемьянск",
    rating: 4,
    deliveryTime: 4
  },
  {
    city: "Кола",
    rating: 3,
    deliveryTime: 48
  },
  {
    city: "Кологрив",
    rating: 5,
    deliveryTime: 15
  },
  {
    city: "Коломна",
    rating: 1,
    deliveryTime: 6
  },
  {
    city: "Колпашево",
    rating: 4,
    deliveryTime: 2
  },
  {
    city: "Кольчугино",
    rating: 3,
    deliveryTime: 40
  },
  {
    city: "Коммунар",
    rating: 2,
    deliveryTime: 36
  },
  {
    city: "Комсомольск",
    rating: 2,
    deliveryTime: 39
  },
  {
    city: "Комсомольск-на-Амуре",
    rating: 3,
    deliveryTime: 23
  },
  {
    city: "Конаково",
    rating: 3,
    deliveryTime: 39
  },
  {
    city: "Кондопога",
    rating: 4,
    deliveryTime: 41
  },
  {
    city: "Кондрово",
    rating: 4,
    deliveryTime: 26
  },
  {
    city: "Константиновск",
    rating: 5,
    deliveryTime: 3
  },
  {
    city: "Копейск",
    rating: 3,
    deliveryTime: 48
  },
  {
    city: "Кораблино",
    rating: 5,
    deliveryTime: 11
  },
  {
    city: "Кореновск",
    rating: 5,
    deliveryTime: 45
  },
  {
    city: "Коркино",
    rating: 2,
    deliveryTime: 49
  },
  {
    city: "Королёв",
    rating: 1,
    deliveryTime: 43
  },
  {
    city: "Короча",
    rating: 4,
    deliveryTime: 15
  },
  {
    city: "Корсаков",
    rating: 3,
    deliveryTime: 32
  },
  {
    city: "Коряжма",
    rating: 1,
    deliveryTime: 26
  },
  {
    city: "Костерёво",
    rating: 5,
    deliveryTime: 2
  },
  {
    city: "Костомукша",
    rating: 1,
    deliveryTime: 47
  },
  {
    city: "Кострома",
    rating: 5,
    deliveryTime: 36
  },
  {
    city: "Котельники",
    rating: 2,
    deliveryTime: 48
  },
  {
    city: "Котельниково",
    rating: 2,
    deliveryTime: 25
  },
  {
    city: "Котельнич",
    rating: 2,
    deliveryTime: 50
  },
  {
    city: "Котлас",
    rating: 5,
    deliveryTime: 11
  },
  {
    city: "Котово",
    rating: 4,
    deliveryTime: 32
  },
  {
    city: "Котовск",
    rating: 2,
    deliveryTime: 37
  },
  {
    city: "Кохма",
    rating: 5,
    deliveryTime: 4
  },
  {
    city: "Красавино",
    rating: 2,
    deliveryTime: 14
  },
  {
    city: "Красноармейск",
    rating: 4,
    deliveryTime: 21
  },
  {
    city: "Красноармейск",
    rating: 5,
    deliveryTime: 45
  },
  {
    city: "Красновишерск",
    rating: 3,
    deliveryTime: 40
  },
  {
    city: "Красногорск",
    rating: 1,
    deliveryTime: 4
  },
  {
    city: "Краснодар",
    rating: 2,
    deliveryTime: 3
  },
  {
    city: "Краснозаводск",
    rating: 1,
    deliveryTime: 47
  },
  {
    city: "Краснознаменск",
    rating: 3,
    deliveryTime: 31
  },
  {
    city: "Краснознаменск",
    rating: 2,
    deliveryTime: 43
  },
  {
    city: "Краснокаменск",
    rating: 4,
    deliveryTime: 40
  },
  {
    city: "Краснокамск",
    rating: 5,
    deliveryTime: 22
  },
  {
    city: "Красноперекопск",
    rating: 3,
    deliveryTime: 45
  },
  {
    city: "Оспаривается",
    rating: 5,
    deliveryTime: 34
  },
  {
    city: "Краснослободск",
    rating: 3,
    deliveryTime: 27
  },
  {
    city: "Краснослободск",
    rating: 1,
    deliveryTime: 30
  },
  {
    city: "Краснотурьинск",
    rating: 3,
    deliveryTime: 22
  },
  {
    city: "Красноуральск",
    rating: 1,
    deliveryTime: 29
  },
  {
    city: "Красноуфимск",
    rating: 2,
    deliveryTime: 10
  },
  {
    city: "Красноярск",
    rating: 3,
    deliveryTime: 44
  },
  {
    city: "Красный Кут",
    rating: 5,
    deliveryTime: 35
  },
  {
    city: "Красный Сулин",
    rating: 4,
    deliveryTime: 24
  },
  {
    city: "Красный Холм",
    rating: 2,
    deliveryTime: 2
  },
  {
    city: "Кремёнки",
    rating: 2,
    deliveryTime: 22
  },
  {
    city: "Кропоткин",
    rating: 5,
    deliveryTime: 35
  },
  {
    city: "Крымск",
    rating: 2,
    deliveryTime: 40
  },
  {
    city: "Кстово",
    rating: 1,
    deliveryTime: 49
  },
  {
    city: "Кубинка",
    rating: 2,
    deliveryTime: 7
  },
  {
    city: "Кувандык",
    rating: 1,
    deliveryTime: 38
  },
  {
    city: "Кувшиново",
    rating: 3,
    deliveryTime: 10
  },
  {
    city: "Кудрово",
    rating: 3,
    deliveryTime: 35
  },
  {
    city: "Кудымкар",
    rating: 3,
    deliveryTime: 22
  },
  {
    city: "Кузнецк",
    rating: 5,
    deliveryTime: 11
  },
  {
    city: "Куйбышев",
    rating: 4,
    deliveryTime: 50
  },
  {
    city: "Кукмор",
    rating: 5,
    deliveryTime: 12
  },
  {
    city: "Кулебаки",
    rating: 5,
    deliveryTime: 33
  },
  {
    city: "Кумертау",
    rating: 2,
    deliveryTime: 6
  },
  {
    city: "Кунгур",
    rating: 3,
    deliveryTime: 29
  },
  {
    city: "Купино",
    rating: 2,
    deliveryTime: 32
  },
  {
    city: "Курган",
    rating: 3,
    deliveryTime: 1
  },
  {
    city: "Курганинск",
    rating: 5,
    deliveryTime: 33
  },
  {
    city: "Курильск",
    rating: 3,
    deliveryTime: 14
  },
  {
    city: "Курлово",
    rating: 5,
    deliveryTime: 20
  },
  {
    city: "Куровское",
    rating: 1,
    deliveryTime: 44
  },
  {
    city: "Курск",
    rating: 5,
    deliveryTime: 47
  },
  {
    city: "Куртамыш",
    rating: 1,
    deliveryTime: 25
  },
  {
    city: "Курчалой",
    rating: 3,
    deliveryTime: 33
  },
  {
    city: "Курчатов",
    rating: 5,
    deliveryTime: 42
  },
  {
    city: "Куса",
    rating: 3,
    deliveryTime: 15
  },
  {
    city: "Кушва",
    rating: 1,
    deliveryTime: 44
  },
  {
    city: "Кызыл",
    rating: 4,
    deliveryTime: 30
  },
  {
    city: "Кыштым",
    rating: 2,
    deliveryTime: 30
  },
  {
    city: "Кяхта",
    rating: 2,
    deliveryTime: 25
  },
  {
    city: "Лабинск",
    rating: 2,
    deliveryTime: 21
  },
  {
    city: "Лабытнанги",
    rating: 3,
    deliveryTime: 33
  },
  {
    city: "Лагань",
    rating: 2,
    deliveryTime: 11
  },
  {
    city: "Ладушкин",
    rating: 3,
    deliveryTime: 35
  },
  {
    city: "Лаишево",
    rating: 5,
    deliveryTime: 11
  },
  {
    city: "Лакинск",
    rating: 2,
    deliveryTime: 35
  },
  {
    city: "Лангепас",
    rating: 1,
    deliveryTime: 15
  },
  {
    city: "Лахденпохья",
    rating: 2,
    deliveryTime: 37
  },
  {
    city: "Лебедянь",
    rating: 2,
    deliveryTime: 50
  },
  {
    city: "Лениногорск",
    rating: 2,
    deliveryTime: 41
  },
  {
    city: "Ленинск",
    rating: 3,
    deliveryTime: 41
  },
  {
    city: "Ленинск-Кузнецкий",
    rating: 3,
    deliveryTime: 12
  },
  {
    city: "Ленск",
    rating: 4,
    deliveryTime: 9
  },
  {
    city: "Лермонтов",
    rating: 4,
    deliveryTime: 1
  },
  {
    city: "Лесной",
    rating: 2,
    deliveryTime: 43
  },
  {
    city: "Лесозаводск",
    rating: 3,
    deliveryTime: 23
  },
  {
    city: "Лесосибирск",
    rating: 5,
    deliveryTime: 26
  },
  {
    city: "Ливны",
    rating: 3,
    deliveryTime: 14
  },
  {
    city: "Ликино-Дулёво",
    rating: 4,
    deliveryTime: 21
  },
  {
    city: "Липецк",
    rating: 5,
    deliveryTime: 41
  },
  {
    city: "Липки",
    rating: 4,
    deliveryTime: 32
  },
  {
    city: "Лиски",
    rating: 5,
    deliveryTime: 8
  },
  {
    city: "Лихославль",
    rating: 4,
    deliveryTime: 5
  },
  {
    city: "Лобня",
    rating: 3,
    deliveryTime: 33
  },
  {
    city: "Лодейное Поле",
    rating: 3,
    deliveryTime: 10
  },
  {
    city: "Лосино-Петровский",
    rating: 4,
    deliveryTime: 33
  },
  {
    city: "Луга",
    rating: 3,
    deliveryTime: 31
  },
  {
    city: "Луза",
    rating: 4,
    deliveryTime: 37
  },
  {
    city: "Лукоянов",
    rating: 1,
    deliveryTime: 9
  },
  {
    city: "Луховицы",
    rating: 2,
    deliveryTime: 36
  },
  {
    city: "Лысково",
    rating: 4,
    deliveryTime: 24
  },
  {
    city: "Лысьва",
    rating: 4,
    deliveryTime: 29
  },
  {
    city: "Лыткарино",
    rating: 2,
    deliveryTime: 45
  },
  {
    city: "Льгов",
    rating: 2,
    deliveryTime: 38
  },
  {
    city: "Любань",
    rating: 5,
    deliveryTime: 42
  },
  {
    city: "Люберцы",
    rating: 2,
    deliveryTime: 35
  },
  {
    city: "Любим",
    rating: 2,
    deliveryTime: 19
  },
  {
    city: "Людиново",
    rating: 2,
    deliveryTime: 7
  },
  {
    city: "Лянтор",
    rating: 2,
    deliveryTime: 4
  },
  {
    city: "Магадан",
    rating: 2,
    deliveryTime: 8
  },
  {
    city: "Магаданская область",
    rating: 2,
    deliveryTime: 24
  },
  {
    city: "Магас",
    rating: 1,
    deliveryTime: 12
  },
  {
    city: "Магнитогорск",
    rating: 3,
    deliveryTime: 26
  },
  {
    city: "Майкоп",
    rating: 2,
    deliveryTime: 18
  },
  {
    city: "Майский",
    rating: 5,
    deliveryTime: 41
  },
  {
    city: "Макаров",
    rating: 2,
    deliveryTime: 34
  },
  {
    city: "Макарьев",
    rating: 3,
    deliveryTime: 50
  },
  {
    city: "Макушино",
    rating: 2,
    deliveryTime: 11
  },
  {
    city: "Малая Вишера",
    rating: 1,
    deliveryTime: 35
  },
  {
    city: "Малгобек",
    rating: 3,
    deliveryTime: 20
  },
  {
    city: "Малмыж",
    rating: 5,
    deliveryTime: 48
  },
  {
    city: "Малоархангельск",
    rating: 1,
    deliveryTime: 44
  },
  {
    city: "Малоярославец",
    rating: 5,
    deliveryTime: 14
  },
  {
    city: "Мамадыш",
    rating: 5,
    deliveryTime: 34
  },
  {
    city: "Мамоново",
    rating: 1,
    deliveryTime: 2
  },
  {
    city: "Мантурово",
    rating: 3,
    deliveryTime: 21
  },
  {
    city: "Мариинск",
    rating: 3,
    deliveryTime: 8
  },
  {
    city: "Мариинский Посад",
    rating: 1,
    deliveryTime: 35
  },
  {
    city: "Маркс",
    rating: 4,
    deliveryTime: 49
  },
  {
    city: "Махачкала",
    rating: 4,
    deliveryTime: 25
  },
  {
    city: "Мглин",
    rating: 3,
    deliveryTime: 40
  },
  {
    city: "Мегион",
    rating: 5,
    deliveryTime: 18
  },
  {
    city: "Медвежьегорск",
    rating: 5,
    deliveryTime: 9
  },
  {
    city: "Медногорск",
    rating: 2,
    deliveryTime: 21
  },
  {
    city: "Медынь",
    rating: 5,
    deliveryTime: 6
  },
  {
    city: "Межгорье",
    rating: 5,
    deliveryTime: 37
  },
  {
    city: "Междуреченск",
    rating: 1,
    deliveryTime: 22
  },
  {
    city: "Мезень",
    rating: 4,
    deliveryTime: 2
  },
  {
    city: "Меленки",
    rating: 1,
    deliveryTime: 43
  },
  {
    city: "Мелеуз",
    rating: 3,
    deliveryTime: 20
  },
  {
    city: "Менделеевск",
    rating: 1,
    deliveryTime: 12
  },
  {
    city: "Мензелинск",
    rating: 5,
    deliveryTime: 13
  },
  {
    city: "Мещовск",
    rating: 4,
    deliveryTime: 28
  },
  {
    city: "Миасс",
    rating: 1,
    deliveryTime: 18
  },
  {
    city: "Микунь",
    rating: 1,
    deliveryTime: 40
  },
  {
    city: "Миллерово",
    rating: 1,
    deliveryTime: 37
  },
  {
    city: "Минеральные Воды",
    rating: 3,
    deliveryTime: 50
  },
  {
    city: "Минусинск",
    rating: 1,
    deliveryTime: 19
  },
  {
    city: "Миньяр",
    rating: 5,
    deliveryTime: 16
  },
  {
    city: "Мирный",
    rating: 4,
    deliveryTime: 39
  },
  {
    city: "Мирный",
    rating: 5,
    deliveryTime: 8
  },
  {
    city: "Михайлов",
    rating: 1,
    deliveryTime: 49
  },
  {
    city: "Михайловка",
    rating: 2,
    deliveryTime: 4
  },
  {
    city: "Михайловск",
    rating: 2,
    deliveryTime: 44
  },
  {
    city: "Михайловск",
    rating: 4,
    deliveryTime: 3
  },
  {
    city: "Мичуринск",
    rating: 1,
    deliveryTime: 26
  },
  {
    city: "Могоча",
    rating: 4,
    deliveryTime: 27
  },
  {
    city: "Можайск",
    rating: 1,
    deliveryTime: 20
  },
  {
    city: "Можга",
    rating: 5,
    deliveryTime: 19
  },
  {
    city: "Моздок",
    rating: 5,
    deliveryTime: 26
  },
  {
    city: "Мончегорск",
    rating: 3,
    deliveryTime: 29
  },
  {
    city: "Морозовск",
    rating: 2,
    deliveryTime: 9
  },
  {
    city: "Моршанск",
    rating: 5,
    deliveryTime: 40
  },
  {
    city: "Мосальск",
    rating: 2,
    deliveryTime: 13
  },
  {
    city: "Москва",
    rating: 2,
    deliveryTime: 18
  },
  {
    city: "Москва",
    rating: 4,
    deliveryTime: 28
  },
  {
    city: "Муравленко",
    rating: 1,
    deliveryTime: 35
  },
  {
    city: "Мураши",
    rating: 5,
    deliveryTime: 50
  },
  {
    city: "Мурино",
    rating: 3,
    deliveryTime: 25
  },
  {
    city: "Мурманск",
    rating: 4,
    deliveryTime: 34
  },
  {
    city: "Муром",
    rating: 3,
    deliveryTime: 48
  },
  {
    city: "Мценск",
    rating: 4,
    deliveryTime: 47
  },
  {
    city: "Мыски",
    rating: 5,
    deliveryTime: 31
  },
  {
    city: "Мытищи",
    rating: 5,
    deliveryTime: 50
  },
  {
    city: "Мышкин",
    rating: 1,
    deliveryTime: 24
  },
  {
    city: "Набережные Челны",
    rating: 2,
    deliveryTime: 16
  },
  {
    city: "Навашино",
    rating: 2,
    deliveryTime: 50
  },
  {
    city: "Наволоки",
    rating: 2,
    deliveryTime: 43
  },
  {
    city: "Надым",
    rating: 2,
    deliveryTime: 5
  },
  {
    city: "Назарово",
    rating: 3,
    deliveryTime: 22
  },
  {
    city: "Назрань",
    rating: 3,
    deliveryTime: 22
  },
  {
    city: "Называевск",
    rating: 2,
    deliveryTime: 14
  },
  {
    city: "Нальчик",
    rating: 2,
    deliveryTime: 43
  },
  {
    city: "Нариманов",
    rating: 1,
    deliveryTime: 36
  },
  {
    city: "Наро-Фоминск",
    rating: 1,
    deliveryTime: 13
  },
  {
    city: "Нарткала",
    rating: 1,
    deliveryTime: 43
  },
  {
    city: "Нарьян-Мар",
    rating: 4,
    deliveryTime: 48
  },
  {
    city: "Ненецкий АО",
    rating: 5,
    deliveryTime: 22
  },
  {
    city: "Находка",
    rating: 3,
    deliveryTime: 45
  },
  {
    city: "Невель",
    rating: 2,
    deliveryTime: 31
  },
  {
    city: "Невельск",
    rating: 2,
    deliveryTime: 42
  },
  {
    city: "Невинномысск",
    rating: 3,
    deliveryTime: 41
  },
  {
    city: "Невьянск",
    rating: 3,
    deliveryTime: 48
  },
  {
    city: "Нелидово",
    rating: 1,
    deliveryTime: 50
  },
  {
    city: "Неман",
    rating: 1,
    deliveryTime: 38
  },
  {
    city: "Нерехта",
    rating: 1,
    deliveryTime: 29
  },
  {
    city: "Нерчинск",
    rating: 5,
    deliveryTime: 19
  },
  {
    city: "Нерюнгри",
    rating: 4,
    deliveryTime: 17
  },
  {
    city: "Нестеров",
    rating: 2,
    deliveryTime: 44
  },
  {
    city: "Нефтегорск",
    rating: 1,
    deliveryTime: 37
  },
  {
    city: "Нефтекамск",
    rating: 2,
    deliveryTime: 21
  },
  {
    city: "Нефтекумск",
    rating: 5,
    deliveryTime: 39
  },
  {
    city: "Нефтеюганск",
    rating: 1,
    deliveryTime: 9
  },
  {
    city: "Нея",
    rating: 5,
    deliveryTime: 11
  },
  {
    city: "Нижневартовск",
    rating: 1,
    deliveryTime: 24
  },
  {
    city: "Нижнекамск",
    rating: 1,
    deliveryTime: 31
  },
  {
    city: "Нижнеудинск",
    rating: 4,
    deliveryTime: 2
  },
  {
    city: "Нижние Серги",
    rating: 1,
    deliveryTime: 42
  },
  {
    city: "Нижний Ломов",
    rating: 4,
    deliveryTime: 42
  },
  {
    city: "Нижний Новгород",
    rating: 1,
    deliveryTime: 17
  },
  {
    city: "Нижний Тагил",
    rating: 4,
    deliveryTime: 35
  },
  {
    city: "Нижняя Салда",
    rating: 4,
    deliveryTime: 3
  },
  {
    city: "Нижняя Тура",
    rating: 1,
    deliveryTime: 4
  },
  {
    city: "Николаевск",
    rating: 2,
    deliveryTime: 24
  },
  {
    city: "Николаевск-на-Амуре",
    rating: 4,
    deliveryTime: 31
  },
  {
    city: "Никольск",
    rating: 1,
    deliveryTime: 12
  },
  {
    city: "Никольск",
    rating: 3,
    deliveryTime: 33
  },
  {
    city: "Никольское",
    rating: 5,
    deliveryTime: 9
  },
  {
    city: "Новая Ладога",
    rating: 4,
    deliveryTime: 49
  },
  {
    city: "Новая Ляля",
    rating: 1,
    deliveryTime: 24
  },
  {
    city: "Новоалександровск",
    rating: 2,
    deliveryTime: 40
  },
  {
    city: "Новоалтайск",
    rating: 5,
    deliveryTime: 25
  },
  {
    city: "Новоаннинский",
    rating: 4,
    deliveryTime: 38
  },
  {
    city: "Нововоронеж",
    rating: 3,
    deliveryTime: 2
  },
  {
    city: "Новодвинск",
    rating: 5,
    deliveryTime: 41
  },
  {
    city: "Новозыбков",
    rating: 5,
    deliveryTime: 5
  },
  {
    city: "Новокубанск",
    rating: 3,
    deliveryTime: 2
  },
  {
    city: "Новокузнецк",
    rating: 1,
    deliveryTime: 23
  },
  {
    city: "Новокуйбышевск",
    rating: 4,
    deliveryTime: 24
  },
  {
    city: "Новомичуринск",
    rating: 5,
    deliveryTime: 32
  },
  {
    city: "Новомосковск",
    rating: 4,
    deliveryTime: 44
  },
  {
    city: "Новопавловск",
    rating: 1,
    deliveryTime: 16
  },
  {
    city: "Новоржев",
    rating: 2,
    deliveryTime: 12
  },
  {
    city: "Новороссийск",
    rating: 2,
    deliveryTime: 8
  },
  {
    city: "Новосибирск",
    rating: 4,
    deliveryTime: 2
  },
  {
    city: "Новосиль",
    rating: 4,
    deliveryTime: 23
  },
  {
    city: "Новосокольники",
    rating: 4,
    deliveryTime: 11
  },
  {
    city: "Новотроицк",
    rating: 4,
    deliveryTime: 4
  },
  {
    city: "Новоузенск",
    rating: 1,
    deliveryTime: 19
  },
  {
    city: "Новоульяновск",
    rating: 5,
    deliveryTime: 11
  },
  {
    city: "Новоуральск",
    rating: 2,
    deliveryTime: 26
  },
  {
    city: "Новохопёрск",
    rating: 4,
    deliveryTime: 34
  },
  {
    city: "Новочебоксарск",
    rating: 5,
    deliveryTime: 38
  },
  {
    city: "Новочеркасск",
    rating: 1,
    deliveryTime: 31
  },
  {
    city: "Новошахтинск",
    rating: 2,
    deliveryTime: 22
  },
  {
    city: "Новый Оскол",
    rating: 1,
    deliveryTime: 40
  },
  {
    city: "Новый Уренгой",
    rating: 3,
    deliveryTime: 27
  },
  {
    city: "Ногинск",
    rating: 3,
    deliveryTime: 43
  },
  {
    city: "Нолинск",
    rating: 1,
    deliveryTime: 10
  },
  {
    city: "Норильск",
    rating: 2,
    deliveryTime: 19
  },
  {
    city: "Ноябрьск",
    rating: 1,
    deliveryTime: 7
  },
  {
    city: "Нурлат",
    rating: 2,
    deliveryTime: 16
  },
  {
    city: "Нытва",
    rating: 5,
    deliveryTime: 6
  },
  {
    city: "Нюрба",
    rating: 3,
    deliveryTime: 4
  },
  {
    city: "Нягань",
    rating: 1,
    deliveryTime: 29
  },
  {
    city: "Нязепетровск",
    rating: 1,
    deliveryTime: 14
  },
  {
    city: "Няндома",
    rating: 2,
    deliveryTime: 42
  },
  {
    city: "Облучье",
    rating: 2,
    deliveryTime: 46
  },
  {
    city: "Обнинск",
    rating: 4,
    deliveryTime: 44
  },
  {
    city: "Обоянь",
    rating: 3,
    deliveryTime: 20
  },
  {
    city: "Обь",
    rating: 2,
    deliveryTime: 43
  },
  {
    city: "Одинцово",
    rating: 2,
    deliveryTime: 42
  },
  {
    city: "Озёрск",
    rating: 2,
    deliveryTime: 30
  },
  {
    city: "Озёрск",
    rating: 2,
    deliveryTime: 1
  },
  {
    city: "Озёры",
    rating: 5,
    deliveryTime: 12
  },
  {
    city: "Октябрьск",
    rating: 2,
    deliveryTime: 10
  },
  {
    city: "Октябрьский",
    rating: 3,
    deliveryTime: 29
  },
  {
    city: "Окуловка",
    rating: 2,
    deliveryTime: 33
  },
  {
    city: "Олёкминск",
    rating: 5,
    deliveryTime: 41
  },
  {
    city: "Оленегорск",
    rating: 3,
    deliveryTime: 14
  },
  {
    city: "Олонец",
    rating: 1,
    deliveryTime: 10
  },
  {
    city: "Омск",
    rating: 3,
    deliveryTime: 46
  },
  {
    city: "Омутнинск",
    rating: 4,
    deliveryTime: 19
  },
  {
    city: "Онега",
    rating: 5,
    deliveryTime: 7
  },
  {
    city: "Опочка",
    rating: 5,
    deliveryTime: 40
  },
  {
    city: "Орёл",
    rating: 2,
    deliveryTime: 16
  },
  {
    city: "Оренбург",
    rating: 4,
    deliveryTime: 14
  },
  {
    city: "Орехово-Зуево",
    rating: 4,
    deliveryTime: 42
  },
  {
    city: "Орлов",
    rating: 3,
    deliveryTime: 28
  },
  {
    city: "Орск",
    rating: 3,
    deliveryTime: 21
  },
  {
    city: "Оса",
    rating: 3,
    deliveryTime: 30
  },
  {
    city: "Осинники",
    rating: 1,
    deliveryTime: 39
  },
  {
    city: "Осташков",
    rating: 2,
    deliveryTime: 2
  },
  {
    city: "Остров",
    rating: 5,
    deliveryTime: 37
  },
  {
    city: "Островной",
    rating: 3,
    deliveryTime: 41
  },
  {
    city: "Острогожск",
    rating: 2,
    deliveryTime: 44
  },
  {
    city: "Отрадное",
    rating: 2,
    deliveryTime: 13
  },
  {
    city: "Отрадный",
    rating: 1,
    deliveryTime: 5
  },
  {
    city: "Оха",
    rating: 3,
    deliveryTime: 25
  },
  {
    city: "Оханск",
    rating: 5,
    deliveryTime: 19
  },
  {
    city: "Очёр",
    rating: 1,
    deliveryTime: 26
  },
  {
    city: "Павлово",
    rating: 5,
    deliveryTime: 34
  },
  {
    city: "Павловск",
    rating: 5,
    deliveryTime: 33
  },
  {
    city: "Павловский Посад",
    rating: 2,
    deliveryTime: 24
  },
  {
    city: "Палласовка",
    rating: 5,
    deliveryTime: 43
  },
  {
    city: "Партизанск",
    rating: 2,
    deliveryTime: 6
  },
  {
    city: "Певек",
    rating: 5,
    deliveryTime: 44
  },
  {
    city: "Пенза",
    rating: 4,
    deliveryTime: 30
  },
  {
    city: "Первомайск",
    rating: 4,
    deliveryTime: 9
  },
  {
    city: "Первоуральск",
    rating: 2,
    deliveryTime: 35
  },
  {
    city: "Перевоз",
    rating: 5,
    deliveryTime: 27
  },
  {
    city: "Пересвет",
    rating: 2,
    deliveryTime: 42
  },
  {
    city: "Переславль-Залесский",
    rating: 5,
    deliveryTime: 20
  },
  {
    city: "Пермь",
    rating: 4,
    deliveryTime: 42
  },
  {
    city: "Пестово",
    rating: 2,
    deliveryTime: 34
  },
  {
    city: "Петров Вал",
    rating: 4,
    deliveryTime: 21
  },
  {
    city: "Петровск",
    rating: 4,
    deliveryTime: 38
  },
  {
    city: "Петровск-Забайкальский",
    rating: 1,
    deliveryTime: 24
  },
  {
    city: "Петрозаводск",
    rating: 5,
    deliveryTime: 28
  },
  {
    city: "Петропавловск-Камчатский",
    rating: 1,
    deliveryTime: 31
  },
  {
    city: "Петухово",
    rating: 4,
    deliveryTime: 12
  },
  {
    city: "Петушки",
    rating: 2,
    deliveryTime: 37
  },
  {
    city: "Печора",
    rating: 5,
    deliveryTime: 20
  },
  {
    city: "Печоры",
    rating: 5,
    deliveryTime: 7
  },
  {
    city: "Пикалёво",
    rating: 4,
    deliveryTime: 9
  },
  {
    city: "Пионерский",
    rating: 2,
    deliveryTime: 2
  },
  {
    city: "Питкяранта",
    rating: 3,
    deliveryTime: 22
  },
  {
    city: "Плавск",
    rating: 1,
    deliveryTime: 16
  },
  {
    city: "Пласт",
    rating: 2,
    deliveryTime: 37
  },
  {
    city: "Плёс",
    rating: 1,
    deliveryTime: 18
  },
  {
    city: "Поворино",
    rating: 2,
    deliveryTime: 48
  },
  {
    city: "Подольск",
    rating: 1,
    deliveryTime: 12
  },
  {
    city: "Подпорожье",
    rating: 4,
    deliveryTime: 41
  },
  {
    city: "Покачи",
    rating: 4,
    deliveryTime: 27
  },
  {
    city: "Покров",
    rating: 1,
    deliveryTime: 6
  },
  {
    city: "Покровск",
    rating: 5,
    deliveryTime: 24
  },
  {
    city: "Полевской",
    rating: 2,
    deliveryTime: 23
  },
  {
    city: "Полесск",
    rating: 4,
    deliveryTime: 38
  },
  {
    city: "Полысаево",
    rating: 4,
    deliveryTime: 33
  },
  {
    city: "Полярные Зори",
    rating: 5,
    deliveryTime: 30
  },
  {
    city: "Полярный",
    rating: 2,
    deliveryTime: 27
  },
  {
    city: "Поронайск",
    rating: 5,
    deliveryTime: 32
  },
  {
    city: "Порхов",
    rating: 5,
    deliveryTime: 26
  },
  {
    city: "Похвистнево",
    rating: 1,
    deliveryTime: 12
  },
  {
    city: "Почеп",
    rating: 3,
    deliveryTime: 18
  },
  {
    city: "Починок",
    rating: 5,
    deliveryTime: 44
  },
  {
    city: "Пошехонье",
    rating: 1,
    deliveryTime: 38
  },
  {
    city: "Правдинск",
    rating: 3,
    deliveryTime: 30
  },
  {
    city: "Приволжск",
    rating: 1,
    deliveryTime: 27
  },
  {
    city: "Приморск",
    rating: 3,
    deliveryTime: 10
  },
  {
    city: "Приморск",
    rating: 1,
    deliveryTime: 30
  },
  {
    city: "Приморско-Ахтарск",
    rating: 5,
    deliveryTime: 12
  },
  {
    city: "Приозерск",
    rating: 3,
    deliveryTime: 26
  },
  {
    city: "Прокопьевск",
    rating: 3,
    deliveryTime: 18
  },
  {
    city: "Пролетарск",
    rating: 4,
    deliveryTime: 12
  },
  {
    city: "Протвино",
    rating: 5,
    deliveryTime: 25
  },
  {
    city: "Прохладный",
    rating: 1,
    deliveryTime: 49
  },
  {
    city: "Псков",
    rating: 5,
    deliveryTime: 34
  },
  {
    city: "Пугачёв",
    rating: 1,
    deliveryTime: 18
  },
  {
    city: "Пудож",
    rating: 1,
    deliveryTime: 32
  },
  {
    city: "Пустошка",
    rating: 2,
    deliveryTime: 44
  },
  {
    city: "Пучеж",
    rating: 4,
    deliveryTime: 4
  },
  {
    city: "Пушкино",
    rating: 3,
    deliveryTime: 13
  },
  {
    city: "Пущино",
    rating: 5,
    deliveryTime: 36
  },
  {
    city: "Пыталово",
    rating: 2,
    deliveryTime: 7
  },
  {
    city: "Пыть-Ях",
    rating: 1,
    deliveryTime: 5
  },
  {
    city: "Пятигорск",
    rating: 2,
    deliveryTime: 40
  },
  {
    city: "Радужный",
    rating: 4,
    deliveryTime: 39
  },
  {
    city: "Радужный",
    rating: 2,
    deliveryTime: 33
  },
  {
    city: "Райчихинск",
    rating: 1,
    deliveryTime: 42
  },
  {
    city: "Раменское",
    rating: 2,
    deliveryTime: 40
  },
  {
    city: "Рассказово",
    rating: 5,
    deliveryTime: 28
  },
  {
    city: "Ревда",
    rating: 2,
    deliveryTime: 38
  },
  {
    city: "Реж",
    rating: 3,
    deliveryTime: 11
  },
  {
    city: "Реутов",
    rating: 5,
    deliveryTime: 13
  },
  {
    city: "Ржев",
    rating: 3,
    deliveryTime: 50
  },
  {
    city: "Родники",
    rating: 5,
    deliveryTime: 32
  },
  {
    city: "Рославль",
    rating: 4,
    deliveryTime: 3
  },
  {
    city: "Россошь",
    rating: 4,
    deliveryTime: 41
  },
  {
    city: "Ростов-на-Дону",
    rating: 1,
    deliveryTime: 29
  },
  {
    city: "Ростов",
    rating: 2,
    deliveryTime: 42
  },
  {
    city: "Рошаль",
    rating: 2,
    deliveryTime: 41
  },
  {
    city: "Ртищево",
    rating: 5,
    deliveryTime: 45
  },
  {
    city: "Рубцовск",
    rating: 4,
    deliveryTime: 36
  },
  {
    city: "Рудня",
    rating: 1,
    deliveryTime: 39
  },
  {
    city: "Руза",
    rating: 4,
    deliveryTime: 18
  },
  {
    city: "Рузаевка",
    rating: 2,
    deliveryTime: 32
  },
  {
    city: "Рыбинск",
    rating: 5,
    deliveryTime: 46
  },
  {
    city: "Рыбное",
    rating: 5,
    deliveryTime: 31
  },
  {
    city: "Рыльск",
    rating: 1,
    deliveryTime: 47
  },
  {
    city: "Ряжск",
    rating: 5,
    deliveryTime: 49
  },
  {
    city: "Рязань",
    rating: 2,
    deliveryTime: 30
  },
  {
    city: "Саки",
    rating: 5,
    deliveryTime: 44
  },
  {
    city: "Оспаривается",
    rating: 4,
    deliveryTime: 6
  },
  {
    city: "Салават",
    rating: 2,
    deliveryTime: 44
  },
  {
    city: "Салаир",
    rating: 3,
    deliveryTime: 38
  },
  {
    city: "Салехард",
    rating: 2,
    deliveryTime: 1
  },
  {
    city: "Сальск",
    rating: 3,
    deliveryTime: 7
  },
  {
    city: "Самара",
    rating: 4,
    deliveryTime: 21
  },
  {
    city: "Санкт-Петербург",
    rating: 5,
    deliveryTime: 43
  },
  {
    city: "Саранск",
    rating: 4,
    deliveryTime: 32
  },
  {
    city: "Сарапул",
    rating: 2,
    deliveryTime: 22
  },
  {
    city: "Саратов",
    rating: 5,
    deliveryTime: 19
  },
  {
    city: "Саров",
    rating: 1,
    deliveryTime: 7
  },
  {
    city: "Сасово",
    rating: 1,
    deliveryTime: 6
  },
  {
    city: "Сатка",
    rating: 5,
    deliveryTime: 18
  },
  {
    city: "Сафоново",
    rating: 4,
    deliveryTime: 43
  },
  {
    city: "Саяногорск",
    rating: 3,
    deliveryTime: 22
  },
  {
    city: "Саянск",
    rating: 2,
    deliveryTime: 3
  },
  {
    city: "Светлогорск",
    rating: 2,
    deliveryTime: 20
  },
  {
    city: "Светлоград",
    rating: 5,
    deliveryTime: 41
  },
  {
    city: "Светлый",
    rating: 1,
    deliveryTime: 7
  },
  {
    city: "Светогорск",
    rating: 5,
    deliveryTime: 26
  },
  {
    city: "Свирск",
    rating: 4,
    deliveryTime: 16
  },
  {
    city: "Свободный",
    rating: 5,
    deliveryTime: 5
  },
  {
    city: "Себеж",
    rating: 4,
    deliveryTime: 48
  },
  {
    city: "Севастополь",
    rating: 4,
    deliveryTime: 47
  },
  {
    city: "Оспаривается",
    rating: 5,
    deliveryTime: 31
  },
  {
    city: "Северо-Курильск",
    rating: 5,
    deliveryTime: 14
  },
  {
    city: "Северобайкальск",
    rating: 5,
    deliveryTime: 49
  },
  {
    city: "Северодвинск",
    rating: 2,
    deliveryTime: 20
  },
  {
    city: "Североморск",
    rating: 5,
    deliveryTime: 19
  },
  {
    city: "Североуральск",
    rating: 4,
    deliveryTime: 4
  },
  {
    city: "Северск",
    rating: 1,
    deliveryTime: 5
  },
  {
    city: "Севск",
    rating: 3,
    deliveryTime: 47
  },
  {
    city: "Сегежа",
    rating: 1,
    deliveryTime: 48
  },
  {
    city: "Сельцо",
    rating: 3,
    deliveryTime: 48
  },
  {
    city: "Семёнов",
    rating: 2,
    deliveryTime: 29
  },
  {
    city: "Семикаракорск",
    rating: 2,
    deliveryTime: 25
  },
  {
    city: "Семилуки",
    rating: 2,
    deliveryTime: 15
  },
  {
    city: "Сенгилей",
    rating: 5,
    deliveryTime: 33
  },
  {
    city: "Серафимович",
    rating: 5,
    deliveryTime: 2
  },
  {
    city: "Сергач",
    rating: 1,
    deliveryTime: 44
  },
  {
    city: "Сергиев Посад",
    rating: 4,
    deliveryTime: 17
  },
  {
    city: "Сердобск",
    rating: 3,
    deliveryTime: 27
  },
  {
    city: "Серов",
    rating: 1,
    deliveryTime: 1
  },
  {
    city: "Серпухов",
    rating: 4,
    deliveryTime: 8
  },
  {
    city: "Сертолово",
    rating: 3,
    deliveryTime: 20
  },
  {
    city: "Сибай",
    rating: 5,
    deliveryTime: 12
  },
  {
    city: "Сим",
    rating: 3,
    deliveryTime: 33
  },
  {
    city: "Симферополь",
    rating: 4,
    deliveryTime: 49
  },
  {
    city: "Оспаривается",
    rating: 4,
    deliveryTime: 3
  },
  {
    city: "Сковородино",
    rating: 4,
    deliveryTime: 41
  },
  {
    city: "Скопин",
    rating: 5,
    deliveryTime: 14
  },
  {
    city: "Славгород",
    rating: 3,
    deliveryTime: 47
  },
  {
    city: "Славск",
    rating: 2,
    deliveryTime: 16
  },
  {
    city: "Славянск-на-Кубани",
    rating: 5,
    deliveryTime: 22
  },
  {
    city: "Сланцы",
    rating: 2,
    deliveryTime: 46
  },
  {
    city: "Слободской",
    rating: 3,
    deliveryTime: 5
  },
  {
    city: "Слюдянка",
    rating: 3,
    deliveryTime: 50
  },
  {
    city: "Смоленск",
    rating: 1,
    deliveryTime: 28
  },
  {
    city: "Снежинск",
    rating: 4,
    deliveryTime: 46
  },
  {
    city: "Снежногорск",
    rating: 4,
    deliveryTime: 44
  },
  {
    city: "Собинка",
    rating: 5,
    deliveryTime: 41
  },
  {
    city: "Советск",
    rating: 4,
    deliveryTime: 4
  },
  {
    city: "Советск",
    rating: 4,
    deliveryTime: 25
  },
  {
    city: "Советск",
    rating: 5,
    deliveryTime: 43
  },
  {
    city: "Советская Гавань",
    rating: 3,
    deliveryTime: 19
  },
  {
    city: "Советский",
    rating: 2,
    deliveryTime: 39
  },
  {
    city: "Сокол",
    rating: 5,
    deliveryTime: 31
  },
  {
    city: "Солигалич",
    rating: 1,
    deliveryTime: 40
  },
  {
    city: "Соликамск",
    rating: 1,
    deliveryTime: 2
  },
  {
    city: "Солнечногорск",
    rating: 5,
    deliveryTime: 29
  },
  {
    city: "Соль-Илецк",
    rating: 2,
    deliveryTime: 39
  },
  {
    city: "Сольвычегодск",
    rating: 3,
    deliveryTime: 7
  },
  {
    city: "Сольцы",
    rating: 2,
    deliveryTime: 26
  },
  {
    city: "Сорочинск",
    rating: 1,
    deliveryTime: 48
  },
  {
    city: "Сорск",
    rating: 5,
    deliveryTime: 42
  },
  {
    city: "Сортавала",
    rating: 2,
    deliveryTime: 23
  },
  {
    city: "Сосенский",
    rating: 5,
    deliveryTime: 18
  },
  {
    city: "Сосновка",
    rating: 1,
    deliveryTime: 41
  },
  {
    city: "Сосновоборск",
    rating: 5,
    deliveryTime: 2
  },
  {
    city: "Сосновый Бор",
    rating: 1,
    deliveryTime: 22
  },
  {
    city: "Сосногорск",
    rating: 1,
    deliveryTime: 37
  },
  {
    city: "Сочи",
    rating: 1,
    deliveryTime: 28
  },
  {
    city: "Спас-Деменск",
    rating: 4,
    deliveryTime: 35
  },
  {
    city: "Спас-Клепики",
    rating: 2,
    deliveryTime: 45
  },
  {
    city: "Спасск",
    rating: 2,
    deliveryTime: 49
  },
  {
    city: "Спасск-Дальний",
    rating: 2,
    deliveryTime: 26
  },
  {
    city: "Спасск-Рязанский",
    rating: 1,
    deliveryTime: 47
  },
  {
    city: "Среднеколымск",
    rating: 5,
    deliveryTime: 3
  },
  {
    city: "Среднеуральск",
    rating: 2,
    deliveryTime: 26
  },
  {
    city: "Сретенск",
    rating: 3,
    deliveryTime: 22
  },
  {
    city: "Ставрополь",
    rating: 3,
    deliveryTime: 47
  },
  {
    city: "Старая Купавна",
    rating: 2,
    deliveryTime: 8
  },
  {
    city: "Старая Русса",
    rating: 3,
    deliveryTime: 12
  },
  {
    city: "Старица",
    rating: 3,
    deliveryTime: 34
  },
  {
    city: "Стародуб",
    rating: 2,
    deliveryTime: 17
  },
  {
    city: "Старый Крым",
    rating: 2,
    deliveryTime: 50
  },
  {
    city: "Оспаривается",
    rating: 3,
    deliveryTime: 5
  },
  {
    city: "Старый Оскол",
    rating: 3,
    deliveryTime: 41
  },
  {
    city: "Стерлитамак",
    rating: 5,
    deliveryTime: 34
  },
  {
    city: "Стрежевой",
    rating: 2,
    deliveryTime: 44
  },
  {
    city: "Строитель",
    rating: 5,
    deliveryTime: 39
  },
  {
    city: "Струнино",
    rating: 3,
    deliveryTime: 28
  },
  {
    city: "Ступино",
    rating: 5,
    deliveryTime: 8
  },
  {
    city: "Суворов",
    rating: 4,
    deliveryTime: 35
  },
  {
    city: "Судак",
    rating: 1,
    deliveryTime: 41
  },
  {
    city: "Оспаривается",
    rating: 3,
    deliveryTime: 19
  },
  {
    city: "Суджа",
    rating: 1,
    deliveryTime: 35
  },
  {
    city: "Судогда",
    rating: 3,
    deliveryTime: 50
  },
  {
    city: "Суздаль",
    rating: 1,
    deliveryTime: 22
  },
  {
    city: "Сунжа",
    rating: 2,
    deliveryTime: 33
  },
  {
    city: "Суоярви",
    rating: 5,
    deliveryTime: 38
  },
  {
    city: "Сураж",
    rating: 5,
    deliveryTime: 25
  },
  {
    city: "Сургут",
    rating: 4,
    deliveryTime: 19
  },
  {
    city: "Суровикино",
    rating: 3,
    deliveryTime: 48
  },
  {
    city: "Сурск",
    rating: 1,
    deliveryTime: 13
  },
  {
    city: "Сусуман",
    rating: 1,
    deliveryTime: 36
  },
  {
    city: "Сухиничи",
    rating: 3,
    deliveryTime: 3
  },
  {
    city: "Сухой Лог",
    rating: 3,
    deliveryTime: 35
  },
  {
    city: "Сызрань",
    rating: 1,
    deliveryTime: 17
  },
  {
    city: "Сыктывкар",
    rating: 3,
    deliveryTime: 7
  },
  {
    city: "Сысерть",
    rating: 5,
    deliveryTime: 45
  },
  {
    city: "Сычёвка",
    rating: 2,
    deliveryTime: 2
  },
  {
    city: "Сясьстрой",
    rating: 3,
    deliveryTime: 24
  },
  {
    city: "Тавда",
    rating: 1,
    deliveryTime: 17
  },
  {
    city: "Таганрог",
    rating: 5,
    deliveryTime: 41
  },
  {
    city: "Тайга",
    rating: 1,
    deliveryTime: 47
  },
  {
    city: "Тайшет",
    rating: 4,
    deliveryTime: 47
  },
  {
    city: "Талдом",
    rating: 1,
    deliveryTime: 31
  },
  {
    city: "Талица",
    rating: 3,
    deliveryTime: 40
  },
  {
    city: "Тамбов",
    rating: 1,
    deliveryTime: 19
  },
  {
    city: "Тара",
    rating: 5,
    deliveryTime: 20
  },
  {
    city: "Тарко-Сале",
    rating: 5,
    deliveryTime: 37
  },
  {
    city: "Таруса",
    rating: 1,
    deliveryTime: 18
  },
  {
    city: "Татарск",
    rating: 2,
    deliveryTime: 39
  },
  {
    city: "Таштагол",
    rating: 4,
    deliveryTime: 14
  },
  {
    city: "Тверь",
    rating: 2,
    deliveryTime: 1
  },
  {
    city: "Теберда",
    rating: 3,
    deliveryTime: 6
  },
  {
    city: "Тейково",
    rating: 3,
    deliveryTime: 31
  },
  {
    city: "Темников",
    rating: 2,
    deliveryTime: 16
  },
  {
    city: "Темрюк",
    rating: 5,
    deliveryTime: 31
  },
  {
    city: "Терек",
    rating: 5,
    deliveryTime: 28
  },
  {
    city: "Тетюши",
    rating: 1,
    deliveryTime: 8
  },
  {
    city: "Тимашёвск",
    rating: 5,
    deliveryTime: 24
  },
  {
    city: "Тихвин",
    rating: 1,
    deliveryTime: 11
  },
  {
    city: "Тихорецк",
    rating: 2,
    deliveryTime: 5
  },
  {
    city: "Тобольск",
    rating: 4,
    deliveryTime: 32
  },
  {
    city: "Тогучин",
    rating: 5,
    deliveryTime: 20
  },
  {
    city: "Тольятти",
    rating: 5,
    deliveryTime: 10
  },
  {
    city: "Томари",
    rating: 3,
    deliveryTime: 38
  },
  {
    city: "Томмот",
    rating: 4,
    deliveryTime: 27
  },
  {
    city: "Томск",
    rating: 3,
    deliveryTime: 1
  },
  {
    city: "Топки",
    rating: 3,
    deliveryTime: 44
  },
  {
    city: "Торжок",
    rating: 3,
    deliveryTime: 28
  },
  {
    city: "Торопец",
    rating: 1,
    deliveryTime: 16
  },
  {
    city: "Тосно",
    rating: 1,
    deliveryTime: 22
  },
  {
    city: "Тотьма",
    rating: 5,
    deliveryTime: 3
  },
  {
    city: "Трёхгорный",
    rating: 5,
    deliveryTime: 32
  },
  {
    city: "Троицк",
    rating: 1,
    deliveryTime: 19
  },
  {
    city: "Трубчевск",
    rating: 4,
    deliveryTime: 33
  },
  {
    city: "Туапсе",
    rating: 5,
    deliveryTime: 35
  },
  {
    city: "Туймазы",
    rating: 3,
    deliveryTime: 40
  },
  {
    city: "Тула",
    rating: 4,
    deliveryTime: 10
  },
  {
    city: "Тулун",
    rating: 4,
    deliveryTime: 1
  },
  {
    city: "Туран",
    rating: 2,
    deliveryTime: 4
  },
  {
    city: "Туринск",
    rating: 3,
    deliveryTime: 9
  },
  {
    city: "Тутаев",
    rating: 1,
    deliveryTime: 26
  },
  {
    city: "Тында",
    rating: 5,
    deliveryTime: 14
  },
  {
    city: "Тырныауз",
    rating: 1,
    deliveryTime: 46
  },
  {
    city: "Тюкалинск",
    rating: 3,
    deliveryTime: 9
  },
  {
    city: "Тюмень",
    rating: 1,
    deliveryTime: 46
  },
  {
    city: "Уварово",
    rating: 4,
    deliveryTime: 25
  },
  {
    city: "Углегорск",
    rating: 5,
    deliveryTime: 9
  },
  {
    city: "Углич",
    rating: 5,
    deliveryTime: 28
  },
  {
    city: "Удачный",
    rating: 2,
    deliveryTime: 43
  },
  {
    city: "Удомля",
    rating: 1,
    deliveryTime: 34
  },
  {
    city: "Ужур",
    rating: 3,
    deliveryTime: 30
  },
  {
    city: "Узловая",
    rating: 4,
    deliveryTime: 11
  },
  {
    city: "Улан-Удэ",
    rating: 5,
    deliveryTime: 41
  },
  {
    city: "Ульяновск",
    rating: 5,
    deliveryTime: 31
  },
  {
    city: "Унеча",
    rating: 2,
    deliveryTime: 47
  },
  {
    city: "Урай",
    rating: 3,
    deliveryTime: 34
  },
  {
    city: "Урень",
    rating: 4,
    deliveryTime: 25
  },
  {
    city: "Уржум",
    rating: 5,
    deliveryTime: 3
  },
  {
    city: "Урус-Мартан",
    rating: 3,
    deliveryTime: 26
  },
  {
    city: "Урюпинск",
    rating: 5,
    deliveryTime: 22
  },
  {
    city: "Усинск",
    rating: 2,
    deliveryTime: 23
  },
  {
    city: "Усмань",
    rating: 5,
    deliveryTime: 7
  },
  {
    city: "Усолье-Сибирское",
    rating: 4,
    deliveryTime: 29
  },
  {
    city: "Усолье",
    rating: 2,
    deliveryTime: 46
  },
  {
    city: "Уссурийск",
    rating: 4,
    deliveryTime: 32
  },
  {
    city: "Усть-Джегута",
    rating: 3,
    deliveryTime: 21
  },
  {
    city: "Усть-Илимск",
    rating: 4,
    deliveryTime: 48
  },
  {
    city: "Усть-Катав",
    rating: 4,
    deliveryTime: 20
  },
  {
    city: "Усть-Кут",
    rating: 3,
    deliveryTime: 13
  },
  {
    city: "Усть-Лабинск",
    rating: 2,
    deliveryTime: 15
  },
  {
    city: "Устюжна",
    rating: 2,
    deliveryTime: 3
  },
  {
    city: "Уфа",
    rating: 5,
    deliveryTime: 9
  },
  {
    city: "Ухта",
    rating: 4,
    deliveryTime: 44
  },
  {
    city: "Учалы",
    rating: 5,
    deliveryTime: 4
  },
  {
    city: "Уяр",
    rating: 4,
    deliveryTime: 21
  },
  {
    city: "Фатеж",
    rating: 5,
    deliveryTime: 28
  },
  {
    city: "Феодосия",
    rating: 2,
    deliveryTime: 37
  },
  {
    city: "Оспаривается",
    rating: 2,
    deliveryTime: 47
  },
  {
    city: "Фокино",
    rating: 2,
    deliveryTime: 2
  },
  {
    city: "Фокино",
    rating: 2,
    deliveryTime: 19
  },
  {
    city: "Фролово",
    rating: 1,
    deliveryTime: 41
  },
  {
    city: "Фрязино",
    rating: 1,
    deliveryTime: 30
  },
  {
    city: "Фурманов",
    rating: 4,
    deliveryTime: 19
  },
  {
    city: "Хабаровск",
    rating: 3,
    deliveryTime: 41
  },
  {
    city: "Хадыженск",
    rating: 3,
    deliveryTime: 38
  },
  {
    city: "Ханты-Мансийск",
    rating: 1,
    deliveryTime: 37
  },
  {
    city: "Харабали",
    rating: 3,
    deliveryTime: 2
  },
  {
    city: "Харовск",
    rating: 2,
    deliveryTime: 8
  },
  {
    city: "Хасавюрт",
    rating: 5,
    deliveryTime: 7
  },
  {
    city: "Хвалынск",
    rating: 2,
    deliveryTime: 7
  },
  {
    city: "Хилок",
    rating: 3,
    deliveryTime: 19
  },
  {
    city: "Химки",
    rating: 4,
    deliveryTime: 37
  },
  {
    city: "Холм",
    rating: 4,
    deliveryTime: 43
  },
  {
    city: "Холмск",
    rating: 1,
    deliveryTime: 40
  },
  {
    city: "Хотьково",
    rating: 3,
    deliveryTime: 13
  },
  {
    city: "Цивильск",
    rating: 1,
    deliveryTime: 1
  },
  {
    city: "Цимлянск",
    rating: 4,
    deliveryTime: 42
  },
  {
    city: "Циолковский",
    rating: 3,
    deliveryTime: 20
  },
  {
    city: "Чадан",
    rating: 5,
    deliveryTime: 47
  },
  {
    city: "Чайковский",
    rating: 4,
    deliveryTime: 10
  },
  {
    city: "Чапаевск",
    rating: 3,
    deliveryTime: 4
  },
  {
    city: "Чаплыгин",
    rating: 3,
    deliveryTime: 4
  },
  {
    city: "Чебаркуль",
    rating: 3,
    deliveryTime: 34
  },
  {
    city: "Чебоксары",
    rating: 2,
    deliveryTime: 25
  },
  {
    city: "Чегем",
    rating: 5,
    deliveryTime: 33
  },
  {
    city: "Чекалин",
    rating: 4,
    deliveryTime: 39
  },
  {
    city: "Челябинск",
    rating: 5,
    deliveryTime: 39
  },
  {
    city: "Чердынь",
    rating: 5,
    deliveryTime: 23
  },
  {
    city: "Черемхово",
    rating: 5,
    deliveryTime: 28
  },
  {
    city: "Черепаново",
    rating: 4,
    deliveryTime: 20
  },
  {
    city: "Череповец",
    rating: 1,
    deliveryTime: 50
  },
  {
    city: "Черкесск",
    rating: 3,
    deliveryTime: 11
  },
  {
    city: "Чёрмоз",
    rating: 5,
    deliveryTime: 41
  },
  {
    city: "Черноголовка",
    rating: 2,
    deliveryTime: 25
  },
  {
    city: "Черногорск",
    rating: 3,
    deliveryTime: 19
  },
  {
    city: "Чернушка",
    rating: 3,
    deliveryTime: 22
  },
  {
    city: "Черняховск",
    rating: 5,
    deliveryTime: 3
  },
  {
    city: "Чехов",
    rating: 5,
    deliveryTime: 49
  },
  {
    city: "Чистополь",
    rating: 4,
    deliveryTime: 50
  },
  {
    city: "Чита",
    rating: 3,
    deliveryTime: 49
  },
  {
    city: "Чкаловск",
    rating: 1,
    deliveryTime: 3
  },
  {
    city: "Чудово",
    rating: 5,
    deliveryTime: 23
  },
  {
    city: "Чулым",
    rating: 5,
    deliveryTime: 6
  },
  {
    city: "Чусовой",
    rating: 5,
    deliveryTime: 38
  },
  {
    city: "Чухлома",
    rating: 3,
    deliveryTime: 6
  },
  {
    city: "Шагонар",
    rating: 5,
    deliveryTime: 2
  },
  {
    city: "Шадринск",
    rating: 4,
    deliveryTime: 37
  },
  {
    city: "Шали",
    rating: 3,
    deliveryTime: 9
  },
  {
    city: "Шарыпово",
    rating: 5,
    deliveryTime: 42
  },
  {
    city: "Шарья",
    rating: 2,
    deliveryTime: 11
  },
  {
    city: "Шатура",
    rating: 1,
    deliveryTime: 18
  },
  {
    city: "Шахты",
    rating: 2,
    deliveryTime: 34
  },
  {
    city: "Шахунья",
    rating: 3,
    deliveryTime: 26
  },
  {
    city: "Шацк",
    rating: 3,
    deliveryTime: 32
  },
  {
    city: "Шебекино",
    rating: 4,
    deliveryTime: 33
  },
  {
    city: "Шелехов",
    rating: 2,
    deliveryTime: 47
  },
  {
    city: "Шенкурск",
    rating: 3,
    deliveryTime: 13
  },
  {
    city: "Шилка",
    rating: 5,
    deliveryTime: 9
  },
  {
    city: "Шимановск",
    rating: 2,
    deliveryTime: 49
  },
  {
    city: "Шиханы",
    rating: 2,
    deliveryTime: 36
  },
  {
    city: "Шлиссельбург",
    rating: 3,
    deliveryTime: 36
  },
  {
    city: "Шумерля",
    rating: 4,
    deliveryTime: 13
  },
  {
    city: "Шумиха",
    rating: 5,
    deliveryTime: 35
  },
  {
    city: "Шуя",
    rating: 4,
    deliveryTime: 25
  },
  {
    city: "Щёкино",
    rating: 4,
    deliveryTime: 8
  },
  {
    city: "Щёлкино",
    rating: 5,
    deliveryTime: 23
  },
  {
    city: "Оспаривается",
    rating: 2,
    deliveryTime: 35
  },
  {
    city: "Щёлково",
    rating: 5,
    deliveryTime: 19
  },
  {
    city: "Щигры",
    rating: 1,
    deliveryTime: 26
  },
  {
    city: "Щучье",
    rating: 1,
    deliveryTime: 12
  },
  {
    city: "Электрогорск",
    rating: 2,
    deliveryTime: 33
  },
  {
    city: "Электросталь",
    rating: 4,
    deliveryTime: 3
  },
  {
    city: "Электроугли",
    rating: 3,
    deliveryTime: 44
  },
  {
    city: "Элиста",
    rating: 3,
    deliveryTime: 40
  },
  {
    city: "Энгельс",
    rating: 5,
    deliveryTime: 43
  },
  {
    city: "Эртиль",
    rating: 2,
    deliveryTime: 39
  },
  {
    city: "Югорск",
    rating: 5,
    deliveryTime: 3
  },
  {
    city: "Южа",
    rating: 5,
    deliveryTime: 20
  },
  {
    city: "Южно-Сахалинск",
    rating: 4,
    deliveryTime: 17
  },
  {
    city: "Южно-Сухокумск",
    rating: 4,
    deliveryTime: 28
  },
  {
    city: "Южноуральск",
    rating: 4,
    deliveryTime: 49
  },
  {
    city: "Юрга",
    rating: 5,
    deliveryTime: 28
  },
  {
    city: "Юрьев-Польский",
    rating: 4,
    deliveryTime: 25
  },
  {
    city: "Юрьевец",
    rating: 4,
    deliveryTime: 11
  },
  {
    city: "Юрюзань",
    rating: 1,
    deliveryTime: 15
  },
  {
    city: "Юхнов",
    rating: 4,
    deliveryTime: 45
  },
  {
    city: "Ядрин",
    rating: 5,
    deliveryTime: 25
  },
  {
    city: "Якутск",
    rating: 4,
    deliveryTime: 25
  },
  {
    city: "Ялта",
    rating: 4,
    deliveryTime: 36
  },
  {
    city: "Оспаривается",
    rating: 2,
    deliveryTime: 7
  },
  {
    city: "Ялуторовск",
    rating: 5,
    deliveryTime: 5
  },
  {
    city: "Янаул",
    rating: 2,
    deliveryTime: 31
  },
  {
    city: "Яранск",
    rating: 5,
    deliveryTime: 7
  },
  {
    city: "Яровое",
    rating: 2,
    deliveryTime: 28
  },
  {
    city: "Ярославль",
    rating: 4,
    deliveryTime: 33
  },
  {
    city: "Ярцево",
    rating: 1,
    deliveryTime: 41
  },
  {
    city: "Ясногорск",
    rating: 3,
    deliveryTime: 8
  },
  {
    city: "Ясный",
    rating: 1,
    deliveryTime: 45
  },
  {
    city: "Яхрома",
    rating: 1,
    deliveryTime: 36
  }
]

export default cities;