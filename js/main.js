/* ABYSS interactions | Developed by Synth Ocean */

document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.querySelector('.menu-toggle');

    const navigation = document.querySelector('.main-nav');

    const setMenu = (open) => {

        if (!toggle || !navigation) return;

        toggle.setAttribute('aria-expanded', String(open));

        toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');

        navigation.classList.toggle('is-open', open);

        document.body.classList.toggle('menu-open', open);

    };

    toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));

    navigation?.querySelectorAll('a').forEach(link =>

        link.addEventListener('click', () => setMenu(false))

    );

    document.addEventListener('keydown', event => {

        if (event.key === 'Escape') setMenu(false);

    });

    window.addEventListener('resize', () => {

        if (window.innerWidth > 700) setMenu(false);

    });

    document.querySelectorAll('[data-year]').forEach(node => {

        node.textContent = new Date().getFullYear();

    });

    const dateField = document.querySelector('[data-future-date]');

    if (dateField) {

        const localToday = new Date();

        const offset = localToday.getTimezoneOffset();

        const localDate = new Date(localToday.getTime() - offset * 60000)
            .toISOString()
            .slice(0, 10);

        dateField.min = localDate;

    }

    document.querySelectorAll('[data-service]').forEach(button => {

        button.addEventListener('click', () => {

            const serviceField = document.querySelector('[name="service"]');

            if (serviceField) {

                serviceField.value = button.dataset.service;

            }

            document.querySelector('#booking')?.scrollIntoView({
                behavior: 'smooth'
            });

        });

    });

    document.querySelectorAll('[data-local-form]').forEach(form => {

        form.addEventListener('submit', event => {

            event.preventDefault();

            if (!form.reportValidity()) return;

            const status = form.querySelector('.form-status');

            if (status) {

                status.textContent = 'This front-end preview is not connected to an email service. Your request has not been sent.';

            }

        });

    });

});