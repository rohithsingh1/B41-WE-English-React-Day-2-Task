import React from 'react';
import {CardItemsProvider} from './Context';
import FooterHTML from './Footer';
import HeaderContainer from './HeaderContainer';
import Navbar from './Navbar';
import RenderCards from './RenderCards';
function Container() {
  return (
      <div>
         <CardItemsProvider>
          <Navbar />
          <HeaderContainer />
          <RenderCards/>
              <FooterHTML />
            </CardItemsProvider>
    </div>
  )
}
export default Container