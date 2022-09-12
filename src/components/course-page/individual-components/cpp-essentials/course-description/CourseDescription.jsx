import React from "react";
import "./courseDescription.css";
import dartIcon from "../../../../../assets/Images/main/dart.png";
import speechBubbleIcon from "../../../../../assets/Images/main/speech-bubble.png";
import problemSolvingIcon from "../../../../../assets/Images/main/problem-solve.png";
import webDesignIcon from "../../../../../assets/Images/main/web-design.png";
import prateekBhaiyaImage from "../../../../../assets/Images/main/prateek-bhaiya.png";
import mohitBhaiyaImage from "../../../../../assets/Images/main/mohit-bhaiya.png";
import youtube from "../../../../../assets/Images/main/youtube.png";
import linkedin from "../../../../../assets/Images/main/linkedin.png";
import instagram from "../../../../../assets/Images/main/instagram.png";

const CourseDescription = () => {
  return (
    <div className="components-outer-container">
      <div className="course-description-container">
        <div className="course-description-internal-container">
          <div className="description-left">
            <div className="top">
              <div className="what-you-will-learn">
                <h2>What you'll learn</h2>
                <div className="learn-columns">
                  <span>Programming Fundamentals & Concepts</span>
                  <span>Complete Modern C++ Syntax</span>
                  <span>C++ Standard Template Library</span>
                  <span>Converting Logic into C++ Code</span>
                  <span>Object Oriented Programming</span>
                  <span>Problem Solving</span>
                </div>
              </div>
              <div className="course-overview">
                <h2>Course Overview</h2>
                <br />
                <p>
                  Are you an absolute beginner looking forward to kickstart your journey in the programming domain. Coding can be hard skill learn to learn for many but no more. Welcome to <span>C++ Programming Essentials</span>, the most fundamental course that every aspiring programmer should take to kickstart their journey in the world of programming. The course teaches you the fundamental building blocks of programming and builds a logical thinking mindset using C++ as our programming language. Many concepts taught in the course are also relevant to other languages like Java, Python, JavaScript etc with few changes in the coding syntax.
                </p>
                <p>
                  You will understand the basic concepts and techniques to break down a given problem into smaller parts by drawing flowcharts, write pseudocode, and then diving deep into C++  topics like -
                  variables, datatypes, flow control using branching & loops, functions, arrays, character arrays & strings, recursion, bitmasking & OOPs concepts.
                </p>
                <p><span>Course Features</span></p>
                <div className="overview-columns">
                  <span>HD Videos</span>
                  <span>Intuitive Explanations</span>
                  <span>Beginner Friendly Teaching</span>
                  <span>Tested Industry vetted curriculum</span>
                  <span>Assignments & Q-A Support</span>
                  <span>Certificate of Completion</span>
                </div>
                <br />
                <p>The course is your first step towards problem solving, and will help you to get your basics right. After this course, you can easily pursue a course on learning a programming language of your choice, followed by Data Structures, Algorithms & Competitive Programming. Many top companies like <span>Google, Facebook, Amazon, Directi, CodeNation, Goldman Sachs</span> etc encourage algorithmic programming and conduct coding competitions to hire smart people who can solve problems.</p>
                <p>This course is taught by <span>Prateek Narang</span>, who is not just a software engineer but a teacher by heart and many bestseller courses on Udemy in Algorithms category! He has worked with companies like <span>Google</span>, and has co-founded two startups including <span>Coding Minutes</span>, which is now a part of Scaler Academy.</p>
              </div>
            </div>
            <div className="bottom">
              <h2>What makes us special?</h2>
              <div className="bottom-children">
                <div className="bottom-child">
                  <img src={speechBubbleIcon} alt="" />
                  <span>Unlimited doubt support</span>
                </div>
                <div className="bottom-child">
                  <img src={dartIcon} alt="" />
                  <span>Industry vetted curriculum</span>
                </div>
                <div className="bottom-child">
                  <img src={webDesignIcon} alt="" />
                  <span>Practice codes, get feedback</span>
                </div>
                <div className="bottom-child">
                  <img src={problemSolvingIcon} alt="" />
                  <span>Intuitive and Detailed courses</span>
                </div>
              </div>
            </div>
          </div>
          <div className="description-right">
            <h2>Meet the Instructor</h2>
            <div className="instructor-group">
              <div className="instructor-one instructor">
                <img loading="lazy" src={prateekBhaiyaImage} alt="" />
                <div className="instructor-info">
                  <p>
                    Prateek is a popular programming instructor and an ace
                    software engineer, currently working with Scaler and created
                    Coding Minutes. He is known for his amazingly simplified
                    explanations that make everyone fall in love with
                    programming. <br /> He has over 5+ years of teaching
                    experience and has trained over 75,000 students in classroom
                    boot camps & online courses in the past.
                  </p>
                  <div className="social-links">
                    <a
                      href="https://www.linkedin.com/in/prateeknarang27/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="" />
                    </a>
                    <a
                      href="https://www.instagram.com/prateeknarang27/"
                      target="_blank"
                    >
                      <img src={instagram} alt="" />
                    </a>
                    <a
                      href="https://www.youtube.com/c/PrateekNarang27"
                      target="_blank"
                    >
                      <img src={youtube} alt="" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
