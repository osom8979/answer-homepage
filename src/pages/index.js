import React from 'react';

import Layout from '../components/Layout';

import answerLogo from '../assets/images/answer.svg';
import pic1 from '../assets/images/feature-graph2.png';
import pic2 from '../assets/images/5-4.png';
import pic3 from '../assets/images/4-2.png';
import pic4 from '../assets/images/6.png';
import pic5 from '../assets/images/object_detection.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          {/*<span className="icon fa-diamond"></span>*/}
          <img src={answerLogo} />
        </div>
        {/*<h2>{config.heading}</h2>*/}
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">비주얼 프로그래밍</h2>
            <p>
              그래프 이론에 기반한 비주얼 프로그래밍으로
              작업(Task)을 손쉽게 정의할 수 있습니다.
              시각적으로 정의된 노드와 노드를 연결하는 것 만으로
              당신이 원하는 결과를 도출합니다.
            </p>
            {/*<a href="/#" className="special">
              Learn more
            </a>*/}
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">대시보드</h2>
            <p>
              작업 결과를 원하는 위젯(Widget)에 연결하여 출력할 수 있습니다.
            </p>
            <ul className="actions">
              <li>Camera Player</li>
              <li>Image Viewer</li>
              <li>Plugin</li>
              <li>Jupyter</li>
            </ul>
            {/*<a href="/#" className="special">
              Learn more
            </a>*/}
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">파이썬 스크립트 지원</h2>
            <p>
              보다 복잡한 업무 지원이 필요할 경우
              Python 스크립트를 적용할 수 있습니다.
              JupyterLab을 사용한 파이썬 프로그래밍이 가능하며,
              적용된 내용을 람다(Lambda)에 즉각 반영할 수 있습니다.
            </p>
            {/*<a href="/#" className="special">
              Learn more
            </a>*/}
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">활용 사례</h2>
          <p>
            엔서(ANSWER)를 사용한 여러 사례를 소개합니다.
          </p>
          <section className="features">

            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">영상 분석</h3>
              <p>
                MatLab, OpenCV 와 같은 도구를 대신하여 엔서를 사용한 영상 분석 사례.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>

            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">영상 기반 딥러닝</h3>
              <p>
                딥러닝을 활용한 객체 검출(Object Detection) 사례.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>

            {/*<article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>

            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>*/}
          </section>

          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>

        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
