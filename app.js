console.log("Let's get this party started!");

async function getData(search) {
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', { params: {api_key: 'NXUw3cq8ctWgrRcocDkpTnCBbxEGXmBR', q: search}});

    console.log(response);
}