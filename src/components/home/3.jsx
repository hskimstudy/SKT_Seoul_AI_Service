import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from '../home/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCopy,
    faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function MyComponent3() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}></div>
                    <div className={styles.middle}>
                        <p> 분석 결과!</p>
                        <h2 className={styles.header}>
                            우호적 관계 지향: 나와바리형
                        </h2>
                        <p>
                            {' '}
                            자기가 정한 '진짜 친구'들과 뭉쳐서 놀기를 좋아해요.
                        </p>
                        <p>
                            <p></p>
                            때로, 자기 성향과 다른 사람들과도 잘 어울리지만
                            어디까지나 사회생활을 위해서에요.
                        </p>
                        <p></p>
                        <p></p>
                        <p>
                            {' '}
                            무조건 넓은 인맥을 추구하기 보다는 깊고 진솔한
                            대인관계를 원해요.
                            <p></p>
                        </p>
                    </div>
                    <div className={styles.bottom}>
                        <Link to="/" className={styles.start__button}>
                            다시 하기
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                        <Link to="/" className={styles.start__button}>
                            이유 알아보기
                            <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className={styles.icon}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyComponent3;
