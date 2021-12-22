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
            <div class='flex-row text-center align-center justify-center m-top-30 text-regular pointer lang-select'>
                <!-- <span class='text-underline' style='margin-right:10px;' @click="setLang('fr')">Français</span> <span class='text-underline' style='margin-left:10px;' @click="setLang('en')">English</span> -->
            </div>
            <div class='landing-wrapper step1'>
                <div class='box p-bot-30'>
                    <div class='step1-text'>
                        <div class='step1-text-1 t-500'>
                            <p class='text-regular m-0'>
                                {{ translations[lang].step1_text }}
                            </p>
                            <img @click='handleStep0()' class='m-top-50 pointer' src='../asset/images/landing/arrow.svg' />
                        </div>
                        <div class='step1-text-2 t-500 opacity-0' style='margin-top:150px;'>
                            <img @click='handleStep0(-1)' class='pointer rotate-180' src='../asset/images/landing/arrow.svg' />
                            <h2 class='text-white m-top-40' v-html='translations[lang].step1_title2'></h2>
                            <p class='text-regular'>
                                {{ translations[lang].step1_text2 }}
                            </p>
                            <img @click='handleStep0()' class='m-top-30 pointer' src='../asset/images/landing/arrow.svg' />
                        </div>
                        <div class='step1-text-3 t-500 opacity-0' style='margin-top:150px;'>
                            <img @click='handleStep0(-1)' class='pointer rotate-180' src='../asset/images/landing/arrow.svg' />
                            <h2 class='text-white m-top-40' v-html='translations[lang].step1_title3'></h2>
                            <p class='text-regular'>
                                {{ translations[lang].step1_text3 }}
                            </p>
                            <img @click='handleStep0()' class='m-top-30 pointer' src='../asset/images/landing/arrow.svg' />
                        </div>
                        <div class='step1-text-4 t-500 opacity-0' style='margin-top:150px;'>
                            <img @click='handleStep0(-1)' class='pointer rotate-180' src='../asset/images/landing/arrow.svg' />
                            <h2 class='text-white m-top-40' v-html='translations[lang].step1_title4'></h2>
                            <p class='text-regular'>
                                {{ translations[lang].step1_text4 }}
                            </p>
                        </div>
                    </div>
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
                <div @click='changeStep()' class='button' style='max-width:350px;'>{{ translations[lang].step1_cta }}</div>
                <div class='step4-text m-auto max-w-650'>
                    <p class='text-regular text-center m-0' style='font-size:42px;'>
                        {{ translations[lang].step4_text }}
                    </p>
                    <h2 class='text-center m-0 m-top-60'>
                        {{ translations[lang].step4_know }}
                    </h2>
                    <p class='text-regular text-center m-0 m-top-30'>
                        {{ didYouKnow_text }}
                    </p>
                    <p class='text-regular text-center m-0 pointer' style='font-size:42px;color:#FFF;margin-top:2em;' @click='resetFlow'>
                        ↻
                    </p>
                </div>
            </div>
        </div>
        <div class='landing-wrapper step2 flex-row justify-between'>
            <div class='box-producer target-scroll'>
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
                <div class='box p-30 opacity-0 hide name-b'><input class='text-regular text-center' v-model="name" :placeholder='translations[lang].step3_name_placeholder' /></div>
                <div class='box p-30 opacity-0 hide email-b'><input class='text-regular text-center' v-model="email" :placeholder='translations[lang].step3_email_placeholder' /></div>
                <div @click='step == 3 ? subscribe("Producer") : changeStep(1, "producer")' :class="{ 'disable-click': !evalInTransition() && step == 3 && (!name.trim() || !$root.isEmailValid(email)), 'button-enabled' : step == 3 && name.trim() && $root.isEmailValid(email) }" class='button max-w-360 t-500' style='margin-top:40px;'>{{ translations[lang].step2_cta_producer }}</div>
            </div>
            <div class='box-community target-scroll'>
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
                <div class='box p-30 opacity-0 hide name-b'><input class='text-regular text-center' v-model="name" :placeholder='translations[lang].step3_name_placeholder' /></div>
                <div class='box p-30 opacity-0 hide email-b'><input class='text-regular text-center' v-model="email" :placeholder='translations[lang].step3_email_placeholder' /></div>
                <div @click='step == 3 ? subscribe("User") : changeStep(1, "community")' :class="{ 'disable-click': !evalInTransition() && step == 3 && (!name.trim() || !$root.isEmailValid(email)), 'button-enabled' : step == 3 && name.trim() && $root.isEmailValid(email) }" class='button max-w-360 t-500' style='margin-top:40px;'>{{ translations[lang].step2_cta_client }}</div>
            </div>
        </div>
        <div class='bottom-wrapper'></div>
        <div class='landing-menu'>
            <div class='menu-container text-regular text-white'>
                <div class='flex-row t-200' :class="{ 'opacity-0' : menuState == 0 }">
                    <span class='pointer' style='margin-right:15px;'>{{  translations[lang].menu_cta }}</span>
                    <span class='pointer' style='margin-right:10px;' @click="lang == 'FR' ? setLang('EN') : setLang('FR')">{{ lang == "FR" ? "EN" : "FR" }}</span>
                </div>
                <img class='pointer menu-menu' src='../asset/images/landing/menu.svg' @click='toggleMenu' />
                <img class='pointer hide menu-close' src='../asset/images/landing/x.svg' @click='toggleMenu' />
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

var top = 75;
var topStep2 = 278;
var inTransition = false;
var completedAnim = false;
var animStep = 0;
var darkMode = false;
var saveOpacity = 1;
var step0Pt = 1
var inScroll = null;
// var lastY = null;
// var inTouch = null;

export default {
    name: 'Landing',
    data: function() {
        return {
            menuState: 0,
            isMobile: false,
            completedFlow: null,
            didYouKnow_text: "",
            step: 0,
            name: "",
            email: "",
            lang: 'FR',
            translations: {
                'FR' : {
                    menu_cta: "S'inscrire",
                    step1_title2: "Sécurité alimentaire et autonomie alimentaire",
                    step1_title3: "Le problème de la chaîne d'approvisionnement traditionnelle",
                    step1_title4: "Vente directe en circuit court et crowdfarming",
                    step1_text: "Chacra ambitionne transformer la nature de la chaîne d'approvisionnement alimentaire avec sa plateforme numérique d'économie collaborative qui met en relation directe les producteurs et les consommateurs. Notre approche inclusive revalorise les métiers agricoles et soutien le développement d'une agriculture humaine, locale et biologique pour assurer l'autonomie alimentaire de demain.",
                    step1_text2: "Les récents événements internationaux ont mis en lumière la fragilité des échanges commerciaux transfrontaliers. Les problèmes d'approvisionnement, notamment en alimentaire représentent un enjeu majeur. Il est important d'augmenter l'autonomie alimentaire locale pour diminuer la dépendance aux importations. Pour y arriver, il faut souternier l'achat local et biologique, tout en améliorant les procéder de production et de distribution.",
                    step1_text3: "La présence d'intermédiaires dans la chaîne d'approvisionnement alimentaire fait gonfler l'empreinte écologique de la production de chaque aliment et provoque une pression économique tant sur le producteur que sur le consommateur. Les bénéfices ont tendance à s'amoindrir pour l'agriculteur pendant que le consommateur expérimente une augmentation constante des prix. De plus, la mauvaise coordination entre production et consommation alimentaire provoque un important gaspillage alimentaire.",
                    step1_text4: "Notre modèle simplifie la chaîne d'approvisionnement alimentaire et offre aux producteurs de toutes tailles un canal de vente direct et un service de crowdfarming pour soutenir leurs activités de commercialisation. Le crowdfarming est notre réponse aux exigences des procédés excessifs de l'industrie agroalimentaire — une production avec peu d'égard pour les processus énergétiques de la planète et pour ses travailleurs. Nous voulons participé au développement d'une industrie à échelle humaine, une industrie qui aligne les besoins et les moyens de sa production dans le respect de tous ses acteurs.",
                    step1_cta: "Comment ça marche ?",
                    step1_anim_1: "Les producteurs s'inscrivent et nous les accompagnons dans la création de leur profil pour qu'ils présentent une image authentique.",
                    step1_anim_2: "Ils définissent les unités, les prix et les disponibilités de leurs produits en fonction des prévisions de leur production saisonnière.",
                    step1_anim_3: "Les membres de la communauté consultent les profils et produits des producteurs et adoptent une part de la production.",
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
                    step3_name_placeholder: "Veuillez entrer votre nom",
                    step3_email_placeholder: "Veuillez entrer votre addresse courriel",
                    step3_cta_producer: "Entamez le dialogue",
                    step3_cta_client: "Réservez votre place",
                    step4_text: "❤",
                    step4_know: "Saviez-vous que...?",
                    step4_know1: "Au Pérou, la petite ferme est appelée chacra. Le terme chacra vient du mot quechua chakra. Communément utilisé au Pérou, nous le retrouvons à travers le continent sudaméricain pour désigner une ferme.",
                    step4_know2: "En Amérique du Nord, il y a plus de 2 millions de petites fermes ou fermes familiales, soit plus de 90% des exploitations agricoles. Ces entreprises garantissent la sécurité alimentaire de millions d'individus à travers le continent.",
                },
                'EN': {
                    menu_cta: "Subscribe",
                    step1_title2: "Food security and food autonomy",
                    step1_title3: "The problem of the traditional supply chain",
                    step1_title4: "Direct sales and crowdfarming",
                    step1_text: "Chacra aims to transform the nature of the food supply chain with its digital collaborative economy platform that puts producers and consumers in direct contact. Our inclusive approach enhances the agricultural professions and supports the development of human, local and organic agriculture to ensure food self-sufficiency in the future.",
                    step1_text2: "Recent international events have highlighted the fragility of cross-border trade. Supply problems, particularly in food, represent a major issue. It is important to increase local food autonomy to reduce dependence on imports. To achieve this, we must support local and organic purchasing, while improving production and distribution processes.",
                    step1_text3: "The presence of intermediaries in the food supply chain inflates the ecological footprint of the production of each produce and puts economic pressure on both the producer and the consumer. Profits tend to diminish for the farmer as the consumer experiences a constant increase in prices. In addition, poor coordination between food production and consumption causes significant food waste.",
                    step1_text4: "Our model simplifies the food supply chain and provides producers of all sizes with a direct sales channel and crowdfunding service to support their activities. Crowdfarming is our response to the demands of excessive processes in the food industry — production with low regard for the energy processes of the planet and for its workers. We want to participate in the development of an industry on a human scale, an industry that aligns the needs and means of its production with respect for all of its players.",
                    step1_cta: "How does it work?",
                    step1_anim_1: "Producers sign-up and we assist them in personalizing their profile so that they present an authentic image.",
                    step1_anim_2: "They define the units, prices and availability of their products based on their production forecasts.",
                    step1_anim_3: "Community members browse the profiles and products of the producers and adopt shares of the production.",
                    step1_anim_4: "The producers work together with nature to ensure the maturation of the products.",
                    step1_anim_5: "The products are delivered to the member of the community.",
                    step1_anim_cta: "Join our community",
                    step2_title_producer: "<span>Y</span><span>o</span><span>u</span> <span>a</span><span>r</span><span>e</span> <span>a</span> <span>p</span><span>r</span><span>o</span><span>d</span><span>u</span><span>c</span><span>e</span><span>r</span> <span class='text-600'>?</span>",
                    step2_title_client: "<span>Y</span><span>o</span><span>u</span> <span>l</span><span>o</span><span>v</span><span>e</span> <span>l</span><span>o</span><span>c</span><span>a</span><span>l</span> <span>f</span><span>o</span><span>o</span><span>d</span> <span class='text-600'>?</span>",
                    step2_text_producer: "Our platform gives you a space where you can tell your story to a community of people who seek to choose and act for the best. We want to help you secure the future of your work.",
                    step2_text_client: "By adopting the production of your local producers on the platform, you directly support their project while ensuring you make consumption choices that meet your criteria.",
                    step2_cta_producer: "Introduce yourself to the community",
                    step2_cta_client: "Support your local producers",
                    step3_text_producer: "Let's secure your spot on the platform at launch, enter your information and we'll get back to you shortly",
                    step3_text_client: "Save your spot and get pre-access to the platform",
                    step3_name_placeholder: "Please enter your name",
                    step3_email_placeholder: "Please enter your email address",
                    step3_cta_producer: "Start the dialogue",
                    step3_cta_client: "Save your spot",
                    step4_text: "❤",
                    step4_know: "Did you know...?",
                    step4_know1: "In Peru, the small farm is called chacra. The term chacra comes from the Quechua word chakra. Commonly used in Peru, we find it across the South American continent to denote a farm.",
                    step4_know2: "In North America, there are more than 2 million small farms and family farms, or more than 90% of agricultural operations. These companies ensure food security for millions of people across the continent.",
                }
            }
        }
    },
    components: {
        
    },
    destroyed() {
        this.removeScroll();
    },
    mounted() {
        this.completedFlow = document.cookie.match(/^(.*;)?\s*completedFlow\s*=\s*[^;]+(.*)?$/)
        document.title = 'Chacra - CrowdFarming'
    },
    methods: {
        getCookie: function (cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        toggleMenu: function() {
            let vue_obj = this;
            document.querySelector('.menu-container .menu-menu').style.opacity = 0;
            document.querySelector('.menu-container .menu-close').style.opacity = 0;
            setTimeout(() => {
                if(vue_obj.menuState == 0) {
                    document.querySelector('.menu-container .menu-menu').style.display = 'none';
                    document.querySelector('.menu-container .menu-close').style.display = 'block';
                    document.querySelector('.menu-container .menu-close').style.opacity = 1;
                    vue_obj.menuState = 1;
                } else {
                    document.querySelector('.menu-container .menu-close').style.display = 'none';
                    document.querySelector('.menu-container .menu-menu').style.display = 'block';
                    document.querySelector('.menu-container .menu-menu').style.opacity = 1;
                    vue_obj.menuState = 0;
                }
            }, 300);
        },
        init: async function() {
            let vue_obj = this;
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                this.isMobile = true;
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
                // document.querySelector('.lang-select').style.opacity = 1;
            }, 650);
            setTimeout(() => {
                var lang = this.getCookie("lang");
                vue_obj.setLang(lang ? lang : 'FR', true)
            }, 1200);
        },
        setLang: function(lang, first = false) {
            if(lang) {
                this.lang = lang;
                document.querySelector('.lang-select').style.transition = 'all 0.3s';
                document.querySelector('.lang-select').style.opacity = 0;                
                document.querySelector('.lang-select').style.pointerEvents = 'none';
                this.didYouKnow_text = this.translations[this.lang]["step4_know"+Math.ceil(Math.random() * 2)];
                if(first) this.changeStep(0)
                else if(this.step == 0) {
                    this.handleStep0(null, 1);
                    document.cookie = "lang="+lang+"; expires=Sun, 1 Jan 2023 12:00:00 UTC";
                }
            }
        },
        changeStep: function(direction = 1, context = null) {
            if(inTransition) {
                return
            }
            var vue_obj = this;
            switch (this.step + direction) {
                case 0:
                    setTimeout(() => {
                        document.querySelector('.bottom-wrapper').style.opacity = 1;
                    }, 0)
                    setTimeout(() => {
                        document.querySelector('.loading-wrapper').style.top = '75px';
                    }, 400);
                    setTimeout(() => {
                        if(vue_obj.completedFlow) {
                            this.step = 4;
                            document.querySelector('.bottom-wrapper').style.height = (100/this.$root.scale*8)+"vh";
                            document.querySelector('#cw').style.background = 'rgb(255 255 255)';
                            document.querySelector('.bottom-wrapper').style.opacity = 0.3;
                            // document.querySelector('.step1').style.transition = 'all 3s';
                            document.querySelector('.step1 .box').style.display = 'none';
                            document.querySelector('.step1 .button').style.display = 'none';
                            document.querySelector('.step1 .step4-text').style.display = 'block';
                            document.querySelector('.step1 .step4-text').style.opacity = 1;
                            document.querySelector('.step1').style.top = '278px';
                        } else {
                            document.querySelector('.step1').style.top = '213px';
                        }
                        // document.querySelector('.bottom-wrapper').style.opacity = 1;
                        document.querySelector('.step1').style.opacity = 1;
                        document.querySelector('.step1').style.pointerEvents = 'auto';
                        if(this.isMobile) {
                            document.querySelector('#cw').style.maxHeight = '130vh';
                            document.querySelector('#cw').style.height = '130vh';
                            document.querySelector('#cw').style.minHeight = '100vh';
                        }
                        setTimeout(() => {
                            document.querySelector('.landing-menu').style.opacity = 1;
                        }, 250);
                        vue_obj.registerScroll();
                    }, 600);
                    break;
                case 1:
                    document.querySelector('.landing-menu').style.transition = 'all 0.5s';
                    document.querySelector('.landing-menu').style.opacity = 0;
                    document.querySelector('.landing-menu').style.pointerEvents = 'none';
                    document.querySelector('.bottom-wrapper').style.height = (100/this.$root.scale*3)+"vh";
                    if(this.isMobile) {
                        document.querySelector('#cw').style.maxHeight = 'unset';
                        document.querySelector('#cw').style.height = '878px';
                    }
                    if(!darkMode) {
                        document.querySelector('#cw').style.background = '#99d6ea';
                        document.querySelector('.bottom-wrapper').style.opacity = 0.75;
                    } else {
                        saveOpacity = 0.75
                    }
                    inTransition = true;
                    document.querySelector('.step1-text').style.transition = 'all 0s';
                    document.querySelector('.step1-text').style.height = '1055px';
                    document.querySelector('.step1-text').style.opacity = 0;
                    document.querySelector('.step1-text').style.pointerEvents = 'none';
                    this.handleStep0(null, 1, true);
                    setTimeout(() => {
                        document.querySelector('.step1-text').style.transition = 'all 0.75s';
                        setTimeout(() => {
                            document.querySelector('.anim-steps-nav').classList.remove('hide');
                            document.querySelector('.anim-steps-nav').style.pointerEvents = 'auto';
                            document.querySelector('.step1-text').style.height = 350 + 'px';
                            document.querySelector('.anim-steps-nav').classList.remove('opacity-0');
                            vue_obj.animSteps(1);
                        }, 200);
                        inTransition = false;
                    }, 400);
                    this.step += direction
                    break;
                case 2: 
                    if(this.isMobile) {
                        document.querySelector('#cw').style.height = 278 + document.querySelector('.step2').offsetHeight + 100 + 'px';
                    }
                    document.querySelector('.bottom-wrapper').style.height = (100/this.$root.scale*8)+"vh";
                    if(!darkMode) {
                        document.querySelector('#cw').style.background = '#b8e0d2';
                        document.querySelector('.bottom-wrapper').style.opacity = 0.5;
                    } else {
                        saveOpacity = 0.5
                    }
                    inTransition = true;
                    completedAnim = true;
                    top = 35;
                    document.querySelector('.step1').style.pointerEvents = 'none';
                    document.querySelector('.anim-steps-nav').style.pointerEvents = 'none';
                    document.querySelector('.step1 p.pos-abs:not(.disable-click)').style.pointerEvents = 'none';
                    document.querySelector('.step1 .button').style.pointerEvents = 'none';
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
                        setTimeout(() => { 
                            document.querySelector('.box-community .button').classList.add('button-enabled');
                            document.querySelector('.box-producer .button').classList.add('button-enabled');
                        }, 525);
                    }, 300);
                    setTimeout(() => {
                        inTransition = false;
                    }, 800);
                    this.step += direction
                    break;
                case 3: 
                    if(this.isMobile) {
                        document.querySelector('#cw').style.height = 278 + document.querySelector('.step2').offsetHeight + 100 + 'px';
                    }
                    document.querySelector('.step1 .box').style.display = 'none';
                    document.querySelector('.step1 .button').style.display = 'none';
                    document.querySelector('.step1 .step4-text').style.display = 'block';
                    document.querySelector('.step1').style.top = '200px';
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
                            document.querySelector('.box-'+context +' .button').classList.remove('button-enabled');

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
                        document.querySelector('.box-'+other).classList.add('hide');
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
                case 4:
                    if(this.isMobile) {
                        document.querySelector('#cw').style.height = 278 + document.querySelector('.step1').offsetHeight + 100 + 'px';
                    }
                    document.cookie = "completedFlow=true; expires=Sun, 1 Jan 2023 12:00:00 UTC";
                    inTransition = true;
                    top = 35;
                    document.querySelector('.loading-wrapper').style.top = top + 'px'
                    document.querySelector('.step2').style.transition = 'all 0.5s';
                    document.querySelector('.step2').style.top =  '413px';
                    document.querySelector('.step2').style.pointerEvents = 'none';
                    document.querySelector('.step2').style.opacity = 0;
                    document.querySelector('.step1').style.transition = 'all 1s';
                    document.querySelector('.step1').style.opacity = 1;
                    document.querySelector('.step1').style.pointerEvents = 'auto';
                    document.querySelector('.step1').style.top = topStep2 + 'px';
                    document.querySelector('.step4-text').style.opacity = 1;
                    setTimeout(() => {
                        inTransition = false;
                    }, 800);
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
                    document.querySelector('.step1 p.pos-abs:nth-of-type('+(animStep)+')').classList.add('disable-click');
                    document.querySelector('.step1 p.pos-abs:nth-of-type('+(animStep)+')').classList.add('opacity-0');
                    document.querySelector('.step1 p.pos-abs:nth-of-type('+(animStep)+')').style.bottom = '65px';
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
                        produce.style.bottom = '90px';
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
                    document.querySelector('.step1 p.pos-abs:nth-of-type('+(newStep)+')').classList.remove('disable-click');
                    document.querySelector('.step1 p.pos-abs:nth-of-type('+(newStep)+')').classList.remove('opacity-0');
                    document.querySelector('.step1 p.pos-abs:nth-of-type('+(newStep)+')').style.bottom = '87px';
                    document.querySelector('.anim-steps-nav span.active').classList.remove('active');
                    document.querySelector('.anim-steps-nav span:nth-of-type('+newStep+')').classList.add('active');
                }, 250);   
                setTimeout(() => {
                    if(animStep > 0) {
                        document.querySelector('.step1 p.pos-abs:nth-of-type('+(animStep)+')').style.bottom = '115px';
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
            // window.addEventListener('mousedown', this.handleScroll);
            // window.addEventListener('touchmove', this.handleScroll);
            window.addEventListener('wheel', this.handleScroll);
            window.addEventListener('keydown', this.handleScroll);

        },
        removeScroll:function() {
            // document.querySelector('.loading-wrapper').style.transition = 'all 0.5s';
            // window.addEventListener('mousedown', this.handleScroll);
            // window.addEventListener('touchmove', this.handleScroll);
            window.removeEventListener('wheel', this.handleScroll);
            window.removeEventListener('keydown', this.handleScroll);
        },
        handleScroll: function(event) {
            if(!inTransition && !inScroll) {
                inScroll = setTimeout(() => {
                    var contextTop = 35;
                    var change = 0;
                    event.preventDefault();

                     // verify end of page
                    var applyScroll = false;
                    var selector = 0;
                    var diff = 0;
                    switch (this.step) {
                        case 0:
                            selector = '.step1 .button'
                            diff = 100
                            contextTop = 75
                            break;
                        case 1:  
                            selector = '.step1 .button'
                            diff = 115
                            break;
                        case 2:
                            selector = '.box-community .button'
                            diff = 160
                            break;
                        case 3:
                            selector = '.step2 .target-scroll:not(.hide) .button'
                            diff = 160
                            break;
                        case 4: 
                            selector = '.step4-text .pointer'
                            diff = 180
                            break;
                        default:
                            break;
                    }

                    switch (event.type) { 
                        case 'touchmove':
                            // event.preventDefault();
                            // if(!inTouch) {
                            //     var currentY = event.touches[0].clientY;
                            //     if(currentY > lastY && top < 75){
                            //         change += 30
                            //     } else if(currentY < lastY){
                            //         change -= 30;
                            //     }
                            //     lastY = currentY;
                            //     inTouch = setTimeout(() => {
                            //         inTouch = null;
                            //     },1);
                            // }
                            break;
                        case 'wheel':
                            if(event.deltaY > 0) {
                                change -= 40;
                            } else if(event.deltaY < 0 && top < contextTop) {
                                change += Math.min(50, (top * -1) + contextTop);
                            }
                            break;
                        case 'keydown':
                            if(event.key == 'ArrowDown') {
                                change -= 40;
                            } else if(event.key == 'ArrowUp' && top < contextTop) {
                                change += Math.min(50, (top * -1) + contextTop);
                            }
                            break;
                        default:
                            break;
                    }

                    if(change > 0 ||document.querySelector(selector).offsetTop + document.querySelector(selector).offsetHeight + diff > Math.abs(top)) {
                        applyScroll = true;
                    }

                    if(applyScroll) {
                        top += change;
                    
                        document.querySelector('.loading-wrapper').style.top = top + 'px';
                        if(this.step == 2 || this.step == 3) {
                            topStep2 += change;
                            document.querySelector('.step2').style.top = topStep2 + 'px';
                        } else if(this.step == 0) {
                            var div = document.querySelector('.step1-text-'+(step0Pt));
                            var myTop = div.offsetTop;
                            if(change > 0) {
                                switch (step0Pt) {
                                    case 2:
                                    case 3:
                                    case 4:
                                        if(Math.abs(top) <= myTop - 100) {
                                            this.handleStep0(-1);
                                        }
                                        break;
                                    default:
                                        break;
                                }
                            } else if (change < 0) {
                                switch (step0Pt) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        if(Math.abs(top) >= myTop + 150) {
                                            this.handleStep0();
                                        }
                                        break;
                                    default:
                                        break;
                                }
                            }
                        }
                    }
                    inScroll = null;
                }, 40);
                
                
            //     if(top != topCopy) {
            //         setTimeout(() => {
            //             inScroll = false;
            //         }, 30)
            //     } else {
            //         inScroll = false;
            //     }
            }
        },
        handleStep0: (direction = 1, overwiteStep = null, top35 = null) => {
            inTransition = true;
            var newDir = overwiteStep ? overwiteStep : step0Pt + direction;
            // var prevDiv = document.querySelector('.step1-text-'+(step0Pt));
            var prevDiv = document.querySelector('.step1-text-'+(step0Pt));
            var div = document.querySelector('.step1-text-'+(newDir));
            var myTop = div.offsetTop;
            document.querySelector('.step1 .button').style.opacity = 0;
            var step1Height = document.querySelector('.step1-text-1').offsetHeight;
            if(newDir == 1) {
                top = top35 ? 35 : 75
                document.querySelector('.loading-wrapper').style.top = top + 'px';
            } else {
                myTop += step1Height - 105;
                if(newDir == 4) {
                    document.querySelector('.step1 .button').style.opacity = 1;
                }
                document.querySelector('.loading-wrapper').style.top = (-myTop) + 'px';
                top = (-myTop)
            }
            prevDiv.classList.add('opacity-0');
            div.classList.remove('opacity-0');
            step0Pt = newDir;
            setTimeout(() => {
                inTransition = false;
            }, 2000)
        },
        evalInTransition: () => {
            return inTransition;
        },
        subscribe: async function(type, data = {}, response = {}) {
            var vue_obj = this;
            data[type + 'Email'] = vue_obj.email;
            data[type + 'Name'] = vue_obj.name;
            response = await this.$root.request(
                "https://api.chacra.net",
                '/subscribe',
                data
            );
            console.log(response)
            this.changeStep(1)
        },
        resetFlow: function() {
            document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
            location.reload();
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
    .landing-menu {
        width:100%;
        position:fixed;
        top:0px;
        height:40px;
        background:#FFFFFF10; 
        backdrop-filter: blur(5px);
        z-index:6;
        opacity:0;
        transition:all 1.5s;
    }
    .menu-container {
        max-width:calc(800px - 60px);
        width:100%;
        height:40px;
        display:flex;
        justify-content: flex-end;
        /* padding:5px; */
        /* padding-right:10px; */
        /* padding-left:10px; */
        margin:auto;
        align-items:center;
        font-size:15px;
    }
    .menu-container img {
        height:18px;
        transition:all 0.3s;
    }
    .loading-wrapper {
        position:absolute;
        left:50%;
        top:calc(50% - 112.5px);
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
    .bottom-wrapper {
        z-index:1;
        transition: all 1s;
        opacity:0;
        width:100%;
        background: url("../asset/images/landing/farms/farm1.jpg") no-repeat center; 
        background-size: cover;
        background-position-y: top;
    }
    .landing-wrapper.step1 {
        z-index:4;
        width:100%;
        transition: all 0.7s;
        pointer-events:none;
    }
    .step1 .button {
        opacity:0;
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
    .anim-steps-nav {
        pointer-events:none;
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
        left:50%;
        transform: translateX(-50%)
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
        bottom:90px;
        width:355px;
        transition:all 0.5s;
    }
    .name-b {
        padding-bottom: 5px !important;
        padding-top:5px !important;
    }
    .name-b input {
        border-radius: 0px !important;
        max-width:220px;
    } 
    .email-b input {
        border-radius: 0px !important;
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
    .step4-text {
        display:none;
        opacity:0;
        transition:all 0.5s;
    }
    .first-b, .desc-b, .name-b, .email-b {
        margin:auto !important;
        margin-top:1em !important;
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
}
@media only screen and (max-width: 820px) {

    .menu-container {
        /* padding-right:10px; */
        /* padding-left:10px; */
    }
}

@media only screen and (max-width: 765px) {

    .menu-container {
        max-width:calc(100% - 20px);
    }
}

@media only screen and (max-width: 675px) {
    h1.armatic {
        font-size: 44px;
    }
    /* .bottom-wrapper {
        opacity:0!important;
    } */
    h2 {
        font-size:24px;
    }
    .text-regular {
        font-size:15px;
        line-height:20px;
    }
    .button {
        font-size:15px;
        line-height:20px;
        width:fit-content !important;
        padding-left:40px;
        padding-right:40px;
    }
    .landing-wrapper {
        max-width: 100%;
    }
    .landing-wrapper .box {
        box-shadow: unset;
        border-radius: unset;
        background:unset;
        padding-left: 10px;
        padding-right: 10px;
        padding-top:0px;
        margin-top:0px;
        /* padding-top:0px; */
    }
    .step1-text {
        padding-top:15px;
        line-height:24px;
    }
    .step4-text {
        padding-left:15px;
        padding-right:15px;
    }
    .personLeft, .personRight {
        width:310px;
    }
    .coordination {
        width:220px;
    }
    .produce {
        width:335px;
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
    .step1 p.pos-abs {
        bottom: 115px;
        left: 50%;
        width: calc(100% - 10px);
        transform: translateX(-50%);
    }
}

    
</style>