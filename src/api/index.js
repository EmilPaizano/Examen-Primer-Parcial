
export const fetchAlbums = async () =>{
    const endpoint = `https://jsonplaceholder.typicode.com/photos`;
    const response = await fetch(endpoint);
    const data =  await response.json();
    const resiente = []
    const resiente2 = []
    const resiente3 = []
    
    const needData = [];

    const idreciente = data[data.length-1].albumId;
    const idreciente2 = data[data.length-1].albumId-1;
    const idreciente3 = data[data.length-1].albumId-2;
    
    for (var i=0; i<data.length; i++){
        if(data[i].albumId == data[data.length-1].albumId){
            resiente.push(data[i]);
        }
    }
    
    for (var i=0; i<data.length; i++){
        if(data[i].albumId == idreciente2){
            resiente2.push(data[i]);
        }
    }

    for (var i=0; i<data.length; i++){
        if(data[i].albumId == idreciente3){
            resiente3.push(data[i]);
        }
    }
   
    needData.push(...resiente);
    needData.push(...resiente2);
    needData.push(...resiente3);
    //console.log(reorganizado[0][0]);
    

    console.log(needData[10].url);

    return ([...needData]);
};



export default fetchAlbums;