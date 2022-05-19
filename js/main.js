// let input = document.querySelector('input');
// let img = document.querySelector('img');


// input.addEventListener('change',function(e){
//     console.log(this.files[0].size/1024)

//     let reader = new FileReader();

//     reader.onload = function(e){
//         img.setAttribute('src',reader.result)
//     }
    
//     reader.readAsDataURL(this.files[0])
// })


let fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change',function(){
    
    [...this.files].forEach(file=>{
        
        if(file.type.startsWith('image/')){
            let reader = new FileReader();

            reader.onload = function(){
    
                let img = document.createElement('img');
                img.setAttribute('src',reader.result);
    
                document.body.appendChild(img);
            }
    
            reader.readAsDataURL(file);
        }
        else{
            console.log("Format duz deyil")
            this.value = ''
        }
       
    })
})

document.querySelector('.box').addEventListener('dragover',function(e){
    e.preventDefault();
})

// document.querySelector('.box').addEventListener('drop',function(e){
//     e.preventDefault();
    
//     console.log(e)
// })


let imgUploadBox = document.getElementById('imgUploadBox');

imgUploadBox.addEventListener('click',function(e){
    fileInput.click();
})