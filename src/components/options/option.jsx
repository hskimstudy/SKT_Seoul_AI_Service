import { createRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './home.module2.css';

const Options = () => {
    const history = useHistory();
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [inputValue5, setInputValue5] = useState('');

    const handleChange1 = (e) => {
        setInputValue(e.target.value);
    };

    const handleChange2 = (e) => {
        setInputValue2(e.target.value);
    };

    const handleChange3 = (e) => {
        setInputValue3(e.target.value);
    };

    const handleChange4 = (e) => {
        setInputValue4(e.target.value);
    };

    const handleChange5 = (e) => {
        setInputValue5(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    };

    const postData = async () => {
        const url = 'http://127.0.0.1:8000/';
        const data = new FormData();
        data.append('A', inputValue);
        data.append('B', inputValue2);
        data.append('C', inputValue3);
        data.append('D', inputValue4);
        data.append('E', inputValue5);
        console.log(data);

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: data,
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                console.error('Error:', errorResponse);
                return;
            }
            const prediction = await response.json();
            console.log(prediction);
            var first_value = parseFloat(
                prediction[Object.keys(prediction)[0]]
            );

            console.log('First Value:', first_value);
            console.log('Type of First Value:', typeof first_value);

            if (first_value === 3) {
                const examResult = '3';
                console.log('3');
                history.push(`/${examResult}`);
            } else if (first_value === 2) {
                const examResult = '2';
                console.log('2');
                history.push(`/${examResult}`);
            } else if (first_value === 1) {
                console.log('1');
                const examResult = '1';
                history.push(`/${examResult}`);
            } else if (first_value === 0) {
                console.log('0');
                const examResult = '0';
                history.push(`/${examResult}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <body>
            <div className="wrapper">
                <section>
                    <form onSubmit={handleSubmit}>
                        <h1 className="text">
                            {' '}
                            지난 한 달 간 배달 서비스 사용일수는?{' '}
                        </h1>
                        <input
                            className="input"
                            type="number"
                            pattern="[0-9]+"
                            value={inputValue}
                            onChange={handleChange1}
                        />
                        <h1 className="text">
                            {' '}
                            지난 한 달 간 밤에 집 밖에 나간 횟수는?{' '}
                        </h1>
                        <input
                            className="input"
                            type="number"
                            pattern="[0-9]+"
                            value={inputValue2}
                            onChange={handleChange2}
                        />
                        <h1 className="text">
                            지난 한 달 간 낮 시간에 집 밖에 나간 횟수는?
                        </h1>
                        <input
                            className="input"
                            type="number"
                            pattern="[0-9]+"
                            value={inputValue3}
                            onChange={handleChange3}
                        />
                        <h1 className="text">
                            지난 한 달 간 휴일에 어디론가 이동한 횟수는?
                        </h1>
                        <input
                            className="input"
                            type="number"
                            pattern="[0-9]+"
                            value={inputValue4}
                            onChange={handleChange4}
                        />
                        <h1 className="text">
                            지난 한 달 간 지하철로 이동한 횟수는?
                        </h1>
                        <input
                            className="input"
                            type="number"
                            pattern="[0-9]+"
                            value={inputValue5}
                            onChange={handleChange5}
                        />
                        <input
                            type="submit"
                            value="확인하기"
                            className="start__button"
                        />
                    </form>
                </section>
            </div>
        </body>
    );
};

export default Options;
