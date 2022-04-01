console.log("Let's get this party started!");

async function getData(search) {
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', { params: 
    {api_key: 'NXUw3cq8ctWgrRcocDkpTnCBbxEGXmBR',
     q: search}});

    const gifList = response.data.data;
    console.log("test");
    console.log("Response: ", response.data);

    const listLen = gifList.length;

    console.log(listLen);

    const gifNum = getRandom(listLen);
    console.log(gifNum);

    let count = 0;
    
    for (let gif of gifList) {
        console.log(count)
        if (count === gifNum) {
            console.log("Loop, gif: ", gif);
            console.log("Loop, gif.url: ", gif.url);
            count = 0;
            showGif(gif.url);
            break;
        }
        count = count + 1;
    }
}

const getRandom = (qty) => {
    return Math.floor(Math.random() * qty);
}

function showGif(resGif) {
    const gifLoc = document.getElementById('gif-spot');
    const imgElement = document.createElement('IMG');
    imgElement.src = `${resGif}`;
    // const imgELement = document.createElement('IMG');
    console.log("showGif, imgElement: ", imgElement);
    console.log("showGif, resGif: ", resGif);
    gifLoc.appendChild(imgElement);
}
