<template>
    <header class="page__header header" :class="classes">
        <div class="container">
            <div class="header__row"> 
                <div class="header__col header__col--logo">                    
                    <HeaderLogoComponent
                        :logo="logo"    
                    />
                </div>
                <div class="header__col header__col--search">                    
                    <SearchComponent/>
                </div>
                <div class="header__col header__col--profile">                    
                    <HeaderProfileComponent
                        :name="profile.name"
                        :photo="profile.photo"
                    />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
import HeaderLogoComponent from './HeaderLogoComponent.vue';
import SearchComponent from './SearchComponent.vue';
import HeaderProfileComponent from './HeaderProfileComponent.vue';

export default {
    name: 'HeaderComponent',
    components: {
        SvgIcon,
        HeaderLogoComponent,
        SearchComponent,
        HeaderProfileComponent,
    },  

    props: {
        classes: {            
            default: "",
            type: String,
        }, 
        logo: {
            type: String,            
        },  
    },

    computed: {
        profile() {
            return this.$store.getters['getProfile'];
        },    
    },
}
</script>

<style lang="scss"> 
.header {
    position: relative; 

    height: rem($height-header-mobile);  
    width: 100%;    

    background-color: $white;

    box-shadow: 0px rem(3px) rem(10px) rgba($black, .05);

    @media #{$screen-tablet} {
        height: rem($height-header-desktop);
    }

    &__row {
        width: 100%;
        height: 100%;

        display: flex;

        justify-content: space-between;
        align-items: center;

        flex-wrap: wrap;

        @media #{$screen-tablet} {
            width: 100%;
            flex-wrap: nowrap;
            margin-left: rem(-25px);
            margin-right: rem(-25px);
        }

        @media #{$screen-desktop} {
            margin-left: rem(-30px);
            margin-right: rem(-30px);
        }
    }

    &__col {
        @media #{$screen-tablet} {
            margin-left: rem(25px);
            margin-right: rem(25px);
        }

        @media #{$screen-desktop} {
            margin-left: rem(30px);
            margin-right: rem(30px);
        }

        &--logo {
            width: rem(135px);
            flex-shrink: 0;
            flex-grow: 0;

            order: 1;

            @media #{$screen-tablet} {
                order: 1;
            }
        }

        &--search {
            width: 100%;
            height: rem(41px);

            flex-grow: 0;
            flex-shrink: 1;

            order: 3;

            margin-left: rem(-20px);

            @media #{$screen-tablet} {
                order: 2;

                border-top: 0;

                margin-left: rem(25px);
                margin-right: rem(25px);
            }
                
            @media #{$screen-desktop} {
                margin-left: rem(30px);
                margin-right: rem(30px);
            }
        }

        &--profile {
            position: relative;

            width: rem(24px);
            height: rem(63px); 

            flex-shrink: 0;
            flex-grow: 0;

            order: 2;

            @media #{$screen-tablet} {
                width: rem(129px);
                height: rem($height-header-desktop);

                order: 3;

                border-left: rem(1px) solid $athens-gray;

                padding-left: rem(20px);
                margin-right: 0;
            }
        }
    }

    &::after {
        position: absolute;

        display: block;

        content: "";
        
        bottom: rem(41px);
        left: 0;
        width: 100%;
        height: 1px;
        background-color: $heather;
        @media #{$screen-tablet} {
            display: none;
        }
    }
}
</style>