import './review-style.css';

const Reviews = () => {

    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach(scroller => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector('.scroller_inner');
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    return (
        <div>
            <div className='review-headline'>
                <h1>TESTIMONIALS</h1>
            </div>
            <div className='scroller'>
                <ul className='review-list scroller_inner'>
                    <li className='review-list'>"Vic has never failed me once. Her creativity and attention to detail is the best."</li>
                    <li className='review-list'>"Exceptional artistry! My nails have never looked more stunning. Thank you for your skill and creativity!"</li>
                    <li className='review-list'>"Absolutely love my nails! Impeccable attention to detail and a fantastic experience overall."</li>
                    <li className='review-list'>"Such a talented nail artist! My nails always receive compliments thanks to her expertise."</li>
                    <li className='review-list'>"Exquisite nails every time! I'm continually impressed by the flawless execution and professionalism."</li>
                </ul>
            </div>
        </div>
    );
};

export default Reviews;