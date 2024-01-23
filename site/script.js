const firebaseConfig = {
    apiKey: "",
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

const phSensorRef = database.ref('/sensors/ph_sensor');
const tempSensorRef = database.ref('/sensors/temp_sensor');
dataList.innerHTML = '';

// Evento para escutar alterações nos dados do sensor de PH
phSensorRef.on('value', function(snapshot) {
    // Obter dados do snapshot e adicionar à lista
    
    const data = snapshot.val();
    const listItem = document.createElement('li');
    listItem.textContent = `Sensor de PH: ${data}`;
    console.log(data)
    dataList.appendChild(listItem);
});

// Evento para escutar alterações nos dados do sensor de Temperatura
tempSensorRef.on('value', function(snapshot) {
    // Obter dados do snapshot e adicionar à lista
    const data = snapshot.val();
    const listItem = document.createElement('li');
    listItem.textContent = `Sensor de Temperatura: ${data}`;
    dataList.appendChild(listItem);
});
