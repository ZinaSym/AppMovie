/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const countOfMovies = prompt('How many movies have you seen already?','');
const personalMovieDB = {
    count:countOfMovies,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const a = prompt('One of the last films you watched?',''),
        b = prompt('How much would you rate it?',''),
        c = prompt('One of the last films you watched?',''),
        d = prompt('How much would you rate it?','');

personalMovieDB.movies[a] = b;    
personalMovieDB.movies[c] = d; 