'use client';
import { useRef } from 'react';
import TawkMessengerReactUmd from '@tawk.to/tawk-messenger-react';

export default function TawkToChat() {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  const onLoad = () => {
    console.log('onLoad works!');
  };

  return (
    <div>
      {/* <TawkMessengerReactUmd
        propertyId={process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}
        widgetId={process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}
        ref={tawkMessengerRef}
        onLoad={onLoad}
        onMinimize={handleMinimize}
      /> */}
    </div>
  );
}
