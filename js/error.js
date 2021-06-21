Vue.component('error', {
        props: ['error', 'img'],
        template: `
                <div class="error_box" v-show="error">
                        <h1 class="error_mes">503 Service Unavailable </h1>
                </div>`
})