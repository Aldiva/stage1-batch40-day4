
let dataBlog = []

function addData(event) {
    event.preventDefault()

    let projectName = document.getElementById("project-name").value
    let startDate = document.getElementById("start-date").value
    let endDate = document.getElementById("end-date").value
    let description = document.getElementById("description").value
    let nodeJs = document.getElementById("nodejs").checked
    let nextJs = document.getElementById("nextjs").checked
    let reactJs = document.getElementById("reactjs").checked
    let typescript = document.getElementById("typescript").checked

    let image = document.getElementById("upload-image").files
    image = URL.createObjectURL (image[0])

    let blog = {
        projectName,
        startDate,
        endDate,
        description,
        nodeJs,
        nextJs,
        reactJs,
        typescript,
        image,
    }

    dataBlog.push (blog)
    console.log(dataBlog);

    renderBlog()

}


function renderBlog (){

    document.getElementById("container-content").innerHTML = ''

    for (let i=0; i<dataBlog.length; i++){
        console.log(dataBlog[i]);
    
    
        document.getElementById("container-content").innerHTML += `
        
        <div class="card-id">
        <div class="title">
            <h2>${dataBlog[i].projectName}</h2>
        </div>
    
        <img src="${dataBlog[i].image}" alt="">
    
        <div class="durasi">
            <h3>Durasi :</h3>
            <p>${dataBlog[i].startDate} until ${dataBlog[i].endDate}</p>
        </div>
    
        <div class="description">
            <p>${dataBlog[i].description}</p>
        </div>
    
        <div>
            <i class="fa-brands fa-google-play"></i>
            <i class="fa-brands fa-apple"></i>
            <i class="fa-brands fa-java"></i>
        </div>
    
        <div class="button-edit-delete">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    </div>
        
        `
    
        }
}




            
    
    
