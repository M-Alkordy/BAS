import '../Reviews/Reviews.css';
import Cardreviews from '../Cardreviews/Cardreviews';
import Slider from 'react-slick';

function Reviews() {
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <section className='container reviews'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h1>Reviews</h1>
                    <p className='more'>+ 33 More</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <p className='kind-words'>Some of your kind words</p>
                </div>
            </div>
            <div className='container-show'>

                <Slider {...settings}>

                    <div className='col-lg-3 slick-cloned '>
                        <Cardreviews />
                    </div>

                    <div className='col-lg-3 slick-cloned '>
                        <Cardreviews />
                    </div>

                    <div className='col-lg-3 slick-cloned '>
                        <Cardreviews />
                    </div>

                    <div className='col-lg-5 slick-center'>
                        <Cardreviews />
                    </div>
                    <div className='col-lg-3 slick-cloned'>
                        <Cardreviews />
                    </div>

                </Slider>
            </div>

        </section>
    )
}




export default Reviews;