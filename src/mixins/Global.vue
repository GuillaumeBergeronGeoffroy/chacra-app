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
        },
        created: function () {
            
        },
        destroyed: function () {
           
        },
        methods: {
            request: async function(context, route, data = {}, response = {}) {
                try {
                    const rawResponse = await fetch(process.env["VUE_APP_" + context] + route, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                    response = await rawResponse.json();
                    response = JSON.parse(Buffer.from(response, 'base64').toString());
                } catch (e) {
                    console.log(e)
                }
                return response;
            },
            isEmailValid: (email) => {
                if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                    return true;
                }
                return false;
            }
        },
    }
</script>