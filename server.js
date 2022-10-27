const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
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

    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));
