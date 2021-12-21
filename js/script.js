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
                if (this.newMsg.lenght != 0) {
                    const current = new Date();
                    const data = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
                    const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
                    const dateTime = data + ' ' + time;
                    let obj = {
                        date: dateTime, 
                        text: this.newMsg,
                        status: "sent",
                    }
                    this.contacts[counter].messages.push(obj);
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
                console.log(arrayTxt);
                console.log(arrayTxt.length); //ok
                let finalTxt = '';
                finalTxt = arrayTxt[arrayTxt.length -1];
                console.log(finalTxt);
                //console.log(testi);
                //let finalTxt = '';
                //let txt = [];
                //let list = contact.messages;
                //for(let i=0; i< list.lenght; i++){
                 //   txt.push(list[i].text);
                //}
                //finalTxt = txt[txt.lenght -1];
                //console.log(txt);
                if (finalTxt.length > 20) {
                    finalTxt = finalTxt.substring(0, 19) + "...";
                }
                return finalTxt;
            }
        }
    }
);