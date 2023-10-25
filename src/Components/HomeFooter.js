import React from 'react';
import './homeheader&footer.css';
const HomeFooter = () =>{
      const styles={
          menufooter :{
            color: "#f5f5f5",
          },

      };
      return (
  
        <footer className="footer">
          
          <ul className="social-icon">
            <li className="social-icon_item"><a className="social-icon_link" href="#">
                <ion-icon name="logo-facebook" />
              </a></li>
            <li className="social-icon_item"><a className="social-icon_link" href="#">
                <ion-icon name="logo-twitter" />
              </a></li>
            <li className="social-icon_item"><a className="social-icon_link" href="#">
                <ion-icon name="logo-linkedin" />
              </a></li>
            <li className="social-icon_item"><a className="social-icon_link" href="#">
                <ion-icon name="logo-instagram" />
              </a></li>
          </ul>
          <ul className="menufooter" style={styles.menufooter}>
            <li className="menu_item"><a className="menu_link" href="#">Home</a></li>
            <li className="menu_item"><a className="menu_link" href="#">About</a></li>
            <li className="menu_item"><a className="menu_link" href="#">clubs</a></li>
            <li className="menu_item"><a className="menu_link" href="#">Team</a></li>
            <li className="menu_item"><a className="menu_link" href="#">Contact</a></li>
          </ul>
          <p>©2022 club@oriental | All Rights Reserved</p>
        </footer>
      );
    };
export default HomeFooter;