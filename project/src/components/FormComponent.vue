<template>
    <form action="#" 
        class="editing-profile__form" 
        id="editing-profile-forms" 
        data-form-edit
        @submit.prevent="submit"
    >    
    <section class="editing-profile__block">
        <h3 class="editing-profile__title title title--h3">{{ titles[0].text }}</h3>
        <div class="editing-profile__list">
        
            <div class="form editing-profile__item" id="editing-profile-form">                        
                <div class="form__field">
                    <div class="form__field-block form__field-block--label">
                        <label for="firstname" class="form__label">
                            <span class="form__label-text form__label-text--required">{{ labels.firstname.text }}</span>
                        </label>
                    </div>
                    <div class="form__field-block form__field-block--input">
                        <div class="input">
                            <input 
                                type="text" 
                                name="firstname" 
                                id="firstname" 
                                class="input__control" 
                                placeholder="Введите имя..." 
                                required
                                v-model="form.firstName"
                            >
                        </div>
                    </div>
                </div>
            </div>

            <div class="form editing-profile__item" id="editing-profile-form">                        
                <div class="form__field">
                    <div class="form__field-block form__field-block--label">
                        <label for="lastname" class="form__label">
                            <span class="form__label-text form__label-text--required">{{ labels.lastname.text }}</span>
                        </label>
                    </div>
                    <div class="form__field-block form__field-block--input">
                        <div class="input">
                            <input 
                                type="text" 
                                name="lastname" 
                                id="lastname" 
                                class="input__control" 
                                placeholder="Введите фамилию..." 
                                required
                                v-model="form.lastName"
                            >
                        </div>
                    </div>
                </div>
            </div>

            <div class="form editing-profile__item" id="editing-profile-form">    
                <div class="form__field-block form__field-block--label">
                    <label for="specialization" class="form__label">
                        <span class="form__label-text form__label-text--required">{{ labels.specialization.text }}</span>
                    </label>
                </div>
                <div class="form__field-block ">
                    <div class="form__control">
                        <div class="select" data-select>
                            <select 
                                class="select__control required" 
                                name="specialization" id="specialization" 
                                data-select-control 
                                data-placeholder="Специализация" 
                                required
                                v-model="form.select1"
                            >
                                <option value="1">Верстальщик</option>
                                <option value="2">Фронтендер</option>
                                <option value="3">Бэкендер</option>
                                <option value="4" disabled>Недоступный</option>
                                <option value="5">Не знаю</option>
                            </select>
                            <label for="specialization" id="firstname-error" class="error form__label-posttext"></label>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="form editing-profile__item" id="editing-profile-form">    
                <div class="form__field-block form__field-block--label">
                    <label for="select" class="form__label">
                        <span class="form__label-text">{{ labels.select.text }}</span>
                    </label>
                </div>
                <div class="form__field-block ">
                    <div class="form__control">
                        <div class="select" data-select>
                            <select 
                                class="select__control" 
                                name="select" 
                                data-select-control 
                                data-placeholder="Выбранный пункт"
                                v-model="form.select2"
                            >
                                <option></option>
                                <option value="1">Не выбран</option>
                                <option value="2">Выбранный пункт</option>
                                <option value="5">Не выбран</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>             

            <div class="form editing-profile__item" id="editing-profile-form">
                <div class="form__field">
                    <div class="form__field-block form__field-block--label">
                        <label for="text-disabled" class="form__label form__label--disabled">
                            <span class="form__label">{{ labels.city.text }}</span>
                        </label>
                    </div>
                    <div class="form__field-block form__field-block--input">
                        <div class="input">
                            <input 
                                type="text" 
                                name="text-disabled" 
                                id="text-disabled" 
                                class="input__control" 
                                placeholder="Назвние города..." 
                                disabled
                                v-model="form.city"
                            >
                        </div>
                    </div>
                </div>
            </div>

            <div class="form form--wide editing-profile__item editing-profile__item--wide editing-profile__item--wide" id="editing-profile-form">
                <div class="form__field">
                    <div class="form__field-block form__field-block--label">
                        <label for="sayMore" class="form__label">
                            <span class="form__label-text">{{ labels.sayMore.text }}</span>
                        </label>
                    </div>
                    <div class="form__field-block form__field-block--input">
                        <div class="input input--textarea">
                            <textarea 
                                class="input__control" 
                                type="text" 
                                name="sayMore" 
                                id="sayMore" 
                                cols="30" 
                                ows="10" 
                                placeholder="Многострочное поле вводa"
                                v-model="form.sayMore1"
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    
    <section class="editing-profile__block">
        <h3 class="editing-profile__title title title--h3">{{ titles[1].text }}</h3>
        <div class="editing-profile__list">
            <div class="form editing-profile__item" id="editing-profile-form">                        
                <div class="form__field">
                    <div class="form__field-block form__field-block--label">
                        <label for="telephone" class="form__label">
                            <span class="form__label-text form__label-text--required">{{ labels.phone1.text }}</span>
                        </label>
                    </div>
                    <div class="form__field-block form__field-block--input">
                        <div class="input">
                            <input 
                                type="tel" 
                                name="telephone" 
                                id="telephone" 
                                class="input__control" 
                                placeholder="Номер телефона..." 
                                data-inputmask="'mask' : '+7(999) 999-99-99'" 
                                data-mask 
                                required
                                v-model="form.phone1"
                            >
                        </div>
                    </div>
                </div>
            </div>                        
            <div class="form editing-profile__item" id="editing-profile-form">
                <div class="form__field">
                    <div class="form__field-block form__field-block--label">
                        <label for="tel" class="form__label">
                            <span class="form__label-text">{{ labels.phone2.text }}</span>
                        </label>                                        
                    </div>
                    <div class="form__field-block form__field-block--input">
                        <div class="input">
                            <input 
                                type="tel" 
                                name="tel" 
                                id="tel" 
                                class="input__control" 
                                data-inputmask="'mask' : '+7(999) 999-99-99'" 
                                data-mask 
                                placeholder="Номер телефона..."
                                v-model="form.phone2"
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="form editing-profile__item" id="editing-profile-form">
                <div class="form__field">
                    <div class="form__field-block form__field-block--label">
                        <label for="tel2" class="form__label">
                            <span class="form__label-text">{{ labels.phone3.text }}</span>
                        </label>                                        
                    </div>
                    <div class="form__field-block form__field-block--input">
                        <div class="input">
                            <input 
                                type="tel" 
                                name="tel2" 
                                id="tel2" 
                                class="input__control" 
                                placeholder="Номер телефона..." 
                                data-inputmask="'mask' : '+7(999) 999-99-99'" 
                                data-mask
                                v-model="form.phone3"
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="form editing-profile__item" id="editing-profile-form">
                <div class="form__field">
                    <div class="form__field-block form__field-block--label">
                        <label for="tel3" class="form__label">
                            <span class="form__label-text">{{ labels.phone4.text }}</span>
                        </label>                                        
                    </div>
                    <div class="form__field-block form__field-block--input">
                        <div class="input">
                            <input 
                                type="tel" 
                                name="tel3" 
                                id="tel3" 
                                class="input__control" 
                                placeholder="Номер телефона..." 
                                data-inputmask="'mask' : '+7(999) 999-99-99'" 
                                data-mask
                                v-model="form.phone4"
                            >
                        </div>
                    </div>
                </div>
            </div>                        
            <div class="form editing-profile__item" id="editing-profile-form">                        
                <div class="form__field">
                    <div class="form__field-block form__field-block--label">
                        <label for="email" class="form__label">
                            <span class="form__label-text form__label-text--required">{{ labels.email1.text }}</span>
                        </label>
                    </div>
                    <div class="form__field-block form__field-block--input">
                        <div class="input">
                            <input 
                                type="text" 
                                name="email" 
                                id="email" 
                                class="input__control" 
                                placeholder="example@icloud.com" 
                                value="" 
                                data-inputmask="'mask': '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}].*{1,20}[.*{2,6}][.*{1,2}]'" 
                                data-mask 
                                required
                                v-model="form.email1"
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="form editing-profile__item" id="editing-profile-form">
                <div class="form__field">
                    <div class="form__field-block form__field-block--label">
                        <label for="email2" class="form__label">
                            <span class="form__label-text">{{ labels.email2.text }}</span>
                        </label>                                        
                    </div>
                    <div class="form__field-block form__field-block--input">
                        <div class="input">
                            <input 
                                type="text" 
                                name="email2" 
                                id="email2" 
                                class="input__control" 
                                placeholder="example@icloud.com" 
                                data-inputmask="'mask': '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}].*{1,20}[.*{2,6}][.*{1,2}]'" 
                                data-mask
                                v-model="form.email2"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

    <section class="editing-profile__block">
        <h3 class="editing-profile__title editing-profile__title--modified title title--h3">{{ titles[2].text }}</h3>                        
        <div class="form editing-profile__item editing-profile__item--modified" id="editing-profile-form">
            <div class="checkboxes">
                <ul class="checkboxes__list">                                
                    <li class="checkboxes__item">
                        <div class="checkbox">
                            <input 
                                type="checkbox" 
                                class="checkbox__input" 
                                name="check[]" 
                                id="check" 
                                value="s" 
                                checked 
                                disabled
                                v-model="form.checkbox1"
                            >
                            <label for="check" class="checkbox__label">
                                <span class="checkbox__icon">
                                    <SvgIcon
                                        :name="'checkbox'"
                                        :classN="'checkbox__icon-pic'"
                                    />
                                </span>
                                <span class="checkbox__text">Неактивен, выбран</span>
                            </label>
                        </div>
                    </li>
                    <li class="checkboxes__item">
                        <div class="checkbox">
                            <input 
                                type="checkbox" 
                                class="checkbox__input" 
                                name="check[]" 
                                id="check-s1" 
                                value="s1" 
                                disabled
                                v-model="form.checkbox2"
                            >
                            <label for="check-s1" class="checkbox__label">
                                <span class="checkbox__icon">
                                    <SvgIcon
                                        :name="'checkbox'"
                                        :classN="'checkbox__icon-pic'"
                                    />
                                </span>
                                <span class="checkbox__text">Неактивен, не выбран</span>
                            </label>
                        </div>
                    </li>
                    <li class="checkboxes__item">
                        <div class="checkbox">
                            <input 
                                type="checkbox" 
                                class="checkbox__input" 
                                name="check[]" 
                                id="check-s2" 
                                value="s2" 
                                checked
                                v-model="form.checkbox3"
                            >
                            <label for="check-s2" class="checkbox__label">
                                <span class="checkbox__icon">
                                    <SvgIcon
                                        :name="'checkbox'"
                                        :classN="'checkbox__icon-pic'"
                                    />
                                </span>
                                <span class="checkbox__text">Я люблю чекбоксы</span>
                            </label>
                        </div>
                    </li>
                    <li class="checkboxes__item">
                        <div class="checkbox">
                            <input 
                                type="checkbox" 
                                class="checkbox__input" 
                                name="check[]" 
                                id="check-s3" 
                                value="s3"
                                v-model="form.checkbox4"
                            >
                            <label for="check-s3" class="checkbox__label">
                                <span class="checkbox__icon">
                                    <SvgIcon
                                        :name="'checkbox'"
                                        :classN="'checkbox__icon-pic'"
                                    />
                                </span>
                                <span class="checkbox__text">Я ненавижу чекбоксы</span>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="editing-profile__block">
        <h3 class="editing-profile__title editing-profile__title--modified title title--h3">{{ titles[3].text }}</h3>
        <div class="form editing-profile__item--modified" id="editing-profile-form">
            <div class="radiobuttons">
                <ul class="radiobuttons__list">                                
                    <li class="radiobuttons__item">
                        <div class="radiobutton">
                            <input 
                                type="radio" 
                                class="radiobutton__input" 
                                name="radio[]" 
                                id="radio-r1" 
                                value="r1" 
                                checked 
                                disabled
                                v-model="form.radio"
                            >
                            <label for="radio-r1" class="radiobutton__label">
                                <span class="radiobutton__icon">
                                    <SvgIcon
                                        :name="'radio'"
                                        :classN="'radiobutton__icon-pic'"
                                    />
                                </span>
                                <span class="radiobutton__text">Неактивна, выбрана</span>
                            </label>
                        </div>
                    </li>
                    <li class="radiobuttons__item">
                        <div class="radiobutton">
                            <input 
                                type="radio" 
                                class="radiobutton__input" 
                                name="radio[]" 
                                id="radio-r2" 
                                value="r2" 
                                disabled
                                v-model="form.radio"
                            >
                            <label for="radio-r2" class="radiobutton__label">
                                <span class="radiobutton__icon">
                                    <SvgIcon
                                        :name="'radio'"
                                        :classN="'radiobutton__icon-pic'"
                                    />
                                </span>
                                <span class="radiobutton__text">Неактивна, не выбрана</span>
                            </label>
                        </div>
                    </li>
                    <li class="radiobuttons__item">
                        <div class="radiobutton">
                            <input 
                                type="radio" 
                                class="radiobutton__input" 
                                name="radio1[]" 
                                id="radio-r3" 
                                value="r3" 
                                checked
                                v-model="form.radio"
                            >
                            <label for="radio-r3" class="radiobutton__label">
                                <span class="radiobutton__icon">
                                    <SvgIcon
                                        :name="'radio'"
                                        :classN="'radiobutton__icon-pic'"
                                    />
                                </span>
                                <span class="radiobutton__text">Я люблю радио-кнопки</span>
                            </label>
                        </div>
                    </li>
                    <li class="radiobuttons__item">
                        <div class="radiobutton">
                            <input 
                                type="radio" 
                                class="radiobutton__input" 
                                name="radio1[]" 
                                id="radio-r4" 
                                value="r4"
                                v-model="form.radio"
                            >
                            <label for="radio-r4" class="radiobutton__label">
                                <span class="radiobutton__icon">
                                    <SvgIcon
                                        :name="'radio'"
                                        :classN="'radiobutton__icon-pic'"
                                    />
                                </span>
                                <span class="radiobutton__text">Я ненавижу радио-кнопки</span>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="form form--wide" id="editing-profile-form">
            <div class="form__field">
                <div class="form__field-block form__field-block--label">
                    <label for="text-area-disabled" class="form__label form__label--disabled">
                        <span class="form__label-text">{{ labels.sayMore2.text }}</span>
                    </label>
                </div>
                <div class="form__field-block form__field-block--input">
                    <div class="input input--textarea">
                        <textarea 
                            class="input__control" 
                            type="text" 
                            name="text-area-disabled" 
                            id="text-area-disabled" 
                            cols="30" 
                            rows="10" 
                            placeholder="Причина...." 
                            disabled
                            v-model="form.sayMore2"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="editing-profile__block editing-profile__buttons">
        <button form="editing-profile-form" type="reset" class="editing-profile__button button button--simple button--blue">
            <span class="button__text">{{ buttons.reset }}</span>
        </button>
        <button form="editing-profile-forms" type="submit" class="editing-profile__button button button--covered button--blue">
            <span class="button__text">{{ buttons.submit }}</span>
        </button>
    </div>
</form>                    
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SvgIcon from './SvgIcon.vue';

export default { 
    name: 'FormComponent',

    components: {
        SvgIcon,
    },

    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                select1: '',
                select2: '',
                city: '',
                sayMore1: '',
                phone1: '',
                phone2: '',
                phone3: '',
                phone4: '',
                email1: '',
                email2: '',
                checkbox1: true,
                checkbox2: false,
                checkbox3: true,
                checkbox4: false,
                radio: 'r',
                sayMore2: '',
            },

            titles: [
                {
                    id:0,
                    text: 'Общее',
                },
                {
                    id:1,
                    text: 'Контакты',
                },
                {
                    id:2,
                    text: 'Мое мнение о чекбоксах',
                },
                {
                    id:3,
                    text: 'Мое мнение о радио-кнопках',
                },
            ],

            labels: {
                firstname: {
                    text: 'Имя',
                },
                lastname: {
                    text: 'Фамилия',
                },
                specialization: {
                    text: 'Специализация',
                },
                select: {
                    text: 'Еще что-то',
                },
                city: {
                    text: 'Город',
                },
                sayMore: {
                    text: 'Расскажите о себе',
                },
                phone1: {
                    text: 'Основной телефон',
                },
                phone2: {
                    text: 'Дополнительный телефон',
                },
                phone3: {
                    text: 'Дополнительный телефон 2',
                },
                phone4: {
                    text: 'Дополнительный телефон 3',
                },
                email1: {
                    text: 'E-mail',
                },
                email2: {
                    text: 'E-Mail 2',
                },
                sayMore2: {
                    text: 'Напишите причину ненависти',
                },
            },

            buttons: {
                reset: 'Отменить',
                submit: 'Сохранить изменения',
            }, 
        }
    },

    methods: {
        submit() {
            console.log(this.form)

            const form = {
                firstName: this.form.firstName,
                lastName: this.form.lastName,
                select1: this.form.select1,
                select2: this.form.select2,
                city: this.form.city,
                sayMore1: this.form.sayMore1,
                phone1: this.form.phone1,
                phone2: this.form.phone2,
                phone3: this.form.phone3,
                phone4: this.form.phone4,
                email1: this.form.email1,
                email2: this.form.email2,
                checkbox1: this.form.checkbox1,
                checkbox2: this.form.checkbox2,
                checkbox3: this.form.checkbox3,
                checkbox4: this.form.checkbox4,
                radio: this.form.radio,
                sayMore2: this.form.sayMore2,
            }

            fetch('http://localhost:3000/profileForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
        }
    },
}
</script>

<style  lang="scss">
.form {
    width: 100%;
    height: 100%;

    &--wide {
        width: 100%;
    }

    &__field {    
        position: relative;
        
        width: 100%;
        height: 100%;      
    }

    &__field-block--label {
        font-size: rem($font-size-miniature);
        line-height: 160%;
        font-weight: $font-weight-regular;
    }

    &__label-text {
        &--required {
            &::after {
                content: "*";
                color: $red-orange;
            }            
        }        
    }
    
    &__label--disabled {
        color: $heather; 
    }
}
.input {
    $height-input: 50px;
    $height-input-small: 40px;
    $height-input-big: 100px;

    position: relative;

    &--iconed {
        font-size: rem(10px);
    }

    &--textarea & {
        &__control {
            line-height: rem($line-height-mini);

            height: rem($height-input-big);
            padding: rem(17px) rem(20px);

            resize: none;

            -ms-overflow-style: none;
            scrollbar-width: none;

            &::-webkit-scrollbar {
                width: 0;
                background: transparent;
            }
        }
    }

    &--small {
        height: rem(40px);
    }
    
    &--small & {
        &__control {
            position: relative;

            height: rem($height-input-small);
        }
    }

    &--search {
        height: rem(40px);
    }
    
    &--search & {        

        &__button {

            position: absolute;
            top: 50%;
            left: rem(20px);
            transform: translateY(-50%);

            height: rem(24px);

            z-index: $z-index-aside-block;

            @media #{$screen-tablet} {
                left: rem(10px);
            }    
        }    

        &__control {

            position: absolute;

            top: 50%;

            transform: translateY(-50%);

            width: 100%;

            border: 0;

            padding-left: rem(49px); 

            @media #{$screen-tablet} {
                border: rem(1px) solid $athens-gray;
                width: 100%;

                padding-left: rem(39px);
            }
        }
    }

    &__control {
        font-size: rem($font-size-tiny) !important;
        line-height: rem(16px);

        display: block;
        
        width: 100%;
        height: rem(50px);
        padding-right: rem(20px);
        padding-left: rem(20px);

        transition: color $transition-duration $transition-function,
        border-color $transition-duration $transition-function,
        background-color $transition-duration $transition-function;

        color: $color-text;
        border: rem(1px) solid $athens-gray;
        border-radius: rem($border-radius-medium);
        background-color: $white;
        box-shadow: none;

        &:focus {
            border-color: $slate-gray;
            outline: none;
        }

        &:disabled {
            background-color: $athens-gray;
        }

        &::-webkit-input-placeholder { 
            font-weight: $font-weight-regular;

            color: $heather; 
        }

        &--error {
            border-color: $carnation;

            &:focus {
                border-color: $carnation;
            }
        }

        &-error {
            font-size: rem(10px);
            line-height: rem($line-height-mini);

            color: $carnation;
        }
    }
}
</style>
