// Note: Main app component...!

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Note: Importing app components...!
import Navigation from "./My Components/navigation";
import Home from "./My Components/home";
import About from "./My Components/about";
import Contact from "./My Components/contact";
import NotFound from "./My Components/not-found";
import LearningUseCallBack from "./My Components/useCallBack";
import LearningUseMemo from "./My Components/useMemo";

// Note: Nested routes...!
import MyProfile from "./My Components/Profile/myProfile";
import MyPhotos from "./My Components/Profile/myPhotos";

const AppRoutes = () => {
    return (
        <React.Fragment>
            <Router>
                <Navigation />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />}>
                        <Route path="/" element={<MyProfile />} />
                        <Route path=":index" element={<MyPhotos />} />
                    </Route>
                    <Route path="contact" element={<Contact />} />
                    <Route path="learning-useCallBack" element={<LearningUseCallBack />} />
                    <Route path="learning-useMemo" element={<LearningUseMemo />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default AppRoutes;