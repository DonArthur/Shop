var app = new Vue({
    el: '#app',
    data: {
        price: 0,
        showPrice: true
    },
    methods: {
        togglePrice() {
            this.showPrice = !this.showPrice
        }
    },
    computed: {
        formatPrice() {
            return 'Rp.' + this.price
        },
        hidePrice() {
            return 'Rp.' + this.price.replace(this.price, '*'.repeat(this.price.length))
        }
    }
})