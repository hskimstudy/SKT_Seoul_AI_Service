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

function MyComponent1() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}></div>
                    <div className={styles.middle}>
                        <p> 분석 결과!</p>
                        <h2 className={styles.header}>
                            배타적 관계 지향: 허들링 유형
                        </h2>
                        <p>
                            {' '}
                            허들링: 펭귄 무리가 추위를 견디기 위해 서로 뽀짝
                            붙는 형태
                        </p>
                        <p></p>
                        <p></p>
                        <p>
                            {' '}
                            자기와 취향이 맞는 사람들과 똘똘 뭉치는 성향이에요
                        </p>
                        <p>
                            {' '}
                            성향이 다른 그룹과는 딱히 교류하고 싶어하지 않아요
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

export default MyComponent1;
