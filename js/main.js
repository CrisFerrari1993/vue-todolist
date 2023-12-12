// inizializzazione app Vue
const { createApp } = Vue;

createApp ({
    data() {
        return {
            //error (need for show error div)
            error : false,
            //user task
            newTask : '',
            //todo array, with object
            todos : [
                {
                    text : 'Task di esempio',
                    done : false
                }
            ],
        }
    },
    methods: {
        //addTask function
        addTask(){
            // if task is not empty string
            if(this.newTask !== ''){
                this.todos.unshift({text:this.newTask, done: false});
                this.error = false;
            //else retur error div
            } else {
                this.error = true;
            }
            //clear input field
            this.newTask = '';
        },
        // remove task function
        removeTask(i) {
            this.todos.splice(i, 1)
        },
        // done or not funtion
        doOrNot(i){
            this.todos[i].doneTask = !this.todos[i].doneTask;
        }
    },
    mounted() {
        console.log('Applicazione avviata');
        console.log(this.newTask);
    }
}).mount('#app');