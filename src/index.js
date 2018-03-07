import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import './index.css';

// Добавляем записи в переменную как объект
const initialState = {
  tracks: [
    'Smells like spirit',
    'Enter Sandman'
  ],
  playlists: [
    'My home playlist',
    'My work playlist'
  ]
};

// Функция определяющая содержание store, определяется перед созданием store
//Редьюсер это чистая функция, которая берет предыдущее состояние и action и возвращает новое состояние.
function playlist(state = initialState, action) {
  if (action.type === 'ADD_TRACK') {
    return {
      ...state,
      tracks: [...state.tracks, action.payload]
    };
    
  }
  return state;
}

// Создаем store по заданному шаблону
const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  // Определяем Provider и передаем ему store в качестве аргумента, теперь этот store будет доступен в каждой компоненте react
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


/* 
import { createStore } from 'redux';

// Функция определяющая содержание store, определяется перед созданием store
function playlist(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

// Создаем store
const store = createStore(playlist);

// Выделяем элементы в переменные

// Button listener
// Ищем класс .addTrack и так как это массив то первый элемент[0], и присваеваем значение константе
const addTrackBtn = document.querySelectorAll('.addTrack')[0];

// Вешаем на кнопку listener, которая по нажатию присваевает константе 
//значение value из input-поля класса .trackInput первого элемента массива
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];

// Subscribe добавляет в store элементы
store.subscribe(() => {
  // Очищает элемент от предедущих записей
  list.innerHTML = '';
  // Очищает строку ввода от записи
  trackInput.value = '';
  // Вызываем состояние store и перебираем элементы track
  store.getState().forEach(track => {
    // Создаем переменную li которой присваеваем значение li - строка списка
    const li = document.createElement('li');
    //присваеваем элементу li текстовое значение  из track - это каждый элемент store
    li.textContent = track;
    // Добавляем в list дочерний элемент li, то есть запись в списке 
    list.appendChild(li);
  });
})

// добавляем eventListener на click
addTrackBtn.addEventListener('click', () => {
  // Присваеваем содержимое input переменной trackName
  const trackName = trackInput.value;
  // Вызываем событие store типа: ADD_TRACK, которому передаем значение truckName
  store.dispatch({ type: 'ADD_TRACK', payload: trackName });
}); */
