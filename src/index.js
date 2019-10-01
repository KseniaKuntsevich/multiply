module.exports = function multiply(first, second) {
  // your solution

  let firsts = first.split("").map(n => +n).reverse(),
	  seconds = second.split("").map(n => +n).reverse(),
	  multiplied = new Array(firsts.length + seconds.length).fill(0);

  firsts.forEach((x, indexX) => {
    let overWhelme = 0;

    seconds.forEach((y, indexY) => {
        let sum = (x * y + overWhelme + "").split("").map(n => +n);
        multiplied[indexY + indexX] += sum[1] >= 0 ? sum[1] : sum[0];
        overWhelme = sum[1] >= 0 ? sum[0] : 0;
        if(indexY + 1 === seconds.length) multiplied[indexY + indexX + 1] += overWhelme;
    })

  })

  let recounted = multiplied.map((num, index) => {
    if(num < 10) return num;
    let splited = num.toString().split("").map(n => +n ).reverse();
    splited.forEach((num, indexSplited) => { if(indexSplited > 0) multiplied[index + indexSplited] += num; });
    return splited[0]
  })
  
  while(recounted[recounted.length - 1] === 0) recounted.pop();

  recounted = recounted.reverse().join("");

  return recounted;
}
