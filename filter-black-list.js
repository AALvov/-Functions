
function filterBlackList(list1, list2) {
  let array = [];
  for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i]) == false) {
      array.push(list1[i]);
    }

  }
  return array;
}



let allList = ['a@mail.ru', 'b@mail.ru', 'c@mail.ru', 'd@mail.ru', 'e@mail.ru'];

let blackList = [];

let whitelist = filterBlackList(allList, blackList);


export default filterBlackList
