let enterDataHere = document.getElementById('enterDataHere')
let search = document.getElementById('search')
let searchField = document.getElementById('searchField')
let showMore = document.getElementById('showMore')
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
let page =1

search.addEventListener('click', ()=>{
    page=1
    enterDataHere.innerHTML=""
    addData()
})
showMore.addEventListener('click',displayMore)

function displayMore(){
    page++;
    addData()
}

async function addData(){

    inputData = searchField.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    try{
        const response = await fetch(url);
        let data = await response.json();
        data = data.results;
        console.log(data)
        
        data.forEach(element => {
            let htmlToBeInserted = 
            `
            <div class="oneCard">
            <img src="${element.urls.small}">
            <a>${element.alt_description}</a>
            </div>
            `
            document.getElementById('enterDataHere').innerHTML += htmlToBeInserted;
        });
    }
    catch{
        console.log('API Failed...')
    }
    
}
