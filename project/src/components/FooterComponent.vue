<template>
    <footer class="page__footer footer" :class="classes">
        <div class="container">
            <div class="footer__row">
                <div class="footer__col footer__col--social">
                    <FooterSocialsComponent
                        :classes="classesSocial"
                        :icons="icons"
                    />                    
                </div>
                <div class="footer__col footer__col--menu"> 
                    <FooterMenuComponent
                        :classes="classesMenu"
                        :menu="menu"
                    /> 
                </div>
                <div class="footer__col footer__col--logotip"> 
                    <FooterLogoComponent
                        :classes="classesLogo"
                        :logo="logo"
                    />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SvgIcon from './SvgIcon.vue';
import FooterSocialsComponent from './FooterSocialsComponent.vue';
import FooterMenuComponent from './FooterMenuComponent.vue';
import FooterLogoComponent from './FooterLogoComponent.vue';

export default {
    name: 'FooterComponent',
    components: {
        SvgIcon,
        FooterSocialsComponent,
        FooterMenuComponent,
        FooterLogoComponent,
    },

    props: {   
        classes: {            
            default: "",
            type: String,
        }, 
        logo: {
            default: 'logo.png',
            type: String,
        },
        classesLogo: {
            default: '',
            type: String,
        },
        classesSocial: {
            default: '',
            type: String,
        },
        classesMenu: {
            default: '',
            type: String,
        },
    },

    computed: {
        menu() {
            return this.$store.getters['getMenuFooter'];
        },    
        icons() {
            return this.$store.getters['getSocialIcons'];
        },    
    }
}
    

</script>

<style lang="scss"> 
.footer {
    width: 100%;    
    min-height: rem(80px);


    background-color: $white;

    &__row {
        background-color: $white;

        width: 100%;

        display: flex;
        flex-direction: row;

        justify-content: space-between;   
        align-items: center;

        flex-wrap: wrap;

        @media #{$screen-tablet} {
            flex-wrap: nowrap;
        }
    }

    &__col {
        width: 100%;

        padding: rem(20px) 0;

        @media #{$screen-tablet} { 
            &:not(:last-child) {
                padding-left: 0;
                padding-right: rem(40px);
                padding-top: rem(31px);
                padding-bottom: rem(31px);
            }
        }

        @media #{$screen-desktop} {  
            &:not(:last-child) {
                padding-left: 0;
                padding-right: rem(80px);
            }
        }

        &--social {
            position: relative;
            border-bottom: rem(1px) solid $heather;            

            @media #{$screen-tablet} {
                width: auto;
                
                border-bottom: 0;
            }

            @media #{$screen-desktop} {
                &::after {
                    position: absolute;

                    display: block;

                    content: "";

                    width: rem(1px);
                    height: rem(40px);

                    right: rem(40px);
                    top: 50%;

                    transform: translateY(-50%);
                    background-color: $heather;
                }
            }            
        }

        &--menu {

            flex-grow: 1;
            flex-shrink: 1;

            border-bottom: rem(1px) solid $heather;

            @media #{$screen-tablet} {
                width: auto;

                border-bottom: 0;
            }
        }

        &--logotip {
            @media #{$screen-tablet} {
                width: auto;
            }
        }
    }  
}
</style>