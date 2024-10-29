
const reviews = [
    {
        name: "Osama Arain",
        position: "Software Developer",
        description: "Osama is a skilled software developer with a passion for creating innovative solutions and improving user experiences.",
        image: "https://media.licdn.com/dms/image/D4D03AQGdY72U2xPPyw/profile-displayphoto-shrink_200_200/0/1712363947943?e=2147483647&v=beta&t=Q5y5UFlc9S4HYfMIUwHbryaTZYpsszwgtTEwasC3hrQ"
    },
    {
        name: "Laiba Wassem",
        position: "UI/UX Designer",
        description: "Laiba specializes in crafting user-centered designs and has a keen eye for detail in both web and mobile applications.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXr2qkGD4stWa9QlMy-NL4OuvWwDhlGlz6Q&s"
    },
    {
        name: "MANSOOR HAIDER",
        position: "Project Manager",
        description: "Mansoor has successfully managed numerous projects, ensuring timely delivery and excellent team coordination.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVyiI1XClbT2Ue-7CGVAp8sKoqe_068R9zw&s"
    },
    {
        name: "Sawera Chaudhary",
        position: "Digital Marketer",
        description: "Fatima excels in digital marketing strategies, focusing on SEO and content marketing to boost brand visibility.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXr2qkGD4stWa9QlMy-NL4OuvWwDhlGlz6Q&s"
    }
];




let  name_person= document.querySelector("h1")
let  Postion_person= document.querySelector("h3")
let image_person=document.querySelector("img")
let   dis_person = document.querySelector("p")
let   next= document.querySelector("#NEXT")
let   Per= document.querySelector("#PER")


let count = 0;   
    name_person.innerHTML = reviews[count].name;
    Postion_person.innerHTML = reviews[count].position;
    dis_person.innerHTML = reviews[count].description;
    image_person.src = reviews[count].image;

function N() {
    count++;
    if (count >= reviews.length) {
        count = 0; 
        }
    name_person.innerHTML = reviews[count].name;
    Postion_person.innerHTML = reviews[count].position;
    dis_person.innerHTML = reviews[count].description;
    image_person.src = reviews[count].image;
}

function P() {
    count--;
    if (count < 0) {
        count = reviews.length - 1; 
    }
    name_person.innerHTML = reviews[count].name;
    Postion_person.innerHTML = reviews[count].position;
    dis_person.innerHTML = reviews[count].description;
    image_person.src = reviews[count].image;
}



