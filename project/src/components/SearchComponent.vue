<template>
    <form class="form form--wide" :class="classes">
        <div class="form__field">
            <div class="form__field-block form__field-block--input">                                       
                <div class="input input--small input--buttoned input--search">
                    <button type="button" class="button button__icon button--circular input__button input__button--search">
                        <SvgIcon
                            :name="'search'"
                            classN:="'button__icon--circular'"
                        />
                    </button>                                
                    <input  type="text" name="text5" id="text5" class="input__control" placeholder="Найти...">
                </div>
            </div>
        </div>
    </form>
 </template>
 
 <script>
 import SvgIcon from './SvgIcon.vue';
 
 export default {
     name: 'SearchComponent',
     components: {
         SvgIcon
     },    
     props: {
        classes: {            
            default: "",
            type: String,
        },    
    },
 }
 </script>
 
 <style lang="scss">
 </style>
 