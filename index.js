const prevBtn = document.querySelector("#button-left");
const nextBtn = document.querySelector("#button-right");
const images = document.querySelector(".image")
const image = document.querySelector("#imahe")
const imageSlides = ["url('./pictures/image1.jpg')",
"url('./pictures/image2.jpg')",
"url('./pictures/image3.jpg')",
"url('./pictures/image4.jpg')",
"url('./pictures/image5.jpg')"] 
var currentSlides = 1;

prevBtn.addEventListener("click",()=>{
        imahe.style.backgroundImage = imageSlides[currentSlides];
        currentSlides--;
        console.log(`hey ${currentSlides}`);
        imagePrev();
})
nextBtn.addEventListener("click",()=>{
    imahe.style.backgroundImage = imageSlides[currentSlides];
    currentSlides++;
    console.log(`hey ${currentSlides}`)
    imagesNext();

})

const imagesNext = ()=>{
    if (imageSlides.length   == currentSlides){
        currentSlides=0;
        console.log(`hey${currentSlides}`)
    }
}
const imagePrev = ()=>{
    if (currentSlides == 0){
        currentSlides=imageSlides.length;
        console.log(`hey${currentSlides}`)
    }
}