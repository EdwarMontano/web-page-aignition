<template>
    <section
        id="contacto"
        class="min-h-[44vh] bg-[#1f1056] px-8 pb-12 pt-28 sm:px-48 sm:pb-16 sm:pt-32 lg:pb-16 xl:pb-16 xl:pt-8"
    >
        <h2 class="text-2xl text-white xl:pb-6">Contacto</h2>
        <form @submit.prevent="sendMail">
            <div class="space-y-12">
                <div class="border-white-900/10 border-b pb-4"></div>

                <div class="border-white-900/10 border-b pb-12">
                    <div class="mt-10 grid grid-rows-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="order-1 col-span-3 sm:order-1 sm:col-span-3">
                            <label
                                for="first-name"
                                class="block text-sm font-medium leading-6 text-white"
                                >Nombre <span class="text-[#e26f1f]">Requerido</span></label
                            >
                            <div class="mt-2">
                                <input
                                    type="text"
                                    v-model.trim="name"
                                    name="name"
                                    id="name"
                                    autocomplete="given-name"
                                    class="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>

                        <div class="order-4 col-span-3 sm:order-2 sm:col-span-3">
                            <label
                                for="about"
                                class="block text-sm font-medium leading-6 text-white"
                                >Mensaje <span class="text-[#e26f1f]">Requerido</span></label
                            >
                            <div class="mt-2">
                                <textarea
                                    id="message"
                                    name="email"
                                    v-model.trim="message"
                                    rows="9"
                                    class="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>

                        <div class="order-2 col-span-3 sm:order-3 sm:col-span-3">
                            <label
                                for="email"
                                class="block text-sm font-medium leading-6 text-white sm:-mt-52"
                                >Email address <span class="text-[#e26f1f]">Requerido</span></label
                            >
                            <div class="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    v-model.trim="email"
                                    autocomplete="email"
                                    class="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>

                        <div class="order- sm:order-4 sm:col-span-3"></div>
                        <div class="order-3 col-span-3 text-white sm:order-5 sm:col-span-3">
                            <label
                                for="email"
                                class="block text-sm font-medium leading-6 text-white sm:-mt-36"
                                >Teléfono <span class="text-gray-500">Opcional</span></label
                            >
                            <div class="mt-2">
                                <MazPhoneNumberInput
                                    :translations="{
                                        countrySelector: {
                                            placeholder: 'Cód País',
                                            error: 'escoja un país',
                                            searchPlaceholder: 'Buscar país'
                                        },
                                        phoneInput: {
                                            placeholder: 'Número de teléfono',
                                            example: 'Ejemplo:'
                                        }
                                    }"
                                    v-model="phoneNumber"
                                    show-code-on-list
                                    color="primary"
                                    defaultCountryCode="CO"
                                    :preferred-countries="['CO', 'US', 'DE', 'GB']"
                                    :ignored-countries="['AC']"
                                />
                                <!-- <input id="email" name="email" type="email" autocomplete="email"
                                    class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> -->
                            </div>
                        </div>
                        <div class="sm:order-6 sm:col-span-3"></div>

                        <div class="order-5 col-span-3 sm:order-7 sm:col-span-3">
                            <div class="relative flex gap-x-3 sm:-mt-16">
                                <div class="flex h-6 items-center">
                                    <input
                                        id="condicciones"
                                        v-model="condicciones"
                                        name="condicciones"
                                        type="checkbox"
                                        class="h-4 rounded border-gray-300 text-[#198754] focus:ring-[#198754] sm:w-4"
                                    />
                                </div>
                                <div class="text-sm leading-6">
                                    <label for="comments" class="font-medium text-white"></label>
                                    <p class="text-white">
                                        Deseo recibir noticias y actualizaciones sobre sus eventos y
                                        servicios
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="order-6 col-span-3 sm:order-8 sm:col-span-6">
                            <button
                                type="submit"
                                name="send"
                                class="ml-20 mt-3 inline-flex items-center justify-center rounded-3xl bg-[#f67c01] px-6 py-4 font-sora font-semibold text-[#1f1056] transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 sm:ml-0 sm:w-full"
                            >
                                Enviar Mensaje
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup lang="ts">
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const serviceID = 'service_b9tanv7'
const templateID = 'template_wfn6gtk'
const USER_ID = 'a5pHHmWLOlawYpln7'

const name = ref('')
const email = ref('')
const message = ref('')
const phoneNumber = ref('')
const condicciones = ref(false)

const sendMail = () => {
    emailjs
        .send(
            serviceID,
            templateID,
            {
                name: name.value,
                email: email.value,
                message: message.value,
                phone: phoneNumber.value,
                condicciones: condicciones.value
            },
            USER_ID
        )
        .then(
            function (response) {
                console.log('SUCCESS!', response.status, response.text)
                alert('formulario enviado satisfactoriamente')
            },
            function (error) {
                console.log('FAILED...', error)
                alert('Error al enviar el formulario')
            }
        )
}
</script>
