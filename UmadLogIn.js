//Infuriating log in style I saw in a meme

if (isPasswordCorrect == true && isFirstLogInAttempt) {
    Error ("Wrong login or password")
}
else if (isPasswordCorrect == true && !isFirstLogInAttempt) {
    console.log ("welcome back" + userName)
}