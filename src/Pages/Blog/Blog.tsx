import React from 'react';
import './Blog.scss';
import blog1 from '../../img/blog1.jpg';
import blog2 from '../../img/blog2.jpg';
import author1 from '../../img/author1.png';
import about1 from '../../img/about1.png';
import recent1 from '../../img/recent1.jpg';
import recent2 from '../../img/recent2.jpg';
import recent3 from '../../img/recent3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Blog = (props: any) => {
  const { data } = props;
  return (
    <div className="wrapper">
      <div className="product1-blog">
        <label className="product1-label">
          <p>BLOG</p>
        </label>
      </div>
      <div className="product1">
        <div className="row">
          <div className="product1 col-xl-9">
            <img className="product1-img " src={require(`../../img/${data.image}`)} alt="" />
            <div className="product-detail">
              <h2>{data.author}</h2>
              <p>{data.post}</p>
              <p>{data.desc}</p>

              <br />
              <div className="quote">
                <p>{data.quote}</p>
              </div>
              <p>{data.desc}</p>

              <div className="wrapper-blog-img">
                <img className="blog-img" src={blog1} alt="" />
                <img className="blog-img" src={blog2} alt="" />
              </div>
              <p>{data.desc}</p>

              <div className="product1-social">
                <p>Share: </p>
                <FontAwesomeIcon className="cart" icon={faYoutube} />{' '}
                <FontAwesomeIcon className="cart" icon={faFacebook} />{' '}
                <FontAwesomeIcon className="cart" icon={faTwitter} />{' '}
                <FontAwesomeIcon className="cart" icon={faInstagram} />{' '}
              </div>
            </div>
            <div className="product1-author">
              <div className="author-l">
                <img src={author1} alt="" />
              </div>
              <div className="author-r">
                <div className="author-name">{data.author}</div>
                <div className="autour-cmt">
                  <p>
                    Lorem ipsum dolor sit amet, te ridens gloriatur temporibus qui, per enim veritus
                    probatus ad. Quo eu etiam exerci dolore, usu ne omnes referrentur. Ex eam
                    diceret denique, ut legimus similique vix detraxit
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="r-about">ABOUT</div>
            <div className="r-about-item">
              <div className="r-about-item-img">
                <img src={about1} alt="" />
              </div>
              <p>
                Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in
                mei. Mei an pericula euripidis, hinc partem ei est.
              </p>
            </div>
            <div className="r-recent">RECENT POSTS</div>
            <Link to={'#'}>
              <div className="r-recent-item1">
                <div className="r-recent-item1-l">
                  <img src={recent1} alt="" />
                </div>
                <div className="r-recent-item1-r">
                  <label>Make it simple</label>
                  <p>23.02.2022</p>
                </div>
              </div>
            </Link>
            <Link to={'#'}>
              <div className="r-recent-item1">
                <div className="r-recent-item1-l">
                  <img src={recent2} alt="" />
                </div>
                <div className="r-recent-item1-r">
                  <label>Coffee shop</label>
                  <p>23.02.2022</p>
                </div>
              </div>
            </Link>
            <Link to={'#'}>
              <div className="r-recent-item1">
                <div className="r-recent-item1-l">
                  <img src={recent3} alt="" />
                </div>
                <div className="r-recent-item1-r">
                  <label>coffee bar</label>
                  <p>23.02.2022</p>
                </div>
              </div>
            </Link>
            <div className="r-wrapper-category">
              <div className="r-category">CATEGORIES</div>
              <div className="r-category-item">
                <p>Competition(3)</p>
              </div>
              <div className="r-category-item">
                <p>Delicious(2)</p>
              </div>
              <div className="r-category-item">
                <p>Enjoyment(12)</p>
              </div>
              <div className="r-category-item">
                <p>Life(4)</p>
              </div>
              <div className="r-category-item">
                <p>Lifestyle(7)</p>
              </div>
              <div className="r-category-item">
                <p>Media(5)</p>
              </div>
            </div>
            <div className="r-wrapper-followus">
              <div className="r-category">FOLLOW US</div>
              <div className="wrapper-r-social">
                <FontAwesomeIcon className="r-social" icon={faYoutube} />{' '}
                <FontAwesomeIcon className="r-social" icon={faFacebook} />{' '}
                <FontAwesomeIcon className="r-social" icon={faTwitter} />{' '}
                <FontAwesomeIcon className="r-social" icon={faInstagram} />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
