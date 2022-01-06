//Milestone 1
//Replica della grafica con la possibilità di avere messaggi scritti dall’utente(verdi) e dall’interlocutore(bianco) assegnando due classi CSS diverse
//Visualizzazione dinamica della lista contatti: tramite la direttiva v -for, visualizzare nome e immagine di ogni contatto

//Milestone 2
//Visualizzazione dinamica dei messaggi: tramite la direttiva v -for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
//Click sul contatto mostra la conversazione del contatto cliccato

const app = new Vue(
    {
        el: '#app',
        data: {
            counter: 0,
            newMsg: '',
            lastTxt: '',
            contacts: [
                {
                    name: "Michele",
                    avatar: "_1",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "_2",
                    visible: true,
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            text: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            text: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            text: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent",
                        },
                    ],
                },

                {
                    name: "Samuele",
                    avatar: "_3",
                    visible: true,
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            text: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            text: "Ah scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "_4",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
            ],
        },
        methods: {
            clickChat: function (index) {
                this.counter = index;
            },
            addMsg: function (counter){
                let whitespace = false;
                if (this.newMsg.trim().length === 0){
                    whitespace = true;
                }
                if (this.newMsg.length != 0 && whitespace == false) {
                    let current = new Date();
                    let data = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
                    let time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
                    let dateTime = data + ' ' + time;
                    let obj = {
                        date: dateTime, 
                        text: this.newMsg,
                        status: "sent",
                    }
                    this.contacts[counter].messages.push(obj);
                    this.newMsg = "";
                    setTimeout(() => {
                        current = new Date();
                        data = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
                        time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
                        dateTime = data + ' ' + time;
                        this.contacts[counter].messages.push({
                            date: dateTime,
                            text: "Ok",
                            status: "received",
                        })
                    }, 1000);
                }
            },
            lastMsg: function(contact) {
                //console.log(contact.messages);
                let newArray = {};
                newArray = contact.messages;
                let length = 0;
                for (text in newArray) {
                    if (newArray.hasOwnProperty(text)) {
                        length++;
                    }
                }
                let arrayTxt = [];
                //console.log(length);
                for(let x=0; x < length; x++){
                    arrayTxt.push(newArray[x].text);
                }
                //console.log(arrayTxt);
                //console.log(arrayTxt.length); //ok
                let finalTxt = '';
                finalTxt = arrayTxt[arrayTxt.length -1];
                //console.log(finalTxt);
                if (finalTxt.length > 20) {
                    finalTxt = finalTxt.substring(0, 19) + "...";
                }
                return finalTxt;
            },
            lastMsgDate: function(contact){
                let newArray = {};
                newArray = contact.messages;
                let length = 0;
                for (date in newArray) {
                    if (newArray.hasOwnProperty(date)) {
                        length++;
                    }
                }
                let arrayDate = [];
                //console.log(length);
                for (let x = 0; x < length; x++) {
                    arrayDate.push(newArray[x].date);
                }
                //console.log(arrayTxt);
                //console.log(arrayTxt.length); //ok
                let finalDate = '';
                finalDate = arrayDate[arrayDate.length - 1];
                return finalDate; 
            }, 
            lastAccess: function(counter){
                let newArray = {};
                newArray = this.contacts[counter].messages;
                let length = 0;
                for (date in newArray) {
                    if (newArray.hasOwnProperty(date)) {
                        length++;
                    } 
                }
                let arrayAccess = [];
                for (let x = 0; x < length; x++) {
                    if(newArray[x].status == 'received'){
                        arrayAccess.push(newArray[x].date);
                    }
                }
                let lastAcc = '';
                lastAcc = " "  + arrayAccess[arrayAccess.length - 1];
                return lastAcc;
            },
            searchContact: function () {
                this.contacts.forEach((contact) => {
                    if (contact.name.toLowerCase().includes(this.search.toLowerCase())) {
                        contact.visible = true;
                    } else {
                        contact.visible = false;
                    }
                });
            },
        }
    }
);