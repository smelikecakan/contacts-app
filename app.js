const addBtn =document.querySelector(".add-btn");
const modalOverlay =document.getElementById("modal-overlay")
const closeBtn =document.querySelector(".close-btn")

const addButtonPressed = () =>{
    modalOverlay.style.display="flex";

}

addBtn.addEventListener("click", addButtonPressed)


const  closeButtonPressed = () =>{
    modalOverlay.style.display="none";
}

closeBtn.addEventListener("click", closeButtonPressed)

const hideModal = (e) =>{
    if(e.target === e.currentTarget){
    modalOverlay.style.display="none";
    }

}

modalOverlay.addEventListener("click", hideModal)