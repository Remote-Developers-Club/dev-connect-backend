const express = require('express')
const viewController = require('./../controllers/viewController')




const router = express.Router()

router.get('/', viewController.homePage)
router.get('/help', viewController.helpPage)
router.get('/job-details', viewController.jobDetails)
router.get('/jobs-listing', viewController.jobListing)
router.get('/post-job-form', viewController.postJobForm)
router.get('/post-resume-form', viewController.jobResumeForm)
router.get('/pricing-plans', viewController.pricePlan)

router.get('/about', viewController.about)
router.get('/blog-grid-full-width', viewController.blogGrid)
router.get('/blog-list', viewController.blogList)
router.get('/blog-masonary-full-width', viewController.blogMasonry)
router.get('/blog-single-fullwidth-image', viewController.blogSingleImage)
router.get('/pricing-plans', viewController.blogSingleVideo)
router.get('/blog-single-with-sidebar', viewController.blogSingleSidebar)
router.get('/blog-standard', viewController.blogStandard)
router.get('/candidate-dashboard', viewController.candidateDashboard)
router.get('/candidates-listing', viewController.candidateListing)
router.get('/categories', viewController.categories)
router.get('/companies-listing', viewController.companiesListing)
router.get('/contact-us-full-width', viewController.contactUs)
router.get('/employer-dashboard', viewController.employerDashboard)

module.exports = router