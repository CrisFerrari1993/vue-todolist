// inizializzazione app Vue
const { createApp } = Vue;

createApp ({
    data() {
        return {
            newTask : {
                    text: '',
                    done : false
            },
            todos : [
                {
                    text : 'Comprare il pane',
                    done : false
                },
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Ritirare i panni',
                    done: false
                },
                {
                    text: 'Fare Esercizi',
                    done: false
                }    
            ]
        }
    },
    methods: {
        addTask(){
            this.todos.text
        }
    },
    mounted() {
        console.log('Applicazione avviata');
        console.log(this.newTask.text);
    }
}).mount('#app');