const btn = document.querySelector('.btn');
const navigation = document.querySelector('header');


btn.addEventListener('click', function () {
  // console.log('body');
  navigation.classList.toggle('active');
})

// console.log('test');