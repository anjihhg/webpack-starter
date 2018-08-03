import '../styles/index.scss';
import $ from 'jquery';
import { TweenMax } from 'gsap';

// 지워주세요 -------------------------------!
import { module1, module2 } from './testModule';

// TweenMax테스트 코드
TweenMax.from($('#root'), 0.5, { y: -20, opacity: 0 });
module1(); // 모듈 테스트 - console창 확인

// 지워주세요 -------------------------------!
