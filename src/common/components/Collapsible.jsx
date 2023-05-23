import React, {useEffect, useRef, useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import PropTypes from 'prop-types';

const Collapsible = ({
  open,
  content,
  header,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState(open ? undefined : 0);
  const ref = useRef(null);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!height || !isOpen || !ref.current) {
      return;
    }
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setHeight(ref.current?.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="duration-300 shadow-md">
      <div className="flex flex-row justify-between items-center p-4 cursor-pointer"
        onClick={handleFilterOpening}>
        <div>{header}</div>
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <div className="overflow-hidden transition-[height] duration-200" style={{height}}>
        <div ref={ref}>
          <div className="p-4">{content}</div>
        </div>
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  open: PropTypes.bool,
  content: PropTypes.element,
  header: PropTypes.string,
};

Collapsible.defaultProps = {
  open: false,
};

export default Collapsible;
