<template>
    <div id='cw' :style='{zoom: $root.scale, "height": (100/$root.scale)+"vh"}'>
        <div class='loading-wrapper'>
             <div class='loading-circle t-500 disable-click' @click='toggleDarkMode()'>
                 <!-- <img class='moon opacity-0' src='../asset/images/moon.png' /> -->
             </div>
             <div class='image-container pos-abs disable-click' @click='toggleDarkMode()'>
                <img src='../asset/images/loader/tree.png' />
                <img src='../asset/images/loader/tree1.png' />
                <img src='../asset/images/loader/tree2.png' />
                <img src='../asset/images/loader/tree3.png' />
                <img src='../asset/images/loader/tree4.png' />
                <img src='../asset/images/loader/tree5.png' />
             </div>
            <h1 class='text-center armatic'><span>C</span><span>h</span><span>a</span><span>c</span><span>r</span><span>a</span> <span>C</span><span>r</span><span>o</span><span>w</span><span>d</span><span>F</span><span>a</span><span>r</span><span>m</span><span>i</span><span>n</span><span>g</span></h1>
            <div class='landing-wrapper step1'>
                <div class='box p-bot-30'>
                    <p class='text-regular m-0 step1-text'>
                        Chacra CrowdFarming ambitionne transformer la nature des chaînes d’approvisionnements alimentaires en facilitant la vente directe grâce à l'innovation numérique. Nous croyons en une agriculture et une consommation alimentaire plus responsable, caractérisé par une industrie biologique, locale et humaine. C’est pourquoi nous plaçons les agriculteurs au centre de notre mission sociale.
                    </p>
                    <img class='personLeft' src='../asset/images/landing/step1/personLeft.png' />
                    <img class='form' src='../asset/images/landing/step1/form.png' />
                    <img class='prevision' src='../asset/images/landing/step1/prevision.png' />
                    <img class='love' src='../asset/images/landing/step1/love.png' />
                    <img class='coordination' src='../asset/images/landing/step1/coordination.png' />
                    <img class='produce' src='../asset/images/landing/step1/produce.png' />
                    <img class='personRight' src='../asset/images/landing/step1/personRight.png' />
                    <p class='text-regular m-0 opacity-0 pos-abs disable-click t-500'>
                        Les agriculteurs s'inscrivent et nous les accompagnons dans la personnalisation de leur profil pour que l'image qu'ils présentent soit la plus authentique que possible. 
                    </p>
                    <p class='text-regular m-0 opacity-0 pos-abs disable-click t-500'>
                        Ils définissent les unités, les prix et les disponibilités de leurs produits en fonction des prévisions de leur production saisonnière.
                    </p>
                    <p class='text-regular m-0 opacity-0 pos-abs disable-click t-500'>
                        Les membres de la communauté consultent les profils et produits des agriculteurs et en adoptent la production. 
                    </p>
                    <p class='text-regular m-0 opacity-0 pos-abs disable-click t-500'>
                        Quand le temps de la récolte approche, les deux parties coordonnent les moyens de l'acheminement des produits.
                    </p>
                    <p class='text-regular m-0 opacity-0 pos-abs disable-click t-500'>
                        Les produits sont acheminés de l'agriculteur au membre de la communauté.
                    </p>
                    <div class='flex-row opacity-0 t-500 anim-steps-nav justify-center'>
                        <span class='active' @click="animSteps(1, true)"></span>
                        <span  @click="animSteps(2, true)"></span>
                        <span  @click="animSteps(3, true)"></span>
                        <span  @click="animSteps(4, true)"></span>
                        <span  @click="animSteps(5, true)"></span>
                    </div>
                </div>
                <div @click='changeStep()' class='button m-top-20' style='max-width:350px;'>Comment ça marche ?</div>
            </div>
        </div>
        <div class='landing-wrapper step2 flex-row justify-between'>
            <div class='box-producer'>
                <div class='box first-b'>
                    <!-- <img style='height:210px;' src='../asset/images/landing/step2/farmers.png' /> -->
                    <h2 class='m-top-10'><span>V</span><span>o</span><span>u</span><span>s</span> <span>ê</span><span>t</span><span>e</span><span>s</span> <span>a</span><span>g</span><span>r</span><span>i</span><span>c</span><span>u</span><span>l</span><span>t</span><span>e</span><span>u</span><span>r</span> <span class='text-600'>?</span></h2>
                    <p class='text-regular step2-text'>
                       <!-- Notre plateforme vous offre un espace où vous pouvez raconter votre histoire, rejoindre une communauté de gens qui cherchent à choisir et à agir pour le mieux et assurer l'écoulement du fruit de votre labeur -->
                        <!-- Notre plateforme vous offre un espace ou vous pouvez raconter votre histoire à une communauté de gens qui cherchent à choisir et à agir pour le mieux pour que vous puissiez sécuriser la pérennité de votre labeur -->
                        Notre plateforme vous offre un espace ou vous pouvez raconter votre histoire à une communauté de gens qui cherchent à choisir et à agir pour le mieux. Nous voulons vous aider à sécuriser la pérennité de votre labeur.
                    </p>
                </div>
                <div class='box p-30 opacity-0 hide desc-b'>
                    <p class='text-regular m-0'>
                        Assurons votre place sur la plateforme au lancement, entrez vos informations et nous vous contacterons sous peu
                    </p>
                </div>
                <div class='box p-30 opacity-0 hide name-b'><input class='text-regular text-center' v-model="name" placeholder='Veuillez entrer votre nom' /></div>
                <div class='box p-30 opacity-0 hide email-b'><input class='text-regular text-center' v-model="email" placeholder='Veuillez entrer votre addresse courriel' /></div>
                <div @click='step == 3 ? subscribe("Producer") : changeStep(1, "producer")' :class="{ 'disable-click': !evalInTransition() && step == 3 && (!name.trim() || !$root.isEmailValid(email)), 'button-enabled' : step == 3 && name.trim() && $root.isEmailValid(email) }" class='button max-w-300' style='margin-top:40px;'>Présentez-vous</div>
            </div>
            <div class='box-community'>
                <div class='box first-b'>
                    <!-- <img style='height:210px;' src='../asset/images/landing/step2/family.png' /> -->
                    <h2 class='m-top-10'><span>V</span><span>o</span><span>u</span><span>s</span> <span>a</span><span>i</span><span>m</span><span>e</span><span>z</span> <span>m</span><span>a</span><span>n</span><span>g</span><span>e</span><span>r</span> <span>l</span><span>o</span><span>c</span><span>a</span><span>l</span> <span class='text-600'>?</span></h2>
                    <p class='text-regular step2-text'>
                        En adoptant la production saisonière de vos agriculteurs locaux sur la plateforme, vous supportez directement leur projet tout en vous assurant de faire des choix de consommations qui répondent à vos critères.
                    </p>
                </div>
                <div class='box p-30 opacity-0 hide desc-b'>
                    <p class='text-regular m-0'>
                       Réservez votre place pour avoir accès à la plateforme en avant-première
                    </p>
                </div>
                <div class='box p-30 opacity-0 hide name-b'><input class='text-regular text-center' v-model="name" placeholder='Veuillez entrer votre nom' /></div>
                <div class='box p-30 opacity-0 hide email-b'><input class='text-regular text-center' v-model="email" placeholder='Veuillez entrer votre addresse courriel' /></div>
                <div @click='step == 3 ? subscribe("User") : changeStep(1, "community")' :class="{ 'disable-click': !evalInTransition() && step == 3 && (!name.trim() || !$root.isEmailValid(email)), 'button-enabled' : step == 3 && name.trim() && $root.isEmailValid(email) }" class='button max-w-300' style='margin-top:40px;'>Supportez vos agriculteurs</div>
            </div>
        </div>
        <div class='bottom-wrapper'>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import farm1 from '@/asset/images/landing/farms/farm1.jpg'
// import farm2 from '@/asset/images/landing/farms/farm2.jpg'
// import farm3 from '@/asset/images/landing/farms/farm3.jpg'
// import farm4 from '@/asset/images/landing/farms/farm4.jpg'
// import farm5 from '@/asset/images/landing/farms/farm5.jpg'
// import farm6 from '@/asset/images/landing/farms/farm6.jpg'
// import farm7 from '@/asset/images/landing/farms/farm7.jpg'
// import farm8 from '@/asset/images/landing/farms/farm8.jpg'
// import farm9 from '@/asset/images/landing/farms/farm9.jpg'
// import farm10 from '@/asset/images/landing/farms/farm10.jpg'
// import farm11 from '@/asset/images/landing/farms/farm11.jpg'
// import farm12 from '@/asset/images/landing/farms/farm12.jpg'
// import farm13 from '@/asset/images/landing/farms/farm13.jpg'
// import farm14 from '@/asset/images/landing/farms/farm14.jpg'
// import farm15 from '@/asset/images/landing/farms/farm15.jpg'

var top = 35;
var topStep2 = 278;
var inTransition = false;
var completedAnim = false;
var animStep = 0;
var darkMode = false;
var saveOpacity = 1;
var farmNum = 1;

export default {
    name: 'Landing',
    data: function() {
        return {
            step: 0,
            name: "",
            email: "",
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
                // case 2:
                //     image.src = farm2;
                //     break;
                // case 3:
                //     image.src = farm3;
                //     break;
                // case 4:
                //     image.src = farm4;
                //     break;
                // case 5:
                //     image.src = farm5;
                //     break;
                // case 6:
                //     image.src = farm6;
                //     break;
                // case 7:
                //     image.src = farm7;
                //     break;
                // case 8:
                //     image.src = farm8;
                //     break;
                // case 9:
                //     image.src = farm9;
                //     break;
                // case 10:
                //     image.src = farm10;
                //     break;
                // case 11:
                //     image.src = farm11;
                //     break;
                // case 12:
                //     image.src = farm12;
                //     break;
                // case 13:
                //     image.src = farm13;
                //     break;
                // case 14:
                //     image.src = farm14;
                //     break;
                // case 15:
                //     image.src = farm15;
                    // break;
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
                document.querySelector('.bottom-wrapper').style.opacity = 1;
            }, 1600)
            setTimeout(() => {
                document.querySelector('.loading-wrapper').style.top = '35px';
            }, 2000);
            setTimeout(() => {
                // document.querySelector('.bottom-wrapper').style.opacity = 1;
                document.querySelector('.step1').style.opacity = 1;
                document.querySelector('.step1').style.top = '213px';
                vue_obj.registerScroll();
            }, 2200);
            
        },
        changeStep: function(direction = 1, context = null) {
            var vue_obj = this;
            switch (this.step + direction) {
                case 0:
                    break;
                case 1:
                    document.querySelector('.bottom-wrapper').style.height = (100/this.$root.scale*3)+"vh";
                    if(!darkMode) {
                        console.log(document.querySelector('.bottom-wrapper').style.opacity)
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
                    var contextCta = "Entamez le dialogue";
                    if(context == 'community') {
                        sign = '-';
                        other = 'producer';
                        contextCta = 'Réservez votre place';
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
                        prevision.style.right = '230px';
                    } else if(animStep == 3) {
                        love.style.opacity = 0;
                        love.style.bottom = '280px';
                        if(newStep != 4) {
                            personRight.style.opacity = 0;
                            personRight.style.right = '-40px';
                            personRight.style.transform = 'unset';
                        }
                    }
                    else if(animStep == 4) {
                        personLeft.style.transform = 'unset';
                        personLeft.style.left = '-40px';
                        if(newStep != 1 || newStep != 2) {
                            personLeft.style.opacity = 0;
                        }
                        personRight.style.transform = 'unset';
                        personRight.style.right = '-40px';
                        if(newStep != 3) {
                            personRight.style.opacity = 0;
                        }
                        coordination.style.bottom = '380px';
                        coordination.style.opacity = 0;
                    } else if(animStep == 5) {
                        produce.style.bottom = '100px';
                        produce.style.opacity = 0;
                    }
                    if(newStep == 3 || newStep == 5) {
                        personLeft.style.transform = 'unset';
                        personLeft.style.left = '-40px';
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
                            prevision.style.bottom = '310px';
                            prevision.style.right = '150px';
                        }
                        if(newStep != 3) {
                            love.style.bottom = '200px';
                        }
                        if(newStep != 4) {
                            console.log('tmp')
                        }
                        if(newStep != 5) {
                            console.log('tmp')
                        }
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
                            personLeft.style.bottom = '200px';
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
                               prevision.style.bottom = '310px';
                               prevision.style.right = '230px';
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
                            }, 350);
                            break;
                        case 4:
                            personLeft.style.transform = 'unset';
                            personLeft.style.left = '55px';
                            personLeft.style.opacity = 1;
                            personLeft.style.bottom = '180px';
                            personRight.style.right = '55px';
                            personRight.style.transform = 'unset';
                            personRight.style.opacity = 1;
                            personRight.style.bottom = '180px';
                            // setTimeout(() => {
                                coordination.style.bottom = '295px';
                                coordination.style.opacity = 1;
                            // }, 250)
                            break;
                        case 5:
                            produce.style.bottom = '115px';
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
                        document.querySelector('.step1 .button').textContent = "Joignez-vous à nous";   
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
        }
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
        top:calc(50% - 62.5px);
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
        transition: all 0.2s;

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
        bottom:200px;
        transition:all 0.5s;
        opacity:0;
        pointer-events: none;
    }
    .personLeft {
        left:-40px;
    }
    .personRight {
        right:-40px;
    }
    .form, .prevision, .love, .coordination, .produce {
        position:absolute;
        transition:all 0.5s;
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
        right:150px;
        bottom:310px;
    }
    .coordination {
        bottom:380px;
        width:150px;
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

@media only screen and (max-width: 1060px) {
    .landing-wrapper.step2 {
        display:block;
    }
    .box-producer, .box-community {
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
        padding-left: 5px;
        padding-right: 5px;
        /* padding-top:0px; */
    }
    .box-producer, .box-community {
        width:calc(100% - 40px);
        margin:auto
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
}

    
</style>