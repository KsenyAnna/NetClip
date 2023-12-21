<template>
    <div class="profile profile--hidden" :class="classes">
        <router-link to="/" class="profile__link"></router-link> 
        <div class="profile__block">
            <span class="profile__name">{{ name }}</span>
            <div class="profile__avatar">
                <img class="profile__avatar-pic" 
                    :src="require(`@/assets/images/${photo}`)" 
                >
            </div>
        </div>
        <div class="profile__icon">
            <SvgIcon
                :name="'person'"
                :classN="'profile__icon-pic'"
            />                                              
        </div>
    </div>
 </template>
 
 <script>
 import SvgIcon from './SvgIcon.vue';
 
 export default {
     name: 'HeaderProfileComponent',
     components: {
         SvgIcon
     },    
 
     props: {
        classes: {            
            default: "",
            type: String,
        },  
        name: {
           type: [String, Number],
        },
        photo: {
            default: 'bg_foto.jpg',
            type: String,
        },
     }
 }
 </script>
 
 <style lang="scss">
 </style>
 