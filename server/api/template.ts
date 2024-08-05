export default defineEventHandler((event) => {
	return {
		template: {
			copyright: '2023, Группа компаний «КВС»',
			menu_header: [
				{
					label: 'База знаний',
					link: '/objects/',
				},
				{
					label: 'Акции',
					link: '/promotions/',
				},
				{
					label: 'Новости',
					link: '/news/',
				},
				{
					label: 'Избранное',
					link: '/favorites/',
				},
				{
					label: 'Контакты',
					link: '/contacts/',
				},
				// {
				// 	icon: '~/assets/sprite/svg/online-school-kvs.svg',
				// 	label: '',
				// 	link: '#',
				// },
				// {
				// 	icon: '~/assets/sprite/svg/telegram-black.svg',
				// 	label: '',
				// 	link: '#',
				// },
			],
			menu_main: [
				{
					label: 'Объекты в продаже',
					link: '/catalog/',
				},
				{
					label: 'Шахматка',
					link: '/chess/',
				},
				{
					label: 'Мои клиенты',
					link: '/clients/',
				},
				{
					label: 'Записаться на показ',
					link: '/shows/',
				},
				{
					label: 'Мои сделки',
					link: '/deals/',
				},
			],
			menu_user: [
				{
					icon: 'user',
					link: '#',
					title: 'Личный кабинет',
					orange: true,
				},
				{
					icon: 'logout',
					link: '#',
					title: 'Выйти',
					orange: false,
				},
			],
			user: [
				{
					name: 'Контентов Контент',
					title: 'STAFF KVS',
				},
			],
			privacy_policy: [
				{
					label: 'Политика персональных данных',
					link: '/politika-konfidentsialnosti/',
					text: 'Я согласен на обработку персональных данных и согласен с <a href="/politika-konfidentsialnosti/" target="_blank">политикой обработки персональных данных</a>',
				},
			],
			social: [
				{
					icon: 'telegram',
					link: '#',
				},
				{
					icon: 'youtube',
					link: '#',
				},
			],
			tagline: [
				{
					main: 'Агентский портал «КВС». ',
					additional: 'Строим мир — строим отношения!',
				},
			],
		},
	};
});
