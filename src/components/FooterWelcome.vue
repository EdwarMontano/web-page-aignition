<template>
    <div>
        <section class="bg-[#1f1056] py-10 sm:pt-16 lg:pt-2">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    class="grid grid-cols-1 content-center gap-y-16 sm:grid-cols-2 md:col-span-3 lg:grid-cols-6"
                >
                    <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img
                            class="w-auto pl-20 sm:pl-0"
                            src="https://res.cloudinary.com/dtlofy3ea/image/upload/v1691613150/ai4ms/AIgnition/logo_negativo-02_tt4ln3.png"
                            alt=""
                        />
                    </div>

                    <div class="col-span-2">
                        <h1
                            class="col-span-1 text-center font-sora text-2xl leading-relaxed text-white sm:mt-7"
                        >
                            Tu destino nos espera haz parte <br /><span class="text-[#e26f1f]">
                                de la tripulación</span
                            >
                        </h1>
                    </div>

                    <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <form @submit.prevent="sendSubscribe" class="mt-6">
                            <div>
                                <label for="email" class="sr-only">Email</label>
                                <input
                                    v-model="emailSub"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Ingresar correo"
                                    class="block w-full rounded-3xl border border-gray-200 bg-white p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:outline-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                class="mt-3 inline-flex w-full items-center justify-center rounded-3xl bg-[#f67c01] px-6 py-4 font-sora font-semibold text-[#1f1056] transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <hr class="mb-10 mt-16 border-gray-200" />

                <p class="text-center text-sm text-white">
                    © Copyright 2023, All Rights Reserved by AIgnition
                </p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const serviceID = 'service_b9tanv7'
const templateID = 'template_wfn6gtk'
const USER_ID = 'a5pHHmWLOlawYpln7'

const emailSub = ref('')

const sendSubscribe = () => {
    emailjs
        .send(
            serviceID,
            templateID,
            {
                email: emailSub.value,
                message: 'suscripción canal de noticia'
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
