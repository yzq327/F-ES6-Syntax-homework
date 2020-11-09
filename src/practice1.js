  
const parseData = (input) => {
    const [data, column, columNames, output] = [input.data, input.column, [], []];
    column.map(iterator => columNames.push(iterator.name))
    data.map(iterator => {
        let tempData = new Object();
        for (const item in columNames) {
            tempData[columNames[item]] = iterator[item];
        }
        output.push(tempData);
    })
    return output;
}

export { parseData };
