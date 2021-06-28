const dots = document.querySelectorAll('.showcase__dot');
dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    dot.style.color = '$color-tertiary-light';
  });
});

showcaseData = [
  {
    suffix: 5,
    carName: 'bmw',
    altName: 'BMW',
    logoURL: 'img/showcase/BMW.png',
    imageURL: 'img/showcase/showcase-5-nobg.png',
    price: '$28,500',
  },
  {
    suffix: 6,
    carName: 'buick',
    altName: 'BUICK',
    logoURL: 'img/showcase/buick.png',
    imageURL: 'img/showcase/showcase-6-nobg.png',
    price: '$32,700',
  },
  {
    suffix: 8,
    carName: 'cadillac',
    altName: 'CADILLAC',
    logoURL: 'img/showcase/cadillac.png',
    imageURL: 'img/showcase/showcase-8-nobg.png',
    price: '$29,200',
  },
  {
    suffix: 4,
    carName: 'rollsroyce',
    altName: 'ROLLS ROYCE',
    logoURL: 'img/showcase/rollsroyce.png',
    imageURL: 'img/showcase/showcase-4-nobg.png',
    price: '$19,500',
  },
  {
    suffix: 1,
    carName: 'fiat',
    altName: 'FIAT',
    logoURL: 'img/showcase/fiat.svg',
    imageURL: 'img/showcase/showcase-1-nobg.png',
    price: '$17,400',
  },
];

const showcase = document.querySelector('#showcase');

showcase.innerHTML = showcaseData.slice(0, 4).map(
  (car) => `
  <div class="showcase__card-container">
  <!-- SHOWCASE FRONT-->
  <!-- SHOWCASE FRONT ${car.altName} -->
  <div class="showcase__card">
    <img
      src=${car.logoURL}
      alt=${car.altName}
      class="showcase__logo"
    />
    <div class="showcase__content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
      odio assumenda, sint temporibus pariatur placeat eaque sit modi
      facere ipsam.
    </div>
    <div class="showcase__image">
      <img
        src=${car.imageURL}
        alt="Showcase Image"
        class="showcase__image showcase__image-${car.suffix}"
      />
    </div>
  </div>
  <!-- SHOWCASE BACK ${car.altName}-->
  <div class="showcase__card showcase__card--back">
    <div class="showcase__back-content">
      <div>${car.price}</div>
      <a href="" class="btn btn--medium btn--tertiary">Buy now</a>
    </div>
  </div>
</div>`
);
