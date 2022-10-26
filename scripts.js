function expand(event){
    const articleAction = document.querySelector('article');
    const exploreAction = document.querySelector('.explore-more-details');

    articleAction.classList.toggle('active');
    exploreAction.classList.toggle('active');
}