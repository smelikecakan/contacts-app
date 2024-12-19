const addBtn =document.querySelector(".add-btn");
const modalOverlay =document.getElementById("modal-overlay")
const closeBtn =document.querySelector(".close-btn")
const saveBtn =document.querySelector(".save-btn")
const firstname =document.getElementById("firstname")
const lastname =document.getElementById("lastname")
const age =document.getElementById("age")
const phone =document.getElementById("phone")
const email =document.getElementById("email")
const error ={}

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

const setErrorMessage = (input,message) =>{
    error[input.id] =message;
    input.style.border="1px solid red"
    
}

const deleteErrorMessage = (input) =>{
    delete error[input.id]
    input.style.border="1px solid green"
}

const checkInputLength =(input,number) =>{
    if(input.value.trim() !== ""){
    if(input.value.trim().length === number){
        deleteErrorMessage(input)
    }else{
        setErrorMessage(input,input.id + ` must be ${number} digits`)
    }
}
}

const checkRequired =(inputArray) =>{
    inputArray.forEach(input => {
        if(input.value.trim() ===""){
            setErrorMessage(input, input.id + "is empty")
        }else{
            deleteErrorMessage(input)
        }
        
    });
    console.log(error)
}



const checkEmail = (input) =>{
    if(input.value.trim()){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        deleteErrorMessage(input)
    }else{
        setErrorMessage(input, input.id + "is invalid")
    }
}
}

const showErrorMessages = () =>{
    const errorLabel= document.getElementById("error-label")
    errorLabel.innerHTML=""
    for(const key in error){
        const li =document.createElement("li")
        li.innerText=error[key]
        li.style.color="red"
        errorLabel.appendChild(li)
    }

}

const saveButtonPressed = () =>{
    checkRequired([firstname, lastname, age, phone,email])
    checkEmail(email)
    checkInputLength(age,2)
    checkInputLength(phone,10)
    showErrorMessages();
    
}
saveBtn.addEventListener("click",saveButtonPressed)