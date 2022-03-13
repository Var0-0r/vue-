export const mixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
}
export const newData = {  //甚至可以写data
    data() {
        return {
            a: 100
        }
    },
    mounted() { //生命周期函数都会（在这里写的和组件里写的）被会被执行 而且这里的优先级更高
        console.log("!!");
    },
}