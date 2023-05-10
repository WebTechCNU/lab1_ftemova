const form = document.getElementById('text');
const output = document.getElementById("result");

function countElements() {

  const strItems = form.value.split(/\s/);
  const result = {};

  for (let item of strItems) {
    console.log(item)
    if (item in result) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }
  
  output.value = ""
  for (let key in result) {
    output.value += `${key} : ${result[key]}; `
  }

}

document.getElementById("submit-but").addEventListener("click", countElements)