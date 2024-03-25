import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header
        data-anim="fade"
        data-add-bg="bg-dark-1"
        className="header -type-1 js-header"
      >
        <div className="header__container">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="header-left">
                <div className="header__logo">
                  <a data-barba href="index.html">
                    <img src="img/general/logo.svg" alt="logo" />
                  </a>
                </div>

                <div className="header__explore text-green-1 mr-60 xl:mr-30 xl:d-none">
                  <a
                    href="#"
                    className="d-flex items-center"
                    data-el-toggle=".js-explore-toggle"
                  >
                    <i className="icon icon-explore ml-15"></i>
                    دسته بندی ها
                  </a>

                  <div className="explore-content py-25 rounded-8 bg-white toggle-element js-explore-toggle">
                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        برنامه نویسی
                        <div className="icon-chevron-left text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="courses-single-1.html">
                          طراحی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          بانک های اطلاعاتی
                        </a>
                        <a className="text-dark-1" href="courses-single-3.html">
                          برنامه نویسی موبایل
                        </a>
                        <a className="text-dark-1" href="courses-single-4.html">
                          برنامه نویسی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-5.html">
                          مهندسی نرم افزار
                        </a>
                        <a className="text-dark-1" href="courses-single-6.html">
                          سیستم عامل
                        </a>
                        <a className="text-dark-1" href="courses-single-1.html">
                          مدیریت پروژه
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          برنامه نویسی وب
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        دیجیتال مارکتنیگ
                        <div className="icon-chevron-left text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="courses-single-1.html">
                          طراحی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          بانک های اطلاعاتی
                        </a>
                        <a className="text-dark-1" href="courses-single-3.html">
                          برنامه نویسی موبایل
                        </a>
                        <a className="text-dark-1" href="courses-single-4.html">
                          برنامه نویسی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-5.html">
                          مهندسی نرم افزار
                        </a>
                        <a className="text-dark-1" href="courses-single-6.html">
                          سیستم عامل
                        </a>
                        <a className="text-dark-1" href="courses-single-1.html">
                          مدیریت پروژه
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          برنامه نویسی وب
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a href="#" className="text-dark-1">
                        سیستم عامل
                      </a>
                    </div>

                    <div className="explore__item">
                      <a href="#" className="text-dark-1">
                        بانک های اطلاعاتی
                      </a>
                    </div>

                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        طراحی وب
                        <div className="icon-chevron-left text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="courses-single-1.html">
                          طراحی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          بانک های اطلاعاتی
                        </a>
                        <a className="text-dark-1" href="courses-single-3.html">
                          برنامه نویسی موبایل
                        </a>
                        <a className="text-dark-1" href="courses-single-4.html">
                          برنامه نویسی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-5.html">
                          مهندسی نرم افزار
                        </a>
                        <a className="text-dark-1" href="courses-single-6.html">
                          سیستم عامل
                        </a>
                        <a className="text-dark-1" href="courses-single-1.html">
                          مدیریت پروژه
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          برنامه نویسی وب
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a href="courses-single-6.html" className="text-dark-1">
                        رباتیک
                      </a>
                    </div>

                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        طراحی گرافیک
                        <div className="icon-chevron-left text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="courses-single-1.html">
                          طراحی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          بانک های اطلاعاتی
                        </a>
                        <a className="text-dark-1" href="courses-single-3.html">
                          برنامه نویسی موبایل
                        </a>
                        <a className="text-dark-1" href="courses-single-4.html">
                          برنامه نویسی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-5.html">
                          مهندسی نرم افزار
                        </a>
                        <a className="text-dark-1" href="courses-single-6.html">
                          سیستم عامل
                        </a>
                        <a className="text-dark-1" href="courses-single-1.html">
                          مدیریت پروژه
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          برنامه نویسی وب
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        زبان انگلیسی
                        <div className="icon-chevron-left text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="courses-single-1.html">
                          طراحی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          بانک های اطلاعاتی
                        </a>
                        <a className="text-dark-1" href="courses-single-3.html">
                          برنامه نویسی موبایل
                        </a>
                        <a className="text-dark-1" href="courses-single-4.html">
                          برنامه نویسی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-5.html">
                          مهندسی نرم افزار
                        </a>
                        <a className="text-dark-1" href="courses-single-6.html">
                          سیستم عامل
                        </a>
                        <a className="text-dark-1" href="courses-single-1.html">
                          مدیریت پروژه
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          برنامه نویسی وب
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        نگارش آکادمیک
                        <div className="icon-chevron-left text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="courses-single-1.html">
                          طراحی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          بانک های اطلاعاتی
                        </a>
                        <a className="text-dark-1" href="courses-single-3.html">
                          برنامه نویسی موبایل
                        </a>
                        <a className="text-dark-1" href="courses-single-4.html">
                          برنامه نویسی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-5.html">
                          مهندسی نرم افزار
                        </a>
                        <a className="text-dark-1" href="courses-single-6.html">
                          سیستم عامل
                        </a>
                        <a className="text-dark-1" href="courses-single-1.html">
                          مدیریت پروژه
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          برنامه نویسی وب
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a href="#" className="text-dark-1">
                        علوم انسانی
                      </a>
                    </div>

                    <div className="explore__item">
                      <a href="#" className="text-dark-1">
                        هوش مصنوعی
                      </a>
                    </div>

                    <div className="explore__item">
                      <a
                        href="#"
                        className="d-flex items-center justify-between text-dark-1"
                      >
                        مهندسی نرم افزار
                        <div className="icon-chevron-left text-11"></div>
                      </a>
                      <div className="explore__subnav rounded-8">
                        <a className="text-dark-1" href="courses-single-1.html">
                          طراحی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          بانک های اطلاعاتی
                        </a>
                        <a className="text-dark-1" href="courses-single-3.html">
                          برنامه نویسی موبایل
                        </a>
                        <a className="text-dark-1" href="courses-single-4.html">
                          برنامه نویسی وب
                        </a>
                        <a className="text-dark-1" href="courses-single-5.html">
                          مهندسی نرم افزار
                        </a>
                        <a className="text-dark-1" href="courses-single-6.html">
                          سیستم عامل
                        </a>
                        <a className="text-dark-1" href="courses-single-1.html">
                          مدیریت پروژه
                        </a>
                        <a className="text-dark-1" href="courses-single-2.html">
                          برنامه نویسی وب
                        </a>
                      </div>
                    </div>

                    <div className="explore__item">
                      <a href="courses-single-1.html" className="text-dark-1">
                        فناوری و اطلاعات
                      </a>
                    </div>

                    <div className="explore__item">
                      <a
                        href="courses-single-2.html"
                        className="text-purple-1 underline"
                      >
                        همه دسته بندی ها
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="header-menu js-mobile-menu-toggle">
              <div className="header-menu__content">
                <div className="mobile-bg js-mobile-bg"></div>

                <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
                  <a href="login.html" className="text-dark-1">
                    ورود
                  </a>
                  <a href="signup.html" className="text-dark-1 mr-30">
                    ثبت نام
                  </a>
                </div>

                <div className="menu js-navList">
                  <ul className="menu__nav text-white -is-active">
                    <li className="menu-item-has-children">
                      <a data-barba href="#">
                        صفحه اصلی
                        <i className="icon-chevron-left text-11 mr-10"></i>
                      </a>

                      <ul className="subnav">
                        <li className="menu__backButton js-nav-list-back">
                          <a href="#">
                            <i className="icon-chevron-right text-13 ml-10"></i>
                            صفحه اصلی
                          </a>
                        </li>

                        <li>
                          <a href="index.html">نسخه 1</a>
                        </li>

                        <li>
                          <a href="home-2.html">نسخه 2</a>
                        </li>

                        <li>
                          <a href="home-3.html">نسخه 3</a>
                        </li>

                        <li>
                          <a href="home-4.html">نسخه 4</a>
                        </li>

                        <li>
                          <a href="home-5.html">نسخه 5</a>
                        </li>

                        <li>
                          <a href="home-6.html">نسخه 6</a>
                        </li>

                        <li>
                          <a href="home-7.html">نسخه 7</a>
                        </li>

                        <li>
                          <a href="home-8.html">نسخه 8</a>
                        </li>

                        <li>
                          <a href="home-9.html">نسخه 9</a>
                        </li>

                        <li>
                          <a href="home-10.html">نسخه 10</a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children -has-mega-menu">
                      <a data-barba href="#">
                        صفحات <i className="icon-chevron-left text-11 mr-10"></i>
                      </a>

                      <div className="mega xl:d-none">
                        <div className="mega__menu">
                          <div className="row x-gap-40">
                            <div className="col">
                              <h4 className="text-17 fw-500 mb-20">
                                طرح بندی لیست دوره ها
                              </h4>

                              <ul className="mega__list">
                                <li>
                                  <a data-barba href="courses-list-1.html">
                                    نسخه 1
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="courses-list-2.html">
                                    نسخه 2
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="courses-list-3.html">
                                    نسخه 3
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="courses-list-4.html">
                                    نسخه 4
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="courses-list-5.html">
                                    نسخه 5
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="courses-list-6.html">
                                    نسخه 6
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="courses-list-7.html">
                                    نسخه 7
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="courses-list-8.html">
                                    نسخه 8
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h4 className="text-17 fw-500 mb-20">
                                طرح بندی جزئیات دوره
                              </h4>

                              <ul className="mega__list">
                                <li>
                                  <a data-barba href="courses-single-1.html">
                                    نسخه 1
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="courses-single-2.html">
                                    نسخه 2
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="courses-single-3.html">
                                    نسخه 3
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="courses-single-4.html">
                                    نسخه 4
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="courses-single-5.html">
                                    نسخه 5
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="courses-single-6.html">
                                    نسخه 6
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h4 className="text-17 fw-500 mb-20">درباره دوره</h4>

                              <ul className="mega__list">
                                <li>
                                  <a data-barba href="lesson-single-1.html">
                                    معرفی دوره نسخه 1
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="lesson-single-2.html">
                                    معرفی دوره نسخه 2
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="instructors-list-1.html">
                                    لیست مدرسان نسخه 1
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="instructors-list-2.html">
                                    لیست مدرسان نسخه 2
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="instructors-single.html">
                                    جزئیات مدرس نسخه 1
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="instructors-become.html">
                                    جزئیات مدرس نسخه 2
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h4 className="text-17 fw-500 mb-20">
                                صفحات داشبورد
                              </h4>

                              <ul className="mega__list">
                                <li>
                                  <a data-barba href="dashboard.html">
                                    داشبورد نسخه 1
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-courses.html">
                                    لیست دوره ها
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-bookmarks.html">
                                    مورد علاقه ها
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-listing.html">
                                    افزودن دوره جدید
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-reviews.html">
                                    دیدگاه ها
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-settings.html">
                                    تنظیمات
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-administration.html">
                                    مدیریت
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-assignment.html">
                                    وظایف
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-calendar.html">
                                    تقویم
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-dashboard.html">
                                    داشبورد نسخه 2
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-dictionary.html">
                                    دیگشنیری
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-forums.html">
                                    انجمن
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-grades.html">
                                    لیست نمرات
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-messages.html">
                                    ارسال تیکت
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-participants.html">
                                    هنرجویان
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-quiz.html">
                                    سوالات
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="dshb-survey.html">
                                    نظرسنجی
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col">
                              <h4 className="text-17 fw-500 mb-20">
                                برترین دوره ها
                              </h4>

                              <ul className="mega__list">
                                <li>
                                  <a data-barba href="#">
                                    برنامه نویسی وب
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="#">
                                    برنامه نویسی موبایل
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="#">
                                    دیجیتال مارکتینگ
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="#">
                                    رباتیک
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="#">
                                    حسابداری و مالی
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="#">
                                    گرافیک
                                  </a>
                                </li>

                                <li>
                                  <a data-barba href="#">
                                    مشاهده همه
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="mega-banner bg-purple-1 ml-40">
                            <div className="text-24 lh-15 text-white fw-700">
                              پیوستن به بیش از
                              <br />
                              <span className="text-green-1">8 میلیون دانشجو</span>
                              در سراسر جهان
                            </div>
                            <a
                              href="#"
                              className="button -md -green-1 text-dark-1 fw-500 col-12"
                            >
                              آموزش رایگان
                            </a>
                          </div>
                        </div>
                      </div>

                      <ul className="subnav d-none xl:d-block">
                        <li className="menu__backButton js-nav-list-back">
                          <a href="#">
                            <i className="icon-chevron-right text-13 ml-10"></i>
                            دوره ها
                          </a>
                        </li>

                        <li className="menu-item-has-children">
                          <a href="#">
                            طرح بندی لیست دوره ها
                            <div className="icon-chevron-left text-11"></div>
                          </a>

                          <ul className="subnav">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-right text-13 ml-10"></i>
                                طرح بندی لیست دوره ها
                              </a>
                            </li>

                            <li>
                              <a href="courses-list-1.html">نسخه 1</a>
                            </li>

                            <li>
                              <a href="courses-list-2.html">نسخه 2</a>
                            </li>

                            <li>
                              <a href="courses-list-3.html">نسخه 3</a>
                            </li>

                            <li>
                              <a href="courses-list-4.html">نسخه 4</a>
                            </li>

                            <li>
                              <a href="courses-list-5.html">نسخه 5</a>
                            </li>

                            <li>
                              <a href="courses-list-6.html">نسخه 6</a>
                            </li>

                            <li>
                              <a href="courses-list-7.html">نسخه 7</a>
                            </li>

                            <li>
                              <a href="courses-list-8.html">نسخه 8</a>
                            </li>

                            <li>
                              <a href="courses-list-all.html">
                                مشاهده لیست دوره ها
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <a href="#">
                            طرح بندی جزئیات دوره
                            <div className="icon-chevron-left text-11"></div>
                          </a>

                          <ul className="subnav">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-right text-13 ml-10"></i>
                                طرح بندی جزئیات دوره
                              </a>
                            </li>

                            <li>
                              <a href="courses-single-1.html">نسخه 1</a>
                            </li>

                            <li>
                              <a href="courses-single-2.html">نسخه 2</a>
                            </li>

                            <li>
                              <a href="courses-single-3.html">نسخه 3</a>
                            </li>

                            <li>
                              <a href="courses-single-4.html">نسخه 4</a>
                            </li>

                            <li>
                              <a href="courses-single-5.html">نسخه 5</a>
                            </li>

                            <li>
                              <a href="courses-single-6.html">نسخه 6</a>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <a href="#">
                            درباره دوره
                            <div className="icon-chevron-left text-11"></div>
                          </a>

                          <ul className="subnav">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-right text-13 ml-10"></i>
                                درباره دوره
                              </a>
                            </li>

                            <li>
                              <a href="lesson-single-1.html">
                                معرفی دوره نسخه 1
                              </a>
                            </li>

                            <li>
                              <a href="lesson-single-2.html">
                                معرفی دوره نسخه 2
                              </a>
                            </li>

                            <li>
                              <a href="instructors-list-1.html">
                                لیست مدرسان نسخه 1
                              </a>
                            </li>

                            <li>
                              <a href="instructors-list-2.html">
                                لیست مدرسان نسخه 2
                              </a>
                            </li>

                            <li>
                              <a href="instructors-single.html">جزئیات مدرس</a>
                            </li>

                            <li>
                              <a href="instructors-become.html">مدرس شوید</a>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <a href="#">
                            صفحات داشبورد
                            <div className="icon-chevron-left text-11"></div>
                          </a>

                          <ul className="subnav">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-right text-13 ml-10"></i>
                                صفحات داشبورد
                              </a>
                            </li>

                            <li>
                              <a href="dashboard.html">داشبورد نسخه 1</a>
                            </li>

                            <li>
                              <a href="dshb-courses.html">لیست دوره ها</a>
                            </li>

                            <li>
                              <a href="dshb-bookmarks.html">مورد علاقه ها</a>
                            </li>

                            <li>
                              <a href="dshb-listing.html">افزودن دوره جدید</a>
                            </li>

                            <li>
                              <a href="dshb-reviews.html">دیدگاه ها</a>
                            </li>

                            <li>
                              <a href="dshb-settings.html">تنظیمات</a>
                            </li>

                            <li>
                              <a href="dshb-administration.html">مدیریت</a>
                            </li>

                            <li>
                              <a href="dshb-assignment.html">وظایف</a>
                            </li>

                            <li>
                              <a href="dshb-calendar.html">تقویم</a>
                            </li>

                            <li>
                              <a href="dshb-dashboard.html">داشبورد نسخه 2</a>
                            </li>

                            <li>
                              <a href="dshb-dictionary.html">دیگشنیری</a>
                            </li>

                            <li>
                              <a href="dshb-forums.html">انجمن</a>
                            </li>

                            <li>
                              <a href="dshb-grades.html">لیست نمرات</a>
                            </li>

                            <li>
                              <a href="dshb-messages.html">ارسال تیکت</a>
                            </li>

                            <li>
                              <a href="dshb-participants.html">هنرجویان</a>
                            </li>

                            <li>
                              <a href="dshb-quiz.html">سوالات</a>
                            </li>

                            <li>
                              <a href="dshb-survey.html">نظرسنجی</a>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <a href="#">
                            برترین دوره ها
                            <div className="icon-chevron-left text-11"></div>
                          </a>

                          <ul className="subnav">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-right text-13 ml-10"></i>
                                برترین دوره ها
                              </a>
                            </li>

                            <li>
                              <a href="#">برنامه نویسی وب</a>
                            </li>

                            <li>
                              <a href="#">برنامه نویسی موبایل</a>
                            </li>

                            <li>
                              <a href="#">دیجیتال مارکتینگ</a>
                            </li>

                            <li>
                              <a href="#">رباتیک</a>
                            </li>

                            <li>
                              <a href="#">حسابداری و مالی</a>
                            </li>

                            <li>
                              <a href="#">گرافیک</a>
                            </li>

                            <li>
                              <a href="#">مشاهده همه</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <a data-barba href="#">
                        رویدادها <i className="icon-chevron-left text-11 mr-10"></i>
                      </a>
                      <ul className="subnav">
                        <li className="menu__backButton js-nav-list-back">
                          <a href="#">
                            <i className="icon-chevron-right text-13 ml-10"></i>
                            رویدادها
                          </a>
                        </li>

                        <li>
                          <a href="event-list-1.html">لیست نسخه 1</a>
                        </li>

                        <li>
                          <a href="event-list-2.html">لیست نسخه 2</a>
                        </li>

                        <li>
                          <a href="event-single.html">جزئیات رویداد</a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <a data-barba href="#">
                        وبلاگ <i className="icon-chevron-left text-11 mr-10"></i>
                      </a>
                      <ul className="subnav">
                        <li className="menu__backButton js-nav-list-back">
                          <a href="#">
                            <i className="icon-chevron-right text-13 ml-10"></i>
                            وبلاگ
                          </a>
                        </li>

                        <li>
                          <a href="blog-list-1.html">لیست نسخه 1</a>
                        </li>

                        <li>
                          <a href="blog-list-2.html">لیست نسخه 2</a>
                        </li>

                        <li>
                          <a href="blog-list-3.html">لیست نسخه 3</a>
                        </li>

                        <li>
                          <a href="blog-single.html">جزئیات وبلاگ</a>
                        </li>
                      </ul>
                    </li>

                    <li className="menu-item-has-children">
                      <a data-barba href="#">
                        سایر <i className="icon-chevron-left text-11 mr-10"></i>
                      </a>

                      <ul className="subnav">
                        <li className="menu__backButton js-nav-list-back">
                          <a href="#">
                            <i className="icon-chevron-right text-13 ml-10"></i>
                            سایر
                          </a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">
                            درباره ما
                            <div className="icon-chevron-left text-11"></div>
                          </a>

                          <ul className="subnav">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-right text-13 ml-10"></i>
                                درباره ما
                              </a>
                            </li>

                            <li>
                              <a href="about-1.html">نسخه 1</a>
                            </li>

                            <li>
                              <a href="about-2.html">نسخه 2</a>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <a href="#">
                            تماس با ما
                            <div className="icon-chevron-left text-11"></div>
                          </a>
                          <ul className="subnav">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-right text-13 ml-10"></i>
                                تماس با ما
                              </a>
                            </li>

                            <li>
                              <a href="contact-1.html">نسخه 1</a>
                            </li>

                            <li>
                              <a href="contact-2.html">نسخه 2</a>
                            </li>
                          </ul>
                        </li>

                        <li className="menu-item-has-children">
                          <a href="#">
                            فروشگاه
                            <div className="icon-chevron-left text-11"></div>
                          </a>
                          <ul className="subnav">
                            <li className="menu__backButton js-nav-list-back">
                              <a href="#">
                                <i className="icon-chevron-right text-13 mr-10"></i>
                                فروشگاه
                              </a>
                            </li>

                            <li>
                              <a href="shop-cart.html">سبد خرید</a>
                            </li>

                            <li>
                              <a href="shop-checkout.html">تسویه حساب</a>
                            </li>

                            <li>
                              <a href="shop-list.html">لیست محصولات</a>
                            </li>

                            <li>
                              <a href="shop-order.html">پرداخت موفق</a>
                            </li>

                            <li>
                              <a href="shop-single.html">جزئیات محصول</a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="pricing.html">پلان قیمت گذاری</a>
                        </li>

                        <li>
                          <a href="404.html">صفحه 404</a>
                        </li>

                        <li>
                          <a href="terms.html">قوانین سایت</a>
                        </li>

                        <li>
                          <a href="help-center.html">پشتیبانی</a>
                        </li>

                        <li>
                          <a href="login.html">ورود</a>
                        </li>

                        <li>
                          <a href="signup.html">ثبت نام</a>
                        </li>

                        <li>
                          <a href="ui-elements.html">المان های کاربردی</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a data-barba href="contact-1.html">
                        تماس با ما
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                  <div className="mobile-footer__number">
                    <div className="text-17 fw-500 text-dark-1">تماس با ما</div>
                    <div className="text-17 fw-500 text-purple-1">02188888888</div>
                  </div>

                  <div className="lh-2 mt-10">
                    <div>
                      تهران، خیابان ولیعصر
                      <br />
                      خیابان پارک وی مجتمع صدف
                    </div>
                    <div>example@educrat.com</div>
                  </div>

                  <div className="mobile-socials mt-10">
                    <a
                      href="#"
                      className="d-flex items-center justify-center rounded-full size-40"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>

                    <a
                      href="#"
                      className="d-flex items-center justify-center rounded-full size-40"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>

                    <a
                      href="#"
                      className="d-flex items-center justify-center rounded-full size-40"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>

                    <a
                      href="#"
                      className="d-flex items-center justify-center rounded-full size-40"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="header-menu-close"
                data-el-toggle=".js-mobile-menu-toggle"
              >
                <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
                  <div className="icon-close text-dark-1 text-16"></div>
                </div>
              </div>

              <div className="header-menu-bg"></div>
            </div>

            <div className="col-auto">
              <div className="header-right d-flex items-center">
                <div className="header-right__icons text-white d-flex items-center">
                  <div className="">
                    <button
                      className="d-flex items-center text-white"
                      data-el-toggle=".js-search-toggle"
                    >
                      <i className="text-20 icon icon-search"></i>
                    </button>

                    <div className="toggle-element js-search-toggle">
                      <div className="header-search pt-90 bg-white shadow-4">
                        <div className="container">
                          <div className="header-search__field">
                            <div className="icon icon-search text-dark-1"></div>
                            <input
                              type="text"
                              className="col-12 text-15 lh-12 text-dark-1 fw-500"
                              placeholder="جستجوی دوره"
                            />

                            <button
                              className="d-flex items-center justify-center size-40 rounded-full bg-purple-3"
                              data-el-toggle=".js-search-toggle"
                            >
                              <img src="img/menus/close.svg" alt="icon" />
                            </button>
                          </div>

                          <div className="header-search__content mt-30">
                            <div className="text-17 text-dark-1 fw-500">
                              دوره های محبوب
                            </div>

                            <div className="d-flex y-gap-5 flex-column mt-20">
                              <a
                                href="courses-single-1.html"
                                className="text-dark-1"
                              >
                                دوره نهایی طراحی - مبتدی تا پیشرفته
                              </a>
                              <a
                                href="courses-single-2.html"
                                className="text-dark-1"
                              >
                                طراح و تحلیلگر نرم افزار
                              </a>
                              <a
                                href="courses-single-3.html"
                                className="text-dark-1"
                              >
                                یادگیری مدل سازی سه بعدی برای مبتدیان
                              </a>
                              <a
                                href="courses-single-4.html"
                                className="text-dark-1"
                              >
                                ملزومات طراحی تجربه کاربری - Adobe XD UI UX
                                Design
                              </a>
                              <a
                                href="courses-single-5.html"
                                className="text-dark-1"
                              >
                                کلاس کارشناسی ارشد طراحی گرافیک
                              </a>
                              <a
                                href="courses-single-6.html"
                                className="text-dark-1"
                              >
                                دوره آموزشی Adobe Photoshop CC – Essentials
                              </a>
                            </div>

                            <div className="mt-30">
                              <button className="uppercase underline">
                                برای دیدن همه نتایج جستجو، ENTER را فشار دهید
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="header-search__bg"
                        data-el-toggle=".js-search-toggle"
                      ></div>
                    </div>
                  </div>

                  <div className="relative mr-30 xl:mr-20">
                    <button
                      className="d-flex items-center text-white"
                      data-el-toggle=".js-cart-toggle"
                    >
                      <i className="text-20 icon icon-basket"></i>
                    </button>

                    <div className="toggle-element js-cart-toggle">
                      <div className="header-cart bg-white -dark-bg-dark-1 rounded-8">
                        <div className="px-30 pt-30 pb-10">
                          <div className="row justify-between x-gap-40 pb-20">
                            <div className="col">
                              <div className="row x-gap-10 y-gap-10">
                                <div className="col-auto">
                                  <img src="img/menus/cart/1.png" alt="image" />
                                </div>

                                <div className="col">
                                  <div className="text-dark-1 lh-15">
                                    دوره نهایی نقاشی از مبتدی تا پیشرفته...
                                  </div>

                                  <div className="d-flex items-center mt-10">
                                    <div className="lh-12 fw-500 line-through text-light-1 ml-10">
                                      179
                                    </div>
                                    <div className="text-15 lh-12 fw-500 text-dark-1">
                                      79000 تومان
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-auto">
                              <button>
                                <img src="img/menus/close.svg" alt="icon" />
                              </button>
                            </div>
                          </div>

                          <div className="row justify-between x-gap-40 pb-20">
                            <div className="col">
                              <div className="row x-gap-10 y-gap-10">
                                <div className="col-auto">
                                  <img src="img/menus/cart/2.png" alt="image" />
                                </div>

                                <div className="col">
                                  <div className="text-dark-1 lh-15">
                                    آموزش ساخت وب سایت خبری با React Node
                                  </div>

                                  <div className="d-flex items-center mt-10">
                                    <div className="lh-12 fw-500 line-through text-light-1 ml-10">
                                      179
                                    </div>
                                    <div className="text-15 lh-12 fw-500 text-dark-1">
                                      79000 تومان
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-auto">
                              <button>
                                <img src="img/menus/close.svg" alt="icon" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="px-30 pt-20 pb-30 border-top-light">
                          <div className="d-flex justify-between">
                            <div className="text-18 lh-12 text-dark-1 fw-500">
                              جمع کل:
                            </div>
                            <div className="text-18 lh-12 text-dark-1 fw-500">
                              659000 تومان
                            </div>
                          </div>

                          <div className="row x-gap-20 y-gap-10 pt-30">
                            <div className="col-sm-6">
                              <button className="button py-20 -dark-1 text-white -dark-button-white col-12">
                                مشاهده سبد
                              </button>
                            </div>
                            <div className="col-sm-6">
                              <button className="button py-20 -purple-1 text-white col-12">
                                تسویه حساب
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-none xl:d-block mr-20">
                    <button
                      className="text-white items-center"
                      data-el-toggle=".js-mobile-menu-toggle"
                    >
                      <i className="text-11 icon icon-mobile-menu"></i>
                    </button>
                  </div>
                </div>

                <div className="header-right__buttons d-flex items-center mr-30 md:d-none">
                  <a href="login.html" className="button -underline text-white">
                    ورود
                  </a>
                  <a
                    href="signup.html"
                    className="button -sm -white text-dark-1 mr-30"
                  >
                    ثبت نام
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="content-wrapper js-content-wrapper">
        <section className="masthead -type-1 js-mouse-move-container">
          <div className="masthead__bg">
            <img src="img/home-1/hero/bg.png" alt="image" />
          </div>

          <div className="container">
            <div data-anim-wrap className="row y-gap-30 justify-between items-end">
              <div className="col-xl-6 col-lg-6 col-sm-10">
                <div className="masthead__content">
                  <h1 data-anim-child="slide-up" className="masthead__title">
                    مهارت های جدید را با معلمان برتر
                    <span className="text-green-1 underline">آنلاین</span> بیاموزید!
                  </h1>
                  <p data-anim-child="slide-up delay-1" className="masthead__text">
                    از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و
                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                  </p>
                  <div
                    data-anim-child="slide-up delay-2"
                    className="masthead__buttons row x-gap-10 y-gap-10"
                  >
                    <div className="col-12 col-sm-auto">
                      <a
                        data-barba
                        href="signup.html"
                        className="button -md -purple-1 text-white"
                      >
                        ثبت نام رایگان
                      </a>
                    </div>
                    <div className="col-12 col-sm-auto">
                      <a
                        data-barba
                        href="courses-list-1.html"
                        className="button -md -outline-green-1 text-green-1"
                      >
                        جستجوی دوره
                      </a>
                    </div>
                  </div>
                  <div
                    data-anim-child="slide-up delay-3"
                    className="masthead-info row y-gap-15 sm:d-none"
                  >
                    <div className="masthead-info__item d-flex items-center text-white">
                      <div className="masthead-info__icon ml-10">
                        <img src="img/masthead/icons/1.svg" alt="icon" />
                      </div>
                      <div className="masthead-info__title lh-1">
                        بیش از 12 میلیون دانشجو
                      </div>
                    </div>

                    <div className="masthead-info__item d-flex items-center text-white">
                      <div className="masthead-info__icon ml-10">
                        <img src="img/masthead/icons/2.svg" alt="icon" />
                      </div>
                      <div className="masthead-info__title lh-1">
                        بیش از 6000 دوره
                      </div>
                    </div>

                    <div className="masthead-info__item d-flex items-center text-white">
                      <div className="masthead-info__icon ml-10">
                        <img src="img/masthead/icons/3.svg" alt="icon" />
                      </div>
                      <div className="masthead-info__title lh-1">آموزش آنلاین</div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-anim-child="slide-up delay-5" className="col-xl-6 col-lg-6">
                <div className="masthead-image">
                  <div className="masthead-image__el1">
                    <img
                      className="js-mouse-move"
                      data-move="40"
                      src="img/masthead/1.png"
                      alt="image"
                    />

                    <div
                      data-move="30"
                      className="lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
                    >
                      <div className="size-50 d-flex justify-center items-center bg-red-2 rounded-full">
                        <img src="img/masthead/1.svg" alt="icon" />
                      </div>
                      <div className="mr-20">
                        <div className="text-orange-1 text-16 fw-500 lh-1">
                          3.000 +
                        </div>
                        <div className="mt-3">دوره رایگان</div>
                      </div>
                    </div>
                  </div>

                  <div className="masthead-image__el2">
                    <img
                      className="js-mouse-move"
                      data-move="70"
                      src="img/masthead/2.png"
                      alt="image"
                    />

                    <div
                      data-move="60"
                      className="lg:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
                    >
                      <img src="img/masthead/4.png" alt="icon" />
                      <div className="mr-20">
                        <div className="text-dark-1 text-16 fw-500 lh-1">
                          مهرداد حسینی
                        </div>
                        <div className="mt-3">طراح UX/UI</div>
                        <div className="d-flex x-gap-5 mt-3">
                          <div>
                            <div className="icon-star text-yellow-1 text-11"></div>
                          </div>
                          <div>
                            <div className="icon-star text-yellow-1 text-11"></div>
                          </div>
                          <div>
                            <div className="icon-star text-yellow-1 text-11"></div>
                          </div>
                          <div>
                            <div className="icon-star text-yellow-1 text-11"></div>
                          </div>
                          <div>
                            <div className="icon-star text-yellow-1 text-11"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="masthead-image__el3">
                    <img
                      className="js-mouse-move"
                      data-move="40"
                      src="img/masthead/3.png"
                      alt="image"
                    />

                    <div
                      data-move="30"
                      className="shadow-4 img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 js-mouse-move"
                    >
                      <div className="img-el__side">
                        <div className="size-50 d-flex justify-center items-center bg-purple-1 rounded-full">
                          <img src="img/masthead/2.svg" alt="icon" />
                        </div>
                      </div>
                      <div className="">
                        <div className="text-purple-1 text-16 fw-500 lh-1">
                          تبریک!
                        </div>
                        <div className="mt-3">ثبت نام شما کامل شد</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <svg
            className="svg-waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="svg-waves__parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" />
              <use xlinkHref="#gentle-wave" x="48" y="3" />
              <use xlinkHref="#gentle-wave" x="48" y="5" />
              <use xlinkHref="#gentle-wave" x="48" y="7" />
            </g>
          </svg>
        </section>

        <section className="layout-pt-lg layout-pb-md">
          <div data-anim-wrap className="container">
            <div className="row justify-center">
              <div className="col text-center">
                <p className="text-18 text-dark-1">مورد اعتماد بهترین های جهان</p>
              </div>
            </div>

            <div className="row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50">
              <div
                data-anim-child="slide-up delay-1"
                className="col-lg-auto col-md-3 col-sm-4 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <img
                    className="w-1/1"
                    src="img/clients/1.svg"
                    alt="clients image"
                  />
                </div>
              </div>

              <div
                data-anim-child="slide-up delay-1"
                className="col-lg-auto col-md-3 col-sm-4 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <img
                    className="w-1/1"
                    src="img/clients/2.svg"
                    alt="clients image"
                  />
                </div>
              </div>

              <div
                data-anim-child="slide-up delay-1"
                className="col-lg-auto col-md-3 col-sm-4 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <img
                    className="w-1/1"
                    src="img/clients/3.svg"
                    alt="clients image"
                  />
                </div>
              </div>

              <div
                data-anim-child="slide-up delay-1"
                className="col-lg-auto col-md-3 col-sm-4 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <img
                    className="w-1/1"
                    src="img/clients/4.svg"
                    alt="clients image"
                  />
                </div>
              </div>

              <div
                data-anim-child="slide-up delay-1"
                className="col-lg-auto col-md-3 col-sm-4 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <img
                    className="w-1/1"
                    src="img/clients/5.svg"
                    alt="clients image"
                  />
                </div>
              </div>

              <div
                data-anim-child="slide-up delay-1"
                className="col-lg-auto col-md-3 col-sm-4 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <img
                    className="w-1/1"
                    src="img/clients/6.svg"
                    alt="clients image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-md layout-pb-md">
          <div data-anim-wrap className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle">
                  <h2 className="sectionTitle__title">دسته بندی های برتر</h2>

                  <p className="sectionTitle__text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="overflow-hidden pt-50 js-section-slider"
              data-gap="30"
              data-loop
              data-pagination
              data-slider-cols="xl-6 lg-4 md-2 sm-2"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-2"
                    className="featureCard -type-1 -featureCard-hover"
                  >
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="img/featureCards/1.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">طراحی وب</div>
                      <div className="featureCard__text">573+ دوره</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-3"
                    className="featureCard -type-1 -featureCard-hover"
                  >
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="img/featureCards/2.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">بازاریابی</div>
                      <div className="featureCard__text">565+ دوره</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-4"
                    className="featureCard -type-1 -featureCard-hover"
                  >
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="img/featureCards/3.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">فناوری اطلاعات</div>
                      <div className="featureCard__text">126+ دوره</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-5"
                    className="featureCard -type-1 -featureCard-hover"
                  >
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="img/featureCards/4.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">مهندسی معماری</div>
                      <div className="featureCard__text">35+ دوره</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-6"
                    className="featureCard -type-1 -featureCard-hover"
                  >
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="img/featureCards/5.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">طراحی گرافیک</div>
                      <div className="featureCard__text">908+ دوره</div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-7"
                    className="featureCard -type-1 -featureCard-hover"
                  >
                    <div className="featureCard__content">
                      <div className="featureCard__icon">
                        <img src="img/featureCards/6.svg" alt="icon" />
                      </div>
                      <div className="featureCard__title">حسابداری مالی</div>
                      <div className="featureCard__text">129+ دوره</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-prev">
                    <i className="icon icon-arrow-right"></i>
                  </button>
                </div>
                <div className="col-auto">
                  <div className="pagination -arrows js-pagination"></div>
                </div>
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-next">
                    <i className="icon icon-arrow-left"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-md layout-pb-lg">
          <div data-anim-wrap className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle">
                  <h2 className="sectionTitle__title">محبوب ترین دوره ها</h2>

                  <p className="sectionTitle__text">
                    بیش از 20000 دوره منحصر به فرد در لیست دوره های آنلاین
                  </p>
                </div>
              </div>
            </div>

            <div className="tabs -pills pt-50 js-tabs">
              <div className="tabs__controls d-flex justify-center x-gap-10 js-tabs-controls flex-wrap text-nowrap">
                <div>
                  <button
                    className="tabs__button px-15 py-8 rounded-8 js-tabs-button is-active"
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    همه
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-15 py-8 rounded-8 js-tabs-button"
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    طراحی وب
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-15 py-8 rounded-8 js-tabs-button"
                    data-tab-target=".-tab-item-3"
                    type="button"
                  >
                    برنامه نویسی
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-15 py-8 rounded-8 js-tabs-button"
                    data-tab-target=".-tab-item-4"
                    type="button"
                  >
                    هوش مصنوعی
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-15 py-8 rounded-8 js-tabs-button"
                    data-tab-target=".-tab-item-5"
                    type="button"
                  >
                    فناوری اطلاعات
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-15 py-8 rounded-8 js-tabs-button"
                    data-tab-target=".-tab-item-6"
                    type="button"
                  >
                    بازاریابی
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-15 py-8 rounded-8 js-tabs-button"
                    data-tab-target=".-tab-item-7"
                    type="button"
                  >
                    رباتیک
                  </button>
                </div>

                <div>
                  <button
                    className="tabs__button px-15 py-8 rounded-8 js-tabs-button"
                    data-tab-target=".-tab-item-8"
                    type="button"
                  >
                    مدیریت پروژه
                  </button>
                </div>
              </div>

              <div className="tabs__content pt-60 js-tabs-content">
                <div className="tabs__pane -tab-item-1 is-active">
                  <div className="row y-gap-30 justify-center">
                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-1">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/1.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش NodeJs
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-2">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/2.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                              <div>
                                <div className="px-15 rounded-200 bg-purple-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-white">
                                    ویژه
                                  </span>
                                </div>
                              </div>

                              <div>
                                <div className="px-15 rounded-200 bg-green-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                    پروفروش
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Python
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-3">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/3.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Angular
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-4">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/4.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش BootStrap
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-5">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/5.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Photoshop
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-6">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/6.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش JavaScript
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-7">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/7.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Invision
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-8">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/8.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش React-Native
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tabs__pane -tab-item-2">
                  <div className="row y-gap-30 justify-center">
                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-1">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/1.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش NodeJs
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-2">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/2.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                              <div>
                                <div className="px-15 rounded-200 bg-purple-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-white">
                                    ویژه
                                  </span>
                                </div>
                              </div>

                              <div>
                                <div className="px-15 rounded-200 bg-green-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                    پروفروش
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Python
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-3">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/3.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Angular
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-4">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/4.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش BootStrap
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-5">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/5.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Photoshop
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-6">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/6.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش JavaScript
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-7">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/7.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Invision
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-8">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/8.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش React-Native
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tabs__pane -tab-item-3">
                  <div className="row y-gap-30 justify-center">
                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-1">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/1.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش NodeJs
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-2">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/2.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                              <div>
                                <div className="px-15 rounded-200 bg-purple-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-white">
                                    ویژه
                                  </span>
                                </div>
                              </div>

                              <div>
                                <div className="px-15 rounded-200 bg-green-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                    پرفروش
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Python
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-3">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/3.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Angular
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-4">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/4.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش BootStrap
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-5">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/5.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Photoshop
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-6">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/6.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش JavaScript
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-7">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/7.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Invision
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-8">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/8.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش React-Native
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tabs__pane -tab-item-4">
                  <div className="row y-gap-30 justify-center">
                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-1">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/1.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش NodeJs
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-2">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/2.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                              <div>
                                <div className="px-15 rounded-200 bg-purple-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-white">
                                    ویژه
                                  </span>
                                </div>
                              </div>

                              <div>
                                <div className="px-15 rounded-200 bg-green-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                    پرفروش
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Python
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-3">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/3.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Angular
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-4">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/4.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش BootStrap
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-5">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/5.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Photoshop
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-6">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/6.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش JavaScript
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-7">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/7.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Invision
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-8">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/8.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش React-Native
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tabs__pane -tab-item-5">
                  <div className="row y-gap-30 justify-center">
                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-1">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/1.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش NodeJs
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-2">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/2.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                              <div>
                                <div className="px-15 rounded-200 bg-purple-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-white">
                                    ویژه
                                  </span>
                                </div>
                              </div>

                              <div>
                                <div className="px-15 rounded-200 bg-green-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                    پرفروش
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Python
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-3">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/3.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Angular
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-4">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/4.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش BootStrap
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-5">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/5.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Photoshop
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-6">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/6.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش JavaScript
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-7">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/7.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Invision
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-8">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/8.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش React-Native
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tabs__pane -tab-item-6">
                  <div className="row y-gap-30 justify-center">
                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-1">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/1.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش NodeJs
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-2">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/2.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                              <div>
                                <div className="px-15 rounded-200 bg-purple-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-white">
                                    ویژه
                                  </span>
                                </div>
                              </div>

                              <div>
                                <div className="px-15 rounded-200 bg-green-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                    پرفروش
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Python
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-3">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/3.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Angular
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-4">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/4.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش BootStrap
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-5">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/5.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Photoshop
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-6">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/6.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش JavaScript
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-7">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/7.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Invision
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-8">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/8.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش React-Native
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tabs__pane -tab-item-7">
                  <div className="row y-gap-30 justify-center">
                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-1">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/1.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش NodeJs
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-2">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/2.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                              <div>
                                <div className="px-15 rounded-200 bg-purple-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-white">
                                    ویژه
                                  </span>
                                </div>
                              </div>

                              <div>
                                <div className="px-15 rounded-200 bg-green-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                    پرفروش
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Python
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-3">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/3.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Angular
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-4">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/4.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش BootStrap
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-5">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/5.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Photoshop
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-6">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/6.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش JavaScript
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-7">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/7.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Invision
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-8">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/8.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش React-Native
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tabs__pane -tab-item-8">
                  <div className="row y-gap-30 justify-center">
                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-1">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/1.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش NodeJs
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-2">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/2.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                              <div>
                                <div className="px-15 rounded-200 bg-purple-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-white">
                                    ویژه
                                  </span>
                                </div>
                              </div>

                              <div>
                                <div className="px-15 rounded-200 bg-green-1">
                                  <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                    پرفروش
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Python
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-3">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/3.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Angular
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-4">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/4.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش BootStrap
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-5">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/5.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Photoshop
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-6">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/6.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش JavaScript
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-7">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/7.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش Invision
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div data-anim-child="slide-up delay-8">
                        <a
                          href="courses-single-1.html"
                          className="coursesCard -type-1"
                        >
                          <div className="relative">
                            <div className="coursesCard__image overflow-hidden rounded-8">
                              <img
                                className="w-1/1"
                                src="img/coursesCards/8.png"
                                alt="image"
                              />
                              <div className="coursesCard__image_overlay rounded-8"></div>
                            </div>
                            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                          </div>

                          <div className="h-100 pt-15">
                            <div className="d-flex items-center">
                              <div className="text-14 lh-1 text-yellow-1 ml-10">
                                4.5
                              </div>
                              <div className="d-flex x-gap-5 items-center">
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                                <div className="icon-star text-9 text-yellow-1"></div>
                              </div>
                              <div className="text-13 lh-1 mr-10">(1991)</div>
                            </div>

                            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                              آموزش React-Native
                            </div>

                            <div className="d-flex x-gap-10 items-center pt-10">
                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/1.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">6 دوره</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/2.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">8ساعت 20دقیقه</div>
                              </div>

                              <div className="d-flex items-center">
                                <div className="ml-8">
                                  <img
                                    src="img/coursesCards/icons/3.svg"
                                    alt="icon"
                                  />
                                </div>
                                <div className="text-14 lh-1">مقدماتی</div>
                              </div>
                            </div>

                            <div className="coursesCard-footer">
                              <div className="coursesCard-footer__author">
                                <img
                                  src="img/general/avatar-1.png"
                                  alt="image"
                                />
                                <div>علی صالحی</div>
                              </div>

                              <div className="coursesCard-footer__price">
                                <div>179</div>
                                <div>79000 تومان</div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-lg layout-pb-lg bg-purple-1">
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle">
                  <h2 className="sectionTitle__title text-green-1">
                    دیدگاه هنرجویان
                  </h2>

                  <p className="sectionTitle__text text-white">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است.
                  </p>
                </div>
              </div>
            </div>

            <div
              data-anim-wrap
              className="js-section-slider pt-50"
              data-gap="30"
              data-pagination
              data-slider-cols="base-3 xl-3 lg-2 md-2 sm-1"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-1"
                    className="testimonials -type-1"
                  >
                    <div className="testimonials__content">
                      <h4 className="testimonials__title">آموزش آنلاین</h4>
                      <p className="testimonials__text">
                        “متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                        روزنامه و مجله در ستون و سطرآنچنان که لازم است.”
                      </p>

                      <div className="testimonials-footer">
                        <div className="testimonials-footer__image">
                          <img src="img/testimonials/1.png" alt="image" />
                        </div>

                        <div className="testimonials-footer__content">
                          <div className="testimonials-footer__title">
                            مینا حسینی
                          </div>
                          <div className="testimonials-footer__text">طراح وب</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-2"
                    className="testimonials -type-1"
                  >
                    <div className="testimonials__content">
                      <h4 className="testimonials__title">خدمات خوب</h4>
                      <p className="testimonials__text">
                        “متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                        روزنامه و مجله در ستون و سطرآنچنان که لازم است.”
                      </p>

                      <div className="testimonials-footer">
                        <div className="testimonials-footer__image">
                          <img src="img/testimonials/2.png" alt="image" />
                        </div>

                        <div className="testimonials-footer__content">
                          <div className="testimonials-footer__title">
                            مهرداد نوروزی
                          </div>
                          <div className="testimonials-footer__text">
                            مسئول فروش
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-3"
                    className="testimonials -type-1"
                  >
                    <div className="testimonials__content">
                      <h4 className="testimonials__title">شغل عالی</h4>
                      <p className="testimonials__text">
                        “متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                        روزنامه و مجله در ستون و سطرآنچنان که لازم است.”
                      </p>

                      <div className="testimonials-footer">
                        <div className="testimonials-footer__image">
                          <img src="img/testimonials/3.png" alt="image" />
                        </div>

                        <div className="testimonials-footer__content">
                          <div className="testimonials-footer__title">
                            نازنین مرادی
                          </div>
                          <div className="testimonials-footer__text">مدیر عامل</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div
                    data-anim-child="slide-left delay-4"
                    className="testimonials -type-1"
                  >
                    <div className="testimonials__content">
                      <h4 className="testimonials__title">مدرسان حرفه ای</h4>
                      <p className="testimonials__text">
                        “متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                        روزنامه و مجله در ستون و سطرآنچنان که لازم است.”
                      </p>

                      <div className="testimonials-footer">
                        <div className="testimonials-footer__image">
                          <img src="img/testimonials/4.png" alt="image" />
                        </div>

                        <div className="testimonials-footer__content">
                          <div className="testimonials-footer__title">
                            شیما ناصری
                          </div>
                          <div className="testimonials-footer__text">
                            برنامه نویس
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex x-gap-20 items-center justify-end pt-60 lg:pt-40">
                <div className="col-auto">
                  <button className="button -outline-white text-white size-50 rounded-full d-flex justify-center items-center js-prev">
                    <i className="icon icon-arrow-right text-24"></i>
                  </button>
                </div>
                <div className="col-auto">
                  <button className="button -outline-white text-white size-50 rounded-full d-flex justify-center items-center js-next">
                    <i className="icon icon-arrow-left text-24"></i>
                  </button>
                </div>
              </div>
            </div>

            <div data-anim-wrap className="row y-gap-30 counter__row">
              <div className="col-lg-3 col-sm-6">
                <div
                  data-anim-child="slide-left delay-1"
                  className="counter -type-1"
                >
                  <div className="counter__number">350,000+</div>
                  <div className="counter__title">دانش آموز در سراسر جهان</div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div
                  data-anim-child="slide-left delay-2"
                  className="counter -type-1"
                >
                  <div className="counter__number">496,00+</div>
                  <div className="counter__title">کل بازدیدهای دوره</div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div
                  data-anim-child="slide-left delay-3"
                  className="counter -type-1"
                >
                  <div className="counter__number">19,000+</div>
                  <div className="counter__title">دوره های 5 ستاره</div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div
                  data-anim-child="slide-left delay-4"
                  className="counter -type-1"
                >
                  <div className="counter__number">987,000+</div>
                  <div className="counter__title">انجمن دانشجویی</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-lg layout-pb-lg bg-beige-1">
          <div data-anim-wrap className="container">
            <div className="row y-gap-30 justify-between items-center">
              <div className="col-xl-5 col-lg-6 col-md-10 order-2 order-lg-1">
                <div className="about-content">
                  <h2
                    data-anim-child="slide-up delay-1"
                    className="about-content__title"
                  >
                    در زمان و مکانی که دوست دارید مهارت های جدید را
                    <span>بیاموزید</span>.
                  </h2>
                  <p
                    data-anim-child="slide-up delay-2"
                    className="about-content__text"
                  >
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                  <div
                    data-anim-child="slide-up delay-3"
                    className="y-gap-20 pt-30"
                  >
                    <div className="d-flex items-center">
                      <div className="about-content-list__icon">
                        <i className="icon" data-feather="check"></i>
                      </div>
                      <div className="about-content-list__title">
                        نویسندگان حرفه ای
                      </div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="about-content-list__icon">
                        <i className="icon" data-feather="check"></i>
                      </div>
                      <div className="about-content-list__title">
                        پیگیری آسان برنامه ی درسی
                      </div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="about-content-list__icon">
                        <i className="icon" data-feather="check"></i>
                      </div>
                      <div className="about-content-list__title">
                        ارائه دوره های رایگان
                      </div>
                    </div>

                    <div className="d-flex items-center">
                      <div className="about-content-list__icon">
                        <i className="icon" data-feather="check"></i>
                      </div>
                      <div className="about-content-list__title">
                        ضمانت بازگشت وجه
                      </div>
                    </div>
                  </div>

                  <div
                    data-anim-child="slide-up delay-4"
                    className="d-inline-block mt-30"
                  >
                    <a href="signup.html" className="button -md -dark-1 text-white">
                      ثبت نام رایگان
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-5 col-lg-6 order-1 order-lg-2">
                <div data-anim-child="slide-up delay-5" className="about-image">
                  <img src="img/about/1.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-lg layout-pb-lg bg-dark-2">
          <div data-anim-wrap className="container">
            <div className="row justify-center text-center">
              <div data-anim-child="slide-up delay-1" className="col-auto">
                <div className="sectionTitle">
                  <h2 className="sectionTitle__title text-white">
                    چرا با دوره های ما یاد بگیرید؟
                  </h2>

                  <p className="sectionTitle__text text-white">
                    لورم ایپسوم متن ساختگی با تولید سادگی است.
                  </p>
                </div>
              </div>
            </div>

            <div className="row y-gap-30 pt-50">
              <div data-anim-child="slide-up delay-2" className="col-lg-4 col-md-6">
                <div className="stepCard -type-1 -stepCard-hover">
                  <div className="stepCard__content">
                    <div className="stepCard__icon">
                      <i className="icon-online-learning-4 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">01. یادگیری</h4>
                    <p className="stepCard__text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </p>
                  </div>
                </div>
              </div>

              <div data-anim-child="slide-up delay-3" className="col-lg-4 col-md-6">
                <div className="stepCard -type-1 -stepCard-hover">
                  <div className="stepCard__content">
                    <div className="stepCard__icon">
                      <i className="icon-graduation-1 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">02. فارغ التحصیل</h4>
                    <p className="stepCard__text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </p>
                  </div>
                </div>
              </div>

              <div data-anim-child="slide-up delay-4" className="col-lg-4 col-md-6">
                <div className="stepCard -type-1 -stepCard-hover">
                  <div className="stepCard__content">
                    <div className="stepCard__icon">
                      <i className="icon-working-at-home-2 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">03. درآمدزایی</h4>
                    <p className="stepCard__text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-lg layout-pb-lg">
          <div data-anim-wrap className="container">
            <div
              data-anim-child="slide-left delay-1"
              className="row y-gap-20 justify-between items-center"
            >
              <div className="col-lg-6">
                <div className="sectionTitle">
                  <h2 className="sectionTitle__title">از بهترین مربیان بیاموزید</h2>

                  <p className="sectionTitle__text">
                    لورم ایپسوم متن ساختگی با تولید سادگی است.
                  </p>
                </div>
              </div>

              <div className="col-auto">
                <a
                  href="instructors-list-1.html"
                  className="button -icon -purple-3 text-purple-1"
                >
                  مشاهده همه
                  <i className="icon-arrow-top-right text-13 mr-10"></i>
                </a>
              </div>
            </div>

            <div className="row y-gap-30 pt-50">
              <div className="col-lg-3 col-sm-6">
                <div
                  data-anim-child="slide-left delay-2"
                  className="teamCard -type-1 -teamCard-hover"
                >
                  <div className="teamCard__image">
                    <img src="img/team/1.png" alt="image" />
                    <div className="teamCard__socials">
                      <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="#">
                          <i className="icon-facebook text-white"></i>
                        </a>
                        <a href="#">
                          <i className="icon-twitter text-white"></i>
                        </a>
                        <a href="#">
                          <i className="icon-instagram text-white"></i>
                        </a>
                        <a href="#">
                          <i className="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="teamCard__content">
                    <h4 className="teamCard__title">میلاد ناصری</h4>
                    <p className="teamCard__text">مدرس دانشگاه آزاد</p>

                    <div className="row items-center y-gap-10 x-gap-10 pt-10">
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-star text-yellow-1 text-11 ml-5"></div>
                          <div className="text-14 lh-12 text-yellow-1 fw-500">
                            4.5
                          </div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-online-learning text-light-1 text-11 ml-5"></div>
                          <div className="text-14 lh-12">692 دانشجو</div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-play text-light-1 text-11 ml-5"></div>
                          <div className="text-14 lh-12">15 دوره</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div
                  data-anim-child="slide-left delay-3"
                  className="teamCard -type-1 -teamCard-hover"
                >
                  <div className="teamCard__image">
                    <img src="img/team/2.png" alt="image" />
                    <div className="teamCard__socials">
                      <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="#">
                          <i className="icon-facebook text-white"></i>
                        </a>
                        <a href="#">
                          <i className="icon-twitter text-white"></i>
                        </a>
                        <a href="#">
                          <i className="icon-instagram text-white"></i>
                        </a>
                        <a href="#">
                          <i className="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="teamCard__content">
                    <h4 className="teamCard__title">نیلوفر علیزاده</h4>
                    <p className="teamCard__text">مدرس دانشگاه تهران</p>

                    <div className="row items-center y-gap-10 x-gap-10 pt-10">
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-star text-yellow-1 text-11 ml-5"></div>
                          <div className="text-14 lh-12 text-yellow-1 fw-500">
                            4.5
                          </div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-online-learning text-light-1 text-11 ml-5"></div>
                          <div className="text-14 lh-12">692 دانشجو</div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-play text-light-1 text-11 ml-5"></div>
                          <div className="text-14 lh-12">15 دوره</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div
                  data-anim-child="slide-left delay-4"
                  className="teamCard -type-1 -teamCard-hover"
                >
                  <div className="teamCard__image">
                    <img src="img/team/3.png" alt="image" />
                    <div className="teamCard__socials">
                      <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="#">
                          <i className="icon-facebook text-white"></i>
                        </a>
                        <a href="#">
                          <i className="icon-twitter text-white"></i>
                        </a>
                        <a href="#">
                          <i className="icon-instagram text-white"></i>
                        </a>
                        <a href="#">
                          <i className="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="teamCard__content">
                    <h4 className="teamCard__title">فاطمه عسگری</h4>
                    <p className="teamCard__text">مدرس دانشگاه پیام نور</p>

                    <div className="row items-center y-gap-10 x-gap-10 pt-10">
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-star text-yellow-1 text-11 ml-5"></div>
                          <div className="text-14 lh-12 text-yellow-1 fw-500">
                            4.5
                          </div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-online-learning text-light-1 text-11 ml-5"></div>
                          <div className="text-14 lh-12">692 دانشجو</div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-play text-light-1 text-11 ml-5"></div>
                          <div className="text-14 lh-12">15 دوره</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div
                  data-anim-child="slide-left delay-5"
                  className="teamCard -type-1 -teamCard-hover"
                >
                  <div className="teamCard__image">
                    <img src="img/team/4.png" alt="image" />
                    <div className="teamCard__socials">
                      <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="#">
                          <i className="icon-facebook text-white"></i>
                        </a>
                        <a href="#">
                          <i className="icon-twitter text-white"></i>
                        </a>
                        <a href="#">
                          <i className="icon-instagram text-white"></i>
                        </a>
                        <a href="#">
                          <i className="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="teamCard__content">
                    <h4 className="teamCard__title">سعید محمدی</h4>
                    <p className="teamCard__text">مدرس دانشگاه امیرکبیر</p>

                    <div className="row items-center y-gap-10 x-gap-10 pt-10">
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-star text-yellow-1 text-11 ml-5"></div>
                          <div className="text-14 lh-12 text-yellow-1 fw-500">
                            4.5
                          </div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-online-learning text-light-1 text-11 ml-5"></div>
                          <div className="text-14 lh-12">692 دانشجو</div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-play text-light-1 text-11 ml-5"></div>
                          <div className="text-14 lh-12">15 دوره</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-center text-center pt-60 lg:pt-40">
              <div className="col-auto">
                <p className="lh-1">
                  آیا می خواهید به مردم کمک کنید تا در زندگی بیاموزند، رشد کنند
                  و به موفقیت بیشتری دست یابند؟
                  <a
                    className="text-purple-1 underline"
                    href="instructors-become.html"
                  >
                    مدرس شوید
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-lg layout-pb-lg bg-light-3">
          <div data-anim-wrap className="container">
            <div className="row y-gap-20 items-center">
              <div className="col-xl-7 col-lg-7">
                <div data-anim-child="slide-up delay-1" className="app-image">
                  <img src="img/app/1.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-5">
                <div className="app-content">
                  <h2
                    data-anim-child="slide-up delay-3"
                    className="app-content__title"
                  >
                    همه جا
                    <br />
                    <span>یاد بگیرید</span>
                  </h2>
                  <p
                    data-anim-child="slide-up delay-4"
                    className="app-content__text"
                  >
                    با برنامه educrat می توانید در همه جا در کلاس شرکت کنید.
                    برای تماشا در هواپیما، مترو یا هر جایی که بهترین یادگیری را
                    دارید، آن را دانلود کنید.
                  </p>
                  <div
                    data-anim-child="slide-up delay-5"
                    className="app-content__buttons"
                  >
                    <a href="#">
                      <img src="img/app/buttons/1.svg" alt="button" />
                    </a>
                    <a href="#">
                      <img src="img/app/buttons/2.svg" alt="button" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-lg layout-pb-lg">
          <div data-anim-wrap className="container">
            <div
              data-anim-child="slide-left delay-1"
              className="row y-gap-20 justify-between items-center"
            >
              <div className="col-lg-6">
                <div className="sectionTitle">
                  <h2 className="sectionTitle__title">منابع و اخبار</h2>

                  <p className="sectionTitle__text">
                    لورم ایپسوم متن ساختگی با تولید سادگی است.
                  </p>
                </div>
              </div>

              <div className="col-auto">
                <a href="#" className="button -icon -purple-3 text-purple-1">
                  مشاهده همه
                  <i className="icon-arrow-top-right text-13 mr-10"></i>
                </a>
              </div>
            </div>

            <div className="row y-gap-30 pt-50">
              <div
                data-anim-child="slide-left delay-2"
                className="col-lg-4 col-md-6"
              >
                <a href="blog-single.html" className="blogCard -type-1">
                  <div className="blogCard__image">
                    <img src="img/blog/1.png" alt="image" />
                  </div>
                  <div className="blogCard__content">
                    <div className="blogCard__category">برنامه نویسی</div>
                    <h4 className="blogCard__title">
                      5 ویژگی فوق العاده که باید در استخدام متخصص سئو به آنها
                      دقت کنید!
                    </h4>
                    <div className="blogCard__date">16 مهر، 1400</div>
                  </div>
                </a>
              </div>

              <div
                data-anim-child="slide-left delay-3"
                className="col-lg-4 col-md-6"
              >
                <a href="blog-single.html" className="blogCard -type-1">
                  <div className="blogCard__image">
                    <img src="img/blog/2.png" alt="image" />
                  </div>
                  <div className="blogCard__content">
                    <div className="blogCard__category">بازاریابی</div>
                    <h4 className="blogCard__title">
                      آشنایی با بیش از 10 موتور جستجوی خصوصی که شما را ردیابی
                      نمی کنند!
                    </h4>
                    <div className="blogCard__date">16 مهر، 1400</div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4">
                <div className="row y-gap-30">
                  <div className="col-lg-12 col-md-6">
                    <a
                      href="#"
                      data-anim-child="slide-left delay-4"
                      className="blogCard -type-2"
                    >
                      <div className="blogCard__image">
                        <img src="img/blog/small/1.png" alt="image" />
                      </div>
                      <div className="blogCard__content">
                        <div className="blogCard__category">برنامه نویسی</div>
                        <h4 className="blogCard__title">
                          بهترین عملکردهای طراحی UX
                        </h4>
                        <div className="blogCard__date">16 مهر، 1400</div>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <a
                      href="#"
                      data-anim-child="slide-left delay-5"
                      className="blogCard -type-2"
                    >
                      <div className="blogCard__image">
                        <img src="img/blog/small/2.png" alt="image" />
                      </div>
                      <div className="blogCard__content">
                        <div className="blogCard__category">طراحی وب</div>
                        <h4 className="blogCard__title">Google Colab چیست؟</h4>
                        <div className="blogCard__date">16 مهر، 1400</div>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <a
                      href="#"
                      data-anim-child="slide-left delay-6"
                      className="blogCard -type-2"
                    >
                      <div className="blogCard__image">
                        <img src="img/blog/small/3.png" alt="image" />
                      </div>
                      <div className="blogCard__content">
                        <div className="blogCard__category">مارکتنیگ</div>
                        <h4 className="blogCard__title">مزایای نمونه سازی اولیه</h4>
                        <div className="blogCard__date">16 مهر، 1400</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-md layout-pb-md bg-purple-1">
          <div className="container">
            <div className="row y-gap-20 justify-between items-center">
              <div className="col-xl-4 col-lg-5">
                <h2 className="text-30 lh-15 text-white ff-estedad">
                  به بیش از 10 میلیون
                  <span className="text-green-1">یادگیرنده</span> در سراسر جهان
                  بپیوندید.
                </h2>
              </div>

              <div className="col-auto">
                <a href="#" className="button -md -green-1 text-dark-1">
                  آموزش رایگان را شروع کنید
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer -type-1 bg-dark-1 -green-links">
          <div className="container">
            <div className="footer-header">
              <div className="row y-gap-20 justify-between items-center">
                <div className="col-auto">
                  <div className="footer-header__logo">
                    <img src="img/footer/footer-logo.svg" alt="logo" />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="footer-header-socials">
                    <div className="footer-header-socials__title text-white">
                      ما را در شبکه های اجتماعی دنبال کنید
                    </div>
                    <div className="footer-header-socials__list">
                      <a href="#">
                        <i className="icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="icon-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-columns">
              <div className="row y-gap-30">
                <div className="col-xl-2 col-lg-4 col-md-6">
                  <div className="text-17 fw-500 text-white uppercase mb-25">
                    درباره ما
                  </div>
                  <div className="d-flex y-gap-10 flex-column">
                    <a href="about-1.html">درباره ما</a>
                    <a href="blog-list-1.html">لیست وبلاگ</a>
                    <a href="instructor-become.html">مدرس شوید</a>
                    <a href="blog-list-1.html">لیست وبلاگ</a>
                    <a href="#">بازگشت وجه</a>
                    <a href="contact-1.html">تماس با ما</a>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-8">
                  <div className="text-17 fw-500 text-white uppercase mb-25">
                    دسته بندی ها
                  </div>
                  <div className="row justify-between y-gap-20">
                    <div className="col-md-6">
                      <div className="d-flex y-gap-10 flex-column">
                        <a href="courses-single-1.html">برنامه نویسی</a>
                        <a href="courses-single-2.html">طراحی وب</a>
                        <a href="courses-single-3.html">مالی و حسابداری</a>
                        <a href="courses-single-4.html">فناوری اطلاعات</a>
                        <a href="courses-single-5.html">هوش مصنوعی</a>
                        <a href="courses-single-6.html">رباتیک</a>
                        <a href="courses-single-1.html">بازاریابی</a>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="d-flex y-gap-10 flex-column">
                        <a href="courses-single-1.html">مدیریت پروژه</a>
                        <a href="courses-single-2.html">طراحی گرافیک</a>
                        <a href="courses-single-3.html">نرم افزار</a>
                        <a href="courses-single-4.html">عکاسی</a>
                        <a href="courses-single-5.html">بانک های اطلاعاتی</a>
                        <a href="courses-single-6.html">بهینه سازی وب</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-2 offset-xl-1 col-lg-4 col-md-6">
                  <div className="text-17 fw-500 text-white uppercase mb-25">
                    پشتیبانی
                  </div>
                  <div className="d-flex y-gap-10 flex-column">
                    <a href="terms.html">المان های کاربردی</a>
                    <a href="help-center.html">سوالات متداول</a>
                    <a href="dashboard.html">داشبورد</a>
                    <a href="contact-1.html">تماس با ما</a>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="text-17 fw-500 text-white uppercase mb-25">
                    در تماس باشید
                  </div>
                  <div className="footer-columns-form">
                    <div>ما اسپم نمی فرستیم پس نگران نباشید.</div>
                    <form action="">
                      <div className="form-group">
                        <input type="text" placeholder="ایمیل شما..." />
                        <button type="submit">ارسال</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-30 border-top-light-15">
              <div className="row justify-between items-center y-gap-20">
                <div className="col-auto">
                  <div className="d-flex items-center h-100 text-white">
                    © 2022 کلیه حقوق این قالب متعلق به گروه توسعه پردازان می
                    باشد.
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                    <div>
                      <div className="d-flex x-gap-15 text-white">
                        <a href="help-center.html">پشتیبانی</a>
                        <a href="terms.html">شرایط</a>
                        <a href="terms.html">امنیت</a>
                        <a href="terms.html">حریم خصوصی</a>
                        <a href="terms.html">ضوابط</a>
                      </div>
                    </div>

                    <div>
                      <a
                        href="#"
                        className="button px-30 h-50 -dark-6 rounded-200 text-white"
                      >
                        <i className="icon-worldwide text-20 ml-15"></i>
                        <span className="text-15">فارسی</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
