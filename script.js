const removeConsecutiveDuplicates = (arr) => {
  const uniqueValue = arr.filter((item, index) => arr.indexOf(item) === index);
  return uniqueValue;
};

console.log(
  removeConsecutiveDuplicates([
    'a',
    'a',
    'a',
    'a',
    'b',
    'b',
    'b',
    'c',
    'c',
    'c',
  ])
);

const titleCase = (str) => {
  const newString = str.toLowerCase();
  const splitValue = newString.split(' ');
  const result = splitValue.map(
    (item) => item[0].toUpperCase() + item.slice(1)
  );
  return result;
};

console.log(titleCase('javascript is AWESOME'));

function countSubstringOccurrences(string, word) {
  return string.split(word).length - 1;
}

console.log(countSubstringOccurrences('javascript is awesome', 'is'));

const isPowerOfThree = (n) => {
  if (n === 3 * 3 * 3) {
    return true;
  } else return false;
};

console.log(isPowerOfThree(12));

const getUniqueCharacters = (str) => {
  const splitValue = str.split(' ');
  let output = '';
  splitValue.forEach((item) => {
    const splitItem = item.split('');
    const result = splitItem.filter((item, index) => {
      return splitItem.indexOf(item) === index;
    });
    output = output + `${result.join('')}${' '}`;
  });
  return output;
};

console.log(getUniqueCharacters('javascript is cool'));

///////////////////////////////////////////////////

// let position = 0;

// const container = document.getElementById('img-container');
// let images = document.querySelectorAll('.img-container img');
// console.log(images);

// function showImage(index) {
//   images[currentIndex].classList.remove('active');
//   images[index].classList.add('active');
//   currentIndex = index;
// }
