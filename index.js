module.exports =  function (style,breakPoints,base){
    let Measurements,point;
    let baseMeasurements,basePoint;
    let endResult = `{`;

    Measurements = breakPoints.replace(/[0-9]/g, '');
    point = breakPoints.replace(Measurements,'');
    baseMeasurements = base.replace(/[0-9]/g, '');
    basePoint = base.replace(baseMeasurements,'');

    for (element in style){
        
        let valueMesurement = style[element].replace(/[0-9]/g, '')
        let value = style[element].replace(valueMesurement, '')
        let convertedValue = (Number(value)/Number(basePoint)) * Number(point)

        endResult = endResult+`${element}: ${convertedValue+valueMesurement};`
    }
    endResult = endResult + `}`;
    return endResult;
}
