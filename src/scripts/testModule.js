// 변수명 앞에 export를 붙여주면 다른 파일에서 import해서 사용할 수 있다.
export let module1 = function() {
  console.log('Module Test Success!');
};

export let module2 = {
  name: 'anzi',
  job: 'designer',
};
