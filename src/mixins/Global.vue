<script>
    export default {
        name: 'GlobalMixin',
        data: function() {
            return {
                allCookies: document.cookie,
                maxWidth: 1920,
                window: {
                    width: 0,
                    height: 0,
                },
            }
        },
        computed: {
            scale: function() {
                return Math.max(this.window.width / this.maxWidth, 1)
            }
        },
        mounted() {
            document.querySelector('#cw').style.display = 'block';
            console.log(process.env)
            const func = async () => {
                const rawResponse = await fetch(process.env.VUE_APP_SESSION_MANAGER+'/subscribe', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({a: 1, b: 'Textual content'})
                });
                const content = await rawResponse.json();
                console.log(content);
            }
            func()
            
        },
        created: function () {
            
        },
        destroyed: function () {
           
        },
        methods: {
            isEmailValid: (email) => {
                if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                    return true;
                }
                return false;
            }
        },
    }
</script>