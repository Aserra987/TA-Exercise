/// <reference types="cypress" />

import HomePage from '../../support/PageObject/HomePage';
import Data from '../../support/Data/Data.json';
const data = Data;
const homePage = new HomePage();

describe('Exercise Test Suite Mega Menu', function () {

    before(function () {
        cy.visit('https://www.teachaway.com/')
        
    })

    it('Should Mega Menu container be Visible', function () {
        homePage.getMegaMenu_Container().should('be.visible');
    })

    it('Should The main options be visible', function () {
        homePage.getMegaMenu_TitleJobs().should('be.visible').and('contain', 'Jobs');
        homePage.getMegaMenu_TitleTefl().should('be.visible').and('contain', 'Tefl');
        homePage.getMegaMenu_TitleTeacherCerification().should('be.visible').and('contain', 'Teacher Certification');
        homePage.getMegaMenu_TitleCourses().should('be.visible').and('contain', 'Courses');
        homePage.getMegaMenu_TitleHireTeachers().should('be.visible').and('contain', 'Hire Teachers');
    })

    it('Should "Jobs" option have a Dropdown with other Options', function () {
        homePage.getMegaMenu_TitleJobs().click();
        homePage.getMegaMenu_TitleJobBoard().should('be.visible').and('contain', 'Job Board');
        homePage.getMegaMenu_TitleDestinations().should('be.visible').and('contain', 'Destinations');
        homePage.getMegaMenu_TitleFeaturedPrograms().should('be.visible').and('contain', 'Featured Programs');
        homePage.getMegaMenu_TitleJobOpenings().should('be.visible').and('contain', 'Job Openings');
        homePage.getMegaMenu_TitleTeachUS().should('be.visible').and('contain', 'Teach in the US');
        homePage.getMegaMenu_TitleCommunity().should('be.visible').and('contain', 'Community');
    })

    it('Should "Destinations" option show a Countries list', function () {
        homePage.getMegaMenu_blockCountries().find('h2').should('contain', 'Countries');
        cy.wrap(data.countries).each(function (country_name) {
            homePage.getMegaMenu_blockCountries().find('li').should('contain', country_name);
        })

    })

    it('Should "Destinations" option show a Regions list', function () {
        homePage.getMegaMenu_blockRegions().find('h2').should('contain', 'Regions');
        cy.wrap(data.regions).each(function (region_name) {
            homePage.getMegaMenu_blockRegions().find('li').should('contain', region_name);
        })

    })

    it('Should "Featured Programs" show a block with diferents options', function () {
        cy.wrap(data.featuredPrograms).each(function (featuredProgram_name) {
            homePage.getMegaMenu_blockfeaturedprograms().find('li').should('contain', featuredProgram_name)
        })

    })


    it('Should "Teach in the United States" option show a block with Top Cities', function () {
        homePage.getMegaMenu_blockTopCities().find('h2').should('contain', 'Top Cities');
        cy.wrap(data.topCities).each(function (city_name) {
            homePage.getMegaMenu_blockTopCities().find('li').should('contain', city_name);
        })

    })

    it('Should "Teach in the United States"  option show a block with Top States', function () {
        homePage.get_MegaMenublockTopStates().find('h2').should('contain', 'Top States');
        cy.wrap(data.topStates).each(function (state_name) {
            homePage.get_MegaMenublockTopStates().find('li').should('contain', state_name);
        })

    })

    it('Should "TEFL" option have a Dropdown with other Options', function () {
        homePage.getMegaMenu_TitleTefl().click();
        homePage.getMegaMenu_TitleTEFLCourses().should('be.visible').and('contain', 'TEFL Courses');
        homePage.getMegaMenu_TitleCertificationGuide().should('be.visible').and('contain', 'TEFL Certification Guide');

    })

    it('Should "Teacher Certification" option have a Dropdown with other Options', function () {
        homePage.getMegaMenu_TitleTeacherCerification().click();
        //Another way to check text
        homePage.getMegaMenu_TitleTeacherCertificationGuide().then(function($el){
            expect($el.text().trim()).to.include('Teacher Certification Guide')
        })
        homePage.getMegaMenu_TitleCertificationPrograms().then(function($el){
            expect($el.text().trim()).to.include('Certification Programs')
        })
        homePage.getMegaMenu_TitleHawai().then(function($el){
            expect($el.text().trim()).to.include('Hawai')
        })
        homePage.getMegaMenu_TitleArizonaTeacherCertification().then(function($el){
            expect($el.text().trim()).to.include('Arizona')
        })
        
    })

})



