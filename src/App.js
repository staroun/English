import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import { render } from '@testing-library/react';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '이성운',
    'birthday': "111111",
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': "222222",
    'gender': '남자',
    'job': '회사원'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '김미라',
    'birthday': "333333",
    'gender': '여자',
    'job': '대학생'
  },
  {
    'id': 4,
    'image': 'https://placeimg.com/64/64/4',
    'name': '김순',
    'birthday': "444444",
    'gender': '여자',
    'job': '부동산업'
  }
]


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
