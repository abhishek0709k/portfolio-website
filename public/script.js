const about_btn = document.getElementById("about-btn")
const experience_btn = document.getElementById("experience-btn")
const projects_btn = document.getElementById("projects-btn")
const about_content = document.getElementById("about-content-div")
const experience = document.getElementById("experience")
const projects = document.getElementById("projects")
const bootstrap_projects = document.getElementById('bootstrap-project')
const portfolio_project = document.getElementById('portfolio-project')
const chat_app_project = document.getElementById('chat-app-project')

about_btn.addEventListener('click' , ()=>{
    about_content.scrollIntoView({ behavior : "smooth" })
})

experience_btn.addEventListener('click' , ()=>{
    experience.scrollIntoView({ behavior : "smooth" })
})

projects_btn.addEventListener('click' , ()=>{
    projects.scrollIntoView({ behavior : "smooth" })
})
projects.addEventListener('click' , ()=>{
    window.open("/amazonCloneProject" , "_blank")
})
bootstrap_projects.addEventListener('click' , ()=>{
    window.open("/figmaDesignProject" , "_blank")
})
portfolio_project.addEventListener("click" , ()=>{
    window.open("/" , "_blank")
})
chat_app_project.addEventListener("click" , ()=>{
    window.open("http://localhost:3000" , "_blank")
})