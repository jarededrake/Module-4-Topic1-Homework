
function area() {
    return this.x * this.y;
}
function vol() {
    return this.x * this.y * this.z;
}

function main(area, vol, input) {
    objectArray = JSON.parse(input);
    let outputArray = []
    for(coordinates of objectArray) {
        outputArray.push({
            area: area.call(coordinates),
            volume: vol.call(coordinates)
        });
    }
    console.log(outputArray);
}

main(area, vol, '[{"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"}]') 

    
