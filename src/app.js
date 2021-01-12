import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            allExchangeRates: []
        },
        computed: {

        },
        mounted(){
            this.getExchangeRates();
        },
        methods: {
            getExchangeRates: function(){
                fetch("https://api.exchangeratesapi.io/latest")
                .then(res => res.json())
                .then(data => this.allExchangeRates = data.rates)
            },
            convertCurrency: function(){

            }
        }
    })
})