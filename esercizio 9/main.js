// Data una lista di valutazioni (1-5 stelle), trova solo le recensioni con più di 4 stelle

const reviews = [5, 3, 4, 1, 2, 5, 3, 2, 4];

const highReviews = reviews.filter(review => review >= 4);
console.log(highReviews);