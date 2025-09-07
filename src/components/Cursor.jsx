import React, { useEffect, useRef } from 'react';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMouseMove = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        };

        const onMouseEnter = () => {
            cursor.classList.add('cursor-grow');
        };

        const onMouseLeave = () => {
            cursor.classList.remove('cursor-grow');
        };

        document.addEventListener('mousemove', onMouseMove);

        const interactiveElements = document.querySelectorAll('a, button, .project-card');
        interactiveElements.forEach(item => {
            item.addEventListener('mouseenter', onMouseEnter);
            item.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            interactiveElements.forEach(item => {
                item.removeEventListener('mouseenter', onMouseEnter);
                item.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return <div ref={cursorRef} className="cursor"></div>;
};

export default Cursor;