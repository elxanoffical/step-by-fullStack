import React from 'react'
import './style.scss'

import {Link} from 'react-router-dom'
import home from '../../assets/homeIcon/homeicon1.svg'
import market from '../../assets/homeIcon/marketicon2.svg'
import tables from '../../assets/homeIcon/tablesicon3.svg'
import kanban from '../../assets/homeIcon/kanbanicon4.svg'
import profil from '../../assets/homeIcon/profilicon5.svg'
import sign from '../../assets/homeIcon/signicon6.svg'
import getpro from '../../assets/homeIcon/getpro.svg'

import icon1 from '../../assets/inptIcon/icon1.svg'
import icon2 from '../../assets/inptIcon/icon2.svg'
import icon3 from '../../assets/inptIcon/icon3.svg'
import avatar from '../../assets/inptIcon/avataricon.svg'
import profile from '../../assets/images/profile.svg'
import storageIcon from '../../assets/images/storageicon.svg'
import saveIcon from '../../assets/icons/saveicon.svg'
import image1 from '../../assets/images/image1.svg'
import image2 from '../../assets/images/image2.svg'
import image3 from '../../assets/images/image3.svg'
import iconPensil from '../../assets/icons/iconpensil.svg'
import on from '../../assets/icons/on.svg'
import off from '../../assets/icons/off.svg'




const Homepage = () => {
  return (
    <div className='container'>

      <div className="sideBar">
        <h1>IT Innovations</h1>

        <div className="sidepage">

          <div className="pageTxt">
            <img src={home} alt="" />
            <p>Dashboard</p>
          </div>

          <div className="pageTxt">
            <img src={market} alt="" />
            <p>NFT Marketplace</p>
          </div>

          <div className="pageTxt">
            <img src={tables} alt="" />
            <p>Tables</p>
          </div>

          <div className="pageTxt">
            <img src={kanban} alt="" />
            <p>Kanban</p>
          </div>

          <div className="pageTxt">
            <img src={profil} alt="" />
            <p>Profile</p>
          </div>

          <Link to='/login'>
            <div className="pageTxt">
              <img src={sign} alt="" />
              <p>Sign In</p>
            </div>
          </Link>
        </div>

        <img src={getpro} alt="" />
      </div>


      <div className="mainBar">

        <div className="main-wrapper">
          <div className="navbar">
            <h1>Profile</h1>
            <div className="navTag">
              <input type="text" placeholder='Search' />
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" />
              <img src={avatar} alt="" />
            </div>
          </div>

          <div className="medium-product">

            <div className="profileCard">
              <img src={profile} alt="" />
              <div className="img">
                <img src={avatar} alt="" />
              </div>
              <div className="user">
                <h1>Adela Parkson</h1>
                <p>Product Designer</p>
              </div>
              <div className="follow">
                <div className="txt">
                  <h1>17</h1>
                  <p>Posts</p>
                </div>
                <div className="txt">
                  <h1>9.7K</h1>
                  <p>Followers</p>
                </div>
                <div className="txt">
                  <h1>274</h1>
                  <p>Followers</p>
                </div>
              </div>
            </div>

            <div className="storageCard">
              <div className="btn"> <button>...</button> </div>
              <div className="img">
                <img src={storageIcon} alt="" />
              </div>
              <div className="storage-txt">
                <h1>Your storage</h1>
                <p>Supervise your drive space in the easiest way</p>
              </div>
              <div className="content-bar">
                <div className="txt">
                  <span>25.6 Gb</span>
                  <span>50 Gb</span>
                </div>
                <div className="liner">
                  <div className="line"></div>
                </div>
              </div>
            </div>

            <div className="completeCard">
              <div className="contend">
                <img src={saveIcon} alt="" />
                <h1>Upload Files</h1>
                <p>PNG, JPG and GIF files are allowed</p>
              </div>
              <div className="contend-right">
                <h1>Complete your profile</h1>
                <p>Stay on the pulse of distributed projects
                  with an anline whiteboard to plan, coordinate
                  and discuss</p>
                <button>Publish now</button>
              </div>
            </div>
          </div>

          <div className="bottom-product">

            <div className="project-card">
              <h1>All Projects</h1>
              <p>Here you can find more details about your projects.
                Keep you user engaged by providing meaningful information.</p>
              <div className="project">
                <img src={image1} alt="" />
                <div className="txt">
                  <h1>Technology behind the Blockchain</h1>
                  <p>Project #1 -<span> See project details</span></p>
                </div>
                <img src={iconPensil} alt="" />
              </div>

              <div className="project">
                <img src={image2} alt="" />
                <div className="txt">
                  <h1>Technology behind the Blockchain</h1>
                  <p>Project #1 -<span> See project details</span></p>
                </div>
                <img src={iconPensil} alt="" />
              </div>

              <div className="project">
                <img src={image3} alt="" />
                <div className="txt">
                  <h1>Technology behind the Blockchain</h1>
                  <p>Project #1 -<span> See project details</span></p>
                </div>
                <img src={iconPensil} alt="" />
              </div>
            </div>

            <div className="information-card">
              <h1>General Information</h1>
              <p>As we live, our hearts turn colder. Cause pain is what we go through as we become older.
                We get insulted by others, lose trust for those others. We get back stabbed by friends.
                It becomes harder for us to give others a hand. We get our heart broken by people we love,
                even that we give them all...</p>
              <div className="information-txt">
                <div className="txtt">
                  <div className="txt">
                    <p>Education</p>
                    <h1>Stanford University</h1>
                  </div>
                  <div className="txt">
                    <p>Education</p>
                    <h1>Stanford University</h1>
                  </div>
                  <div className="txt">
                    <p>Education</p>
                    <h1>Stanford University</h1>
                  </div>
                </div>
                <div className="txtt">
                  <div className="txt">
                    <p>Education</p>
                    <h1>Stanford University</h1>
                  </div>
                  <div className="txt">
                    <p>Education</p>
                    <h1>Stanford University</h1>
                  </div>
                  <div className="txt">
                    <p>Education</p>
                    <h1>Stanford University</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="notifications">
              <div className="navdiv">
                <h1>Notifications</h1>
                <button>...</button>
              </div>
              <div className="btnCard">

                <div className="txt">
                  <img src={on} alt="" />
                  <h1>Item update notifications</h1>
                </div>

                <div className="txt">
                  <img src={off} alt="" />
                  <h1>Item comment notifications</h1>
                </div>

                <div className="txt">
                  <img src={on} alt="" />
                  <h1>Buyer review notifications</h1>
                </div>

                <div className="txt">
                  <img src={off} alt="" />
                  <h1>Rating reminders notifications</h1>
                </div>

                <div className="txt">
                  <img src={off} alt="" />
                  <h1>Meetups near you notifications</h1>
                </div>

                <div className="txt">
                  <img src={on} alt="" />
                  <h1>Company news notifications</h1>
                </div>

                <div className="txt">
                  <img src={on} alt="" />
                  <h1>New launches and projects</h1>
                </div>

                <div className="txt">
                  <img src={off} alt="" />
                  <h1>Monthly product changes</h1>
                </div>

                <div className="txt">
                  <img src={off} alt="" />
                  <h1>Subscribe to newsletter</h1>
                </div>

                <div className="txt">
                  <img src={on} alt="" />
                  <h1>Email me when someone follows me</h1>
                </div>

              </div>

            </div>
          </div>

          <div className="footer">
            <div className="tag">
              <span>© 2022 Horizon UI. All Rights Reserved.
                Made with love by Simmmple!</span>
            </div>
            <div className="tag">
              <span>Marketplace</span>
              <span>License</span>
              <span>Terms of Use</span>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage