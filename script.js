const btn = document.getElementById('button') ;
const input = document.querySelector('input#input') ;
const images = document.querySelector('.images ') ;
const API = 'https://api.openai.com/v1/images/generations';
const key = "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"



let getImages = async ()=>{
const methods = 
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${key}`
        },
        body:JSON.stringify({
            "prompt":input.value || "cats",
            "n":3,
            "size":"256x256"
        })
    }
    
    const respones =await fetch(API,methods)
    const data = await respones.json()
    const listImages = data.data
    images.innerHTML =""
    listImages.map((image)=>{
        const div = document.createElement('div')
        images.append(div)
        const img = document.createElement('img')
        div.append(img)
        img.src=image.url

    })
    
}

