import React, { FC, useMemo } from 'react';
import './Checkout.scss';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
interface Props {
  cart: Array<Object>;
}
type UserSubmitForm = {
  firstName: String;
  lastName: String;
  companyName: String;
  address: String;
  postcode: Number;
  city: String;
  phone: Number;
  email: String;
  errors: any;
  formState: any;
};
const Checkout: FC<Props> = ({ cart }) => {
  const total = useMemo(() => {
    let price = 0;
    cart.forEach((item: any) => {
      price += item.price * item.qty;
    });
    return price;
  }, [cart]);
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    companyName: yup.string(),
    address: yup.string().required(),
    postcode: yup.number().required(),
    city: yup.string().required(),
    phone: yup.number().required(),
    email: yup
      .string()
      .email()
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(schema),
  });
  const submitForm = (data: any) => {
    console.log(data);
    alert(JSON.stringify(data));
  };
  return (
    <div className="checkout-page">
      <div className="cart-page-top">
        <label htmlFor="" className="cart-page-toplabel">
          CHECKOUT
        </label>
        <p className="cart-page-nav">Hanabi / Checkout</p>
      </div>
      <div className="checkout-page-body">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="checkout-page-infor">
            <div className="row">
              <div className="col-xl-7">
                <label className="checkout-page-label" htmlFor="">
                  BILLING & SHIPPING
                </label>
                <div className="checkout-input-wrapper">
                  <div className="input-two">
                    <div className="w-100">
                      <input
                        style={{ width: '48%' }}
                        type="text"
                        placeholder="First name"
                        {...register('firstName')}
                      />
                      <p>{errors.firstName && errors.firstName.message}</p>
                    </div>
                    <div className="w-100">
                      <input
                        style={{ width: '48%', marginLeft: 'auto' }}
                        type="text"
                        placeholder="Last name"
                        {...register('lastName')}
                      />
                      <p>{errors.lastName && errors.lastName.message}</p>
                    </div>
                  </div>
                  <input type="text" placeholder="Company name" {...register('companyName')} />
                  <p>{errors.companyName && errors.companyName.message}</p>
                  <input
                    type="text"
                    placeholder="House number and street name"
                    {...register('address')}
                  />
                  <p>{errors.address && errors.address.message}</p>
                  <input type="text" placeholder="Postcode / ZIP" {...register('postcode')} />
                  <input type="text" placeholder="City" {...register('city')} />
                  <p>{errors.city && errors.city.message}</p>
                  <input type="text" placeholder="Phone" {...register('phone')} />
                  <p>{errors.phone && errors.phone.message}</p>
                  <input type="text" placeholder="Email" {...register('email')} />
                  <p>{errors.email && errors.email.message}</p>
                </div>
              </div>

              <div className="col-xl-5">
                <label htmlFor="" className="checkout-page-label">
                  ADDITIONAL INFORMATION
                </label>
                <div className="checkout-input-wrapper">
                  <textarea
                    className="checkout-input-note"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                  />
                </div>
              </div>
            </div>
            <div className="checkout-page-yourorder">
              <label className="checkout-page-label" htmlFor="">
                YOUR ORDER
              </label>

              <div className="yourorder-child">
                <div className="yourorder-child-title">
                  <div className="row w-100">
                    <p className="col-xl-4 child-title ">Product</p>
                    <p className="col-xl-4 child-title ">Quantity</p>
                    <p className="col-xl-4 child-title">Price</p>
                  </div>
                </div>
                {cart.map((item: any) => (
                  <>
                    <div className="yourorder-child-title">
                      <div className="row w-100">
                        <p className="col-xl-4 col-md-4"> {item.name} </p>
                        <p className="col-xl-4 col-md-4"> {item.qty} </p>

                        <p className="col-xl-4 col-md-4">${item.price}</p>
                      </div>
                    </div>
                  </>
                ))}

                <div className="yourorder-child-title">
                  <div className="row w-100">
                    <p className="col-xl-4 col-md-4">Shipping</p>
                    <p className="col-xl-4 col-md-4" />

                    <p className="col-xl-4 col-md-4">Free Shipping</p>
                  </div>
                </div>
                <div className="yourorder-child-title">
                  <div className="row w-100">
                    <p className="col-xl-4 col-md-4 font-weight-bold">Total</p>
                    <p className="col-xl-4 col-md-4" />
                    <p className="col-xl-4 col-md-4 font-weight-bold">${total}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout-page-payment">
            <label className="checkout-page-label" htmlFor="">
              CREDIT/DEBIT CARD SECURE PAYMENT
            </label>
            <div className="checkout-page-payment-method">
              <label htmlFor="">CART HOLDER</label>
              <input type="text" />
              <label htmlFor="">CART NUMBER</label>
              <input type="text" />
              <label htmlFor="">EXPIRATION DATE *</label>
              <div className="select-option">
                <select style={{ width: '120px' }}>
                  <option value="0">Month</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select style={{ width: '120px' }}>
                  <option value="0">Year</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
              <label htmlFor="">CARD VERIFICATION NUMBER *</label>
              <input type="text" />
            </div>
          </div>
          <div className="checkout-page-order">
            {/* <a
              href="/"
              onClick={() => {
                alert("ORDER SUCCESS");
              }}
            > */}
            {/* <div className="checkout-page-btn">PLACE ORDER</div> */}
            <div className="form-submit-wrapper">
              <input className="form-submit" type="submit" />
            </div>
            {/* </a> */}
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state: { shop: { cart: any } }) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Checkout);
