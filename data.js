export const DATA = [
    {
        id: '1',
        img: 'http://almode.ru/uploads/posts/2021-07/1626605245_23-almode_ru-p-vid-na-more-s-terrasi-24.jpg',
        text: 'Awesome text for post 1',
        date: new Date().toJSON(),
        booked: true
    },
    {
        id: '2',
        img: 'https://avatars.mds.yandex.net/get-zen_doc/1210285/pub_5ea568e8e62e151463c44086_5ea569ce50c3275eb74e17bf/scale_1200',
        text: 'Awesome text for post 2',
        date: new Date().toJSON(),
        booked: false
    },
    {
        id: '3',
        img: 'https://bani-nsk.ru/800/600/https/oir.mobi/uploads/posts/2020-02/1582008549_20-p-dom-na-beregu-okeana-26.jpg',
        text: 'Awesome text for post 3',
        date: new Date().toJSON(),
        booked: false
    },
    {
        id: '4',
        img: 'https://designerdreamhomes.ru/wp-content/uploads/Amchit-Residence-15.jpg',
        text: 'Awesome text for post 4',
        date: new Date().toJSON(),
        booked: true
    },
    {
        id: '5',
        img: 'http://almode.ru/uploads/posts/2021-07/1626605245_23-almode_ru-p-vid-na-more-s-terrasi-24.jpg',
        text: 'Awesome text for post 5',
        date: new Date().toJSON(),
        booked: false
    }
];

export const getPost = (id) => {

    return DATA.find(item => item.id === id);

}

export const isFavorite = (id) => {
    return getPost(id).booked
}
