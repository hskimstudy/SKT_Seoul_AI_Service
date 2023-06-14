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

const MyComponent0 = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.top}></div>
                    <div className={styles.middle}>
                        <p> 분석 결과!</p>
                        <h2 className={styles.header}>
                            우호적 관계 지향: 노마드형
                        </h2>
                        <p> 다양한 그룹의 사람들과 무난히 관계맺는 성향 </p>
                        <p>
                            {' '}
                            어느 그룹이든 침투력이 강하지만 자기의 정체성에 대한
                            고민이 있을 수 있어요{' '}
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
};

export default MyComponent0;
