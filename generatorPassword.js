const generateButton=document.querySelector(".passwordResult button.generate");

generateButton.addEventListener("click",(e)=>{
    let includesLowerCase=document.getElementById("LowerCase").checked
    let includesUpperCase=document.getElementById("UpperCase").checked
    let includesSymbolCase=document.getElementById("Symbol").checked
    let includesNumberCase=document.getElementById("Number").checked
    let length=+document.getElementById("lengthInput").value

    generatePassword(length,includesLowerCase,includesUpperCase,includesSymbolCase,includesNumberCase)
})


function generatePassword(length,includesLowerCase,includesUpperCase,includesSymbolCase,includesNumberCase){
    let result=document.querySelector(".resutl")
    let lowerCaseChar='qwertyuiopasdfghjklzxcvbnm'
    let upperCaseChar='QWERTYUIOPASDFGHJKLZXCVBNM'
    let symbolCaseChar='!@#$%^&*()_'
    let numberCaseChar='0123456789'
    let allowedChar=''
    let password=''

    includesLowerCase?allowedChar+=lowerCaseChar:null
    includesUpperCase?allowedChar+=upperCaseChar:null
    includesSymbolCase?allowedChar+=symbolCaseChar:null
    includesNumberCase?allowedChar+=numberCaseChar:null


    length<0?result.textContent="the length of password must be greater than 0":null
    length===0?result.textContent="the length of password at least 1":null
    allowedChar==""?result.textContent="please select any condtion ro genearted":null
    document.getElementById("lengthInput").value==""?  document.getElementById("lengthInput").focus():null
    if(length>0 && allowedChar !=""){
        for(let i=0;i<length;i++){
            password+=allowedChar[Math.floor(Math.random()*allowedChar.length)]
        }
        result.textContent=password
        
    }
    
}
