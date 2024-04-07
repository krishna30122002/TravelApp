import React from "react";
import Slider from "react-slick";
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
    const settings = {
        dots:true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        swipeToSlide:true,

        responsive :[
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        ]
    }

  return (
    <Slider { ...settings}>
      <div className="testimonial py-4 px-3">
        <p>This was a great experience for me and my family.
          The whole experience was stress free and went according to plan.
          I would recommend Traveling atlas to anyone seeking a fantastic stress free holidays.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Cena</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Traveling Atlas provided a stress-free vacation for my family.
          Booking was easy, accommodations exceeded expectations.
          Highly recommend for fantastic holidays.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Loyla</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Traveling Atlas has been a game-changer for me in exploring
          offbeat destinations. I've discovered amazing places that are
          not on the typical tourist radar, which made my trips truly unique and memorable.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">James </h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>As an adventure seeker, Traveling Atlas has been my go-to platform.
          It's helped me find thrilling experiences like hiking hidden trails,
          diving into local cultures, and trying out authentic cuisines in lesser-known places.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Cena</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>I love history, and Traveling Atlas has made it possible for me
          to explore hidden historical gems. From ancient ruins to lesser-known museums,
          I've delved deep into the rich history of various regions thanks to this platform.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Loyla</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Thanks to Traveling Atlas, I've been able to avoid crowded
          tourist traps and experience authentic local life. The site's
          recommendations have led me to charming villages, vibrant markets,
          and cultural events that are off the beaten path.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">James </h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Planning trips with Traveling Atlas is a breeze! The interface is user-friendly, and the detailed information provided about each destination helps me make informed decisions about where to go and what to expect.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Cena</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Traveling Atlas has opened my eyes to unforgettable experiences beyond the guidebooks. I've attended quirky festivals, explored hidden natural wonders, and met welcoming locals in places I wouldn't have discovered otherwise.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Loyla</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Exploring local culture and cuisine is a breeze with Traveling Atlas. The platform's insider tips and recommendations have led me to authentic dining experiences and cultural activities that are truly immersive.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">James </h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Whether I'm traveling solo or with friends, Traveling Atlas always has unique travel adventures to offer. The site's curated lists and suggestions ensure that every trip is filled with memorable moments and new discoveries.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Cena</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>From quaint villages to bustling markets, Traveling Atlas has helped me uncover hidden gems in every destination I visit. It's amazing how many hidden treasures are out there waiting to be explored!</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Loyla</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Traveling Atlas has broadened my travel horizons by introducing me to unique cultural experiences. Through their platform, I've participated in local festivals, learned traditional crafts, and gained insights into diverse communities around the world.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">James </h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Traveling Atlas isn't just about finding hidden gems; it's also about connecting with like-minded travelers. I've joined group excursions and met fellow adventurers through the platform, fostering meaningful friendships and creating shared memories in beautiful and lesser-known destinations.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">John Cena</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>One of the best features of Traveling Atlas is its emphasis on sustainability and responsible tourism. I appreciate their recommendations for eco-friendly accommodations, conservation projects, and community-based tourism initiatives, allowing me to travel responsibly and contribute positively to local communities.</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">Loyla</h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Traveling Atlas has made solo travel incredibly enjoyable for me. Their detailed insights into safe solo destinations, local customs, and language tips have empowered me to explore new places confidently while immersing myself in authentic cultural experiences. Highly recommend for solo adventurers!</p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h6 className="mb-0 mt-3">James </h6>
                <p>Customer</p>
            </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
