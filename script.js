const btn = document.getElementById('button') ;
const input = document.getElementById('input') ;
const images = document.querySelector('.images ') ;
const API = 'https://api.openai.com/v1/images/generations';
const key = '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'

const methods = 
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${key}`
        },
        body:JSON.stringify({
            "prompt":input.value,
            "n":3,
            "size":"256x256"
        })
    }


let getImages = async ()=>{
    console.log(input.value)
    const respones =await fetch(API,methods);
    const data = await respones.json();
    const listImages = data.data;
    images.innerHTML = '';
    listImages.map(image=>{
        const div = document.createElement('div');
        images.append(div);
        const img = document.createElement('img');
        div.append(img);
        img.src=image.url;

    })
    
}



btn.addEventListener('click',getImages)