import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";

import {
  addToWishlist,
  deleteFromWishlist,
  deleteAllFromWishlist,
} from "../../redux/actions/wishlistActions";
import { addToCart } from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axiosConfig from "../../axiosConfig";
import { Button, Col, Row } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const MyOrder = ({ location, args }) => {
  const { pathname } = location;
  const [order, setOrder] = useState([]);
  const [modal, setModal] = useState(false);
  const [Refund, setRefund] = useState({});

  const toggle = () => setModal(!modal);
  const fetchOrder = async () => {
    let userid = JSON.parse(localStorage.getItem("user_id"));
    const { data } = await axiosConfig.get(`/user/myOrders/${userid}`);
    const order = data.data;
    setOrder(order);
    console.log(order);
  };
  const hanleopenmodal = (e, data) => {
    e.preventDefault();
    setRefund(data);
    console.log(data);
    toggle();
  };

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      fetchOrder();
    }
  }, []);

  return (
    <Fragment>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        My Refund
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {order && order.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Your Ordered Items</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>ORDER ID</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Purchasing Date</th>

                            <th>AMOUNT</th>

                            <th>GST</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>Refund</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order?.map((orders, key) => {
                            return (
                              <tr key={key}>
                                <td className="product-price-cart">
                                  <span className="amount">
                                    {orders?.orderId}
                                  </span>
                                </td>
                                <td className="product-thumbnail">
                                  <Link to="#">
                                    <img
                                      width="80px"
                                      height="80px"
                                      className="img-fluid"
                                      src={orders?.product?.product?.image[0]}
                                      alt=""
                                    />
                                  </Link>
                                </td>

                                <td className="product-name text-center">
                                  <Link>
                                    {orders?.product?.product?.productname}
                                  </Link>
                                  <br />
                                  <p>by:-{orders?.astroid?.fullname}</p>
                                  {orders?.product?.product?.qsCount ? (
                                    <>
                                      Question Count:{" "}
                                      {orders?.product?.product?.qsCount}
                                    </>
                                  ) : null}
                                </td>

                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.createdAt?.split("T")[0]}
                                </td>
                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.cartId?.productid?.price}
                                </td>
                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.cartId.gst}
                                </td>
                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.cartId?.total_amt}
                                </td>
                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.status}
                                </td>
                                <td className="product-price-cart">
                                  <Button
                                    onClick={(e) => hanleopenmodal(e, orders)}
                                    color="primary"
                                  >
                                    Apply for Refund
                                  </Button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cart"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No Product Found <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/astromallList"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Modal
            style={{ maxWidth: "960px" }}
            size="modal-lg"
            isOpen={modal}
            toggle={toggle}
            {...args}
          >
            <ModalHeader toggle={toggle}>Apply for Refund</ModalHeader>
            <ModalBody>
              <Row>
                <Col>
                  <p className="productrefund">
                    <b>Product Name:</b> {Refund?.product?.product?.productname}
                  </p>
                  <p className="productrefund">
                    <b>Product Price:</b> {Refund?.product?.product?.price} Rs
                  </p>
                  <p className="productrefund">
                    <b>Amount:</b> {Refund?.cartId?.total_amt}
                  </p>
                </Col>
                <Col>
                  <img
                    style={{ borderRadius: "12px" }}
                    width="90%"
                    height="auto"
                    src={Refund?.product?.product.image}
                    alt="image"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <p className="">
                    {" "}
                    <b>Reason for Return</b>
                  </p>

                  <textarea
                    rows="6"
                    cols="50"
                    class="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="d-flex justify-content-center py-2">
                    <Button color="primary">Apply for Refund</Button>
                  </div>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

MyOrder.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
  deleteAllFromWishlist: PropTypes.func,
  deleteFromWishlist: PropTypes.func,
  wishlistItems: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    currency: state.currencyData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    addToWishlist: (item, addToast, quantityCount) => {
      dispatch(addToWishlist(item, addToast, quantityCount));
    },
    deleteFromWishlist: (item, addToast, quantityCount) => {
      dispatch(deleteFromWishlist(item, addToast, quantityCount));
    },
    deleteAllFromWishlist: (addToast) => {
      dispatch(deleteAllFromWishlist(addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);
