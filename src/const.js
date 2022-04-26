export const AppRoutes = {
  Home: '/',
  DetailedQuest: '/quests',
  Contacts: '/contacts',
};

export const AppPages = {
  'Квесты': {
    title: 'Выберите тематику',
    route: '/',
  },
  'Новичкам': {
    title: 'Новичкам',
    route: '#',
  },
  'Отзывы': {
    title: 'Отзывы',
    route: '#',
  },
  'Акции': {
    title: 'Акции',
    route: '#',
  },
  'Контакты': {
    title: 'Контакты',
    route: '/contacts',
  },
};

export const APIRoutes = {
  Quests: '/quests',
  Orders: '/orders',
};

export const StatusLoading = {
  Idle: 'idle',
  Loading: 'loading',
  Succeeded: 'succeeded',
  Failed: 'failed',
};

export const translationWords = {
  'hard': 'сложный',
  'medium': 'средний',
  'easy': 'легкий',
  'allQuests': 'все квесты',
  'adventures': 'приключения',
  'horror': 'ужасы',
  'mystic': 'мистика',
  'detective': 'детектив',
  'sci-fi': 'sci-fi',
};

export const BooleanVariants = {
  TRUE: true,
  FALSE: false,
};

export const ContactData = {
  companiesName: 'Escape Room',
  slogan: 'квесты в Санкт-Петербурге',
  address: {
    title: 'Адрес',
    city: 'Санкт-Петербург',
    street: 'Набережная реки Карповка, д 5',
  },
  operatingMode: {
    title: 'Режим работы',
    workingDays: 'Ежедневно',
    openingHours: 'с 9:00 до 20:00',
  },
  phone: {
    title: 'Телефон',
    phoneNumber: '8 (800) 333-55-99',
  },
  email: {
    title: 'E-mail',
    emailAddress: 'info@escape-room.ru',
  },
  mapImage: {
    mapImageAlt: 'мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5',
    width: '649',
    height: '336',
  },
  location: {
    latitude: 59.96833,
    longitude: 30.31759,
    zoom: 16,
  }
};

export const ErrorTexts = {
  FETCH_FAIL_DATA: 'Не удалось получить данные. Попробуйте попозже',
  POST_FAIL_DATA: 'Не удалось отправить данные. Попробуйте попозже',
};
