# GymAPP - Workout Generator

Netlify link: https://helpful-rolypoly-1ca346.netlify.app/

[English](#english) | [Русский](#русский)

---

## English

### Overview

**GymAPP** is an intelligent workout generator application that creates personalized training routines based on your fitness goals and preferences. Built with React and Vite, it provides a fast, responsive interface for generating customized workout plans.

### Features

- 🏋️ **Personalized Workouts** - Generate custom training routines tailored to your goals
- 💪 **Multiple Training Splits** - Choose from various workout programming schemes
- 🎯 **Goal-Oriented Plans** - Select your primary fitness goal (strength, power, hypertrophy, etc.)
- 🔧 **Muscle Group Selection** - Target specific muscle groups for your workout
- ⚡ **Fast Generation** - Instant workout creation with real-time feedback
- 🎨 **Modern UI** - Clean, responsive interface built with Tailwind CSS

### Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality and style checking

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd GymAPP
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Usage

1. **Select Training Split** - Choose how to split your training (individual exercises, body parts, etc.)
2. **Choose Muscle Groups** - Select which muscle groups to focus on
3. **Set Your Goal** - Define your primary fitness objective
4. **Generate Workout** - Click to create your personalized routine
5. **View Results** - See your generated workout with exercises and recommendations

### Project Structure

```
src/
├── components/
│   ├── Hero.jsx              # Landing section
│   ├── Generator.jsx         # Workout configuration interface
│   ├── Workout.jsx           # Workout display component
│   ├── ExerciseCard.jsx      # Individual exercise display
│   ├── Button.jsx            # Reusable button component
│   ├── Footer.jsx            # Application footer
│   ├── SectionWrapper.jsx    # Layout wrapper component
│   └── utils/
│       ├── functions.js      # Workout generation logic
│       └── swoldier.js       # Exercise database
├── App.jsx                   # Main application component
├── main.jsx                  # Application entry point
└── index.css                 # Global styles
```

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is open source and available under the MIT License.

---

## Русский

### Описание

**GymAPP** — это приложение для генерирования индивидуальных тренировочных программ, которые создаются на основе ваших целей и предпочтений в фитнесе. Разработано с использованием React и Vite, предоставляет быстрый и отзывчивый интерфейс для создания персонализированных тренировочных планов.

### Возможности

- 🏋️ **Индивидуальные тренировки** - Генерируйте программы, адаптированные под ваши цели
- 💪 **Различные схемы тренинга** - Выбирайте из разных вариантов сплитов тренировок
- 🎯 **Ориентация на цель** - Укажите вашу основную фитнес-цель (сила, мощь, гипертрофия и т.д.)
- 🔧 **Выбор мышечных групп** - Нацеливайтесь на конкретные мышечные группы
- ⚡ **Быстрая генерация** - Мгновенное создание тренировки с обратной связью
- 🎨 **Современный интерфейс** - Стильный, адаптивный дизайн с Tailwind CSS

### Технологический стек

- **React 19** - Библиотека для построения пользовательского интерфейса
- **Vite** - Инструмент сборки и сервер разработки
- **Tailwind CSS** - Утилитарный фреймворк CSS
- **ESLint** - Проверка качества и стиля кода

### Установка

1. Клонируйте репозиторий:

```bash
git clone <repository-url>
cd GymAPP
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите сервер разработки:

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`

### Использование

1. **Выберите схему тренировки** - Выберите как распределить вашу тренировку
2. **Выберите мышечные группы** - Укажите, на какие мышцы сосредоточиться
3. **Установите вашу цель** - Определите вашу основную фитнес-цель
4. **Создайте тренировку** - Нажмите кнопку для генерирования персональной программы
5. **Просмотрите результаты** - Изучите созданную тренировку с упражнениями и рекомендациями

### Структура проекта

```
src/
├── components/
│   ├── Hero.jsx              # Начальная секция
│   ├── Generator.jsx         # Интерфейс конфигурации тренировки
│   ├── Workout.jsx           # Компонент отображения тренировки
│   ├── ExerciseCard.jsx      # Отображение отдельного упражнения
│   ├── Button.jsx            # Переиспользуемый компонент кнопки
│   ├── Footer.jsx            # Подвал приложения
│   ├── SectionWrapper.jsx    # Компонент-обертка для макета
│   └── utils/
│       ├── functions.js      # Логика генерирования тренировок
│       └── swoldier.js       # База данных упражнений
├── App.jsx                   # Основной компонент приложения
├── main.jsx                  # Точка входа приложения
└── index.css                 # Глобальные стили
```

### Доступные команды

- `npm run dev` - Запуск сервера разработки с HMR
- `npm run build` - Сборка для продакшена
- `npm run preview` - Просмотр продакшена
- `npm run lint` - Проверка качества кода с помощью ESLint

### Участие в разработке

Приглашаем вас внести свой вклад! Пожалуйста, создавайте Pull Requests для улучшения проекта.

### Лицензия

Этот проект распространяется с открытым исходным кодом под лицензией MIT.
