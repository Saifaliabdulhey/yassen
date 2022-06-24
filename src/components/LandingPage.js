import React from 'react'
import california from '../images/california.png'
import logo from '../images/logo.png';
import taxas from '../images/taxas.png';
import carolina from '../images/carolina.png';
import connecticut from '../images/connecticut.png';
import geogia from '../images/georgia.png';
import hampshire from '../images/hampshire.png';
import maryland from '../images/maryland.png';
import massachusetts from '../images/massachusetts.png';
import new_jersey from '../images/new_Jersey.svg.png';
import virginia from '../images/virginia.png';
import alabama from '../images/alabama.png'
import alaska from '../images/alaska.png'
import american_saoa from '../images/american_Samoa.png'
import arizona from '../images/arizona.png'
import arkansas from '../images/arkansas.png'
import colorado from '../images/colorado.png'
import district_of_colombia from '../images/district_of_Columbia.png'
import florida from '../images/florida.png'
import guam from '../images/guam.png'
import hawaii from '../images/hawaii.png'
import idaho from '../images/idaho.png'
import illinois from '../images/illinois.png'
import iowa from '../images/iowa.png'
import kansas from '../images/kansas.png'
import kentuck from '../images/kentucky.png'
import louisian from '../images/louisiana.png'
import maine from '../images/maine.png'
import mexico from '../images/mexico.png'
import michigan from '../images/michigan.png'
import minnesota from '../images/minnesota.png'
import mississippi from '../images/mississippi.png'
import missouri from '../images/missouri.png'
import montana from '../images/montana.png'
import nebraska from '../images/nebraska.png'
import nevada from '../images/nevada.png'
import newyourk from '../images/newyork.png'
import north_carolina from '../images/north_carolina.png'
import north_Dakota from '../images/north_Dakota.png'
import ohio from '../images/ohio.png'
import oklahoma from '../images/oklahoma.png'
import oregon from '../images/oregon.png'
// import pennsylvania from '../images/pennsylvania.svg'
import pennsylvania from '../images/pennsylvania.png'
import rhode_island from '../images/rhode_Island.png'
import south_Carolina from '../images/south_Carolina.svg'
import tennessee from '../images/tennessee.png'
import utah from '../images/utah.png'
import vermont from '../images/vermont.png'
import washington from '../images/washington.png'
import west_virginia from '../images/west_Virginia.png'
import wisconsina from '../images/wisconsin.png'
import wyoming from '../images/wyoming.png'
import delaware from '../images/delaware.webp'
import indiana from '../images/indiana.png'
import south_Dakota from '../images/south_Dakota.png'
import { Link } from 'react-router-dom'



function LandingPage() {
  return (
    <div className="landingPage">
      <div className="header">
        <Link to="/yassen"><img src={logo} /></Link>
        <div className='title'>
          <h1>AL-SAFEE AL-MOTAHIDA</h1>
          <p>Transportation prices by states</p>
        </div>
      </div>
      <hr></hr>
      <div class="grid">
        <Link className="link" to="/landing/california">
          <div className='grid-item'>
            <img src={california} />
            <h1>California</h1>
          </div>
        </Link>
        <Link className="link" to="/landing/delaware">
          <div className='grid-item'>
            <img src={delaware} />
            <h1>Delaware</h1>
          </div>
        </Link>
        <Link className="link" to="/landing/texas">
          <div className='grid-item'>
            <img src={taxas} />
            <h1>Texas</h1>
          </div>
        </Link>
        <Link className="link" to="/landing/carolina">
          <div className='grid-item'>
            <img src={carolina} />
            <h1>Carolina</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/connecticut">
          <div className='grid-item'>
            <img src={connecticut} />
            <h1>Connecticut</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/geogia">
          <div className='grid-item'>
            <img src={geogia} />
            <h1>Geogia</h1>
          </div>
        </Link>
        <Link className="link" to="/landing/indiana">
          <div className='grid-item'>
            <img src={indiana} />
            <h1>Indiana</h1>
          </div>
        </Link>
        <Link className="link" to="/landing/hampshire">
          <div className='grid-item'>
            <img src={hampshire} />
            <h1>Hampshire</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/maryland">
          <div className='grid-item'>
            <img src={maryland} />
            <h1>Maryland</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/massachusetts">
          <div className='grid-item'>
            <img src={massachusetts} />
            <h1>Massachusetts</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/newjersey">
          <div className='grid-item'>
            <img src={new_jersey} />
            <h1>New jersey</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/virginia">
          <div className='grid-item'>
            <img src={virginia} />
            <h1>Virginia</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/alabama">
          <div className='grid-item'>
            <img src={alabama} />
            <h1>Alabama</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/alaska">
          <div className='grid-item'>
            <img src={alaska} />
            <h1>Alaska</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/americansaoa">
          <div className='grid-item'>
            <img src={american_saoa} />
            <h1>American saoa</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/arizona">
          <div className='grid-item'>
            <img src={arizona} />
            <h1>Arizona</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/arkansas">
          <div className='grid-item'>
            <img src={arkansas} />
            <h1>Arkansas</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/colorado">
          <div className='grid-item'>
            <img src={colorado} />
            <h1>Colorado</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/florida">
          <div className='grid-item'>
            <img src={florida} />
            <h1>Florida</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/guam">
          <div className='grid-item'>
            <img src={guam} />
            <h1>Guam</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/hawaii">
          <div className='grid-item'>
            <img src={hawaii} />
            <h1>Hawaii</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/districtOfColombia">
          <div className='grid-item'>
            <img src={district_of_colombia} />
            <h1>District_of_colombia</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/idaho">
          <div className='grid-item'>
            <img src={idaho} />
            <h1>Idaho</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/illinois">
          <div className='grid-item'>
            <img src={illinois} />
            <h1>Illinois</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/iowa">
          <div className='grid-item'>
            <img src={iowa} />
            <h1>Iowa</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/kansas">
          <div className='grid-item'>
            <img src={kansas} />
            <h1>Kansas</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/kentuck">
          <div className='grid-item'>
            <img src={kentuck} />
            <h1>Kentuck</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/louisian">
          <div className='grid-item'>
            <img src={louisian} />
            <h1>Louisian</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/maine">
          <div className='grid-item'>
            <img src={maine} />
            <h1>Maine</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/mexico">
          <div className='grid-item'>
            <img src={mexico} />
            <h1>Mexico</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/michigan">
          <div className='grid-item'>
            <img src={michigan} />
            <h1>Michigan</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/minnesota">
          <div className='grid-item'>
            <img src={minnesota} />
            <h1>Minnesota</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/mississippi">
          <div className='grid-item'>
            <img src={mississippi} />
            <h1>Mississippi</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/missouri">
          <div className='grid-item'>
            <img src={missouri} />
            <h1>Missouri</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/montana">
          <div className='grid-item'>
            <img src={montana} />
            <h1>Montana</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/nebraska">
          <div className='grid-item'>
            <img src={nebraska} />
            <h1>Nebraska</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/nevada">
          <div className='grid-item'>
            <img src={nevada} />
            <h1>Nevada</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/newyourk">
          <div className='grid-item'>
            <img src={newyourk} />
            <h1>Newyourk</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/northCarolina">
          <div className='grid-item'>
            <img src={north_carolina} />
            <h1>North carolina</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/northDakota">
          <div className='grid-item'>
            <img src={north_Dakota} />
            <h1>North Dakota</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/ohio">
          <div className='grid-item'>
            <img src={ohio} />
            <h1>Ohio</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/oklahoma">
          <div className='grid-item'>
            <img src={oklahoma} />
            <h1>Oklahoma</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/oregon">
          <div className='grid-item'>
            <img src={oregon} />
            <h1>Oregon</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/puerto">
          <div className='grid-item'>
            <img src={pennsylvania} />
            <h1>Pennsylvania</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/southDakota">
        <div className='grid-item'>
          <img src={south_Dakota} />
          <h1>South Dakota</h1>
        </div>
      </Link>

        <Link className="link" to="/landing/rhodeisland">
          <div className='grid-item'>
            <img src={rhode_island} />
            <h1>Rhode_island</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/tennessee">
          <div className='grid-item'>
            <img src={tennessee} />
            <h1>Tennessee</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/utah">
          <div className='grid-item'>
            <img src={utah} />
            <h1>Utah</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/vermont">
          <div className='grid-item'>
            <img src={vermont} />
            <h1>Vermont</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/washington">
          <div className='grid-item'>
            <img src={washington} />
            <h1>Washington</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/westVirginia">
          <div className='grid-item'>
            <img src={west_virginia} />
            <h1>West virginia</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/wisconsina">
          <div className='grid-item'>
            <img src={wisconsina} />
            <h1>Wisconsina</h1>
          </div>
        </Link>

        <Link className="link" to="/landing/wyoming">
          <div className='grid-item'>
            <img src={wyoming} />
            <h1>Wyoming</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage