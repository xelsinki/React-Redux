import React, { Component } from 'react';

import { connect } from 'react-redux'

// import './App.css';

// import RegistationForm from './RegistrationForm';

class App extends Component {

  // Функция нажатия кнопки
  addTrack() {
    console.log('addTrack', this.trackInput.value);
    // Вставляем в props значение строки
    this.props.onAddTrack(this.trackInput.value);
    // Стираем значение в строке после нажатия
    this.trackInput.value = '';
}

  render() {
    console.log(this.props.tracks);
    return (
      <div>
         {/* Добавим инпуту ref и запишем в this.trackInput ссылку на input*/}
        <input type="text" ref={(input)=>{this.trackInput = input}}/>
        <button onClick={this.addTrack.bind(this)}>Add track</button>
        <ul>
          {/* Вставляем итерацию содержимого testStore из props, и добавляем каждойстроке уникальный index */}
          {this.props.tracks.map((track, index) =>
            <li key={index}>{track}</li>
          )}
        </ul>
      </div>
    );
  }
}



// Декоратор для smart компонента, принимает на вход две функции.
// Нужен для связи с store в Redux
export default connect(
    // mapStateToProps - функция, которая маппит state, то есть состояние нашего store в props react компонента.
  state => ({
     // вернем в этой функции переменную tracks в которую запишем state. State и является глобальным состоянием нашего store
     tracks: state.tracks
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', payload: trackName })
    }
  })
)(App);
// Теперь каждый раз, когда у нас изменится store, у нас поменяются props и перерендерится компонент

