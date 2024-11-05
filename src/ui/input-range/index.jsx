'use client';
import { getTrackBackground, Range } from 'react-range';

const InputRange = ({ STEP, MIN, MAX, values, handleChanges }) => {
  return (
    <>
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={vals => handleChanges(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: '2px', // Reduced from 3px
              width: '100%',
              background: getTrackBackground({
                values: values,
                colors: ['#EDEDED', '#ef233c', '#EDEDED'],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: '14px', // Reduced from 17px
              width: '14px', // Reduced from 17px
              borderRadius: '50%',
              backgroundColor: '#ef233c',
              boxShadow: isDragged ? '0 0 5px rgba(239, 35, 60, 0.5)' : 'none',
              transition: 'box-shadow 0.2s ease',
              cursor: 'pointer',
              border: '2px solid #fff', // Added white border for better visibility
              outline: 'none',
            }}
          />
        )}
      />
    </>
  );
};

export default InputRange;
