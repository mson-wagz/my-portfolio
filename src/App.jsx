import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing'
import NovelNestCaseStudy from './components/case-studies/NovelNestCaseStudy'
import TryveCaseStudy from './components/case-studies/TryveCaseStudy'
import TiklishCaseStudy from './components/case-studies/TiklishCaseStudy'
import EduLearnCaseStudy from './components/case-studies/EduLearnCaseStudy'
import AcademiaHubCaseStudy from './components/case-studies/AcademiaHubCaseStudy'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/case-study/novel-nest" element={<NovelNestCaseStudy />} />
        <Route path="/case-study/tryve" element={<TryveCaseStudy />} />
        <Route path="/case-study/tiklish" element={<TiklishCaseStudy />} />
        <Route path="/case-study/edulearn" element={<EduLearnCaseStudy />} />
        <Route path="/case-study/academia-hub" element={<AcademiaHubCaseStudy />} />
      </Routes>
    </Router>
  );
}