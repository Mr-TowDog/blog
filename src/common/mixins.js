export var myMixins = {
    data() {
        return {
            css: false,
            top: 0
        }
    },
    mounted() {
        this.top = this.$el.getBoundingClientRect().top;
        window.addEventListener("scroll", this.scroll);

    },
    methods: {
        scroll() {
            if (parseInt(window.scrollY + window.outerHeight) > this.top) {
                this.css = true;
            } else {
                this.css = false;
            }
        },
    },

}