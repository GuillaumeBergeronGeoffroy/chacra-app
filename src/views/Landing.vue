<template>
    <div id='cw' :style='{zoom: $root.scale, "height": (100/$root.scale)+"vh"}'>
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
            <div class='landing-wrapper step1'>
                <div class='box text-regular'>
                    Chacra CrowdFarming ambitionne transformer la nature des chaînes d’approvisionnement alimentaire nord-américaine par l'innovation numérique. Notre modèle simplifie la chaîne d’approvisionnement alimentaire et offre aux producteurs agroalimentaires un canal de vente E-Commerce direct pour soutenir leurs activités de commercialisation. Un modèle inclusif par affiliation qui permet de revaloriser les métiers agricoles.
                </div>
                <div @click='changeStep()' class='button' style='width:350px;margin-top:50px;'>Joignez-vous à nous</div>
            </div>
        </div>
        <div class='landing-wrapper step2 flex-row justify-between'>
            <div class='box box-producer'>
                <div class='box first-b'>
                    <h2 class='text-green'><span>V</span><span>o</span><span>u</span><span>s</span> <span>ê</span><span>t</span><span>e</span><span>s</span> <span>a</span><span>g</span><span>r</span><span>i</span><span>c</span><span>u</span><span>l</span><span>t</span><span>e</span><span>u</span><span>r</span> <span class='text-600'>?</span></h2>
                    <p class='text-regular step2-text'>
                        Notre marché d'argriculteurs vous offre un espace ou vous pouvez raconter votre histoire, assurer la pérennité de votre labeur et rejoindre une communauté de gens qui cherchent à choisir et à agir pour le mieux
                    </p>
                </div>
                <div class='box p-30 opacity-0 hide desc-b'>
                    <p class='text-regular m-0'>
                        Assurons-nous que vous ayez une place sur le marché au lancement, entrez vos informations et nous vous contacterons sous peu
                    </p>
                </div>
                <div class='box p-30 opacity-0 hide name-b'></div>
                <div class='box p-30 opacity-0 hide email-b'></div>
                <div @click='changeStep(1, "producer")' class='button' style='margin-top:20px;'>Présentez-vous à la communauté</div>
            </div>
            <div class='box box-community'>
                <div class='box first-b'>
                    <h2 class='text-brown'><span>V</span><span>o</span><span>u</span><span>s</span> <span>v</span><span>o</span><span>u</span><span>l</span><span>e</span><span>z</span> <span>m</span><span>a</span><span>n</span><span>g</span><span>e</span><span>r</span> <span>l</span><span>o</span><span>c</span><span>a</span><span>l</span> <span class='text-600'>?</span></h2>
                    <p class='text-regular step2-text'>
                        En adoptant la production saisonière des agriculteurs sur notre marché vous aidez à supporter la résilience de vos agriculteurs locaux tout en vous assurant de faire des choix de consommation qui répondent à vos critères
                    </p>
                </div>
                <div class='box p-30 opacity-0 hide desc-b'>
                    <p class='text-regular m-0'>
                       Réservez votre place pour avoir accès au marché en avant-première
                    </p>
                </div>
                <div class='box p-30 opacity-0 hide name-b'></div>
                <div class='box p-30 opacity-0 hide email-b'></div>
                <div @click='changeStep(1, "community")' class='button bg-brown' style='margin-top:20px;'>Supportez vos agriculteurs locaux</div>
            </div>
        </div>
        <div class='bottom-wrapper'>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

var top = 35;
var topStep2 = 238;
var inTransition = false;

export default {
    name: 'Landing',
    data: function() {
        return {
            step: 0,
        }
    },
    components: {
        
    },
    destroyed() {
    },
    mounted() {
        this.init()
    },
    methods: {
        init: async function() {
            var vue_obj = this;
            document.querySelector('.bottom-wrapper').style.height = (100/this.$root.scale)+"vh";
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
                document.querySelector('.step1').style.opacity = '1';
                document.querySelector('.step1').style.top = '213px';
                document.querySelector('.bottom-wrapper').style.opacity = '1';
                vue_obj.registerScroll();
            }, 2000);
            
        },
        changeStep: function(direction = 1, context = null) {
            switch (this.step + direction) {
                case 0:
                    document.querySelector('.bottom-wrapper').style.height = (100/this.$root.scale)+"vh";
                    this.step += direction
                    break;
                case 1: 
                    document.querySelector('.bottom-wrapper').style.height = (100/this.$root.scale*3)+"vh";
                    inTransition = true;
                    top = 35;
                    document.querySelector('.loading-wrapper').style.top = top + 'px'
                    setTimeout(() => {
                        document.querySelector('.step1').style.transition = 'all 0.5s';
                        document.querySelector('.step1').style.opacity = '0';
                        document.querySelector('.step1').style.pointerEvents = 'none';
                        document.querySelector('.step1').style.top = '413px';
                    }, 200);
                    setTimeout(() => {
                        document.querySelector('.step2').style.top = topStep2 + 'px';
                        document.querySelector('.step2').style.pointerEvents = 'auto';
                        document.querySelector('.step2').style.opacity = '1';
                    }, 300);
                    setTimeout(() => {
                        inTransition = false;
                    }, 800);
                    this.step += direction
                    break;
                case 2: 
                    // document.querySelector('.bottom-wrapper').style.height = (100/this.$root.scale*3)+"vh";
                    // left only if window , in any case get them in display block after the transition is over
                    // will only have the inside transition if mobile
                    
                    // const insideTransition = func()() 
                    inTransition = true;
                    top = 35;
                    topStep2 = 238;
                    document.querySelector('.loading-wrapper').style.top = top + 'px'
                    document.querySelector('.step2').style.top = topStep2 + 'px';
                    var sign = '+';
                    var other = 'community';
                    var contextCta = "Entamez la discussion";
                    if(context == 'community') {
                        sign = '-';
                        other = 'producer';
                        contextCta = 'Réservez votre place';
                    }
                    var insideAnimation = function() {
                        setTimeout(() => {
                            document.querySelector('.box-'+context + ' h2').style.marginTop = '250px';
                            // document.querySelector('.box-'+context + ' .step2-text').style.marginTop = '0px';
                            // document.querySelector('.box-'+context + ' .step2-text').style.height = document.querySelector('.box-'+context + ' .step2-text').offsetHeight + 'px';
                            document.querySelector('.box-'+context + ' .step2-text').style.opacity = '0';
                            document.querySelector('.box-'+context + ' .step2-text').style.pointerEvents = 'none';
                            document.querySelector('.box-'+context +' .button').style.opacity = 0;
                            // document.querySelector('.box-'+context + ' .step2-text').style.marginTop = '-' + document.querySelector('.box-'+context + ' .step2-text').offsetHeight + 'px';
                            // document.querySelector('.box-'+context + ' .step2-text').style.marginBottom = '0px';
                        }, 600);
                        setTimeout(() => {
                            // document.querySelector('.box-'+context + ' .step2-text').textContent = "Restez à l'affut des derniers avancements dans le projet en remplissant le formulaire de contact ci-dessous et réserver votre place pour avoir accès au marché en avant-première."
                            // document.querySelector('.box-'+context + ' .step2-text').style.opacity = '1';
                            document.querySelector('.box-'+context + ' h2').style.transition = 'all 0.2s';
                            const animChar = async function() {
                                var elem = document.querySelectorAll('.box-'+context + ' h2 span:not(.opacity-0)');
                                if(elem.length) {
                                    await new Promise(r => setTimeout(r, 40)).then(() => {
                                        elem[0].classList.add('opacity-0');
                                        animChar();
                                    })
                                } else {
                                    document.querySelector('.box-'+context + ' h2 span:last-of-type').innerHTML =  "&#10084";
                                    const animChar = async function() {
                                        var elem = document.querySelector('.box-'+context + ' h2 span.opacity-0');
                                        if(elem) {
                                            await new Promise(r => setTimeout(r, 40)).then(() => {
                                                elem.classList.remove('opacity-0');
                                                animChar();
                                            })
                                        } else {
                                            document.querySelector('.box-'+context + ' .step2-text').style.transition = 'all 1s';
                                            document.querySelector('.box-'+context + ' h2').style.transition = 'all 1s';
                                            document.querySelector('.box-'+context + ' .first-b').style.paddingBottom = '30px';
                                            document.querySelector('.box-'+context + ' h2').style.marginTop = '0px';
                                            document.querySelector('.box-'+context + ' .step2-text').style.marginTop = '-' + document.querySelector('.box-'+context + ' .step2-text').offsetHeight + 'px';
                                            document.querySelector('.box-'+context + ' .step2-text').style.marginBottom = '0px';
                                            
                                            document.querySelector('.box-'+context +' .desc-b').classList.remove('hide');
                                            document.querySelector('.box-'+context +' .name-b').classList.remove('hide');
                                            document.querySelector('.box-'+context +' .email-b').classList.remove('hide');

                                            document.querySelector('.box-'+context +' .desc-b').classList.remove('opacity-0');
                                            document.querySelector('.box-'+context +' .name-b').classList.remove('opacity-0');
                                            document.querySelector('.box-'+context +' .email-b').classList.remove('opacity-0');

                                            document.querySelector('.box-'+context +' .button').textContent = contextCta
                                            document.querySelector('.box-'+context +' .button').style.opacity = 1;

                                            inTransition = false;
                                        }
                                    }
                                    animChar()
                                }
                            }
                            animChar()
                            // document.querySelector('.box-'+context + ' h2').innerHTML = "&#10084;";
                        }, 1100); 
                    }
                    if(window.innerWidth > 1060) {
                        var boxWidth = document.querySelector('.box-'+context).offsetWidth
                        document.querySelector('.step2').style.left = 'calc(50% ' + sign + ' ' + ((boxWidth/2) + 40) + 'px)';
                        document.querySelector('.box-'+other).style.transition = 'all 0.5s';
                        document.querySelector('.box-'+context + ' .step2-text').style.transition = 'all 0.5s';
                        document.querySelector('.box-'+context + ' h2').style.transition = 'all 0.5s';
                        setTimeout(() => {
                            document.querySelector('.box-'+other).style.opacity = '0';
                        }, 100);
                        insideAnimation()
                    } else {
                        insideAnimation()
                    }
                   
                    // top = 35;
                    
                    // document.querySelector('.loading-wrapper').style.top = top + 'px'
                    // setTimeout(() => {
                    //     document.querySelector('.step1').style.transition = 'all 0.5s';
                    //     document.querySelector('.step1').style.opacity = '0';
                    //     document.querySelector('.step1').style.pointerEvents = 'none';
                    //     document.querySelector('.step1').style.top = '413px';
                    // }, 200);
                    // setTimeout(() => {
                    //     document.querySelector('.step2').style.top = topStep2 + 'px';
                    //     document.querySelector('.step2').style.pointerEvents = 'auto';
                    //     document.querySelector('.step2').style.opacity = '1';
                    // }, 300);
                    // setTimeout(() => {
                    //     inTransition = false;
                    // }, 800);
                    this.step += direction
                    break;
                default:
                    break;
            }
        },
        registerScroll: function() {
            // document.querySelector('.loading-wrapper').style.transition = 'all 0.5s';
            window.addEventListener('mousedown', this.handleScroll);
            window.addEventListener('touchmove', this.handleScroll);
            window.addEventListener('wheel', this.handleScroll);
            window.addEventListener('keydown', this.handleScroll);

        },
        handleScroll: function(event) {
            if(!inTransition) {
                var change = 0;
            //     inScroll = true;
                switch (event.type) {
                    case 'wheel':
                        if(event.deltaY > 0) {
                            change -= 50;
                        } else if(event.deltaY < 0 && top < 35) {
                            change += 50;
                        }
                        break;
                    case 'keydown':
                        if(event.key == 'ArrowDown') {
                            change -= 50;
                        } else if(event.key == 'ArrowUp' && top < 35) {
                            change += 50;
                        }
                        break;
                    default:
                        break;
                }
                top += change;
                
                document.querySelector('.loading-wrapper').style.top = top + 'px';
                if(this.step == 1 || this.step == 2) {
                    topStep2 += change;
                    document.querySelector('.step2').style.top = topStep2 + 'px';
                }
                
            //     if(top != topCopy) {
            //         setTimeout(() => {
            //             inScroll = false;
            //         }, 30)
            //     } else {
            //         inScroll = false;
            //     }
            }
            
        }
    },
}
</script>

<style scoped>
    #cw {
        background:#fbfff9;
        max-height:100vh;
        overflow: hidden;
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
        z-index:5;
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
        position:absolute;
        top:213px;
    }
    .landing-wrapper .box {
        margin:0;
        margin-top:1em;
        max-width:750px;
        /* margin-bottom:1em; */
    }
    .landing-wrapper.step1 {
        z-index:4;
        transition: all 0.2s;

    }
    .bottom-wrapper {
        z-index:1;
        transition: all 1s;
        opacity:0;
        background: url("../asset/images/farm.jpg") no-repeat center;
        background-size: cover;
        width:100%;
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
    .landing-wrapper.step2 {
        max-width:1000px;
        width:100%;
        z-index:3;
        left: 50%;
        transform:translateX(-50%);
        pointer-events:none;
        transition: all 1s;
    }
    .box.box-producer, .box.box-community {
        width: calc(50% - 40px);
        padding:0;
        background:#FFFFFF00;
        box-shadow:unset;
    }
    .box.box-producer .box, .box.box-community .box {
        padding: 30px;
        padding-bottom:50px;
        border-radius:4px;
    }
    /* .bubble {
        opacity:0;
        position:absolute;
        width:225px;
        height:225px;
        top:-25px;
        left:calc(50% - 112.5px);
        transition: all 0.5s;
        border-radius:300px;
    }
    .bubble-community {
        background: url("../asset/images/farmer_market.jpg") no-repeat center;
        background-size: cover;
    } */

@media only screen and (max-width: 1060px) {
    .landing-wrapper.step2 {
        display:block;
    }
    .box.box-producer, .box.box-community {
        width:100%;
        margin:auto
    }
}


@media only screen and (max-width: 810px) {
    .landing-wrapper {
        max-width: 100%;
    }
    .landing-wrapper .box {
        box-shadow: unset;
        border-radius: unset;
        background:unset;
        padding: 20px;
        padding-top:0px;
    }
    .box.box-producer, .box.box-community {
        width:calc(100% - 40px);
        margin:auto
    }
    .button {
        max-width:calc(100% - 40px);
        margin:auto;
    }
    .bottom-wrapper {
        opacity:0!important;
    }
}

    
</style>