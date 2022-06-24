import React from 'react'
import south_Dakota from '../../images/south_Dakota.png'
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
        <img className="watermark" src={south_Dakota} />
        <h1>South Dakota State</h1>
      </div>
      <div class="table-box">
        <div class="table-row table-head">
          <div class="table-cell first-cell">
            <p>السعر</p>
          </div>
          <div class="table-cell">
            <p>تفاصيل سعر النقل</p>
          </div>
        </div>
        <div>
          <div class="table-row">
            <div class="table-cell first-cell">
              <p>1,750$</p>
            </div>
            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">سعر النقل البحري</a>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>

            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">سعر النقل الى دبي</a>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell">
              <p>1,550$</p>
            </div>

            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">سعر النقل الى عمان</a>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell">
              <p>450$</p>
            </div>

            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">سعر فتح الحاوية</a>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell">
              <p>400$</p>
            </div>

            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko"> النقل البحري من دبي الى البصرة</a>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell">
              <p>500$</p>
            </div>

            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko"> النقل البحري من عمان الى البصرة</a>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell">
              <p>700$</p>
            </div>

            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">(نصف حاوية)سعر النقل لسيارة كبيرة</a>
            </div>
          </div>
        </div>
      </div>

      <div class="table-box">
        <div class="table-row table-head">
          <div class="table-cell first-cell">
            <p>سعر النقل من امريكا الى البصرة</p>
          </div>
        </div>
        <div>
          <div class="table-row">
            <div class="table-cell first-cell">
              <p>1,750$</p>
            </div>
            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">سيارات 4 صالون</a>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell">
              <p>2,450$</p>
            </div>

            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">سيارات 3 صالون وكبيرة</a>
            </div>
          </div>
        </div>
      </div>

      <div class="table-box">
        <div class="table-row table-head">
          <div class="table-cell first-cell">
            <p>سعر النقل من امريكا الى عمان </p>
          </div>
        </div>
        <div>
          <div class="table-row">
            <div class="table-cell first-cell">
              <p>1,550$</p>
            </div>
            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">سيارات 4 صالون</a>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell">
              <p>2,250$</p>
            </div>

            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">سيارات 3 صالون وكبيرة</a>
            </div>
          </div>
        </div>
      </div>

      <div class="table-box">
        <div class="table-row table-head">
          <div class="table-cell first-cell">
            <p>سعر النقل من امريكا الى دبي </p>
          </div>
        </div>
        <div>
          <div class="table-row">
            <div class="table-cell first-cell">
              <p>1,650$</p>
            </div>
            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">سيارات 4 صالون</a>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell">
              <p>2,350$</p>
            </div>

            <div class="table-cell last-cell">
              <a href="https://youtu.be/99vHH_6F0Ko">سيارات 3 صالون وكبيرة</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default California