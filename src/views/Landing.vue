<template>
    <div id='cw' :style='{zoom: $root.scale, "min-height": (100/$root.scale)+"vh"}'>
        <div class='loading-wrapper'>
             <div class='loading-circle'></div>
             <div class='image-container pos-abs'>
                <img src='../asset/images/tree.png' />
                <img src='../asset/images/tree1.png' />
                <img src='../asset/images/tree2.png' />
                <img src='../asset/images/tree3.png' />
                <img src='../asset/images/tree4.png' />
                <img src='../asset/images/tree5.png' />
             </div>
            <h1 class='armatic text-center'><span>C</span><span>h</span><span>a</span><span>c</span><span>r</span><span>a</span> <span>C</span><span>r</span><span>o</span><span>w</span><span>d</span><span>F</span><span>a</span><span>r</span><span>m</span><span>i</span><span>n</span><span>g</span></h1>
            <div class='landing-wrapper'>
                <p>
                    Chacra CrowdFarming ambitionne <span class='text-700'>transformer la nature des chaînes d’approvisionnement alimentaire nord-américaine par l'innovation numérique</span>. Notre modèle simplifie la chaîne d’approvisionnement alimentaire et offre aux producteurs agroalimentaires un canal de vente E-Commerce direct pour soutenir leurs activités de commercialisation. Un modèle inclusif par affiliation qui permet de <span class='text-700'>revaloriser les métiers agricoles</span>.
                </p>
                <!-- <p>
                    Nous croyons en une agriculture et une consommation alimentaire plus responsable, caractérisé par une industrie biologique, locale et humaine. C’est pourquoi nous plaçons les producteurs au centre de notre mission sociale.
                </p> -->
            </div>
        </div>
        <div class='bottom-wrapper'>
            <!-- <img src='../asset/images/bottom_landing.png' /> -->
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Landing',
    components: {
        
    },
    mounted() {
        this.init()
    },
    methods: {
        init: async function() {
            const animChar = async function() {
                var elem = document.querySelector(".loading-wrapper span:not(.opacity-1)");
                if(elem) {
                    await new Promise(r => setTimeout(r, 40)).then(() => {
                        elem.classList.add('opacity-1');
                        animChar();
                    })
                }
            }
            animChar()
            setTimeout(() => {
                document.querySelector('.image-container img:nth-of-type(1)').style.opacity = '1';
            }, 25)
            setTimeout(() => {
                document.querySelector('.image-container img:nth-of-type(2)').style.opacity = '1';
            }, 50);
            setTimeout(() => {
                document.querySelector('.image-container img:nth-of-type(3)').style.opacity = '1';
            }, 100);
            setTimeout(() => {
                document.querySelector('.image-container img:nth-of-type(4)').style.opacity = '1';
            }, 200);
             setTimeout(() => {
                document.querySelector('.image-container img:nth-of-type(5)').style.opacity = '1';
            }, 300);
             setTimeout(() => {
                document.querySelector('.image-container img:nth-of-type(6)').style.opacity = '1';
            }, 400);
            setTimeout(() => {
                document.querySelector('.loading-wrapper').style.top = '35px';
                document.querySelector('.loading-wrapper').style.transform = 'translateX(-50%)';
            }, 1600);
            setTimeout(() => {
                document.querySelector('.landing-wrapper').style.opacity = '1';
                document.querySelector('.landing-wrapper').style.top = '213px';
                document.querySelector('.bottom-wrapper').style.opacity = '1';
            }, 2000);
        }
    },
}
</script>

<style scoped>
    #cw {
        background:#fbfff9;
    }
    .loading-wrapper {
        position:absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        transition:all 1s;
        max-width: 750px;
        width: 100%;
        /* max-height: 100vh;
        overflow:hidden; */
        z-index:2;
    }
    .loading-circle {
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='black' stroke-width='2' stroke-dasharray='9%2c 6%2c 7' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
        border-radius: 100px;
        animation: spin 12s linear infinite;
        width:125px;
        height:125px;
        margin:auto;
    }
    #cw h1 {
        padding-top:15px;
        color:#3a3d3c;
    }
    .loading-wrapper h1 span {  
        opacity:  0;
        transition: all 0.2s;
    }
    .loading-wrapper .image-container {
        top:0;
        left:50%;
        transform: translate(-50%, 30%);
        width:65px;
        height:60px;

    }
    .loading-wrapper .image-container img {
        opacity:0;
        width:100%;
        position: absolute;
        top:0px;
        left:0px;
        transition: all 1.5s;
    }
    .landing-wrapper {
        opacity:0;
        transition: all 0.2s;
        max-width:875px;
        position:absolute;
        top:213px;
    }
    .landing-wrapper p {
        margin:0;
        /* margin-top:1em; */
        /* margin-bottom:1em; */
        font-size: 20px;
        line-height: 30px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 500;
        text-align: center;
        padding: 50px;
        padding-bottom:60px;
        /* width: 100%; */
        box-shadow: 0px 2px 5px #d4dade61;
        border-radius: 14px;
        background: #fafffe;
        color: #3a3d3c;
        opacity:0.9;
    }
    .landing-wrapper p span {
        /* position:absolute; */
        /* opacity:0; */
    }
    .bottom-wrapper {
        z-index:1;
        transition: all 1s;
        opacity:0;
        background: url("../asset/images/farm.jpg") no-repeat center;
        background-size: cover;
        width:100%;
        height:100vh;
    }
    /* .bottom-wrapper img {
        width: 2400%;
        height: 1400px;
        transform: rotate(180deg);
        position:absolute;
        bottom:0px;
        opacity:0;
        transition: all 0.5s;
    } */
</style>