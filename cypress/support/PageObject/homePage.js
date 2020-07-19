class HomePage {

    //----MegaMenu

        getMegaMenu_Container() {
            return cy.get('#tb-megamenu-main');

        }

        //Main options

        getMegaMenu_TitleJobs() {
            return cy.get('[title="Jobs"]');
        }

        getMegaMenu_TitleTefl() {
            return cy.get('[title="Tefl"]');
        }

        getMegaMenu_TitleTeacherCerification() {
            return cy.get('[title="Teacher Certification"]');
        }

        getMegaMenu_TitleCourses() {
            return cy.get('[title="Courses"]');
        }

        getMegaMenu_TitleHireTeachers() {
            return cy.get('[data-label="Hire Teachers"]:visible');
        }

        //Droopdown Jobs 

        getMegaMenu_TitleJobBoard() {
            return cy.get('[title="Job Board"]');
        }

        getMegaMenu_TitleDestinations() {
            return cy.get('[title="Destinations"]');
        }

        getMegaMenu_TitleFeaturedPrograms() {
            return cy.get('[title="Featured Programs"]');

        }

        getMegaMenu_TitleJobOpenings() {
            return cy.get('[title="Job Openings"]');
        }


        getMegaMenu_TitleCommunity() {
            return cy.get('[title="Community"]');

        }


        getMegaMenu_TitleTeachUS() {
            return cy.get('[title="Teach in the US"]');

        }

        //Destinations 

        getMegaMenu_blockCountries() {
            return cy.get('#block-menu-blockcountries');

        }

        getMegaMenu_blockRegions() {
            return cy.get('#block-menu-blockregions');

        }

        //Featured Programs

        getMegaMenu_blockfeaturedprograms() {
            return cy.get('#block-menu-blockfeatured-programs');
        }

        //Teach in the US

        getMegaMenu_blockTopCities() {
            return cy.get('#block-menu-blocktop-cities');
        }

        get_MegaMenublockTopStates() {
            return cy.get('#block-menu-blocktop-states');
        }


        //Droopdown TEFL 

        getMegaMenu_TitleCertificationGuide() {
            return cy.get('[title="TEFL Certification Guide"]');

        }

        getMegaMenu_TitleTEFLCourses() {
            return cy.get('[title="TEFL Courses"]');

        }

        // Droopdown Teacher Certification

        getMegaMenu_TitleTeacherCertificationGuide() {
            return cy.get('[title="Teacher Certification Guide"]');

        }

        getMegaMenu_TitleCertificationPrograms() {
            return cy.get('[title="Certification Programs"]');

        }

        getMegaMenu_TitleArizonaTeacherCertification() {
            return cy.get('[title="Arizona Teacher Certification"]');

        }

        getMegaMenu_TitleHawai() {
            return cy.get('[title="Hawai"]');

        }



    


























}
export default HomePage;