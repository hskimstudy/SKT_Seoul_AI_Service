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

function MyComponent2() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}></div>
                    <div className={styles.middle}>
                        <p> 분석 결과!</p>
                        <h2 className={styles.header}>
                            우호적 관계 지향: 친목형
                        </h2>
                        <p>
                            {' '}
                            여러 그룹과 어울리며 다양한 사람들의 내면을 알아가는
                            일을 좋아해요
                        </p>
                        <p>
                            {' '}
                            꼭 친한 친구가 아니더라도 스몰 토크를 잘 나눠요.
                            <p></p> <p></p>
                            <p></p>
                            자기 생각과 상대방의 의견이 다르더라도 일단 듣고보는
                            유형이에요.
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyComponent2;
