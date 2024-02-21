export default defineEventHandler((event) => {
	return {
		template: {
			copyright: '2023, Группа компаний «КВС»',
			logo: '/icons/kvs-logo.svg',
			menu_header: [
				{
					icon: false,
					label: 'База знаний',
					link: '/objects/',
				},
				{
					icon: false,
					label: 'Акции',
					link: '/promotions/',
				},
				{
					icon: false,
					label: 'Новости',
					link: '/news/',
				},
				{
					icon: false,
					label: 'Избранное',
					link: '/favorites/',
				},
				{
					icon: false,
					label: 'Контакты',
					link: '/contacts/',
				},
				{
					icon: '/icons/online-school-kvs.svg',
					label: '',
					link: '#',
				},
				{
					icon: '/icons/telegram-black.svg',
					label: '',
					link: '#',
				},
			],
			menu_main: [
				{
					icon: false,
					label: 'Объекты в продаже',
					link: '/catalog/',
				},
				{
					icon: false,
					label: 'Шахматка',
					link: '/chess/',
				},
				{
					icon: false,
					label: 'Мои клиенты',
					link: '/clients/',
				},
				{
					icon: false,
					label: 'Записаться на показ',
					link: '/shows/',
				},
				{
					icon: false,
					label: 'Мои сделки',
					link: '/deals/',
				},
			],
			menu_user: [
				{
					icon: '/icons/eagent.svg',
					label: '',
					link: '#',
				},
				{
					icon: false,
					label: {
						name: 'Контентов Контент',
						title: 'STAFF KVS',
					}
				},
				{
					icon: '/icons/user.svg',
					label: '',
					link: '#',
				},
				{
					icon: '/icons/logout.svg',
					label: '',
					link: '#',
				},
			],
			privacy_policy: {
				label: 'Политика персональных данных',
				link: '/politika-konfidentsialnosti/',
				text: 'Я согласен на обработку персональных данных и согласен с <a href="/politika-konfidentsialnosti/" target="_blank">политикой обработки персональных данных</a>',
			},
			social: [
				{
					icon: '/icons/telegram.svg',
					link: '#',
				},
				{
					icon: '/icons/youtube.svg',
					link: '#',
				},
			],
			tagline: [
				{
					main: 'Агентский портал «КВС». ',
					additional: 'Строим мир — строим отношения!',
				}
			],
		},
	};
});
