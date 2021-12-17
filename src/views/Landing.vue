<template>
    <div id='cw' :style='{zoom: $root.scale, "height": (100/$root.scale)+"vh"}'>
        <div class='loading-wrapper'>
             <div class='loading-circle t-500 disable-click' @click='toggleDarkMode()'>
                 <!-- <img class='moon opacity-0' src='../asset/images/moon.png' /> -->
             </div>
             <div class='image-container pos-abs disable-click' @click='toggleDarkMode()'>
                <img src='../asset/images/loader/tree.png'   rel="preload" @load='init'/>
                <img src='../asset/images/loader/tree1.png'  rel="preload"/>
                <img src='../asset/images/loader/tree2.png'  rel="preload"/>
                <img src='../asset/images/loader/tree3.png'  rel="preload"/>
                <img src='../asset/images/loader/tree4.png'  rel="preload"/>
                <img src='../asset/images/loader/tree5.png'  rel="preload" />
             </div>
            <h1 class='text-center armatic'><span>C</span><span>h</span><span>a</span><span>c</span><span>r</span><span>a</span> <span>C</span><span>r</span><span>o</span><span>w</span><span>d</span><span>F</span><span>a</span><span>r</span><span>m</span><span>i</span><span>n</span><span>g</span></h1>
            <div class='flex-row text-center align-center justify-center m-top-30 text-regular clickable lang-select'>
                <span class='text-underline' style='margin-right:10px;' @click="setLang('fr')">Français</span> <span class='text-underline' style='margin-left:10px;' @click="setLang('en')">English</span>
            </div>
            <div class='landing-wrapper step1'>
                <div class='box p-bot-30'>
                    <p class='text-regular m-0 step1-text'>
                        {{ translations[lang].step1_text }}
                    </p>
                    <img class='personLeft' src='../asset/images/landing/step1/personLeft.png' />
                    <img class='form' src='../asset/images/landing/step1/form.png' />
                    <img class='prevision' src='../asset/images/landing/step1/prevision.png' />
                    <img class='love' src='../asset/images/landing/step1/love.png' />
                    <img class='coordination' src='../asset/images/landing/step1/coordination.png' />
                    <img class='produce' src='../asset/images/landing/step1/produce.png' />
                    <img class='personRight' src='../asset/images/landing/step1/personRight.png' />
                    <p class='text-regular m-0 opacity-0 pos-abs disable-click t-500'>
                        {{ translations[lang].step1_anim_1 }} 
                    </p>
                    <p class='text-regular m-0 opacity-0 pos-abs disable-click t-500'>
                        {{ translations[lang].step1_anim_2 }}
                    </p>
                    <p class='text-regular m-0 opacity-0 pos-abs disable-click t-500'>
                        {{ translations[lang].step1_anim_3 }}
                    </p>
                    <p class='text-regular m-0 opacity-0 pos-abs disable-click t-500'>
                        {{ translations[lang].step1_anim_4 }}
                    </p>
                    <p class='text-regular m-0 opacity-0 pos-abs disable-click t-500'>
                        {{ translations[lang].step1_anim_5 }}
                    </p>
                    <div class='flex-row opacity-0 t-500 anim-steps-nav justify-center'>
                        <span class='active' @click="animSteps(1, true)"></span>
                        <span  @click="animSteps(2, true)"></span>
                        <span  @click="animSteps(3, true)"></span>
                        <span  @click="animSteps(4, true)"></span>
                        <span  @click="animSteps(5, true)"></span>
                    </div>
                </div>
                <div @click='changeStep()' class='button m-top-20' style='max-width:350px;'>{{ translations[lang].step1_cta }}</div>
            </div>
        </div>
        <div class='landing-wrapper step2 flex-row justify-between'>
            <div class='box-producer'>
                <div class='box first-b'>
                    <!-- <img style='height:210px;' src='../asset/images/landing/step2/farmers.png' /> -->
                    <h2 class='m-top-10' v-html='translations[lang].step2_title_producer'></h2>
                    <p class='text-regular step2-text'>
                       <!-- Notre plateforme vous offre un espace où vous pouvez raconter votre histoire, rejoindre une communauté de gens qui cherchent à choisir et à agir pour le mieux et assurer l'écoulement du fruit de votre labeur -->
                        <!-- Notre plateforme vous offre un espace ou vous pouvez raconter votre histoire à une communauté de gens qui cherchent à choisir et à agir pour le mieux pour que vous puissiez sécuriser la pérennité de votre labeur -->
                        {{ translations[lang].step2_text_producer }}
                    </p>
                </div>
                <div class='box p-30 opacity-0 hide desc-b'>
                    <p class='text-regular m-0'>
                        {{ translations[lang].step3_text_producer }}
                    </p>
                </div>
                <div class='box p-30 opacity-0 hide name-b'><input class='text-regular text-center' v-model="name" placeholder='Veuillez entrer votre nom' /></div>
                <div class='box p-30 opacity-0 hide email-b'><input class='text-regular text-center' v-model="email" placeholder='Veuillez entrer votre addresse courriel' /></div>
                <div @click='step == 3 ? subscribe("Producer") : changeStep(1, "producer")' :class="{ 'disable-click': !evalInTransition() && step == 3 && (!name.trim() || !$root.isEmailValid(email)), 'button-enabled' : step == 3 && name.trim() && $root.isEmailValid(email) }" class='button max-w-360' style='margin-top:40px;'>{{ translations[lang].step2_cta_producer }}</div>
            </div>
            <div class='box-community'>
                <div class='box first-b'>
                    <!-- <img style='height:210px;' src='../asset/images/landing/step2/family.png' /> -->
                    <h2 class='m-top-10' v-html='translations[lang].step2_title_client'></h2>
                    <p class='text-regular step2-text'>
                        {{ translations[lang].step2_text_client }}
                    </p>
                </div>
                <div class='box p-30 opacity-0 hide desc-b'>
                    <p class='text-regular m-0'>
                        {{ translations[lang].step3_text_client }}
                    </p>
                </div>
                <div class='box p-30 opacity-0 hide name-b'><input class='text-regular text-center' v-model="name" placeholder='Veuillez entrer votre nom' /></div>
                <div class='box p-30 opacity-0 hide email-b'><input class='text-regular text-center' v-model="email" placeholder='Veuillez entrer votre addresse courriel' /></div>
                <div @click='step == 3 ? subscribe("User") : changeStep(1, "community")' :class="{ 'disable-click': !evalInTransition() && step == 3 && (!name.trim() || !$root.isEmailValid(email)), 'button-enabled' : step == 3 && name.trim() && $root.isEmailValid(email) }" class='button max-w-360' style='margin-top:40px;'>{{ translations[lang].step2_cta_client }}</div>
            </div>
        </div>
        <div class='bottom-wrapper'>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import farm1 from '@/asset/images/landing/farms/farm1.jpg'

var top = 35;
var topStep2 = 278;
var inTransition = false;
var completedAnim = false;
var animStep = 0;
var darkMode = false;
var saveOpacity = 1;
var farmNum = 1;
var lastY = null;
var inTouch = null;

export default {
    name: 'Landing',
    data: function() {
        return {
            step: 0,
            name: "",
            email: "",
            lang: 'fr',
            translations: {
                'fr' : {
                    step1_text: "Chacra ambitionne transformer la nature des chaînes d'approvisionnement alimentaire avec sa plateforme numérique d'économie collaborative qui met en relation directe les producteurs et les consommateurs. Notre approche inclusive revalorise les métiers agricoles et soutien le développement d'une agriculture humaine, locale et biologique pour assurer l'autonomie alimentaire de demain.",
                    step1_cta: "Comment ça marche ?",
                    step1_anim_1: "Les producteurs s'inscrivent et nous les accompagnons dans la personnalisation de leur profil pour que l'image qu'ils présentent soit la plus authentique que possible.",
                    step1_anim_2: "Ils définissent les unités, les prix et les disponibilités de leurs produits en fonction des prévisions de leur production saisonnière.",
                    step1_anim_3: "Les membres de la communauté consultent les profils et produits des producteurs et «adoptent» une part de la production.",
                    step1_anim_4: "Les producteurs travaillent de concert avec la nature pour assurer la maturation des produits dans le temps.",
                    step1_anim_5: "Les produits sont acheminés du producteur au membre de la communauté.",
                    step1_anim_cta: "Joignez-vous à nous",
                    step2_title_producer: "<span>V</span><span>o</span><span>u</span><span>s</span> <span>ê</span><span>t</span><span>e</span><span>s</span> <span>p</span><span>r</span><span>o</span><span>d</span><span>u</span><span>c</span><span>t</span><span>e</span><span>u</span><span>r</span> <span class='text-600'>?</span>",
                    step2_title_client: "<span>V</span><span>o</span><span>u</span><span>s</span> <span>a</span><span>i</span><span>m</span><span>e</span><span>z</span> <span>m</span><span>a</span><span>n</span><span>g</span><span>e</span><span>r</span> <span>l</span><span>o</span><span>c</span><span>a</span><span>l</span> <span class='text-600'>?</span>",
                    step2_text_producer: "Notre plateforme vous offre un espace ou vous pouvez raconter votre histoire à une communauté de gens qui cherchent à choisir et à agir pour le mieux. Nous voulons vous aider à sécuriser la pérennité de votre labeur.",
                    step2_text_client: "En adoptant la production saisonière de vos producteurs locaux sur la plateforme, vous supportez directement leur projet tout en vous assurant de faire des choix de consommations qui répondent à vos critères.",
                    step2_cta_producer: "Présentez-vous à la communauté",
                    step2_cta_client: "Supportez vos producteurs locaux",
                    step3_text_producer: "Assurons votre place sur la plateforme au lancement, entrez vos informations et nous vous contacterons sous peu",
                    step3_text_client: "Réservez votre place pour avoir accès à la plateforme en avant-première",
                    step3_cta_producer: "Entamez le dialogue",
                    step3_cta_client: "Réservez votre place",
                },
                'en': {
                    step1_text: "Chacra aims to transform the nature of food supply chains with its digital collaborative economy platform that puts producers and consumers in direct contact. Our inclusive approach enhances the agricultural professions and supports the development of human, local and organic agriculture to ensure food self-sufficiency in the future.",
                    step1_cta: "How does it work?",
                    step1_anim_1: "Producers register and we assist them in personalizing their profile so that the image they present is as authentic as possible.",
                    step1_anim_2: "They define the units, prices and availability of their products based on their production forecasts.",
                    step1_anim_3: "Community members browse the profiles and products of the producers and “adopt” shares of the production.",
                    step1_anim_4: "The producers work together with nature to ensure the maturation of the products.",
                    step1_anim_5: "The products are delivered to the member of the community.",
                    step1_anim_cta: "Join our community",
                    step2_title_producer: "<span>Y</span><span>o</span><span>u</span> <span>a</span><span>r</span><span>e</span> <span>a</span> <span>p</span><span>r</span><span>o</span><span>d</span><span>u</span><span>c</span><span>e</span><span>r</span> <span class='text-600'>?</span>",
                    step2_title_client: "<span>Y</span><span>o</span><span>u</span> <span>l</span><span>i</span><span>k</span><span>e</span> <span>l</span><span>o</span><span>c</span><span>a</span><span>l</span> <span>f</span><span>o</span><span>o</span><span>d</span> <span class='text-600'>?</span>",
                    step2_text_producer: "Our platform gives you a space where you can tell your story to a community of people who seek to choose and act for the best. We want to help you secure the future of your work.",
                    step2_text_client: "By adopting the production of your local producers on the platform, you directly support their project while ensuring you make consumption choices that meet your criteria.",
                    step2_cta_producer: "Introduce yourself to the community",
                    step2_cta_client: "Support your local producers",
                    step3_text_producer: "Let's secure your spot on the platform at launch, enter your information and we'll get back to you shortly",
                    step3_text_client: "Save your spot and get pre-access to the platform",
                    step3_cta_producer: "Start the dialogue",
                    step3_cta_client: "Save your spot",
                }
            }
        }
    },
    components: {
        
    },
    destroyed() {
    },
    mounted() {
        // this.init()
        document.title = 'Chacra CrowdFarming'
    },
    methods: {
        init: async function() {
            // var vue_obj = this;
            farmNum = Math.ceil(Math.random() * 1);
            var image = new Image();
            image.onload = function () {
                document.querySelector('.bottom-wrapper').style.background = 'url(' + image.src + ') no-repeat center';
                document.querySelector('.bottom-wrapper').style.backgroundSize = 'cover'
                document.querySelector('.bottom-wrapper').style.backgroundPositionY = 'top'
            }
            switch (farmNum) {
                case 1:
                    image.src = farm1;
                    break;
                default:
                    break;
            }
            document.querySelector('.bottom-wrapper').style.height = (100/this.$root.scale*1.3)+"vh";
            const animChar = async function() {
                var elem = document.querySelector(".loading-wrapper span:not(.opacity-1):not(.anim-steps-nav span)");
                if(elem) {
                    await new Promise(r => setTimeout(r, 40)).then(() => {
                        elem.classList.add('opacity-1');
                        animChar();
                    })
                }
            }
            animChar()
            setTimeout(() => {
                document.querySelector('.image-container img:nth-of-type(1)').style.opacity = 1;
            }, 25)
            setTimeout(() => {
                document.querySelector('.image-container img:nth-of-type(2)').style.opacity = 1;
            }, 50);
            setTimeout(() => {
                document.querySelector('.image-container img:nth-of-type(3)').style.opacity = 1;
            }, 100);
            setTimeout(() => {
                document.querySelector('.image-container img:nth-of-type(4)').style.opacity = 1;
            }, 200);
             setTimeout(() => {
                document.querySelector('.image-container img:nth-of-type(5)').style.opacity = 1;
            }, 300);
             setTimeout(() => {
                document.querySelector('.image-container img:nth-of-type(6)').style.opacity = 1;
            }, 400);
            setTimeout(() => {
                document.querySelector('.lang-select').style.opacity = 1;
            }, 650);
        },
        setLang: function(lang) {
            if(lang) {
                this.lang = lang;
                document.querySelector('.lang-select').style.transition = 'all 0.3s';
                document.querySelector('.lang-select').style.opacity = 0;
                this.changeStep(0)
            }
        },
        changeStep: function(direction = 1, context = null) {
            var vue_obj = this;
            switch (this.step + direction) {
                case 0:
                    setTimeout(() => {
                        document.querySelector('.bottom-wrapper').style.opacity = 1;
                    }, 0)
                    setTimeout(() => {
                        document.querySelector('.loading-wrapper').style.top = '35px';
                    }, 400);
                    setTimeout(() => {
                        // document.querySelector('.bottom-wrapper').style.opacity = 1;
                        document.querySelector('.step1').style.opacity = 1;
                        document.querySelector('.step1').style.pointerEvents = 'auto';
                        document.querySelector('.step1').style.top = '213px';
                        vue_obj.registerScroll();
                    }, 600);
                    break;
                case 1:
                    document.querySelector('.bottom-wrapper').style.height = (100/this.$root.scale*3)+"vh";
                    if(!darkMode) {
                        document.querySelector('#cw').style.background = '#99d6ea';
                        document.querySelector('.bottom-wrapper').style.opacity = 0.75;
                    } else {
                        saveOpacity = 0.75
                    }
                    inTransition = true;
                    top = 35;
                    document.querySelector('.loading-wrapper').style.top = top + 'px'
                    document.querySelector('.step1-text').style.transition = 'all 0.5s';
                    document.querySelector('.step1 .button').style.opacity = 0;
                    document.querySelector('.step1 .button').style.pointerEvents = 'none';
                    document.querySelector('.step1-text').style.height = document.querySelector('.step1-text').offsetHeight + 'px';
                    document.querySelector('.step1-text').style.opacity = 0;
                    document.querySelector('.step1-text').style.pointerEvents = 'none';
                    setTimeout(() => {
                        document.querySelector('.anim-steps-nav').classList.remove('hide');
                        // document.querySelector('.anim-steps-nav').classList.remove('opacity-0');
                        setTimeout(() => {
                            // document.querySelector('.anim-steps-nav').classList.remove('hide');
                            document.querySelector('.step1-text').style.height = 350 + 'px';
                            document.querySelector('.anim-steps-nav').classList.remove('opacity-0');
                            vue_obj.animSteps(1);
                            // document.querySelector('.anim-steps-nav').style.marginTop = '30px';
                        }, 100);
                    }, 200);
                    inTransition = false;
                    this.step += direction
                    break;
                case 2: 
                    document.querySelector('.bottom-wrapper').style.height = (100/this.$root.scale*8)+"vh";
                    if(!darkMode) {
                        document.querySelector('#cw').style.background = '#b8e0d2';
                        document.querySelector('.bottom-wrapper').style.opacity = 0.5;
                    } else {
                        saveOpacity = 0.5
                    }
                    document.querySelector('.step1').style.pointerEvents = 'none';
                    document.querySelector('.anim-steps-nav').style.pointerEvents = 'none';
                    completedAnim = true;
                    document.querySelector('.step1 p.pos-abs:not(.disable-click)').style.pointerEvents = 'none';
                    document.querySelector('.step1 .button').style.pointerEvents = 'none';
                    inTransition = true;
                    top = 35;
                    document.querySelector('.loading-wrapper').style.top = top + 'px'
                    setTimeout(() => { 
                        document.querySelector('.step1').style.transition = 'all 0.5s';
                        document.querySelector('.step1').style.opacity = 0;
                        document.querySelector('.step1').style.pointerEvents = 'none';
                        document.querySelector('.step1').style.top = '413px';
                    }, 200);
                    setTimeout(() => {
                        document.querySelector('.step2').style.top = topStep2 + 'px';
                        document.querySelector('.step2').style.pointerEvents = 'auto';
                        document.querySelector('.step2').style.opacity = 1;
                    }, 300);
                    setTimeout(() => {
                        inTransition = false;
                    }, 800);
                    this.step += direction
                    break;
                case 3: 
                    // document.querySelector('.bottom-wrapper').style.height = (100/this.$root.scale*3)+"vh";
                    // left only if window , in any case get them in display block after the transition is over
                    // will only have the inside transition if mobile
                    
                    // const insideTransition = func()() 
                     if(!darkMode) {
                        document.querySelector('#cw').style.background = 'rgb(255 255 255)';
                        document.querySelector('.bottom-wrapper').style.opacity = 0.3;
                    } else {
                        saveOpacity = 0.3
                    }
                    inTransition = true;
                    top = 35;
                    topStep2 = 278;
                    document.querySelector('.loading-wrapper').style.top = top + 'px'
                    document.querySelector('.step2').style.top = topStep2 + 'px';
                    var sign = '+';
                    var other = 'community';
                    var contextCta = this.translations[this.lang].step3_cta_producer;
                    if(context == 'community') {
                        sign = '-';
                        other = 'producer';
                        contextCta = this.translations[this.lang].step3_cta_client;
                    }
                    var insideAnimation = function() {
                        setTimeout(() => {
                            document.querySelector('.box-'+context + ' h2').style.marginTop = '10px';
                            // document.querySelector('.box-'+context + ' .step2-text').style.marginTop = '0px';
                            // document.querySelector('.box-'+context + ' .step2-text').style.height = document.querySelector('.box-'+context + ' .step2-text').offsetHeight + 'px';
                            // document.querySelector('.box-'+context + ' img').style.transition = 'all 0.5s';
                            // document.querySelector('.box-'+context + ' img').style.opacity = 0;
                            document.querySelector('.box-'+context + ' .step2-text').style.opacity = 0;
                            document.querySelector('.box-'+context + ' .step2-text').style.pointerEvents = 'none';
                            document.querySelector('.box-'+context +' .button').style.opacity = 0;
                            // document.querySelector('.box-'+context + ' .step2-text').style.marginTop = '-' + document.querySelector('.box-'+context + ' .step2-text').offsetHeight + 'px';
                            // document.querySelector('.box-'+context + ' .step2-text').style.marginBottom = '0px';
                        }, 600);
                        setTimeout(() => {
                            // document.querySelector('.box-'+context + ' .step2-text').textContent = "Restez à l'affut des derniers avancements dans le projet en remplissant le formulaire de contact ci-dessous et réserver votre place pour avoir accès au marché en avant-première."
                            // document.querySelector('.box-'+context + ' .step2-text').style.opacity = 1;
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
                                            // document.querySelector('.box-'+context + ' img').style.transition = 'all 1s';
                                            document.querySelector('.box-'+context + ' h2').style.transition = 'all 1s';
                                            document.querySelector('.box-'+context + ' .first-b').style.paddingBottom = '0px';

                                            document.querySelector('.box-'+context + ' h2').style.marginTop = '-15px';
                                            // document.querySelector('.box-'+context + ' img').style.height = '0px'
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

                                            setTimeout(() => {
                                                document.querySelector('.box-'+context + ' .first-b').style.border = 'none';
                                            }, 650); 

                                            inTransition = false;
                                            vue_obj.$forceUpdate();                                            
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
                            document.querySelector('.box-'+other).style.opacity = 0;
                        }, 100);
                        insideAnimation()
                    } else {
                        document.querySelector('.box-community').classList.add('final-step');
                        document.querySelector('.box-'+other).style.display = 'none';
                        insideAnimation()
                    }
                   
                    // top = 35;
                    
                    // document.querySelector('.loading-wrapper').style.top = top + 'px'
                    // setTimeout(() => {
                    //     document.querySelector('.step1').style.transition = 'all 0.5s';
                    //     document.querySelector('.step1').style.opacity = 0;
                    //     document.querySelector('.step1').style.pointerEvents = 'none';
                    //     document.querySelector('.step1').style.top = '413px';
                    // }, 200);
                    // setTimeout(() => {
                    //     document.querySelector('.step2').style.top = topStep2 + 'px';
                    //     document.querySelector('.step2').style.pointerEvents = 'auto';
                    //     document.querySelector('.step2').style.opacity = 1;
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
        animSteps: function(newStep, stopAuto = false) {
            if(newStep != animStep && !inTransition) {
                var vue_obj = this;
                var personLeft = document.querySelector('.personLeft');
                var personRight = document.querySelector('.personRight');
                var form = document.querySelector('.form');
                var prevision = document.querySelector('.prevision');
                var love = document.querySelector('.love');
                var coordination = document.querySelector('.coordination');
                var produce = document.querySelector('.produce');
                inTransition = true;
                document.querySelector('.anim-steps-nav').style.pointerEvents = 'none';
                if(animStep > 0) {
                    document.querySelector('.step1 p.pos-abs:nth-of-type('+(animStep+1)+')').classList.add('disable-click');
                    document.querySelector('.step1 p.pos-abs:nth-of-type('+(animStep+1)+')').classList.add('opacity-0');
                    document.querySelector('.step1 p.pos-abs:nth-of-type('+(animStep+1)+')').style.bottom = '65px';
                }
                var moveOut = function() {
                    if(animStep == 1) {
                        form.style.opacity = 0;
                        form.style.bottom = '380px';
                        form.style.right = '250px';
                    } else if(animStep == 2) {
                        prevision.style.opacity = 0;
                        prevision.style.bottom = '380px';
                        // prevision.style.left = 'calc(50% + 60px)';
                    } else if(animStep == 3) {
                        love.style.opacity = 0;
                        love.style.bottom = '280px';
                        // if(newStep != 4) {
                            personRight.style.opacity = 0;
                            personRight.style.right = '-40px';
                            personRight.style.transform = 'unset';
                        // }
                    }
                    else if(animStep == 4) {
                        personLeft.style.transform = 'unset';
                        personLeft.style.left = '0px';
                        // if(newStep != 1 || newStep != 2) {
                        //     personLeft.style.opacity = 0;
                        // }
                        personRight.style.transform = 'unset';
                        personRight.style.right = '0px';
                        // if(newStep != 3) {
                        //     personRight.style.opacity = 0;
                        // }
                        coordination.style.bottom = '220px';
                        coordination.style.opacity = 0;
                    } else if(animStep == 5) {
                        produce.style.bottom = '100px';
                        produce.style.opacity = 0;
                    }
                    if(newStep == 3 || newStep == 5) {
                        personLeft.style.transform = 'unset';
                        personLeft.style.left = '0px';
                        personLeft.style.opacity = 0;
                    }
                }
                var resetFunc = function() {
                    setTimeout(() => {
                        if(newStep != 1) {
                            form.style.bottom = '310px';
                            form.style.right = '150px';
                        }
                        if(newStep != 2) {
                            prevision.style.bottom = '299px';
                            prevision.style.left = 'calc(50% + 150px)';
                        }
                        if(newStep != 3) {
                            love.style.bottom = '200px';
                        }
                        // if(newStep != 4) {
                        //     console.log('tmp')
                        // }
                        // if(newStep != 5) {
                        //     console.log('tmp')
                        // }
                    }, 1000);
                }
                setTimeout(() => {
                    moveOut();
                    resetFunc();
                    switch (newStep) {
                        case 1:
                            personLeft.style.opacity = 1;
                            personLeft.style.left = '50%';
                            personLeft.style.transform = 'translateX(-50%)';
                            personLeft.style.bottom = '180px';
                            setTimeout(() => {
                                form.style.opacity = 1;
                                form.style.bottom = '300px';
                                form.style.right = '250px';
                            }, 250);
                            break;
                        case 2:
                            personLeft.style.left = '50%';
                            personLeft.style.transform = 'translateX(-50%)';
                            personLeft.style.opacity = 1;
                            personLeft.style.bottom = '180px';
                            setTimeout(() => {
                               prevision.style.opacity = 1;
                               prevision.style.bottom = '299px';
                               prevision.style.left = 'calc(50% + 60px)';
                            }, 250);
                            break;
                        case 3:
                            personRight.style.opacity = 1;
                            personRight.style.right = '50%';
                            personRight.style.transform = 'translateX(50%)';
                            personRight.style.bottom = '180px';
                            setTimeout(() => {
                                love.style.opacity = 1;
                                love.style.bottom = '250px';
                            }, 550);
                            break;
                        case 4:
                            personLeft.style.transform = 'unset';
                            personLeft.style.left = '55px';
                            personLeft.style.opacity = 0;
                            personLeft.style.bottom = '180px';
                            personRight.style.right = '55px';
                            personRight.style.transform = 'unset';
                            personRight.style.opacity = 0;
                            personRight.style.bottom = '180px';
                            // setTimeout(() => {
                                coordination.style.bottom = '175px';
                                coordination.style.opacity = 1;
                            // }, 250)
                            break;
                        case 5:
                            produce.style.bottom = '110px';
                            produce.style.opacity = 1;
                            break;
                        default:
                            break;
                    }
                    document.querySelector('.step1 p.pos-abs:nth-of-type('+(newStep+1)+')').classList.remove('disable-click');
                    document.querySelector('.step1 p.pos-abs:nth-of-type('+(newStep+1)+')').classList.remove('opacity-0');
                    document.querySelector('.step1 p.pos-abs:nth-of-type('+(newStep+1)+')').style.bottom = '87px';
                    document.querySelector('.anim-steps-nav span.active').classList.remove('active');
                    document.querySelector('.anim-steps-nav span:nth-of-type('+newStep+')').classList.add('active');
                }, 250);   
                setTimeout(() => {
                    if(animStep > 0) {
                        document.querySelector('.step1 p.pos-abs:nth-of-type('+(animStep+1)+')').style.bottom = '115px';
                    } else {
                        document.querySelector('.step1 .button').textContent = vue_obj.translations[vue_obj.lang].step1_anim_cta;   
                        document.querySelector('.step1 .button').style.opacity = 1;     
                        document.querySelector('.step1 .button').style.pointerEvents = 'none';                                 
                    }
                    animStep = newStep;
                }, 1000);   
                setTimeout(() => {
                    inTransition = false;
                    document.querySelector('.anim-steps-nav').style.pointerEvents = 'auto';
                    if(newStep == 5 || stopAuto == true) {
                        completedAnim = true;
                        document.querySelector('.step1 .button').style.color = '#FFF';   
                        document.querySelector('.step1 .button').style.background = '#000';   
                        document.querySelector('.step1 .button').style.pointerEvents = 'auto';                                 
                    } else {
                        setTimeout(() => {
                            if(!completedAnim && !stopAuto) {
                                vue_obj.animSteps(newStep+1);
                            } 
                        }, 4000);    
                    }
                }, 2000);
                                                  
            }
        },
        toggleDarkMode: function() {
            if(!darkMode) {
                saveOpacity = document.querySelector('.bottom-wrapper').style.opacity;
                document.querySelector('.bottom-wrapper').style.opacity = 1
                document.querySelector('.bottom-wrapper').style.filter = 'brightness(0)'
                document.querySelector('.armatic').style.color = '#FFFFFF';
                // document.querySelector('.moon').classList.remove('opacity-0');
                document.querySelectorAll('.box').forEach(node => {
                    node.style.background = '#fafffe';
                })
            } else {
                document.querySelector('.bottom-wrapper').style.opacity = saveOpacity;
                document.querySelector('.bottom-wrapper').style.filter = 'brightness(1)'
                document.querySelector('.armatic').style.color = '#3a3d3c';
                // document.querySelector('.moon').classList.add('opacity-0');
                document.querySelectorAll('.box').forEach(node => {
                    node.style.background = '#fafffee2';
                })
            }
            darkMode = !darkMode
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
                    case 'touchmove':
                        if(!inTouch) {
                            var currentY = event.touches[0].clientY;
                            if(currentY > lastY){
                                change -= 30
                            } else if(currentY < lastY  && top < 35){
                                change += 30;
                            }
                            lastY = currentY;
                            inTouch = setTimeout(() => {
                                inTouch = null;
                            },1);
                        }
                        
                        break;
                    case 'wheel':
                        if(event.deltaY > 0) {
                            change -= 50;
                        } else if(event.deltaY < 0 && top < 35) {
                            change += Math.min(50, (top * -1) + 35);
                        }
                        break;
                    case 'keydown':
                        if(event.key == 'ArrowDown') {
                            change -= 50;
                        } else if(event.key == 'ArrowUp' && top < 35) {
                            change += Math.min(50, (top * -1) + 35);
                        }
                        break;
                    default:
                        break;
                }
                top += change;
                
                document.querySelector('.loading-wrapper').style.top = top + 'px';
                if(this.step == 1 || this.step == 2 || this.step == 3) {
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
        },
        evalInTransition: () => {
            return inTransition;
        },
        subscribe: async function(type, data = {}, response = {}) {
            var vue_obj = this;
            data[type + 'Email'] = vue_obj.email;
            data[type + 'Name'] = vue_obj.name;
            response = await this.$root.request(
                'SESSION_MANAGER',
                '/subscribe',
                data
            );
            console.log(response)
        },
    },
}
</script>

<style scoped>
    #cw {
        background:#219ebc;
        max-height:100vh;
        overflow: hidden;
        transition:all 1s;
    }
    .loading-wrapper {
        position:absolute;
        left:50%;
        top:calc(50% - 142.5px);
        transform: translateX(-50%);
        transition:all 1s;
        max-width: 800px;
        width: 100%;
        /* max-height: 100vh;
        overflow:hidden; */
        z-index:5;
    }
    .loading-circle {
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='black' stroke-width='2' stroke-dasharray='9%2c 6%2c 7' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
        border-radius: 100px;
        /* animation: spin 12s linear infinite; */
        width:125px;
        height:125px;
        margin:auto;
        opacity:0;
    }
    #cw h1 {
        padding-top:15px;
        color:#FFF;
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
        max-width:800px;
        /* margin-bottom:1em; */
    }
    .landing-wrapper.step1 {
        z-index:4;
        transition: all 0.7s;
        pointer-events:none;
    }
    .bottom-wrapper {
        z-index:1;
        transition: all 1s;
        opacity:0;
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
    .box-producer, .box-community {
        width: calc(50% - 40px);
        padding:0;
        background:#FFFFFF00;
        box-shadow:unset;
    }
    .box-producer .box, .box-community .box {
        padding: 30px;
        padding-bottom:20px;
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
    .anim-steps-nav {
        /* margin-top:15px; */
    }
    .anim-steps-nav span {
        width:15px;
        height:15px;
        background:#FFFFFF;
        border:2px solid #FFFFFF;
        margin:5px;
        border-radius:100px;
        opacity:0.5;
        cursor: pointer;
        transition:all 0.2s;
    }
    .anim-steps-nav span.active {
        border-color:#FFFFFF;
        background:#FFFFFF;
        opacity:1;
    }
    .anim-steps-nav span:hover:not(.active) {
        opacity:0.75;
    }
    .step1 p.pos-abs {
        bottom: 115px;
        left: 50%;
        width: calc(100% - 100px);
        transform: translateX(-50%);
    }
    .moon {
        width: 6px;
        margin: 5px;
        /* padding: 99px; */
        box-shadow: 0px 0px 30px 10px #315ba3;
        border-radius: 300px;
        -webkit-animation: spin 8s linear infinite;
        animation: spin 8s linear infinite;
    }
    .personLeft, .personRight {
        position:absolute;
        width:330px;
        bottom:180px;
        transition:all .750s;
        opacity:0;
        pointer-events: none;
    }
    .personLeft {
        left:0px;
    }
    .personRight {
        right:0px;
    }
    .form, .prevision, .love, .coordination, .produce {
        position:absolute;
        transition:all 0.750s;
        opacity:0;
        pointer-events: none;
    }
    .love {
        width:50px;
        bottom:200px;
        right:calc(50% + 75px);
    }
    .form {
        width: 90px;
        right: 150px;
        bottom:300px;
    }
    .prevision {
        width:110px;
        left:calc(50% + 150px);
        bottom:299px;
        /* border-radius:300px; */
        /* border:1px solid white; */
    }
    .coordination {
        bottom:220px;
        width:250px;
        left:50%;
        transform: translateX(-50%);
    }
    .produce {
        left:50%;
        transform: translateX(-50%);
        bottom:100px;
        width:355px;
        transition:all 0.5s;
    }
    .name-b {
        padding-bottom: 5px !important;
        padding-top:5px !important;
    }
    .name-b input {
        max-width:220px;
    } 
    .email-b input {
        max-width:325px;
    }
    /* .bottom-wrapper {
        opacity:0!important;
    } */
    .lang-select {
        z-index:10000;
        opacity:0;
        transition:all 1s;
        color:#FFFFFF
    }

@media only screen and (max-width: 1060px) {
    .landing-wrapper.step2 {
        display:block;
    }
    .box-producer, .box-community {
        width:100%;
        margin:auto
    }
    .box-community:not(.final-step) {
        margin-top:50px !important;
    }
    .first-b {
        margin:auto !important;
    }
}


@media only screen and (max-width: 675px) {
    .landing-wrapper {
        max-width: 100%;
    }
    .landing-wrapper .box {
        box-shadow: unset;
        border-radius: unset;
        background:unset;
        padding-left: 5px;
        padding-right: 5px;
        /* padding-top:0px; */
    }
    .box-producer, .box-community {
        width:calc(100% - 40px);
        margin:auto
    }
    .box-producer .first-b {
        padding-top:0px !important;
        margin-top:0px !important;
    }
    .box-producer .button {
        margin-top:30px;
    }
    .button {
        max-width:calc(100% - 40px);
        margin:auto;
    }
    .button {
        background: #000000;
        color: #FFFFFF;
    }
    h1.armatic {
        font-size: 48px;
    }
    /* .bottom-wrapper {
        opacity:0!important;
    } */
    h2 {
        font-size:24px;
    }
    .text-regular {
        font-size:16px;
        line-height:20px;
    }
    .step1 p.pos-abs {
        bottom: 115px;
        left: 50%;
        width: calc(100% - 10px);
        transform: translateX(-50%);
    }
}

    
</style>