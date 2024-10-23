const passwordGenerator = (length) =>{
    let characters = "1234567890asdfglkjhwertoiouoypqxcvmnbzASDFGHJKLPOIUYTREWQZXCVBNM!@#$%^&*()";
    let password = "";
     for(let index = 0; index < length; index++){
        password += characters.chatAt(Math.floor(Math.random()* characters.length));
     }

     return password;
}

module.exports = passwordGenerator;