

const app = {
    data(){
        return{
            displayResultado: "result",
            displayInput: "input"
        }
    },
    methods: {
        allClear(){
            this.displayInput = "";
            this.displayResultado = ""
            document.getElementById("input").focus();
        }
    }
}

Vue.createApp(app).mount('#calculadora')