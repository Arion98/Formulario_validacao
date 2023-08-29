const ConverterHora = (horario24) => {
    const [hora, minuto] = horario24.split(":");

    const hora12 = hora % 12  

    var periodo = "AM"

    if(hora > 12){
        periodo = "PM"
    }else if(hora < 12){
        periodo = "AM"
    }
    
    console.log(`${hora12}:${minuto} ${periodo}`);  
    
}


ConverterHora("11:15")

ConverterHora("09:15")

ConverterHora("23:15")