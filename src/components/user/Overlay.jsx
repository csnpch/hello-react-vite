import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onDeactive as overlayOnDeactive } from './../../store/overlay';
import { onDeactive as sidebarOnDeactive } from './../../store/sidebar';


function Overlay() {

  const dispath = useDispatch();
  const statusActive = useSelector(store => store.overlay.statusActive);

  const onOverlay = () => {
    dispath(overlayOnDeactive());
    dispath(sidebarOnDeactive());
  }


  return (
    <>
      <div 
        onClick={onOverlay} 
        className={`
          z-10 w-full h-screen fixed top-[64px] left-0 
          bg-black/20 transition-all duration-300
          ${statusActive || 'hidden'}
        `}
      >
      </div>
    </>
  )
}

export default Overlay
