const button = document.getElementById("btn")
const input_a = document.getElementById("input_a")
const input_b = document.getElementById("input_b")
const result_field = document.getElementById("output")

button.addEventListener("click", largest)

function largest() {
    let a=Number(input_a.value);  //parseFloat
    let b=Number(input_b.value);  //parseFloat
    let result=1;

    for (let i=1; i <= Math.min(a, b); i++)
    {
        if (a%i==0 && b%i==0)
            {result=i};
    
    }

    result_field.innerHTML = result
	
}