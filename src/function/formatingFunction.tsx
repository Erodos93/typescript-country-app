export const populationEdit = (populationValue: number) => {
    const populationText=String(populationValue)
    console.log("population edit");
    console.log(populationText);
    
    const lengthString = populationText.length
    const remain = lengthString % 3
    const isHundreds=remain == 0 && lengthString <= 3
    let population = "";

    if (!populationValue) {
        return null
    }
    if(lengthString>=6){
        switch (remain) {
            case 0:
                population = populationText.substring(0, 3) + "," + 
                populationText.substring(3, 6)
                break;
            default:
                population = populationText.substring(0, remain) + "," + 
                populationText.substring(remain, remain + 3) + "," + 
                populationText.substring(remain + 3, remain + 6)
                break;
        }
    }else if(lengthString < 6 && !isHundreds){
        population = populationText.substring(0, remain) + "," + populationText.substring(remain, remain + 3)
    }else if(isHundreds){
        console.log(populationText);
        
        return populationText
    }

    return population
}