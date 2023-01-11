import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import Video from "../../components/video/Video";

import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import CategoriesBar from "../../components/categoriesBar/categoriesBar";
import InfiniteScroll from "react-infinite-scroll-component";
// import Skeleton from "react-loading-skeleton";
// import SkeletonVideo from "../../components/skeletons/SkeletonVideos";

const HomeScreen = () => {
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <CategoriesBar />

      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {
           videos.map((video) => (
              <Col lg={3} md={4}>
                <Video video={video} key={video.id} />
              </Col>
            ))
        }
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;

// MY OWN Code

// import React, { useEffect } from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import CategoriesBar from '../../components/categoriesBar/categoriesBar'
// import Video from '../../components/video/video'
// import { getPopularVideos } from '../../redux/actions/videos.action'

// const HomeScreen = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getPopularVideos);
//   }, [dispatch])

//   const {videos } = useSelector(state=>state.homeVideos);

//   return (
//     <>

//       <Container>
//         <CategoriesBar/>
//         <Row>
//             {
//               videos.map(video =>(
//                 <Col lg={3} md={4} key={video.id}>
//                   <Video video={video}  />
//                 </Col>
//               ))
//             }
//         </Row>
//       </Container>

//     </>
//   )
// }

// export default HomeScreen
