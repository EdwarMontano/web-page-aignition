<template>
    <div>
        <div class="relative">
            <header
                class="absolute inset-x-0 top-8 z-30 bg-transparent py-4 sm:py-5"
                x-data="{expanded: false}"
            >
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <nav class="flex items-center justify-between">
                        <div class="flex shrink-0">
                            <a href="#" title="" class="flex">
                                <img
                                    class="h-8 w-auto"
                                    src="https://res.cloudinary.com/dtlofy3ea/image/upload/v1691613150/ai4ms/AIgnition/logo_negativo-02_tt4ln3.png"
                                    alt="Logo AIgnition"
                                />
                            </a>
                        </div>

                        <div class="flex lg:hidden">
                            <button
                                type="button"
                                class="text-gray-900"
                                x-on:click="expanded = !expanded"
                            >
                                <span x-show="!expanded" aria-hidden="true">
                                    <svg
                                        class="h-7 w-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#f67c01"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </span>

                                <span x-show="expanded" aria-hidden="true">
                                    <svg
                                        class="h-7 w-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#f67c01"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div
                            class="hidden md:ml-auto md:mr-16 md:flex md:items-center md:justify-end md:space-x-10"
                        >
                            <a
                                href="#nosotros"
                                title="Sobre nosotros"
                                class="font-sora text-lg font-light text-white transition-all duration-200 hover:text-[#f67c01]"
                            >
                                Sobre nosostros
                            </a>

                            <a
                                href="#contacto"
                                title="Contacto"
                                class="font-sora text-lg font-light text-white transition-all duration-200 hover:text-[#f67c01]"
                            >
                                Contacto
                            </a>
                        </div>
                    </nav>
                    <nav class="rounded-xl bg-[#f67c01]" x-show="expanded" x-collapse>
                        <div class="px-1 pb-4 pt-8">
                            <div class="grid gap-y-6">
                                <a
                                    href="#nosotros"
                                    title=""
                                    class="flex items-center font-sora text-lg font-light text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                                >
                                    Sobre nosostros
                                </a>
                                <a
                                    href="#contacto"
                                    title=""
                                    class="flex items-center font-sora text-base font-light text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                                >
                                    Contacto
                                </a>
                                <a
                                    href="#contacto"
                                    title=""
                                    class="font-pj inline-flex items-center justify-center rounded-lg border border-transparent bg-gray-900 px-6 py-2 text-base font-semibold leading-7 text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                    role="button"
                                >
                                    ¡Haz ignición!
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <section
                class="relative min-h-[100vh] pb-4 pt-12 sm:pb-16 sm:pt-32 lg:pb-20 xl:pb-32 xl:pt-48"
            >
                <div class="absolute inset-0">
                    <img
                        class="h-full w-full object-cover md:block"
                        src="https://res.cloudinary.com/dtlofy3ea/image/upload/v1691613161/ai4ms/AIgnition/HOME_muk3sa.jpg"
                        alt=""
                    />
                </div>
                <div class="absolute inset-0 z-10 bg-[#1e0f50] bg-opacity-60"></div>

                <div class="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="md:align-center flex flex-col sm:flex-row md:justify-between">
                        <div class="pt-32 md:w-2/3">
                            <h1
                                class="text-center font-sourceserif4 text-4xl tracking-wider text-white sm:text-5xl"
                                data-aos="zoom-in"
                                data-aos-delay="500"
                                data-aos-duration="1500"
                            >
                                El poder de la tecnología <br />a tu alcance.
                                <span
                                    class="text-[#e26f1f]"
                                    data-aos="fade-up-left"
                                    data-aos-delay="2000"
                                    >AIGNITION</span
                                >
                            </h1>
                            <div
                                class="group invisible relative mt-40 inline-flex sm:visible"
                                data-aos="zoom-in"
                                data-aos-delay="2450"
                                data-aos-duration="1500"
                            >
                                <div
                                    class="transitiona-all duration-250 absolute inset-0 ml-64 rounded-3xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg filter group-hover:opacity-100 group-hover:duration-200"
                                ></div>
                                <a
                                    href="#contacto"
                                    title=""
                                    class="relative ml-64 mr-auto inline-flex rounded-3xl border border-transparent bg-[#f67c01] px-12 py-5 text-center text-sm font-bold text-white transition-all duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 md:text-xl"
                                    role="button"
                                >
                                    ¡Haz ignición!
                                </a>
                            </div>
                        </div>

                        <div class="-mt-64 ml-32 sm:ml-0 sm:mt-0 md:w-1/3 md:max-w-xs lg:max-w-md">
                            <ul class="mt-4 space-y-4">
                                <li
                                    class="ml-2 flex items-center pt-12 sm:pt-24"
                                    data-aos="fade-right"
                                    data-aos-delay="3000"
                                >
                                    <span class="text-base"> 🔵 </span>
                                    <span
                                        class="ml-2.5 flex-1 font-sora text-base font-medium text-white"
                                    >
                                        Expertos en tecnología
                                    </span>
                                </li>

                                <li
                                    class="flex items-center pt-4 sm:ml-32 sm:pt-12"
                                    data-aos="fade-right"
                                    data-aos-delay="2900"
                                >
                                    <span class="text-base"> 🔵 </span>
                                    <span
                                        class="ml-2.5 flex-1 font-sora text-base font-medium text-white"
                                    >
                                        Soluciones a medida
                                    </span>
                                </li>

                                <li
                                    class="ml-2 flex items-center pt-4 sm:ml-10 sm:pt-12"
                                    data-aos="fade-right"
                                    data-aos-delay="2800"
                                >
                                    <span class="text-base"> 🔵 </span>
                                    <span
                                        class="ml-2.5 flex-1 font-sora text-base font-medium leading-none text-white"
                                    >
                                        Gestionamos todo el <br />
                                        proceso de tecnología
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
