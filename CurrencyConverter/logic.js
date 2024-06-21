const dropdown = document.querySelectorAll(".dropdown select");

for(let select of dropdown){
    for(code in countryList){
        let newOption = document.createElement("option");
        crruCode = countryList[code];
        newOption.innerText = crruCode;
        newOption.value = crruCode;
        if(select.name === "from" && crruCode === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && crruCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(e)=>{
        updateFlag(e.target);
    })
}

const updateFlag = (element)=>{

   
    let crruCode = element.value;
    

}