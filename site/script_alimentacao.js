const firebaseConfig = {
    apiKey: "AIzaSyBmmyjHye0peG81F8QHTzT8o6lu0DHrD_8",
    authDomain: "projeto-splash.firebaseapp.com",
    databaseURL: "https://projeto-splash-default-rtdb.firebaseio.com",
    projectId: "projeto-splash",
    storageBucket: "projeto-splash.appspot.com",
    messagingSenderId: "255037989969",
    appId: "1:255037989969:web:698d382bd5e66994ce4470",
    measurementId: "G-CKCJYS22ZP"
};

const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const dataList = document.getElementById('dataList');
const dataList2 = document.getElementById('dataList2');
const dataList3 = document.getElementById('dataList3');

const feedTimeRef = database.ref('/feeding_times/feeding_time');
const feed2TimeRef = database.ref('/feeding_times/feeding_time2');
const feed3TimeRef = database.ref('/feeding_times/feeding_time3');
dataList.innerHTML = '';
dataList2.innerHTML = '';
dataList3.innerHTML = '';

// Evento para escutar alterações nos dados do sensor de PH
feedTimeRef.on('value', function (snapshot) {
    // Obter dados do snapshot e adicionar à lista

    const data = snapshot.val();
    const listItem = document.createElement('li');
    listItem.textContent = `Horário de alimentação atual: ${data}`;
    console.log(data)
    dataList.appendChild(listItem);
});

// Evento para escutar alterações nos dados do sensor de Temperatura
feed2TimeRef.on('value', function (snapshot) {
    // Obter dados do snapshot e adicionar à lista
    const data = snapshot.val();
    const listItem = document.createElement('li');
    listItem.textContent = `Horário de alimentação atual: ${data}`;
    dataList2.appendChild(listItem);
});

feed3TimeRef.on('value', function (snapshot) {
    // Obter dados do snapshot e adicionar à lista
    const data = snapshot.val();
    const listItem = document.createElement('li');
    listItem.textContent = `Horário de alimentação atual: ${data}`;
    dataList3.appendChild(listItem);
});

var messagesRef = firebase.database()
    .ref('feeding_times/');


    // document.getElementById('contactForm')
    //     .addEventListener('submit', submitForm);


function submitForm(e) {
    // e.preventDefault();

    // Get values
    var feeding_time = getInputVal('feeding_time');
    var feeding_time2 = getInputVal('feeding_time2');
    var feeding_time3 = getInputVal('feeding_time3');
    // alert(feeding_time);

    saveMessage(feeding_time, feeding_time2, feeding_time3);
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(feeding_time, feeding_time2, feeding_time3) {
    messagesRef.set({
        feeding_time: feeding_time,
        feeding_time2: feeding_time2,
        feeding_time3: feeding_time3
    });
}
