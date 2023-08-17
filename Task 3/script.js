/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';

const cardsContainer = document.querySelector('#output')
const personsDataBase = fetch('https://api.github.com/users')

const getPersonsData = async () => {
    try {
        const response = await personsDataBase;
        console.log(personsDataBase);
        const persons = await response.json();
        console.log(persons);
        const loginArray = persons.map(object => object.login);
        console.log(loginArray);
        const avatarUrlArray = persons.map(object => object.avatar_url);
        console.log(avatarUrlArray);

loginArray.forEach((login) => {
    const loginLabel = document.createElement('p');
    loginLabel.textContent = login;
    cardsContainer.append(loginLabel)
}) 

avatarUrlArray.forEach((url) => {
    const avatarUrlLabel = document.createElement('p');
    avatarUrlLabel.textContent = url;
    cardsContainer.append(avatarUrlLabel)
})
   } catch (error) {
        console.error(error)
    };
}



getPersonsData();


