import ScrollReveal from 'scrollreveal';

// Базовые настройки
ScrollReveal({
	distance: '30px',
	duration: 2800,
	// reset: true,
});

function scrollRevealFunc() {
	ScrollReveal().reveal({
		delay: 1300,
		distance: '0px',
		opacity: 0,
	});

	ScrollReveal().reveal({
		delay: 400,
		distance: '0px',
		opacity: 0,
	});

	ScrollReveal().reveal(`.header__row`, {
		origin: 'top',
	});

	ScrollReveal().reveal('.title-2 ', {
		delay: 300,
		origin: 'top',
	});

	ScrollReveal().reveal(`.hero__title, .about__text, .contacts, .footer__company, .swiper, .contacts__links,`, {
		delay: 400,
		origin: 'left',
	});

	ScrollReveal().reveal(``,
		{
			origin: 'right',
		}
	);

	ScrollReveal().reveal(`.hero__slogan, .about__content, .footer__copyright, footer__socials`, {
		// delay: 600,
		origin: 'bottom',
	});

}

export default scrollRevealFunc;