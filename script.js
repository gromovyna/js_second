
firstName =  prompt ("Введите ваше имя").trim();
lastName = prompt("Введите вашу фамилию").trim();
email = prompt ("Введите ваш email").replaceAll(" ", "").toLowerCase();
addedMessage = ("Not valid email ");
explainMessage =("")
    if(!email.indexOf (`@`)){
        explainMessage = ("(symbol @ find in first place)")}
     else if (email.indexOf (`@`) === (email.length-1)){
        explainMessage =("(symbol @ find in last place)")}
    else if (email.indexOf (`@`) === -1){
        explainMessage =("(symbol @ not exist)");
    }
    else {
        addedMessage = ("");
    }
yearOfBirth = prompt ("Введи год вашего рождения").replaceAll(" ", "");
fullName = firstName + "  " +  lastName;
today = new Date();
currentYear = today.getFullYear();
age = currentYear - yearOfBirth; 
document.write(
    `<ul>
        <li>Full Name:  ${fullName}</li>
        <li>Email:  ${addedMessage} ${email} ${explainMessage}</li>
        <li>Age:  ${age}</li>
    </ul>`
)