import React from 'react';
import './Blog.scss';
import about1 from '../../img/about1.png';
import recent1 from '../../img/recent1.jpg';
import recent2 from '../../img/recent2.jpg';
import recent3 from '../../img/recent3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import blogData from '../../Data/BlogData';
const AllBlog = () => {
  const navigate = useNavigate();
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
            {blogData.map((data) => (
              <div key={data.title} style={{ marginBottom: '2rem' }}>
                <img
                  className="product1-img hoverScale"
                  src={require(`../../img/${data.image}`)}
                  alt=""
                  onClick={() => navigate(`/blog/${data.slug}`)}
                />
                <div className="product-detail">
                  <h2
                    className="hoverPointer"
                    style={{
                      fontWeight: 'bold',
                      fontSize: '30px',
                      cursor: 'pointer',
                    }}
                    onClick={() => navigate(`/blog/${data.slug}`)}
                  >
                    {data.title}
                  </h2>
                  <p>{data.post}</p>
                  <p>{data.desc}</p>
                  <div className="product1-social">
                    <p>Share: </p>
                    <FontAwesomeIcon className="cart" icon={faYoutube} />{' '}
                    <FontAwesomeIcon className="cart" icon={faFacebook} />{' '}
                    <FontAwesomeIcon className="cart" icon={faTwitter} />{' '}
                    <FontAwesomeIcon className="cart" icon={faInstagram} />{' '}
                  </div>
                </div>
              </div>
            ))}
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

export default AllBlog;
