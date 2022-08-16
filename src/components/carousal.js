import Carousel from 'nuka-carousel';

const ImgCarousal = () => (
    <>
        <div class="py-20 text-center">
            <h2 class="font-extrabold text-4xl">Image Gallery</h2>
        </div>
        <Carousel autoplay={true} swiping={true} wrapAround={true} speed={3000}>
        <img src="https://images.unsplash.com/photo-1660578457871-355e94dbb82a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="hello" />
        <img src="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1561&q=80" alt="hello" />
        <img src="https://images.unsplash.com/photo-1657299170950-87e5b0eaf77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="hello" />
        <img src="https://images.unsplash.com/photo-1660554042641-5f3a3216c0c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="hello" />
        <img src="https://images.unsplash.com/photo-1660486965992-c921b45b7e65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1454&q=80" alt="hello" />
        <img src="https://images.unsplash.com/photo-1660554094797-9bf7be6a77c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="hello" />
        </Carousel>
    </>
);

export default ImgCarousal;