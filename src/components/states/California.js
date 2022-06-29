import React from 'react'
import california from '../../images/california.png'
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
        <img className="watermark" src={california} />
        <h1>Califonia State</h1>
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
              <p>ANAHEIM- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>ANAHEIM</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,625$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,563$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,795$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>FONTANA- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>FONTANA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,588$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,820</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>FREMONT- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>FREMONT</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,825$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,763</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,995</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>EAST BAY- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>BAY POINT</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,825$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,763</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,995</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>HIGH DESERT- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>HESPERIA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,700$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,638</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,870$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ANAHEIM- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>ANAHEIM</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,625$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,563</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,795</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LOS ANGELES - IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>GARDENA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,625$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,563</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,795</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>NORTH HOLLYWOOD- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>NORTH HOLLYWOOD</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,588</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,820$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>NORTH HOLLYWOOD- IAA/ OFF SIT</p>
            </div>
            <div class="table-cell first-cell">
              <p>BURBANK</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,588</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,920$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SAN DIEGO IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>SAN DIEGO</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,675$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,613$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,845$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SACRAMENTO- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>CORDOVA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,675$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,613$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,845$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>HAYWARD- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>HAYWARD</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,875$</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,763</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,995$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LOS ANGELES- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>LOS ANAGELES</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,625$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,563$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,795$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LONG BEACH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>WILMINGTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,625</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,563$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,795$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MARTINEZ- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>MARTINEZ</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,825$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,763$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,995$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>RANCHO CUCAMONGA- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>RANCHO CUCAMONGA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,588$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,820$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SUN VALLEY- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>SUN VALLEY</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,650</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,588$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,820$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SUN VALLEY- COPART/ SUB LOT</p>
            </div>
            <div class="table-cell first-cell">
              <p>LANCASTER</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,675$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,613$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,845$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SACRAMENTO- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>SACRAMENTO</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,825$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,763$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,995$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SAN DIEGO- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>SAN DIEGO</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,675$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,613$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,845$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SAN BERNARDINO- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>COLTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,588$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,820$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SAN JOSE- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>SAN MARTIN</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,825$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,763$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,995$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>VAN NUYS- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>VAN NUYS</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,588$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,820$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>VAN NUYS- COPART// SANTA PAULA</p>
            </div>
            <div class="table-cell first-cell">
              <p>SANTA PAULA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,750$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,688$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,920$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>VALLEJO- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>VALLEJO</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,825$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,763$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,995$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM RIVERSIDE</p>
            </div>
            <div class="table-cell first-cell">
              <p>RIVERSIDE</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,588$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,820$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM CENTRAL CALIFORNIA</p>
            </div>
            <div class="table-cell first-cell">
              <p>FRESNO</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,775$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,713$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,945$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM SOUTHERN CALIFORNIA</p>
            </div>
            <div class="table-cell first-cell">
              <p>FONTANA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,650$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,588$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,820$</p>
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