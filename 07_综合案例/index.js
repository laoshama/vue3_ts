Vue.createApp({
    template: '#my-app',
    data() {
        return {
            books: [
                {
                    id: 1,
                    name: '《算法》',
                    date: '2006-9',
                    price: 80.00,
                    count: 1
                },
                {
                    id: 2,
                    name: '《Unix》',
                    date: '2002-3',
                    price: 50.00,
                    count: 1
                },
                {
                    id: 3,
                    name: '《Jave》',
                    date: '2004-5',
                    price: 30.00,
                    count: 1
                },
                {
                    id: 4,
                    name: '《Oracle》',
                    date: '2020-10',
                    price: 60.00,
                    count: 1
                },
            ]
        }
    },
    methods: {
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            this.books[index].count--
        },
        removeBook(index) {
            this.books.splice(index, 1)
        },
        formatPrice(price) {
            return '￥' + price
        }
    },
    computed: {
        totalPrice() {
            return this.books.reduce((total, item) => total + item.count * item.price, 0)
        },
        // filterBooks() {
        //     return this.books.map(item => {
        //         const newItem = Object.assign({}, item)
        //         newItem.price = '￥' + item.price
        //         return newItem
        //     })
        // }
    }
}).mount('#app')