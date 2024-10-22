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
      <TawkMessengerReactUmd
        propertyId="65ba264b8d261e1b5f59e569"
        widgetId="1hlfib62c"
        ref={tawkMessengerRef}
        onLoad={onLoad}
        onMinimize={handleMinimize}
      />
    </div>
  );
}
