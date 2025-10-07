export default function ContactsPage() {
    return (
        <section className="bg-blue-50 dark:bg-slate-800 pt-24" id="contact">

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                           Свържи се с нас
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                            Винаги сме насреща да ви помогнем!
                        </p>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                Може да се свържете с нас по допупосочените начини: 
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-goldish text-gray-50">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6 w-6"
                                        >
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            Нашият адрес
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">
                                            ж.к. Младост 1А, ул. Сърчице
                                        </p>
                                        <p className="text-gray-600 dark:text-slate-400">
                                            град София/ България
                                        </p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-goldish text-gray-50">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6 w-6"
                                        >
                                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            Контакти
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">
                                            Телефон: +359 897 892 885
                                        </p>
                                        <p className="text-gray-600 dark:text-slate-400">
                                            Mail: stanislava.anastasova6@gmail.com
                                        </p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-goldish text-gray-50">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6 w-6"
                                        >
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                            Работно време
                                        </h3>
                                        <p className="text-gray-600 dark:text-slate-400">
                                            <span>Понеделник - 10:00 - 19:00</span>
                                            <br></br>
                                            <span>Вторник - 10:00 - 19:00</span>
                                            <br></br>
                                            <span>Сряда - почивен ден</span>
                                            <br></br>
                                            <span>Четвъртък - 10:00 - 19:00</span>
                                            <br></br>
                                            <span>Петък - 10:00 - 19:00</span>
                                            <br></br>
                                            <span>Събота - 10:00 - 17:00</span>
                                            <br></br>
                                            <span>Неделя - почивен ден</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="card h-fit max-w-6xl px-0 md:px-12  md:py-4"
                            id="form"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.58560295031!2d23.381856176690174!3d42.648944316800744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8692b665e98b%3A0x4eec6e976104348b!2z0KHRgtCw0YHQuCDQodGC0LjQuw!5e0!3m2!1sbg!2sbg!4v1759841658726!5m2!1sbg!2sbg"
                                width="600"
                                height="450"
                                style={{border:0}}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
