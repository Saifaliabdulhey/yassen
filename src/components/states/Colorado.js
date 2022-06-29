import React from 'react'
import colorado from '../../images/colorado.png'
import logo from '../../images/logo.png'
import back from '../../images/back.png'
import { Link } from 'react-router-dom';

function California() {
  return (
    <div className="container">
      <div className="head">
        <img className="watermark" src={logo} />
        <h1>AL-SAFEE AL-MOTAHIDA</h1>
      </div>
      <hr></hr>
      <div className="img_container">
        <Link className="link" to='/landing'> <img className="back" src={back} /></Link>
        <img className="watermark" src={colorado} />
        <h1>CO - Colorado State</h1>
      </div>
      <div class="table-box">
        <div class="table-row table-head">
          <div class="table-cell first-cell-Auction ">
            <p>المزاد</p>
          </div>
          <div class="table-cell first-cell">
            <p>المدينة</p>
          </div>
          <div class="table-cell first-cell">
            <p>سعر النقل (الاردن)</p>
          </div>
          <div class="table-cell first-cell">
            <p>سعر النقل (الامارات)</p>
          </div>
          <div class="table-cell first-cell">
            <p>سعر النقل (ام قصر)</p>
          </div>
          <div class="first-cell table-cell border">
            <p>سعر النقل (سيارة كبيرة)</p>
          </div>

        </div>
        <div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>DENVER- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>DENVER</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,075$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,100$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>DENVER EAST- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>COMMERCE CITY</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,075$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,100$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>COLORADO SPRINGS- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>COLORDO SPRINGS</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,075$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,100$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>DENVER- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>BRIGHTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,075$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,100$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>DENVER SOUTH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>LITTLETON</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,075$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,100$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>DENVER CENTRAL COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>DENVER</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,400$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,075$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,100$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM DENVER</p>
            </div>
            <div class="table-cell first-cell">
              <p>AURORA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,200$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,975$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,000$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>WESTERN COLORADO-IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>DELTA</p>
            </div>
            <div class="table-cell first-cell">
              <p>3,325$</p>
            </div>
            <div class="table-cell first-cell">
              <p>3,263$</p>
            </div>
            <div class="table-cell first-cell">
              <p>3,495</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div className='notes'>
            <h1>ملاحضات</h1>
            <i>تكون كلفت النقل الداخلي
              للسيارة ذات الحجم الكبيرة مثل الدوج رام والسوبر بين وغيرها اعلى
              بقليل بسبب الفرق في بالوزن والحجم مقارنة بالمركبات الاعتيادية -</i>
            <i>تتكون كلفت النقل الداخلي من الولايات ذات الكوارث الطبيعية (الغرق , الاعاصير, العواصف الثلجية) اعلى خلال فترة هذه الكوارث  -</i>
            <i>تكون كلفة النقل الداخلي بالنسبة للساحات الخارج المزاد اعلى بقليل حسب بعد الساحة الثانوية
              عن موقع المزاد يرجى الاستفسار عن السعر قبل الشراء -</i>
          </div>

        </div>
      </div>
    </div>
  )
}

export default California