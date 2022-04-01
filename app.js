console.log("Let's get this party started!");

$('form').on('submit', async function(e) {
    e.preventDefault();

    let search = $('#input').val();

    const response = await axios.get('http://api.giphy.com/v1/gifs/search', { params: 
    {api_key: 'NXUw3cq8ctWgrRcocDkpTnCBbxEGXmBR',
     q: search}});

    const gifList = response.data.data;
    const listLen = gifList.length;
    const gifNum = getRandom(listLen);
    const theGif = response.data.data[gifNum].images.original.url

   showGif(theGif);

   $('#input').val = '';
});

const getRandom = (qty) => {
    return Math.floor(Math.random() * qty);
}

const showGif = (resGif) => {
    $('#gif-spot').append(`<img src="${resGif}">`);
}

$('#remove').on('click', function(e) {
    e.preventDefault();

    $('#gif-spot').empty();
});
